# Cloud Armor security policy — allows only Cloudflare IP ranges.
#
# Note: Cloudflare occasionally adds new IP ranges. Re-running `terraform apply`
# will keep the policy current. Consider a scheduled CI run or drift detection
# to automate this.

data "cloudflare_ip_ranges" "cloudflare" {}

locals {
  # Cloud Armor allows a maximum of 10 IP ranges per rule, so the ranges are
  # split into chunks and each chunk gets its own rule.
  cf_ipv4_chunks = chunklist(data.cloudflare_ip_ranges.cloudflare.ipv4_cidr_blocks, 10)
  cf_ipv6_chunks = chunklist(data.cloudflare_ip_ranges.cloudflare.ipv6_cidr_blocks, 10)
}

resource "google_compute_security_policy" "cloudflare_only" {
  name = "${var.repository_name}-cloudflare-only"

  # Allow Cloudflare IPv4 ranges.
  dynamic "rule" {
    for_each = local.cf_ipv4_chunks
    content {
      action   = "allow"
      priority = 1000 + rule.key
      match {
        versioned_expr = "SRC_IPS_V1"
        config {
          src_ip_ranges = rule.value
        }
      }
      description = "Allow Cloudflare IPv4 chunk ${rule.key}"
    }
  }

  # Allow Cloudflare IPv6 ranges.
  dynamic "rule" {
    for_each = local.cf_ipv6_chunks
    content {
      action   = "allow"
      priority = 2000 + rule.key
      match {
        versioned_expr = "SRC_IPS_V1"
        config {
          src_ip_ranges = rule.value
        }
      }
      description = "Allow Cloudflare IPv6 chunk ${rule.key}"
    }
  }

  # Default: deny everything that is not Cloudflare.
  rule {
    action   = "deny(403)"
    priority = 2147483647
    match {
      versioned_expr = "SRC_IPS_V1"
      config {
        src_ip_ranges = ["*"]
      }
    }
    description = "Default: deny all non-Cloudflare traffic"
  }
}
