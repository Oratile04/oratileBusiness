# Oratile Mongale Data Analysis for Small Business

A single page, plain HTML/CSS/JS site developed for freelance data analysis services aimed at small businesses. The site requires no build process and no frameworks, opening directly via `index.html`.

## Structure
.
├── index.html # all page content
├── css/style.css # design system + layout
├── js/script.js # nav toggle + hero animation
└── README.md
## Contact and Contact Form

The site includes a contact section with a real email address and a LinkedIn profile link in the footer of `index.html`. A portfolio link is also included in the footer.

The contact form submits via `mailto:`, which opens the visitor's email client directly. This approach is suitable for the current stage of the site. A more robust solution, such as Formspree or Web3Forms, may be implemented at a later stage by updating the `action` attribute of the form, without requiring a full rebuild.

## Hero Section

The hero section includes sample data in `js/script.js` (`rowsData`, `insightSentence`) used to demonstrate the kind of analytical work described on the page.

## Running Locally

No installation is required. The site can be opened directly via `index.html` in a browser. For accurate testing of relative paths and fonts, a local server is recommended.

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing with GitHub Pages

The site is published using GitHub Pages, following this process.

1. A repository is created on GitHub without an initial README, as one is already included in this project.
2. The project is pushed to the repository:
```bash
   git remote add origin https://github.com/Oratile04/oratile portfolio3.git
   git branch -M main
   git add .
   git commit -m "Initial site"
   git push -u origin main
```
3. Under repository **Settings → Pages**, the deployment source is set to **Deploy from a branch**.
4. The branch is set to `main` and the folder to `/ (root)`, then saved.
5. The site becomes available shortly after at:

https://Oratile04.github.io/oratile portfolio3/

### Custom Domain

Should a custom domain be added in future, a `CNAME` file containing the domain name is placed at the repository root, with DNS configured according to GitHub's custom domain documentation.

## Design Notes

The hero section features a small animated ledger display, a disorganized sales table that resolves into a clear, plain English insight, representing the type of analytical work described on the page. The animation respects `prefers reduced motion` settings and re triggers each time it re enters the viewport.

Fonts are loaded via Google Fonts (`IBM Plex Mono` and `Source Serif 4`). These may be self hosted in a `fonts/` folder if reliance on an external font host is not desired.
