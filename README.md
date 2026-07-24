# HC360 Landing Page — healthcare360.bringitps.com

Marketing landing page for **HC360** (Healthcare 360°) by Bring IT — the NetSuite
SuiteApp that connects any EMR to Oracle NetSuite.

## Files

```
site/
├─ index.html      All page content and structure
├─ styles.css      Brand token system + all styling
├─ script.js       CTA link config, nav, scroll reveal
├─ assets/         Logo, favicon, product screenshots (see assets/README.md)
└─ README.md       This file
```

Built as a **static site** — no build step, no dependencies. Only Roboto is loaded
externally (Google Fonts). Everything else is self-contained.

## Editing

- **Change the "Request a demo" link** → edit `DEMO_URL` at the top of `script.js`
  (one line; it updates every button on the page).
- **Change copy** → edit the text directly in `index.html`.
- **Change colors / spacing / type** → edit the `:root` tokens at the top of `styles.css`.
- **Add the real logo & screenshots** → see `assets/README.md`.

## Preview locally

Open `index.html` directly in a browser, or serve the folder:

```bash
cd site
python -m http.server 8080
# then open http://localhost:8080
```

## Deploy to healthcare360.bringitps.com

Upload the **contents of `site/`** (not the whole repo — `_context/` must stay private)
to your host, then point the `healthcare360` subdomain at it.

- **Netlify / Vercel / Cloudflare Pages** → set the publish/root directory to `site`.
- **S3 / static host / cPanel** → upload the files in `site/` to the web root.
- **DNS** → add a CNAME for `healthcare360` pointing to your host.

## Notes / decisions

- **No public pricing.** Pricing material is confidential; the page routes to a demo
  instead of listing prices. Add a pricing section later if desired.
- **No stock photos.** Per the brand guide, product visuals are schematic CSS mockups
  until real screenshots are dropped into `assets/`.
- **Roboto only**, per the Bring IT brand guide.
