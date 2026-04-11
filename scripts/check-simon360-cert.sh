#!/usr/bin/env bash
# Polls until the simon360.com GCP Certificate Manager cert reaches ACTIVE state.
# Run this after Terraform applies the Phase 2 certificate resources.
# Usage: PROJECT_ID=your-project-id bash scripts/check-simon360-cert.sh
set -euo pipefail

CERT_NAME="${REPOSITORY_NAME:-simonandrews-ca}-simon360-cert"
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
