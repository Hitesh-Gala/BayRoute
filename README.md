# Project BayRoute — website

A static website for Project BayRoute, a Takshashila Institution study (with ideaForge and Drone Federation India) on the future of warfare in the Indian context. No build tools, no database: plain HTML, CSS and JavaScript that GitHub Pages can host for free.

## What is in this folder

```
index.html            Home page: partner panels, about, team, link to interviewees
interviewees.html     All interviewees, grouped by community, with filters and search
person.html           One profile + questionnaire (opened as person.html?id=doval etc.)
assets/js/data.js     ALL the content: interviewees, bios, questions. Edit this file.
assets/js/app.js      Page behaviour (no need to touch)
assets/css/style.css  Design (colours, type, layout)
assets/img/panels/    Home-page panel images
assets/img/people/    Interviewee photos (empty to start)
.nojekyll             Tells GitHub Pages to serve the files as they are
```

## Preview on your own computer

Unzip the folder and double-click `index.html`. Everything works offline except the fonts, which load from Google Fonts when you are online.

---

## Publish on GitHub Pages (step by step)

You need a free GitHub account. On the free plan, GitHub Pages only works with a **public** repository.

1. **Sign in** at https://github.com (or create an account).
2. **Create a repository.** Click **+** (top right) → **New repository**.
   - Repository name: `bayroute` (any name works; it becomes part of the address).
   - Visibility: **Public**.
   - Leave "Add a README" unticked. Click **Create repository**.
3. **Upload the site.** On the new, empty repository page, click the link **uploading an existing file**.
   - Open the unzipped `bayroute` folder on your computer, select **everything inside it** (`index.html`, `interviewees.html`, `person.html`, `README.md`, `.nojekyll` and the `assets` folder) and drag it all into the browser window. Dragging the `assets` folder keeps its sub-folders intact (use Chrome or Edge for folder drag-and-drop).
   - Note: `.nojekyll` is a hidden file. On a Mac press `Cmd + Shift + .` in Finder to show it; on Windows tick **View → Hidden items**. If it gets left out, the site still works.
   - Important: `index.html` must sit at the top level of the repository, not inside a `bayroute` sub-folder.
   - Scroll down, write a short message such as "First version of the site", and click **Commit changes**.
4. **Switch on GitHub Pages.** In the repository, open **Settings** → **Pages** (left sidebar, under "Code and automation").
   - Under **Build and deployment**, set **Source** to **Deploy from a branch**.
   - Under **Branch**, choose **main** and **/ (root)**, then click **Save**.
5. **Wait a minute or two**, then refresh the Pages settings screen. It shows your address, which will be:
   `https://YOUR-USERNAME.github.io/bayroute/`
   (It can take up to 10 minutes the first time.)

### Updating the site later

- Open any file on GitHub, click the **pencil icon** (Edit), make the change, then **Commit changes**. The live site updates within a minute or two.
- To replace or add files (such as photos), open the folder on GitHub and use **Add file → Upload files**.

---

## Editing content

All interviewee content is in `assets/js/data.js`. Each person looks like this:

```js
{ id: "doval", rank: "", name: "Ajit Doval", suffix: "", category: "nscs", status: "Proposed",
  role: "National Security Adviser",
  bio: [ "First paragraph…", "Second paragraph…" ],
  focus: "Why this conversation matters to BayRoute.",
  questions: [ "Question specific to this person…", "…" ] },
```

- **Add a person:** copy an existing entry, give it a new unique `id` (lower case, no spaces), and fill in the fields. Keep the commas between entries.
- **Remove a person:** delete their whole `{ … },` block.
- **Status:** change `"Proposed"` to `"Invited"`, `"Confirmed"` or `"Interviewed"` as the project moves.
- **Common questions** (asked of everyone) are under `core`; the **community questions** are under `modules`.
- After editing, open the site and check the page still loads. If the list goes blank, a comma or quote mark is usually missing; GitHub's editor highlights the line.

## Adding photos

**Interviewee photos.** Save a portrait-shaped JPG named after the person's `id` and upload it to `assets/img/people/`. Example: `assets/img/people/doval.jpg`. It replaces the monogram automatically. Use images you have permission to publish (official portraits from PIB or the services are a good source; check their terms).

**Home-page panels.** Each panel shows a drawn illustration until you add a photo. Upload a JPG with exactly these names to `assets/img/panels/`:

| Panel | File name |
|---|---|
| Takshashila Institution | `takshashila.jpg` |
| ideaForge | `ideaforge.jpg` |
| Drone Federation India | `dfi.jpg` |
| Project BayRoute | `bayroute.jpg` |

Tall (portrait) images about 1200 × 1800 px work best. File names are case-sensitive on GitHub: `takshashila.jpg`, not `Takshashila.JPG`.

## Before going public

- Every page carries a `noindex` tag so search engines ignore the draft. When you are ready, delete the line `<meta name="robots" content="noindex, nofollow">` from `index.html`, `interviewees.html` and `person.html`.
- Bios were drafted from public sources in October 2026. Please verify each one, and consider whether to list interviewees publicly before they have agreed.

## Optional: your own web address

To use an address such as `bayroute.takshashila.org.in`, add a CNAME record at your domain provider pointing to `YOUR-USERNAME.github.io`, then enter the address under **Settings → Pages → Custom domain** and tick **Enforce HTTPS** once it is available.
