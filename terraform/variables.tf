variable "project_id" {
  description = "GCP project ID"
  type        = string
}

variable "region" {
  description = "GCP region for all resources"
  type        = string
  default     = "europe-west1"
}

variable "github_owner" {
  description = "GitHub organisation or username that owns the repository"
  type        = string
  default     = "simon360"
}

variable "github_repo" {
  description = "GitHub repository name"
  type        = string
  default     = "simonandrews.ca"
}

variable "repository_name" {
  description = "Artifact Registry repository name (also used as the Cloud Run service name)"
  type        = string
  default     = "simonandrews-ca"
}
