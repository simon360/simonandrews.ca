#!/usr/bin/env bash
# Polls until simon360.com nameservers switch to Cloudflare, then prints all
# key DNS records to confirm the migration is correct.
# Run this after updating the nameservers at Hover.
set -euo pipefail

echo "Polling for simon360.com Cloudflare nameserver switchover (every 30s)..."
echo ""

while true; do
  NS=$(dig simon360.com NS +short | sort)
  if echo "$NS" | grep -qi "cloudflare.com"; then
    echo "✓ Cloudflare nameservers are live:"
    echo "$NS" | sed 's/^/  /'
    echo ""
    echo "A (@):"
    dig simon360.com A +short | sed 's/^/  /'
    echo "CNAME (www):"
    dig www.simon360.com CNAME +short | sed 's/^/  /'
    echo "MX (@):"
    dig simon360.com MX +short | sed 's/^/  /'
    echo "TXT (@):"
    dig simon360.com TXT +short | sed 's/^/  /'
    echo "TXT (_dmarc):"
    dig _dmarc.simon360.com TXT +short | sed 's/^/  /'
    echo "TXT (_atproto):"
    dig _atproto.simon360.com TXT +short | sed 's/^/  /'
    echo "CNAME (fm1._domainkey):"
    dig fm1._domainkey.simon360.com CNAME +short | sed 's/^/  /'
    break
  else
    echo "$(date +%T) — Still on Hover NS: $(echo "$NS" | tr '\n' ' ')"
  fi
  sleep 30
done
