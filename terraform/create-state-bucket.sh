#!/usr/bin/env bash
set -euo pipefail

PROJECT_ID="simonandrews-ca-terraform"
BUCKET_NAME="${PROJECT_ID}-terraform-state"
REGION="europe-west1"

echo "Creating Terraform state bucket: gs://${BUCKET_NAME}"

gcloud storage buckets create "gs://${BUCKET_NAME}" \
  --project="${PROJECT_ID}" \
  --location="${REGION}" \
  --uniform-bucket-level-access

gcloud storage buckets update "gs://${BUCKET_NAME}" \
  --versioning

echo "Done. Uncomment the backend block in main.tf and set bucket = \"${BUCKET_NAME}\""
