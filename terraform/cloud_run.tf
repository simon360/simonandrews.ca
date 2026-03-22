# Service account used by the running Cloud Run container.
resource "google_service_account" "cloud_run" {
  account_id   = "${var.repository_name}-run"
  display_name = "simonandrews.ca Cloud Run"

  depends_on = [google_project_service.iam]
}

resource "google_cloud_run_v2_service" "main" {
  name     = var.repository_name
  location = var.region

  scaling {
    min_instance_count    = 0
    manual_instance_count = 0
  }

  template {
    service_account = google_service_account.cloud_run.email

    containers {
      # Placeholder image — Cloud Build will update this on first deploy.
      # The image field is excluded from lifecycle management so Terraform
      # does not revert Cloud Build deployments.
      image = "us-docker.pkg.dev/cloudrun/container/hello:latest"

      ports {
        container_port = 3000
      }
    }
  }

  lifecycle {
    ignore_changes = [
      # Cloud Build owns the image; don't let Terraform revert it.
      template[0].containers[0].image,
      # Managed by gcloud, not Terraform.
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
resource "google_cloud_run_v2_service_iam_member" "public" {
  name     = google_cloud_run_v2_service.main.name
  location = google_cloud_run_v2_service.main.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}
