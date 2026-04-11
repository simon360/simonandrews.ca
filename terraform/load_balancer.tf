# ── Static IP ─────────────────────────────────────────────────────────────────

resource "google_compute_global_address" "main" {
  name = "${var.repository_name}-ip"

  depends_on = [google_project_service.compute]
}

# ── Certificate Manager (DNS-authorised) ─────────────────────────────────────
# Uses CNAME-based DNS authorisation so the certificate provisions correctly
# even when Cloudflare proxying is enabled.

resource "google_certificate_manager_dns_authorization" "main" {
  name   = "${var.repository_name}-auth"
  domain = "simonandrews.ca"

  depends_on = [google_project_service.certificatemanager]
}

resource "google_certificate_manager_certificate" "main" {
  name = "${var.repository_name}-cert"

  managed {
    domains            = ["simonandrews.ca", "*.simonandrews.ca"]
    dns_authorizations = [google_certificate_manager_dns_authorization.main.id]
  }

  depends_on = [google_project_service.certificatemanager]
}

resource "google_certificate_manager_certificate_map" "main" {
  name = "${var.repository_name}-cert-map"

  depends_on = [google_project_service.certificatemanager]
}

resource "google_certificate_manager_certificate_map_entry" "apex" {
  name         = "${var.repository_name}-apex"
  map          = google_certificate_manager_certificate_map.main.name
  certificates = [google_certificate_manager_certificate.main.id]
  hostname     = "simonandrews.ca"
}

resource "google_certificate_manager_certificate_map_entry" "wildcard" {
  name         = "${var.repository_name}-wildcard"
  map          = google_certificate_manager_certificate_map.main.name
  certificates = [google_certificate_manager_certificate.main.id]
  hostname     = "*.simonandrews.ca"
}

# ── simon360.com certificate (DNS-authorised) ─────────────────────────────────

resource "google_certificate_manager_dns_authorization" "simon360" {
  name   = "${var.repository_name}-simon360-auth"
  domain = "simon360.com"

  depends_on = [google_project_service.certificatemanager]
}

resource "google_certificate_manager_certificate" "simon360" {
  name = "${var.repository_name}-simon360-cert"

  managed {
    domains            = ["simon360.com", "*.simon360.com"]
    dns_authorizations = [google_certificate_manager_dns_authorization.simon360.id]
  }

  depends_on = [google_project_service.certificatemanager]
}

resource "google_certificate_manager_certificate_map_entry" "simon360_apex" {
  name         = "${var.repository_name}-simon360-apex"
  map          = google_certificate_manager_certificate_map.main.name
  certificates = [google_certificate_manager_certificate.simon360.id]
  hostname     = "simon360.com"
}

resource "google_certificate_manager_certificate_map_entry" "simon360_wildcard" {
  name         = "${var.repository_name}-simon360-wildcard"
  map          = google_certificate_manager_certificate_map.main.name
  certificates = [google_certificate_manager_certificate.simon360.id]
  hostname     = "*.simon360.com"
}

# ── simonster.net certificate (DNS-authorised) ────────────────────────────────

resource "google_certificate_manager_dns_authorization" "simonster" {
  name   = "${var.repository_name}-simonster-auth"
  domain = "simonster.net"

  depends_on = [google_project_service.certificatemanager]
}

resource "google_certificate_manager_certificate" "simonster" {
  name = "${var.repository_name}-simonster-cert"

  managed {
    domains            = ["simonster.net", "*.simonster.net"]
    dns_authorizations = [google_certificate_manager_dns_authorization.simonster.id]
  }

  depends_on = [google_project_service.certificatemanager]
}

resource "google_certificate_manager_certificate_map_entry" "simonster_apex" {
  name         = "${var.repository_name}-simonster-apex"
  map          = google_certificate_manager_certificate_map.main.name
  certificates = [google_certificate_manager_certificate.simonster.id]
  hostname     = "simonster.net"
}

resource "google_certificate_manager_certificate_map_entry" "simonster_wildcard" {
  name         = "${var.repository_name}-simonster-wildcard"
  map          = google_certificate_manager_certificate_map.main.name
  certificates = [google_certificate_manager_certificate.simonster.id]
  hostname     = "*.simonster.net"
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

  security_policy = google_compute_security_policy.cloudflare_only.id
}

# ── HTTPS URL map + proxy + forwarding rule ───────────────────────────────────

resource "google_compute_url_map" "main" {
  name            = "${var.repository_name}-url-map"
  default_service = google_compute_backend_service.main.id

  host_rule {
    hosts        = ["components.simonandrews.ca"]
    path_matcher = "storybook-paths"
  }

  host_rule {
    hosts        = ["simon360.com", "www.simon360.com"]
    path_matcher = "simon360-redirect"
  }


  path_matcher {
    name            = "storybook-paths"
    default_service = google_compute_backend_service.storybook.id
  }

  path_matcher {
    name = "simon360-redirect"

    default_url_redirect {
      host_redirect          = "simonandrews.ca"
      redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
      strip_query            = false
    }
  }

  host_rule {
    hosts        = ["simonster.net", "www.simonster.net"]
    path_matcher = "simonster-redirect"
  }

  path_matcher {
    name = "simonster-redirect"

    default_url_redirect {
      host_redirect          = "simonandrews.ca"
      redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
      strip_query            = false
    }
  }

}

resource "google_compute_target_https_proxy" "main" {
  name            = "${var.repository_name}-https-proxy"
  url_map         = google_compute_url_map.main.id
  certificate_map = "//certificatemanager.googleapis.com/${google_certificate_manager_certificate_map.main.id}"
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
