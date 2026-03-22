# ── Service account ───────────────────────────────────────────────────────────

resource "google_service_account" "cloud_build" {
  account_id   = "${var.repository_name}-build"
  display_name = "simonandrews.ca Cloud Build"

  depends_on = [google_project_service.iam]
}

# ── IAM bindings for the Cloud Build SA ──────────────────────────────────────

# Push images to Artifact Registry.
resource "google_project_iam_member" "cloud_build_artifact_registry" {
  project = var.project_id
  role    = "roles/artifactregistry.writer"
  member  = "serviceAccount:${google_service_account.cloud_build.email}"
}

# Deploy and update Cloud Run services.
resource "google_project_iam_member" "cloud_build_run_admin" {
  project = var.project_id
  role    = "roles/run.admin"
  member  = "serviceAccount:${google_service_account.cloud_build.email}"
}

# Act as the Cloud Run service account when deploying.
resource "google_project_iam_member" "cloud_build_sa_user" {
  project = var.project_id
  role    = "roles/iam.serviceAccountUser"
  member  = "serviceAccount:${google_service_account.cloud_build.email}"
}

# Write Cloud Build logs.
resource "google_project_iam_member" "cloud_build_log_writer" {
  project = var.project_id
  role    = "roles/logging.logWriter"
  member  = "serviceAccount:${google_service_account.cloud_build.email}"
}

# ── Cloud Build triggers ──────────────────────────────────────────────────────
#
# PREREQUISITE: The Cloud Build GitHub App must be installed and connected to
# your GCP project before these triggers will work. Do this once in the console:
#   Cloud Build → Triggers → Connect Repository → GitHub (Cloud Build)
#
# The triggers reference the repository via the github block below; Terraform
# does not manage the connection itself.

resource "google_cloudbuild_trigger" "main" {
  name            = "${var.repository_name}-main"
  description     = "Build and deploy to Cloud Run on push to main"
  service_account = google_service_account.cloud_build.id

  github {
    owner = var.github_owner
    name  = var.github_repo
    push {
      branch = "^main$"
    }
  }

  filename = "cloudbuild.yaml"

  substitutions = {
    _REPOSITORY_NAME = var.repository_name
    _SERVICE_NAME    = var.repository_name
    _REGION          = var.region
  }

  depends_on = [google_project_service.cloudbuild]
}

resource "google_cloudbuild_trigger" "preview" {
  name            = "${var.repository_name}-preview"
  description     = "Build and deploy a preview revision on pull requests"
  service_account = google_service_account.cloud_build.id

  github {
    owner = var.github_owner
    name  = var.github_repo
    pull_request {
      branch = ".*"
    }
  }

  filename = "cloudbuild-preview.yaml"

  substitutions = {
    _REPOSITORY_NAME = var.repository_name
    _SERVICE_NAME    = var.repository_name
    _REGION          = var.region
  }

  depends_on = [google_project_service.cloudbuild]
}
