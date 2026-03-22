terraform {
  required_version = ">= 1.5"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 6.0"
    }
  }

  # Recommended: store state in GCS so it persists and can be shared.
  # Create the bucket manually first, then uncomment:
  backend "gcs" {
    bucket = "simonandrews-ca-terraform-terraform-state"
    prefix = "simonandrews-ca"
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# ── Enable required APIs ──────────────────────────────────────────────────────

resource "google_project_service" "artifactregistry" {
  service            = "artifactregistry.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "run" {
  service            = "run.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "cloudbuild" {
  service            = "cloudbuild.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "iam" {
  service            = "iam.googleapis.com"
  disable_on_destroy = false
}
