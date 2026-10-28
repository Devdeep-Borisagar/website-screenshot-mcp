#!/usr/bin/env bash
# Full-page PNG of a website, returned as JSON with a public link to the image.
# Get a token at https://console.apify.com/settings/integrations
curl -s -X POST \
  "https://api.apify.com/v2/acts/devdeep~website-screenshot-pdf/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "urls": ["https://apify.com", "https://en.wikipedia.org/wiki/Screenshot"],
    "captureMode": "fullPage",
    "format": "png",
    "thumbnailWidth": 400
  }'
