output "cloudflare_nameservers" {
  description = "Cloudflare nameservers — point your registrar to these"
  value       = data.cloudflare_zone.main.name_servers
}

output "load_balancer_ip" {
  description = "Static IP of the HTTPS load balancer"
  value       = google_compute_global_address.main.address
}

output "cloud_run_url" {
  description = "Public URL of the Cloud Run service"
  value       = google_cloud_run_v2_service.main.uri
}

output "artifact_registry_repository" {
  description = "Full Artifact Registry repository path (use as image prefix)"
  value       = "${var.region}-docker.pkg.dev/${var.project_id}/${var.repository_name}"
}

output "cloud_build_sa_email" {
  description = "Email of the Cloud Build service account"
  value       = google_service_account.cloud_build.email
}

output "wif_provider" {
  description = "Workload Identity provider name — set as WIF_PROVIDER in GitHub Actions variables"
  value       = google_iam_workload_identity_pool_provider.github.name
}

output "terraform_sa_email" {
  description = "Terraform service account email — set as TERRAFORM_SA_EMAIL in GitHub Actions variables"
  value       = google_service_account.terraform.email
}

