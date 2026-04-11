#!/usr/bin/env bash
# Polls until the sadl.io GCP Certificate Manager cert reaches ACTIVE state.
# Run this after Terraform applies.
set -euo pipefail

CERT_NAME="${REPOSITORY_NAME:-simonandrews-ca}-sadlio-cert"
PROJECT="${PROJECT_ID:-simonandrews-ca-terraform}"

echo "Polling certificate '$CERT_NAME' in project '$PROJECT' (every 30s)..."
echo ""

while true; do
  STATE=$(gcloud certificate-manager certificates describe "$CERT_NAME" \
    --project="$PROJECT" \
    --format="value(managed.state)" 2>/dev/null || echo "NOT_FOUND")

  if [ "$STATE" = "ACTIVE" ]; then
    echo "✓ Certificate is ACTIVE — DNS validation succeeded"
    break
  else
    echo "$(date +%T) — Certificate state: $STATE"
  fi
  sleep 30
done
