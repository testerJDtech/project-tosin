# 🎂 Birthday Website

A three-page surprise birthday site — home, family letters, photo/video carousel.

---

## 📁 Folder Structure

```
birthday-site/
├── index.html      ← The website (open this in a browser)
├── photos/         ← Drop your photos here
│   ├── home-1.jpg through home-6.jpg     (background fades on page 1)
│   └── carousel-1.jpg through carousel-8.jpg  (page 3 carousel)
├── videos/         ← Drop your .mp4 videos here
└── README.md       ← This file
```

The included photo files are **decorative placeholders** — replace them with real ones.

---

## 🚀 Getting Started in VS Code

1. **Open the folder in VS Code**
   `File → Open Folder…` → select the `birthday-site` folder

2. **Preview the site**
   Right-click `index.html` → "Reveal in File Explorer / Finder" → double-click to open in your browser. (Or install the **Live Server** extension and click "Go Live" at the bottom of VS Code.)

3. **Edit your content**
   Open `index.html` and scroll down to the `CONFIG = { ... }` block near the bottom. Everything you need to change is in one place.

---

## ✏️ Customising the Content

### 1. Your sister's name
```js
sisterName: "Divine",
```

### 2. Home page photos
Replace the placeholder JPGs in `photos/` keeping the same filenames (`home-1.jpg` through `home-6.jpg`). They'll auto-fade in the background on page 1.

> **Tip:** You can add more — just edit the `homePhotos` array in `index.html`:
> ```js
> homePhotos: [
>   "photos/home-1.jpg",
>   "photos/home-2.jpg",
>   "photos/extra-photo.jpg",
> ],
> ```

### 3. The four letters
Edit the `letters` array. Each entry has:
- `from`: who wrote it (Dad / Mum / Joseph / John)
- `message`: the actual words. Use `\n` for line breaks.
- `signature`: how to sign off

### 4. Carousel media (photos + videos)
Replace the carousel placeholders in `photos/` keeping the filenames, or edit the `mediaItems` array to point to your own files.

**To add videos:**
1. Drop your `.mp4` file in the `videos/` folder
2. Add an entry to `mediaItems` in `index.html`:
   ```js
   { type: "video", src: "videos/birthday-toast.mp4" },
   ```

You can mix photos and videos in any order — they'll play in random shuffle.

---

## 🎨 Photo Tips

- **Format:** `.jpg`, `.jpeg`, `.png`, or `.webp` all work
- **Size:** ~1600x1100px is ideal for home page. Carousel works with any aspect ratio.
- **Naming:** Use lowercase, no spaces (e.g. `summer-trip.jpg`, not `Summer Trip.jpg`)

## 🎥 Video Tips

- **Format:** `.mp4` works best across all browsers
- **Size:** Keep under ~50MB per video — they'll load faster
- **No audio?** They auto-mute (browsers require this for autoplay)

---

## 🌐 Hosting It Online (optional)

To share with family beyond your own computer, you can host the folder for free on:

- **Netlify Drop** — drag-and-drop the folder onto [app.netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages** — push to a repo, enable Pages in settings
- **Vercel** — `vercel deploy` from the folder

---

## ⌨️ Keyboard Shortcuts (on the carousel page)

- `←` / `→` — previous / next slide
- `Space` — play / pause
- `Esc` — back to previous page

---

Happy birthday to her, and well done for putting this together 🎉
