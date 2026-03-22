# ── Static IP ─────────────────────────────────────────────────────────────────

resource "google_compute_global_address" "main" {
  name = "${var.repository_name}-ip"

  depends_on = [google_project_service.compute]
}

# ── Managed SSL certificate ───────────────────────────────────────────────────

resource "google_compute_managed_ssl_certificate" "main" {
  name = "${var.repository_name}-cert"

  managed {
    domains = ["simonandrews.ca", "www.simonandrews.ca"]
  }

  depends_on = [google_project_service.compute]
}

# ── Serverless NEG (Cloud Run backend) ────────────────────────────────────────

resource "google_compute_region_network_endpoint_group" "cloud_run" {
  name                  = "${var.repository_name}-neg"
  network_endpoint_type = "SERVERLESS"
  region                = var.region

  cloud_run {
    service = google_cloud_run_v2_service.main.name
  }

  depends_on = [google_project_service.compute]
}

# ── Backend service ───────────────────────────────────────────────────────────

resource "google_compute_backend_service" "main" {
  name = "${var.repository_name}-backend"

  backend {
    group = google_compute_region_network_endpoint_group.cloud_run.id
  }

  # Cloud Armor policy is attached here in Stage 3.
  # security_policy = google_compute_security_policy.cloudflare_only.id
}

# ── HTTPS URL map + proxy + forwarding rule ───────────────────────────────────

resource "google_compute_url_map" "main" {
  name            = "${var.repository_name}-url-map"
  default_service = google_compute_backend_service.main.id
}

resource "google_compute_target_https_proxy" "main" {
  name             = "${var.repository_name}-https-proxy"
  url_map          = google_compute_url_map.main.id
  ssl_certificates = [google_compute_managed_ssl_certificate.main.id]
}

resource "google_compute_global_forwarding_rule" "https" {
  name       = "${var.repository_name}-https"
  target     = google_compute_target_https_proxy.main.id
  port_range = "443"
  ip_address = google_compute_global_address.main.id
}

# ── HTTP → HTTPS redirect ─────────────────────────────────────────────────────

resource "google_compute_url_map" "http_redirect" {
  name = "${var.repository_name}-http-redirect"

  default_url_redirect {
    https_redirect         = true
    redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
    strip_query            = false
  }
}

resource "google_compute_target_http_proxy" "main" {
  name    = "${var.repository_name}-http-proxy"
  url_map = google_compute_url_map.http_redirect.id
}

resource "google_compute_global_forwarding_rule" "http" {
  name       = "${var.repository_name}-http"
  target     = google_compute_target_http_proxy.main.id
  port_range = "80"
  ip_address = google_compute_global_address.main.id
}
