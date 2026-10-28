# Website Screenshot MCP: screenshots, PDFs and scrolling videos for AI agents

Give your AI agent eyes on the web. One tool that captures any website, or your own HTML, as a **PNG, JPEG or WebP screenshot**, a **PDF**, or a **scrolling MP4/GIF video**, and returns a **public link** to the file.

It runs as a remote MCP server (Streamable HTTP), so there's nothing to install or host. Under the hood it calls the [Website Screenshot & PDF](https://apify.com/devdeep/website-screenshot-pdf) Actor on Apify.

```
https://mcp.apify.com/?tools=devdeep/website-screenshot-pdf
```

## What your agent can do with it

- **Full page or first screen:** capture the whole page top to bottom, just the first screen, a custom height, **one element** (CSS selector) or an exact region.
- **Formats:** PNG, JPEG, WebP, **PDF** (A4, Letter, Legal and more, or one long page) and **scrolling MP4 or GIF**.
- **Devices:** desktop, laptop, MacBook, iPad, iPhone, Android, social card, or any of **200+ exact device models**. Retina 2x/3x and dark mode.
- **Clean captures:** cookie banners hidden or **clicked (accept or reject)**, ads blocked, sticky headers fixed so they don't repeat, lazy images loaded, emoji and Asian scripts rendered.
- **Logged-in pages:** cookies, extra headers, HTTP basic auth, language, time zone, location and proxy.
- **Page text for AI:** get the page's visible text and meta description in the same call.
- **Fair billing:** you pay only for captures that succeed. Failed pages are free.

## Connect

### Claude (claude.ai and Claude Desktop)

Go to **Settings → Connectors → Add custom connector**, paste the URL below, and sign in to Apify when asked.

```
https://mcp.apify.com/?tools=devdeep/website-screenshot-pdf
```

### Claude Code

```bash
claude mcp add --transport http website-screenshot "https://mcp.apify.com/?tools=devdeep/website-screenshot-pdf"
```

### Cursor, Windsurf, VS Code and other MCP clients

```json
{
  "mcpServers": {
    "website-screenshot": {
      "url": "https://mcp.apify.com/?tools=devdeep/website-screenshot-pdf"
    }
  }
}
```

Your client opens an Apify sign-in on first use (OAuth). If your client doesn't support OAuth, send your Apify API token as a header instead:

```json
{
  "mcpServers": {
    "website-screenshot": {
      "url": "https://mcp.apify.com/?tools=devdeep/website-screenshot-pdf",
      "headers": { "Authorization": "Bearer <APIFY_TOKEN>" }
    }
  }
}
```

Get a token in [Apify Console → Settings → API & Integrations](https://console.apify.com/settings/integrations). A free Apify account includes monthly credit.

### Local (stdio), for clients without remote MCP support

```json
{
  "mcpServers": {
    "website-screenshot": {
      "command": "npx",
      "args": ["-y", "@apify/actors-mcp-server", "--tools", "devdeep/website-screenshot-pdf"],
      "env": { "APIFY_TOKEN": "<APIFY_TOKEN>" }
    }
  }
}
```

## Try these prompts

- "Take a full-page screenshot of https://stripe.com and give me the link."
- "Show me how https://example.com looks on an iPhone 15, with the cookie banner accepted."
- "Save https://en.wikipedia.org/wiki/Web_scraping as an A4 PDF."
- "Record a 6-second scrolling video of my landing page https://mysite.com."
- "Screenshot just the pricing section (#pricing) of https://example.com in dark mode."
- "Capture these 20 competitor homepages and give me thumbnails."

## Main inputs

| Input | What it does | Example |
| --- | --- | --- |
| `urls` / `url` / `html` | Pages to capture, or your own HTML | `["https://apify.com"]` |
| `captureMode` | `fullPage`, `viewport`, `customHeight`, `element`, `region` | `"fullPage"` |
| `format` | `png`, `jpeg`, `webp`, `pdf`, `mp4`, `gif` | `"webp"` |
| `device` / `devicePreset` | Screen type, or an exact model | `"mobile"` / `"iPhone 15 Pro"` |
| `elementSelector` | CSS selector when `captureMode` is `element` | `"#pricing"` |
| `cookieBanners` | `hide`, `accept`, `reject`, `off` | `"accept"` |
| `darkMode` | Dark colour scheme | `true` |
| `thumbnailWidth` | Also return a small JPEG preview | `400` |
| `includePageText` | Also return the page's text | `true` |
| `pdfPaper` | A4, Letter, Legal… or `singlePage` | `"A4"` |
| `videoSeconds` | Length of the scrolling video | `8` |

The full list (55 options) is on the [Actor's input page](https://apify.com/devdeep/website-screenshot-pdf/input-schema).

## What comes back

One result per page:

```json
{
  "url": "https://apify.com/",
  "status": "success",
  "screenshotUrl": "https://api.apify.com/v2/key-value-stores/…/records/0001-apify-com.png",
  "thumbnailUrl": "https://api.apify.com/v2/key-value-stores/…/records/0001-apify-com-thumb.jpg",
  "format": "png",
  "width": 1920,
  "height": 10052,
  "title": "Apify: Marketplace of ready-to-run tools for AI",
  "error": null
}
```

`status` is `success`, `failed` (with an `error`, not charged) or `skipped` (the run hit its maximum cost, not charged).

## Use it without MCP (REST API)

```bash
curl -X POST "https://api.apify.com/v2/acts/devdeep~website-screenshot-pdf/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://apify.com"], "format": "png", "captureMode": "fullPage"}'
```

More examples are in [`examples/`](examples/): Node.js, Python and cURL.

## Pricing

Pay per successful capture, with no subscription:

| Event | Price |
| --- | --- |
| Screenshot or PDF | $0.005 ($5 per 1,000) |
| Scrolling MP4/GIF video | $0.02 |

Failed and skipped pages are free; thumbnails and page text are included. See the [live pricing](https://apify.com/devdeep/website-screenshot-pdf/pricing).

## Ready-made examples

All of them are listed on the [examples page](https://apify.com/devdeep/website-screenshot-pdf/examples).

- [Full-page website screenshot (PNG + thumbnail)](https://apify.com/devdeep/website-screenshot-pdf/examples/full-page-website-screenshot-png-thumbnail)
- [Mobile screenshot with cookie banner accepted (iPhone)](https://apify.com/devdeep/website-screenshot-pdf/examples/mobile-screenshot-with-cookie-banner-accepted-iphone)
- [Website to PDF (A4, print-ready)](https://apify.com/devdeep/website-screenshot-pdf/examples/website-to-pdf-a4-print-ready)
- [Scrolling video of a website (MP4)](https://apify.com/devdeep/website-screenshot-pdf/examples/scrolling-video-of-a-website-mp4)

## Support

Found a problem or need a feature? Open an issue here or on the Actor's [Issues tab](https://apify.com/devdeep/website-screenshot-pdf/issues/open).

Only capture pages you're allowed to access, and use cookies or passwords only for accounts you own.

## License

The examples and configuration in this repository are MIT licensed. The screenshot service itself runs on Apify.
