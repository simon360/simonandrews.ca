# ── Zones ─────────────────────────────────────────────────────────────────────
# Create zones manually in the Cloudflare dashboard, then Terraform will
# manage all DNS records within them.

data "cloudflare_zone" "main" {
  name = "simonandrews.ca"
}

data "cloudflare_zone" "simon360" {
  name = "simon360.com"
}

data "cloudflare_zone" "simonster" {
  name = "simonster.net"
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

resource "cloudflare_record" "components" {
  zone_id = data.cloudflare_zone.main.id
  name    = "components"
  type    = "A"
  content = google_compute_global_address.main.address
  proxied = true
  ttl     = 1
}

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

# ── simon360.com ──────────────────────────────────────────────────────────────

resource "cloudflare_record" "simon360_cert_auth" {
  zone_id = data.cloudflare_zone.simon360.id
  name    = google_certificate_manager_dns_authorization.simon360.dns_resource_record[0].name
  type    = google_certificate_manager_dns_authorization.simon360.dns_resource_record[0].type
  content = google_certificate_manager_dns_authorization.simon360.dns_resource_record[0].data
  proxied = false
  ttl     = 900
}

# Web records point to the GCP load balancer, which redirects all traffic to
# simonandrews.ca.

resource "cloudflare_record" "simon360_apex_a" {
  zone_id = data.cloudflare_zone.simon360.id
  name    = "@"
  type    = "A"
  content = google_compute_global_address.main.address
  proxied = true
  ttl     = 1
}

resource "cloudflare_record" "simon360_www" {
  zone_id = data.cloudflare_zone.simon360.id
  name    = "www"
  type    = "CNAME"
  content = "simon360.com"
  proxied = true
  ttl     = 1
}

# ── simon360.com email records ────────────────────────────────────────────────

resource "cloudflare_record" "simon360_mx_1" {
  zone_id  = data.cloudflare_zone.simon360.id
  name     = "@"
  type     = "MX"
  content  = "in1-smtp.messagingengine.com"
  priority = 10
  ttl      = 900
}

resource "cloudflare_record" "simon360_mx_2" {
  zone_id  = data.cloudflare_zone.simon360.id
  name     = "@"
  type     = "MX"
  content  = "in2-smtp.messagingengine.com"
  priority = 20
  ttl      = 900
}

resource "cloudflare_record" "simon360_spf" {
  zone_id = data.cloudflare_zone.simon360.id
  name    = "@"
  type    = "TXT"
  content = "v=spf1 include:spf.messagingengine.com -all"
  ttl     = 900
}

resource "cloudflare_record" "simon360_dmarc" {
  zone_id = data.cloudflare_zone.simon360.id
  name    = "_dmarc"
  type    = "TXT"
  content = "v=DMARC1; p=none; pct=100; rua=mailto:re+uarxffta0cn@dmarc.postmarkapp.com; sp=none; aspf=r;"
  ttl     = 900
}

resource "cloudflare_record" "simon360_dkim_fm1" {
  zone_id = data.cloudflare_zone.simon360.id
  name    = "fm1._domainkey"
  type    = "CNAME"
  content = "fm1.simon360.com.dkim.fmhosted.com"
  proxied = false
  ttl     = 900
}

resource "cloudflare_record" "simon360_dkim_fm2" {
  zone_id = data.cloudflare_zone.simon360.id
  name    = "fm2._domainkey"
  type    = "CNAME"
  content = "fm2.simon360.com.dkim.fmhosted.com"
  proxied = false
  ttl     = 900
}

resource "cloudflare_record" "simon360_dkim_fm3" {
  zone_id = data.cloudflare_zone.simon360.id
  name    = "fm3._domainkey"
  type    = "CNAME"
  content = "fm3.simon360.com.dkim.fmhosted.com"
  proxied = false
  ttl     = 900
}

# ── simon360.com other records ────────────────────────────────────────────────

resource "cloudflare_record" "simon360_atproto" {
  zone_id = data.cloudflare_zone.simon360.id
  name    = "_atproto"
  type    = "TXT"
  content = "did=did:plc:d7kipkqscf4cnprdnb6ckksf"
  ttl     = 900
}

# ── simonster.net ─────────────────────────────────────────────────────────────

resource "cloudflare_record" "simonster_cert_auth" {
  zone_id = data.cloudflare_zone.simonster.id
  name    = google_certificate_manager_dns_authorization.simonster.dns_resource_record[0].name
  type    = google_certificate_manager_dns_authorization.simonster.dns_resource_record[0].type
  content = google_certificate_manager_dns_authorization.simonster.dns_resource_record[0].data
  proxied = false
  ttl     = 900
}

# Phase 1: DNS records migrated exactly from Hover. Web records are DNS-only
# (proxied = false) while they still point to Vercel.

resource "cloudflare_record" "simonster_apex_a" {
  zone_id = data.cloudflare_zone.simonster.id
  name    = "@"
  type    = "A"
  content = "76.76.21.21"
  proxied = false
  ttl     = 300
}

resource "cloudflare_record" "simonster_www" {
  zone_id = data.cloudflare_zone.simonster.id
  name    = "www"
  type    = "CNAME"
  content = "cname.vercel-dns.com"
  proxied = false
  ttl     = 300
}

# ── simonster.net email records ───────────────────────────────────────────────

resource "cloudflare_record" "simonster_mx_1" {
  zone_id  = data.cloudflare_zone.simonster.id
  name     = "@"
  type     = "MX"
  content  = "in1-smtp.messagingengine.com"
  priority = 10
  ttl      = 900
}

resource "cloudflare_record" "simonster_mx_2" {
  zone_id  = data.cloudflare_zone.simonster.id
  name     = "@"
  type     = "MX"
  content  = "in2-smtp.messagingengine.com"
  priority = 20
  ttl      = 900
}

resource "cloudflare_record" "simonster_spf" {
  zone_id = data.cloudflare_zone.simonster.id
  name    = "@"
  type    = "TXT"
  content = "v=spf1 include:spf.messagingengine.com -all"
  ttl     = 900
}

resource "cloudflare_record" "simonster_dmarc" {
  zone_id = data.cloudflare_zone.simonster.id
  name    = "_dmarc"
  type    = "TXT"
  content = "v=DMARC1; p=none; pct=100; rua=mailto:re+zrmvwfsciej@dmarc.postmarkapp.com; sp=none; aspf=r;"
  ttl     = 900
}

resource "cloudflare_record" "simonster_dkim_fm1" {
  zone_id = data.cloudflare_zone.simonster.id
  name    = "fm1._domainkey"
  type    = "CNAME"
  content = "fm1.simonster.net.dkim.fmhosted.com"
  proxied = false
  ttl     = 900
}

resource "cloudflare_record" "simonster_dkim_fm2" {
  zone_id = data.cloudflare_zone.simonster.id
  name    = "fm2._domainkey"
  type    = "CNAME"
  content = "fm2.simonster.net.dkim.fmhosted.com"
  proxied = false
  ttl     = 900
}

resource "cloudflare_record" "simonster_dkim_fm3" {
  zone_id = data.cloudflare_zone.simonster.id
  name    = "fm3._domainkey"
  type    = "CNAME"
  content = "fm3.simonster.net.dkim.fmhosted.com"
  proxied = false
  ttl     = 900
}
