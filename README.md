# Personal Academic Homepage — Zexu Chen

Single-file, dependency-free site (HTML + CSS + JS, fonts via Google Fonts CDN).
Designed for **GitHub Pages**.

---

## 1. Deploy to GitHub Pages (5 minutes)

### Option A — User site (recommended: `chenzxjeremy.github.io`)
```bash
git init
git add index.html README.md Zexu_Chen_CV.pdf Zexu_Chen_Resume.pdf
git commit -m "init: academic homepage"
git branch -M main
git remote add origin git@github.com:<your-github>/<your-github>.github.io.git
git push -u origin main
```
Live at `https://<your-github>.github.io` within ~1 minute.

### Option B — Project site
1. Push to any repo, e.g. `homepage`.
2. **Settings → Pages → Source**: `Deploy from a branch` → `main` / `/ (root)`.
3. Lives at `https://<your-github>.github.io/homepage/`.

### Custom domain (optional)
Add a file named `CNAME` containing your domain (e.g. `zexuchen.com`), then point
a `CNAME` DNS record to `<your-github>.github.io`.

---

## 2. Three placeholders left to fill

These are the only `[...]` left in `index.html`:

| Find                         | Replace with                                         |
|------------------------------|------------------------------------------------------|
| `[YOUR-SCHOLAR-ID]`          | Google Scholar user ID (e.g. `q7CqLg0AAAAJ`)         |
| `[YOUR-LINKEDIN]`            | LinkedIn slug (e.g. `zexu-chen`)                     |
| `[YOUR-GITHUB]`              | GitHub username (or delete that `<a>` line entirely) |

Everything else — name, email, phone, ORCID, Scopus, publications,
education, conferences, teaching — is filled from your CV.

---

## 3. CV PDFs

Both files are in the repo root and the site links to `Zexu_Chen_CV.pdf` in
the footer. Replace either by overwriting it:

```bash
cp ~/path/to/new_CV.pdf Zexu_Chen_CV.pdf
git add Zexu_Chen_CV.pdf
git commit -m "update: CV"
git push
```

If you'd rather have the footer link to the shorter resume, change `./Zexu_Chen_CV.pdf`
to `./Zexu_Chen_Resume.pdf` in `index.html`.

---

## 4. Customizing the design

All design tokens live in CSS variables at the top of `<style>`:

```css
:root {
  --paper:      #f4f1ea;   /* background */
  --ink:        #16140f;   /* primary text */
  --accent:     #a83f2a;   /* oxidized copper — the signature color */
  --serif:      "Instrument Serif", ...;
  --sans:       "IBM Plex Sans", ...;
  --mono:       "IBM Plex Mono", ...;
}
```

Change `--accent` once and the whole palette shifts. Alternatives:

| Mood            | `--accent`  | Notes                              |
|----------------|-------------|------------------------------------|
| Steel           | `#2a3f4a`   | Cool, more computational           |
| OSU scarlet     | `#9b2226`   | More school-spirited               |
| Forest          | `#2d5a3d`   | Quieter, organic                   |
| Deep amber      | `#b8651b`   | Warmer than current copper         |

Font pairings that work with this layout:
- Current: Instrument Serif + IBM Plex Sans + IBM Plex Mono
- Alt: Fraunces + IBM Plex Sans
- Alt: Newsreader + Inter Tight
- Alt: Cormorant Garamond + Manrope

---

## 5. Adding more projects / publications

Each project is `<article class="project">`. Copy any one, change number,
title, body, and tags. The grid auto-flows. The featured (full-width dark)
card is `class="project featured"`.

Publications under `<ol class="pub-list">` — numbering is automatic via CSS
counters, just add `<li>` elements.

If you later want to add a "Tools / Open Source" subsection for the
ParaView-MCP, `mt-curve` server, and local LLM stack work, you can copy the
project-grid markup into a new section. They're a strong signal of software
fluency for materials-informatics roles.

---

## 6. Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

---

## What's in this repo

```
index.html              # the entire site
README.md               # this file
Zexu_Chen_CV.pdf        # full CV (linked from footer)
Zexu_Chen_Resume.pdf    # 1-page resume
```

No build step. No npm. No tracking. Edit and push.
