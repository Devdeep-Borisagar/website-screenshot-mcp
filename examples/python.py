# pip install apify-client
# APIFY_TOKEN=... python python.py
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

# Save a web page as a print-ready A4 PDF.
run = client.actor("devdeep/website-screenshot-pdf").call(run_input={
    "urls": ["https://en.wikipedia.org/wiki/Web_scraping"],
    "format": "pdf",
    "pdfPaper": "A4",
    "pdfMargin": "10mm",
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item["status"], item["url"], item.get("screenshotUrl") or item.get("error"))
