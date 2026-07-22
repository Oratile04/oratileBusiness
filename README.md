# Oratile Mongale Data Analysis for Small Business

A single-page, plain HTML/CSS/JS site for freelance data analysis work aimed at small
businesses. No build step, no frameworks — open `index.html` and it just works.

## Structure

```
.
├── index.html        # all page content
├── css/style.css      # design system + layout
├── js/script.js        # nav toggle + hero animation
└── README.md
```

## Before you publish — edit these

Search the files for the placeholders below and swap in your real details:

| Placeholder | Where | What to change it to |
|---|---|---|
| `youremail@example.com` | `index.html` (contact form + footer) | Your real email |
| LinkedIn URL `https://www.linkedin.com/` | `index.html` footer | Your actual profile URL |
| Portfolio link | `index.html` footer | Already points at your Google Sites page — update or remove |
| Hero stats / sample data | `js/script.js` (`rowsData`, `insightSentence`) | Feel free to swap for a different mock example, or leave as-is |

The contact form currently submits via `mailto:`, which just opens the visitor's email
client — fine to start, but it exposes your address in the page source and doesn't work
well on all devices. When you're ready for something sturdier, swap the `<form>` for a
free service like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com)
(just change the `action` attribute, no rebuild needed).

## Running it locally

No install required — just open `index.html` in a browser. If you want a local server
(recommended, so relative paths and fonts behave exactly like production):

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing with GitHub Pages

1. Create a new repository on GitHub (e.g. `ese-data-site`) — don't initialize it with a
   README, since you already have one here.
2. From this project folder:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git branch -M main
   git add .
   git commit -m "Initial site"
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
6. Wait a minute or two — your site will be live at:
   ```
   https://<your-username>.github.io/<your-repo>/
   ```

### Using a custom domain (optional)

If you buy a domain later: add a `CNAME` file to the repo root containing just your
domain (e.g. `esedata.com`), then point your domain's DNS at GitHub Pages following
[GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Notes on the design

The hero includes a small animated "ledger" — a messy sales table that resolves into a
plain-English insight — as a stand-in for the kind of work described on the page. It
respects `prefers-reduced-motion` and re-triggers each time it scrolls back into view.
Fonts are loaded from Google Fonts (`IBM Plex Mono` + `Source Serif 4`); if you'd rather
not depend on an external font host, they can be self-hosted in a `fonts/` folder instead.
