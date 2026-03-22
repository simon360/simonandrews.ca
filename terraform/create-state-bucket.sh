#!/usr/bin/env bash
set -euo pipefail

PROJECT_ID="simonandrews-ca-terraform"
BUCKET_NAME="${PROJECT_ID}-terraform-state"
REGION="europe-west1"

# The Cloud Resource Manager API must be enabled before Terraform can manage
# any google_project_service resources (including enabling it via Terraform).
# Enable it once here as a bootstrap step.
echo "Enabling Cloud Resource Manager API..."
gcloud services enable cloudresourcemanager.googleapis.com --project="${PROJECT_ID}"

echo "Creating Terraform state bucket: gs://${BUCKET_NAME}"

gcloud storage buckets create "gs://${BUCKET_NAME}" \
  --project="${PROJECT_ID}" \
  --location="${REGION}" \
  --uniform-bucket-level-access

gcloud storage buckets update "gs://${BUCKET_NAME}" \
  --versioning

echo "Done. Uncomment the backend block in main.tf and set bucket = \"${BUCKET_NAME}\""
