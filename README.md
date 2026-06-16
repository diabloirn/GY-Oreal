# GY'Oreal Website — Project Structure
## COMP6800 | Muhamad Nabhan Fadhlurrohman

---

## VSCode File Tree

```
gyoreal/
├── index.html            ← Home Page (product popup)
├── gallery.html          ← Gallery Page (filter + product popup)
├── about.html            ← About Us Page
├── tips.html             ← Tips & Trends Page (blog popup)
├── subscribe.html        ← Subscription Page (form + validation)
│
├── css/
│   └── style.css         ← ALL styles — external only, zero inline/internal
│
├── js/
│   ├── main.js           ← Nav, scroll reveal, gallery filter, product popup, blog popup
│   └── validate.js       ← Form validation (5 types, no regex)
│
└── assets/
    ├── background/
    │   ├── background1.jpg
    │   ├── logo.png
    │   └── Ourbackground.png
    ├── product/
    │   ├── lipstickDior.jpg
    │   ├── foundationDior.jpg
    │   ├── eyelinerDior.jpg
    │   ├── Blush&Bronzer.jpg
    │   ├── LipColor.jpg
    │   ├── HydratingMakeUpPrimer.jpg
    │   ├── Liquid Eyeliner.jpg
    │   ├── concealerYSL.jpg
    │   ├── blushOnYSL.jpg
    │   └── ... (extra product images)
    └── tipsAndTrend/
        ├── photo1.jpg ... photo5.jpg
        ├── Autumn.jpg
        └── Contouring_a_Round_Face.jpg
```

---

## Changes Made (v2)

### 1. Footer Cleanup
- Removed **Sustainability** and **Press** links from Company column on all 5 pages
- Footer now contains: Our Story, Beauty Blog, Contact

### 2. Image Consistency
- All product/gallery cards: fixed `height: 260px` with `object-fit: cover`
- All tip cards: fixed `height: 220px` with `object-fit: cover`
- All images use wrapper divs (no raw `height` on `<img>`) — proper CSS box positioning

### 3. Product Popup (index.html, gallery.html)
- Click any product card to open popup
- Popup shows: image, category tag, product name, description, price, quantity selector (+ / −), Checkout button
- Close with ✕ button, click outside, or Escape key

### 4. Blog Popup (tips.html)
- Click "Read Article" on any tip card to open blog popup
- Popup shows: article image, category, title, full article text
- Close with ✕ button, click outside, or Escape key
- Single-column layout, no extra features needed

### 5. No Inline/Internal CSS
- Zero `style="..."` attributes remain in any HTML file
- All previously inline styles converted to utility classes: `.btn-outline-hero`, `.label-text--light`, `.mt-sm`, `.mt-lg`, `.btn-block`, `.form-success__icon`

---

## Form Validation (subscribe.html — validate.js)

| # | Component    | Validation          | Rule                                    |
|---|-------------|---------------------|-----------------------------------------|
| 1 | Text Input  | V1 — Required       | Name must not be empty                  |
| 1 | Text Input  | V2 — Min Length     | Name must be ≥ 3 characters             |
| 2 | Email Input | V3 — Email Format   | Must contain @ and valid domain (no regex) |
| 3 | Select      | V4 — Required       | A category must be chosen               |
| 4 | Radio       | V5 — Required Radio | One frequency must be selected          |
| 5 | Checkbox    | V6 — Required Check | Terms must be ticked                    |

No regular expressions used anywhere in validate.js.

---

## CSS Properties Used (Grading — 5 types)

1. **Typography** — `font-family`, `font-size`, `letter-spacing`, `text-transform`, `line-height`
2. **Color & Background** — `color`, `background-color`, `background-image`, `linear-gradient`, CSS custom properties (`var()`)
3. **Box Model** — `padding`, `margin`, `border`, `border-radius`, `box-shadow`, `width`, `height`
4. **Layout** — `display: flex`, `display: grid`, `position: fixed/absolute/relative`, `gap`, `object-fit`
5. **Effects & Animation** — `transition`, `transform`, `opacity`, `animation`, `@keyframes`, `backdrop-filter`

Responsive: `@media screen and (max-width: 768px)` + `@media screen and (max-width: 1024px)`
Meta viewport: present in `<head>` of all 5 HTML files.

---

## References

1. Google Fonts — Cormorant Garamond & Jost: https://fonts.google.com
2. MDN Web Docs — CSS Grid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
3. MDN Web Docs — CSS Flexbox: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
4. MDN Web Docs — CSS Custom Properties: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
5. MDN Web Docs — position: https://developer.mozilla.org/en-US/docs/Web/CSS/position
6. MDN Web Docs — object-fit: https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
7. MDN Web Docs — CSS Animation: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
8. MDN Web Docs — CSS Media Queries: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
9. MDN Web Docs — IntersectionObserver: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
10. W3C HTML5 Specification: https://html.spec.whatwg.org
