# FreePrints Gifts Product Review

**Live site:** https://lauras-pa.github.io/freeprints-gifts-product-review/

This repo powers the Trunk Show product review page. Changes pushed to `main` go live automatically in about 1–2 minutes.

---

## Getting access

Ask the repo owner to add you as a **collaborator** on this repository:

https://github.com/LauraS-pa/freeprints-gifts-product-review

You need a free [GitHub account](https://github.com/signup). Once added, you can edit files directly in your browser — no coding tools required.

---

## Editing in your browser (recommended)

1. Open the repo: https://github.com/LauraS-pa/freeprints-gifts-product-review
2. Click **`index.html`** (this is the page content)
3. Click the **pencil icon** (Edit this file) in the top-right
4. Make your changes
5. Scroll down, add a short description of what you changed (e.g. "Update tumbler notes")
6. Click **Commit changes** ? **Commit directly to the `main` branch**
7. Wait 1–2 minutes, then refresh the live site to see your update

### Replacing an image

1. In the repo, open the **`images/`** folder
2. Click **Add file** ? **Upload files**
3. Upload your new image (use a clear filename, e.g. `tumbler-product.png`)
4. Commit to `main`
5. Edit `index.html` and update the `src="images/..."` path on the product photo or P&L image to match your new filename

### Replacing a P&L screenshot

1. Upload the new image to `images/` (e.g. `light-up-frame-pnl.png`)
2. If replacing an existing file, upload with the **same filename** to overwrite — no HTML change needed
3. If using a new filename, update the matching `src="images/..."` in `index.html`

---

## What to edit where

| What you want to change | File | Where in `index.html` |
|------------------------|------|------------------------|
| Product name, promo month, shipping price | `index.html` | Find the product section by comment, e.g. `<!-- Light Up Frame -->` |
| Notes text | `index.html` | `.product-notes__body` inside that product's section |
| Comps table numbers | `index.html` | `.comps-table` `<td>` cells in that product's section |
| Product photo | `images/` + `index.html` | `product-photo__image` `src` attribute |
| P&L image | `images/` + `index.html` | `pnl__image` `src` attribute |
| Sales data (Pillow Case) | `index.html` | `.sales__stat` values |
| Page title / header tagline | `index.html` | `.brand__name` and `.brand__tag` at the top |
| Colors, spacing, fonts | `styles.css` | — |

### Product section IDs (for jump nav links)

| Product | Section ID |
|---------|------------|
| Light Up Frame | `#light-up-frame` |
| 24oz Tumbler | `#tumbler` |
| Double-Photo Panel | `#double-photo-panel` |
| Pillow Case | `#pillow-case` |

---

## Common edits (examples)

**Change shipping price** — find `.shipping__price` in the product section:
```html
<p class="shipping__price">$13.99</p>
```

**Change projected promo month** — find `.product__promo-value`:
```html
<span class="product__promo-value">January 2027</span>
```
Use `Unknown` if no month is set yet.

**Change notes** — edit text inside `.product-notes__body`. Use `<br />` for line breaks within a paragraph, or separate `<p>` tags for new paragraphs.

**Market + Margin shipping** (when a product has two prices):
```html
<dl class="shipping__tiers">
  <div class="shipping__tier">
    <dt>Market Price</dt>
    <dd>$9.99</dd>
  </div>
  <div class="shipping__tier">
    <dt>Margin Price</dt>
    <dd>$12.99</dd>
  </div>
</dl>
```

---

## Files in this repo

```
index.html      ? Page content (products, text, tables)
styles.css      ? Visual styling
lightbox.js     ? Click-to-zoom on product photos
images/         ? Product photos and P&L screenshots
```

---

## Preview before publishing (optional)

If you want to preview locally before committing:

1. Download or clone this repo
2. Open `index.html` in Chrome or Edge (double-click the file)

Note: product photos and P&L images only display correctly when the `images/` folder is alongside `index.html`.

---

## Need help?

- **Broken layout after an edit?** Check that you didn't accidentally delete a `</div>` or `</section>` tag. Use GitHub's **History** on the file to view or revert a previous version.
- **Image not showing?** Confirm the filename in `src="images/..."` exactly matches the file in the `images/` folder (case-sensitive).
- **Change not live yet?** GitHub Pages can take 1–2 minutes. Hard-refresh with Ctrl+Shift+R.
