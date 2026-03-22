resource "google_artifact_registry_repository" "main" {
  repository_id = var.repository_name
  location      = var.region
  format        = "DOCKER"
  description   = "Docker images for simonandrews.ca"

  depends_on = [google_project_service.artifactregistry]
}
