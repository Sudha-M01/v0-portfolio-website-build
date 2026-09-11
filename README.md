# Sudha Mareeswaran — Portfolio v2

Upgraded portfolio built with React + Vite, matching your resume.

**What's new vs the old site:**
- Full resume content (summary, experience, education, awards, languages)
- Resume download button (PDF included in `public/`)
- Certifications section — tap any card to view the verified Guvi link (opens in a new tab, doesn't download)
- Projects section pulled from your resume + GitHub repos, with GitHub links
- Skills with proficiency bars, grouped by Frontend / Backend / Tools
- Contact section with email, phone, GitHub, LinkedIn

---

## 1. Run it locally

```bash
cd portfolio-upgrade
npm install
npm run dev
```

Open the link shown (usually `http://localhost:5174`).

## 2. Edit your content

Everything text-based lives in **one file**: `src/data.js`
- `profile` — name, title, tagline, contact info, summary
- `skills` — grouped skill bars
- `experience` — internship/work entries
- `projects` — project cards (add a `demo` link when you have a live URL)
- `certifications` — title, issuer, verify link
- `education`, `awards`, `languages`

No need to touch any other file for content changes — just edit `data.js` and save.

## 3. Replace the resume PDF

Drop your latest resume into `public/` and update the filename in `src/data.js` → `profile.resumeFile` if it changes.

## 4. Deploy — replace your live site

Since your Vercel project (`v0-portfolio-website-build`) is connected to your GitHub repo:

```bash
cd portfolio-upgrade
git init
git remote add origin https://github.com/Sudha-M01/v0-portfolio-website-build.git
git add .
git commit -m "Upgrade portfolio: resume details, certifications, projects"
git branch -M main
git push -f origin main
```

Vercel will auto-detect the push and redeploy — your live link stays the same:
`https://v0-portfolio-website-build-lime-chi.vercel.app`

**Note:** `push -f` (force push) replaces the old repo content entirely. If you want to keep old commit history, use a new branch and merge via a pull request instead.

## 5. Certificate not showing a link?

Two certificates (Mastering Smartphone Solutions, Database Management System) have no public verify link since they're not from Guvi — they show issuer details only, no "View Certificate" button. That's expected.
