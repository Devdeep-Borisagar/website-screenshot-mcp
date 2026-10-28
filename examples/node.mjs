// npm install apify-client
// APIFY_TOKEN=... node node.mjs
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

// iPhone screenshot with the cookie banner accepted.
const run = await client.actor('devdeep/website-screenshot-pdf').call({
    urls: ['https://www.ikea.com/de/de/'],
    device: 'mobile',
    captureMode: 'viewport',
    cookieBanners: 'accept',
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) {
    console.log(item.status, item.url, item.screenshotUrl ?? item.error);
}
