#!/usr/bin/env bash
# Polls until simonster.net nameservers switch to Cloudflare, then prints all
# key DNS records to confirm the migration is correct.
# Run this after updating the nameservers at Hover.
set -euo pipefail

echo "Polling for simonster.net Cloudflare nameserver switchover (every 30s)..."
echo ""

while true; do
  NS=$(dig simonster.net NS +short | sort)
  if echo "$NS" | grep -qi "cloudflare.com"; then
    echo "✓ Cloudflare nameservers are live:"
    echo "$NS" | sed 's/^/  /'
    echo ""
    echo "A (@):"
    dig simonster.net A +short | sed 's/^/  /'
    echo "CNAME (www):"
    dig www.simonster.net CNAME +short | sed 's/^/  /'
    echo "MX (@):"
    dig simonster.net MX +short | sed 's/^/  /'
    echo "TXT (@):"
    dig simonster.net TXT +short | sed 's/^/  /'
    echo "TXT (_dmarc):"
    dig _dmarc.simonster.net TXT +short | sed 's/^/  /'
    echo "CNAME (fm1._domainkey):"
    dig fm1._domainkey.simonster.net CNAME +short | sed 's/^/  /'
    break
  else
    echo "$(date +%T) — Still on Hover NS: $(echo "$NS" | tr '\n' ' ')"
  fi
  sleep 30
done
