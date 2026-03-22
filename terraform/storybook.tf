# ── Cloud Run service ─────────────────────────────────────────────────────────

resource "google_cloud_run_v2_service" "storybook" {
  name     = "${var.repository_name}-storybook"
  location = var.region

  ingress = "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"

  scaling {
    min_instance_count    = 0
    manual_instance_count = 0
  }

  template {
    service_account = google_service_account.cloud_run.email

    containers {
      # Placeholder image — Cloud Build will update this on first deploy.
      image = "us-docker.pkg.dev/cloudrun/container/hello:latest"

      ports {
        container_port = 8080
      }
    }
  }

  lifecycle {
    ignore_changes = [
      template[0].containers[0].image,
      client,
      client_version,
      labels,
      annotations,
      template[0].labels,
      template[0].annotations,
    ]
  }

  depends_on = [google_project_service.run]
}

# Allow unauthenticated (public) access.
resource "google_cloud_run_v2_service_iam_member" "storybook_public" {
  name     = google_cloud_run_v2_service.storybook.name
  location = google_cloud_run_v2_service.storybook.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# ── Serverless NEG ────────────────────────────────────────────────────────────

resource "google_compute_region_network_endpoint_group" "storybook" {
  name                  = "${var.repository_name}-storybook-neg"
  network_endpoint_type = "SERVERLESS"
  region                = var.region

  cloud_run {
    service = google_cloud_run_v2_service.storybook.name
  }

  depends_on = [google_project_service.compute]
}

# ── Backend service ───────────────────────────────────────────────────────────

resource "google_compute_backend_service" "storybook" {
  name = "${var.repository_name}-storybook-backend"

  backend {
    group = google_compute_region_network_endpoint_group.storybook.id
  }

  security_policy = google_compute_security_policy.cloudflare_only.id
}

# ── Cloud Build trigger ───────────────────────────────────────────────────────

resource "google_cloudbuild_trigger" "storybook" {
  name            = "${var.repository_name}-storybook"
  description     = "Build and deploy Storybook to Cloud Run on push to main"
  service_account = google_service_account.cloud_build.id

  github {
    owner = var.github_owner
    name  = var.github_repo
    push {
      branch = "^main$"
    }
  }

  filename = "cloudbuild-storybook.yaml"

  substitutions = {
    _REPOSITORY_NAME = var.repository_name
    _SERVICE_NAME    = var.repository_name
    _REGION          = var.region
  }

  depends_on = [google_project_service.cloudbuild]
}
