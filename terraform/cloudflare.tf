# ── Zone ──────────────────────────────────────────────────────────────────────
# Create the zone manually in the Cloudflare dashboard, then Terraform will
# manage all DNS records within it.

data "cloudflare_zone" "main" {
  name = "simonandrews.ca"
}

# ── Zone security settings ────────────────────────────────────────────────────
# Full (Strict) SSL verifies the Google-managed cert on the load balancer.
# HSTS tells browsers to always use HTTPS for this domain.

resource "cloudflare_zone_settings_override" "main" {
  zone_id = data.cloudflare_zone.main.id

  settings {
    ssl             = "strict"
    min_tls_version = "1.2"

    security_header {
      enabled            = true
      include_subdomains = true
      max_age            = 31536000
      preload            = true
    }
  }
}

# ── Certificate Manager DNS authorisation records ─────────────────────────────
# These CNAMEs allow Google to validate domain ownership without needing to
# disable Cloudflare proxying.

resource "cloudflare_record" "cert_auth" {
  zone_id = data.cloudflare_zone.main.id
  name    = google_certificate_manager_dns_authorization.main.dns_resource_record[0].name
  type    = google_certificate_manager_dns_authorization.main.dns_resource_record[0].type
  content = google_certificate_manager_dns_authorization.main.dns_resource_record[0].data
  proxied = false
  ttl     = 900
}

# ── Web records ───────────────────────────────────────────────────────────────

resource "cloudflare_record" "apex_a" {
  zone_id = data.cloudflare_zone.main.id
  name    = "@"
  type    = "A"
  content = google_compute_global_address.main.address
  proxied = true
  ttl     = 1
}

resource "cloudflare_record" "www" {
  zone_id = data.cloudflare_zone.main.id
  name    = "www"
  type    = "CNAME"
  content = "simonandrews.ca"
  proxied = true
  ttl     = 1
}

# ── Email records (always DNS-only) ───────────────────────────────────────────

resource "cloudflare_record" "mx_1" {
  zone_id  = data.cloudflare_zone.main.id
  name     = "@"
  type     = "MX"
  content  = "in1-smtp.messagingengine.com"
  priority = 10
  ttl      = 900
}

resource "cloudflare_record" "mx_2" {
  zone_id  = data.cloudflare_zone.main.id
  name     = "@"
  type     = "MX"
  content  = "in2-smtp.messagingengine.com"
  priority = 20
  ttl      = 900
}

resource "cloudflare_record" "spf" {
  zone_id = data.cloudflare_zone.main.id
  name    = "@"
  type    = "TXT"
  content = "v=spf1 include:spf.messagingengine.com -all"
  ttl     = 900
}

resource "cloudflare_record" "google_verification" {
  zone_id = data.cloudflare_zone.main.id
  name    = "@"
  type    = "TXT"
  content = "google-site-verification=wcIQ5jn3K_CdOmGOptHRf3AQz-N8N2yoOdtM5XaiBIM"
  ttl     = 900
}

resource "cloudflare_record" "lhr2_wildcard" {
  zone_id = data.cloudflare_zone.main.id
  name    = "*.lhr2"
  type    = "A"
  content = "68.183.45.149"
  proxied = false
  ttl     = 900
}

resource "cloudflare_record" "lhr2_wildcard_aaaa" {
  zone_id = data.cloudflare_zone.main.id
  name    = "*.lhr2"
  type    = "AAAA"
  content = "2a03:b0c0:1:e0::620:7001"
  proxied = false
  ttl     = 900
}

resource "cloudflare_record" "lhr2" {
  zone_id = data.cloudflare_zone.main.id
  name    = "lhr2"
  type    = "A"
  content = "68.183.45.149"
  proxied = false
  ttl     = 900
}

resource "cloudflare_record" "lhr2_aaaa" {
  zone_id = data.cloudflare_zone.main.id
  name    = "lhr2"
  type    = "AAAA"
  content = "2a03:b0c0:1:e0::620:7001"
  proxied = false
  ttl     = 900
}

resource "cloudflare_record" "dmarc" {
  zone_id = data.cloudflare_zone.main.id
  name    = "_dmarc"
  type    = "TXT"
  content = "v=DMARC1;p=quarantine;pct=100;rua=mailto:0bad8dca8d@rua.easydmarc.eu;ruf=mailto:0bad8dca8d@ruf.easydmarc.eu;fo=1"
  ttl     = 900
}

resource "cloudflare_record" "dkim_fm1" {
  zone_id = data.cloudflare_zone.main.id
  name    = "fm1._domainkey"
  type    = "CNAME"
  content = "fm1.simonandrews.ca.dkim.fmhosted.com"
  proxied = false
  ttl     = 900
}

resource "cloudflare_record" "dkim_fm2" {
  zone_id = data.cloudflare_zone.main.id
  name    = "fm2._domainkey"
  type    = "CNAME"
  content = "fm2.simonandrews.ca.dkim.fmhosted.com"
  proxied = false
  ttl     = 900
}

resource "cloudflare_record" "dkim_fm3" {
  zone_id = data.cloudflare_zone.main.id
  name    = "fm3._domainkey"
  type    = "CNAME"
  content = "fm3.simonandrews.ca.dkim.fmhosted.com"
  proxied = false
  ttl     = 900
}
