# PHASE 3: CODER Agent Instructions

## Role
Kreiranje detaljnih tehničkih specifikacija za razvoj AG-EKSPERT web stranice.

## Your Task

Čekaj SendMessage od 'architect' agenta sa kompletnom arhitekturom. Kada je primireš:

### 1. Technology Stack Decision

Na temelju architect dizajna, odluči između:

**OPTION A: HTML/CSS/JavaScript (Vanilla)**

Prednosti:
- Zero build time, instant development
- Lightweight, fast loading
- Perfect za 7-8 statičnih stranica
- Lak SEO (pure HTML)
- Hosting: GitHub Pages, Netlify, Vercel (Free)

Mane:
- Manje fleksibilnosti za kompleksne interakcije
- Tvrđa manualna state management

Koristi za: Content-driven site sa minimalnom interakcijom

---

**OPTION B: React (Next.js)**

Prednosti:
- Komponente = lakši maintenance
- Server-side rendering (SSR) = bolja SEO
- Optimized images i performance built-in
- Blog sistem je lakši (dynamic content)
- State management je bolji

Mane:
- Build step = viši learning curve
- Overengineering za jednostavnu stranicu
- Veći bundle size ako nije optimiziran

Koristi za: Kompleksnije stranice sa dinamičkim sadržajem ili blog-om

---

**RECOMMENDATION:**

Ako je prioritet = **Brzina razvoja + jednostavnost** = Vanilla JS
Ako je prioritet = **Skalabilnost + blog + dinamički sadržaj** = Next.js

**⭐ Za AG-EKSPERT preporučujem: VANILLA + Possibility za future Next.js migration**
- Počni sa Vanilla (brže)
- Struktura koja dozvoljava senare Next.js konverziju

---

### 2. Project Structure & File Organization

**VANILLA HTML/CSS/JS STRUCTURE:**

```
ag-ekspert-website/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── team/
│   │   └── testimonials/
│   ├── icons/
│   │   ├── services/
│   │   ├── features/
│   │   └── social/
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── index.html              (Homepage)
│   ├── about.html              (O Nama)
│   ├── services.html           (Usluge)
│   ├── why-choose-us.html      (Zašto nas odabrati)
│   ├── faq.html                (FAQ)
│   ├── contact.html            (Kontakt)
│   ├── blog.html               (Blog listing)
│   ├── blog-post.html          (Blog post template)
│   │
│   ├── css/
│   │   ├── main.css            (Global styles)
│   │   ├── components.css      (Components: header, footer, cards)
│   │   ├── layout.css          (Grid, spacing, responsive)
│   │   ├── typography.css      (Font sizes, weights)
│   │   ├── colors.css          (CSS variables za boje)
│   │   └── animations.css      (Transitions, keyframes)
│   │
│   ├── js/
│   │   ├── main.js             (Initialization, routing)
│   │   ├── components/
│   │   │   ├── header.js       (Mobile menu toggle)
│   │   │   ├── faq.js          (Accordion logic)
│   │   │   ├── form.js         (Contact form handling)
│   │   │   ├── search.js       (Local search)
│   │   │   └── blog.js         (Blog filtering)
│   │   ├── utils/
│   │   │   ├── api.js          (Form submission)
│   │   │   ├── search-index.js (Blog/content search)
│   │   │   └── helpers.js      (Utility functions)
│   │   └── data/
│   │       ├── services.json   (Services content)
│   │       ├── testimonials.json
│   │       ├── faq.json
│   │       └── blog-posts.json
│   │
│   └── partials/
│       ├── header.html         (Reusable header component)
│       ├── footer.html         (Reusable footer component)
│       └── meta-tags.html      (SEO meta tags template)
│
├── tests/
│   ├── form.test.js
│   ├── search.test.js
│   └── performance.test.js
│
├── docs/
│   ├── ARCHITECTURE.md
│   ├── COMPONENTS.md
│   ├── DEVELOPMENT.md
│   └── DEPLOYMENT.md
│
├── config/
│   ├── site-config.js          (Site-wide settings)
│   ├── build-config.js         (Build settings if needed)
│   └── seo-config.js           (SEO metadata)
│
├── scripts/
│   ├── build.js                (Minify, optimize)
│   ├── optimize-images.js
│   └── generate-sitemap.js
│
├── .github/
│   └── workflows/
│       ├── lighthouse.yml      (Performance testing)
│       └── deploy.yml          (Auto-deploy to Netlify/Vercel)
│
├── package.json                (Dependencies, scripts)
├── .gitignore
├── README.md
└── index.html                  (Root HTML - entry point)
```

---

### 3. Page-by-Page Specifications

#### **INDEX.HTML (Homepage)**

```html
<!DOCTYPE html>
<html lang="hr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AG-EKSPERT | Lokalna Pretraga i AI Usluge</title>
  <meta name="description" content="[Company description for SEO]">
  <meta name="robots" content="index, follow">
  <!-- Open Graph -->
  <meta property="og:title" content="AG-EKSPERT">
  <meta property="og:description" content="[Description]">
  <meta property="og:image" content="/public/images/og-image.jpg">
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/public/favicon.ico">
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">
  <!-- CSS -->
  <link rel="stylesheet" href="src/css/main.css">
  <link rel="stylesheet" href="src/css/components.css">
</head>
<body>
  <!-- Header (Reusable) -->
  <header class="header" id="header">
    <!-- Navigation will be injected by header.js -->
  </header>

  <!-- Hero Section -->
  <section class="hero" id="hero">
    <div class="hero__content">
      <h1 class="hero__title">Pronađite što trebate, lokalno i brzo</h1>
      <p class="hero__subtitle">AI-powered lokalna pretraga za vašu zajednicu</p>
      <button class="btn btn--primary btn--lg" id="cta-primary">Započni Sada</button>
      <button class="btn btn--secondary" id="cta-secondary">Saznaj Više</button>
    </div>
    <div class="hero__image">
      <img src="/public/images/hero/hero-image.jpg" alt="AG-EKSPERT platform">
    </div>
  </section>

  <!-- Value Propositions -->
  <section class="value-props" id="value-props">
    <h2>Zašto AG-EKSPERT?</h2>
    <div class="grid grid--3-cols">
      <!-- Card 1 -->
      <article class="card">
        <div class="card__icon">
          <img src="/public/icons/services/icon-1.svg" alt="Fast search icon">
        </div>
        <h3 class="card__title">Brza Pretraga</h3>
        <p class="card__description">Pronađite lokalne rezultate u sekundi sa našom AI tehnologijom.</p>
      </article>
      <!-- Card 2 -->
      <article class="card">
        <div class="card__icon">
          <img src="/public/icons/services/icon-2.svg" alt="Accurate results">
        </div>
        <h3 class="card__title">Točni Rezultati</h3>
        <p class="card__description">Relevant, verified, lokalni business i usluge dostupne vam.</p>
      </article>
      <!-- Card 3 -->
      <article class="card">
        <div class="card__icon">
          <img src="/public/icons/services/icon-3.svg" alt="24/7 Support">
        </div>
        <h3 class="card__title">24/7 Podrška</h3>
        <p class="card__description">Naš tim je dostupan kada vam trebamo, bilo kada.</p>
      </article>
    </div>
  </section>

  <!-- Featured Services -->
  <section class="services-preview" id="services-preview">
    <h2>Naše Usluge</h2>
    <div class="grid grid--3-cols">
      <!-- Service cards loaded from services.json -->
    </div>
    <div class="text--center">
      <a href="services.html" class="btn btn--primary">Vidi sve usluge</a>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="testimonials" id="testimonials">
    <h2>Što Kažu Naši Klijenti</h2>
    <div class="carousel" id="testimonial-carousel">
      <!-- Testimonials loaded from testimonials.json -->
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section" id="cta-final">
    <h2>Spreman Za Početak?</h2>
    <p>Pridruži nam se i otkrij kako možemo pomoći vašem poslovanju.</p>
    <a href="contact.html" class="btn btn--primary btn--lg">Kontaktiraj Nas Sada</a>
  </section>

  <!-- Footer (Reusable) -->
  <footer class="footer" id="footer">
    <!-- Footer will be injected by footer.js -->
  </footer>

  <!-- Scripts -->
  <script src="src/js/main.js"></script>
  <script src="src/js/components/header.js"></script>
  <script src="src/js/components/footer.js"></script>
  <script src="src/js/components/carousel.js"></script>
</body>
</html>
```

---

### 4. CSS Architecture

**APPROACH: CSS Custom Properties (Variables) + BEM Naming**

```css
/* src/css/colors.css */
:root {
  /* Primary Colors */
  --color-primary: #0066CC;
  --color-primary-dark: #0052A3;
  --color-primary-light: #E6F0FF;
  
  /* Secondary Colors */
  --color-secondary: #00A0FF;
  --color-accent: #FF6B35;
  
  /* Neutrals */
  --color-dark: #1A1A1A;
  --color-gray-dark: #333333;
  --color-gray-medium: #666666;
  --color-gray-light: #F5F5F5;
  --color-white: #FFFFFF;
  
  /* Status Colors */
  --color-success: #28A745;
  --color-warning: #FFC107;
  --color-error: #DC3545;
}

/* src/css/main.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: 'Open Sans', sans-serif;
  color: var(--color-dark);
  line-height: 1.6;
  background-color: var(--color-white);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

h1 { font-size: 48px; line-height: 1.2; }
h2 { font-size: 36px; line-height: 1.3; }
h3 { font-size: 24px; line-height: 1.4; }

/* Responsive Grid */
.grid {
  display: grid;
  gap: 2rem;
  margin: 2rem 0;
}

.grid--3-cols {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

@media (max-width: 768px) {
  .grid--3-cols {
    grid-template-columns: 1fr;
  }
}

/* Components */
.card {
  padding: 2rem;
  border-radius: 8px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-light);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

/* Button Styles */
.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn--primary:hover {
  background-color: var(--color-primary-dark);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
}

.btn--secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn--secondary:hover {
  background-color: var(--color-primary-light);
}

.btn--lg {
  padding: 16px 32px;
  font-size: 18px;
}

/* Responsive */
@media (max-width: 768px) {
  h1 { font-size: 32px; }
  h2 { font-size: 24px; }
  h3 { font-size: 18px; }
}
```

---

### 5. JavaScript Modules

**src/js/components/header.js:**

```javascript
class Header {
  constructor() {
    this.header = document.getElementById('header');
    this.menuToggle = null;
    this.init();
  }

  init() {
    this.render();
    this.attachEvents();
    this.handleResize();
  }

  render() {
    this.header.innerHTML = `
      <div class="header__container">
        <a href="index.html" class="logo">
          <img src="/public/images/logo.svg" alt="AG-EKSPERT Logo">
        </a>
        
        <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="nav" id="nav">
          <a href="index.html" class="nav__link">Početna</a>
          <a href="about.html" class="nav__link">O Nama</a>
          <a href="services.html" class="nav__link">Usluge</a>
          <a href="why-choose-us.html" class="nav__link">Zašto Nas</a>
          <a href="faq.html" class="nav__link">FAQ</a>
          <a href="contact.html" class="nav__link btn btn--primary">Kontakt</a>
        </nav>
      </div>
    `;

    this.menuToggle = document.getElementById('menu-toggle');
    this.nav = document.getElementById('nav');
  }

  attachEvents() {
    this.menuToggle.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.nav.classList.toggle('nav--open');
    this.menuToggle.classList.toggle('menu-toggle--open');
  }

  handleResize() {
    if (window.innerWidth > 768) {
      this.nav.classList.remove('nav--open');
      this.menuToggle.classList.remove('menu-toggle--open');
    }
  }
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  new Header();
});
```

**src/js/components/form.js:**

```javascript
class ContactForm {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.submitBtn = this.form?.querySelector('[type="submit"]');
    this.init();
  }

  init() {
    if (!this.form) return;
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  async handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);

    // Validation
    if (!this.validate(data)) {
      this.showError('Molimo ispunite sva polja ispravno.');
      return;
    }

    try {
      this.submitBtn.disabled = true;
      this.submitBtn.textContent = 'Slanje...';

      // Send to backend (Netlify, Vercel, or custom API)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        this.showSuccess('Hvala! Kontaktirat ćemo vas brže što prije.');
        this.form.reset();
      } else {
        this.showError('Došlo je do greške. Pokušajte ponovno.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      this.showError('Greška pri slanju. Pokušajte ponovno.');
    } finally {
      this.submitBtn.disabled = false;
      this.submitBtn.textContent = 'Pošalji Poruku';
    }
  }

  validate(data) {
    return (
      data.name && data.name.trim().length > 0 &&
      data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
      data.message && data.message.trim().length > 0
    );
  }

  showSuccess(message) {
    this.showMessage(message, 'success');
  }

  showError(message) {
    this.showMessage(message, 'error');
  }

  showMessage(message, type) {
    const msgEl = document.createElement('div');
    msgEl.className = `form-message form-message--${type}`;
    msgEl.textContent = message;
    this.form.appendChild(msgEl);

    setTimeout(() => msgEl.remove(), 5000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ContactForm();
});
```

**src/js/components/search.js (Local Search):**

```javascript
class LocalSearch {
  constructor() {
    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');
    this.index = [];
    this.init();
  }

  async init() {
    // Load searchable content index
    try {
      const response = await fetch('/src/js/data/search-index.json');
      this.index = await response.json();
      this.attachEvents();
    } catch (error) {
      console.error('Failed to load search index:', error);
    }
  }

  attachEvents() {
    this.searchInput.addEventListener('input', (e) => this.search(e.target.value));
  }

  search(query) {
    if (!query.trim()) {
      this.searchResults.innerHTML = '';
      return;
    }

    const results = this.index.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase())
    );

    this.displayResults(results);
  }

  displayResults(results) {
    if (results.length === 0) {
      this.searchResults.innerHTML = '<p>Nema rezultata.</p>';
      return;
    }

    this.searchResults.innerHTML = results
      .map(item => `
        <a href="${item.url}" class="search-result">
          <h4>${item.title}</h4>
          <p>${item.content.substring(0, 100)}...</p>
        </a>
      `)
      .join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new LocalSearch();
});
```

---

### 6. Performance Optimization

**IMPLEMENTATION CHECKLIST:**

- [ ] Image Optimization
  - Compress with TinyPNG, ImageOptim
  - Use WebP format with PNG fallback
  - Lazy load images (loading="lazy")
  - Responsive images (srcset)

- [ ] CSS/JS Optimization
  - Minify CSS (build script)
  - Minify JavaScript (build script)
  - Remove unused CSS
  - Defer non-critical JS

- [ ] Caching Strategy
  - Cache busting with file hashes
  - Browser caching (Cache-Control headers)
  - Service Worker for offline capability

- [ ] Code Splitting
  - Load only necessary JS per page
  - Lazy load components

---

### 7. SEO & Accessibility

**SEO CHECKLIST:**

- [ ] Meta tags (title, description) on every page
- [ ] Structured data (Schema.org JSON-LD)
- [ ] Open Graph tags for social sharing
- [ ] XML sitemap (auto-generated)
- [ ] robots.txt
- [ ] Canonical tags
- [ ] Readable URLs (no query params)
- [ ] 404 page
- [ ] SSL certificate (HTTPS)

**ACCESSIBILITY CHECKLIST:**

- [ ] Semantic HTML (header, nav, main, article, footer)
- [ ] ARIA labels for icons/buttons
- [ ] Color contrast ratio >= 4.5:1
- [ ] Keyboard navigation (tabindex)
- [ ] Alt text for images
- [ ] Form labels properly associated
- [ ] Skip-to-content link

---

### 8. Backend & Form Submission

**SERVERLESS OPTION (Recommended for simplicity):**

**Netlify Forms:**
```html
<form name="contact" method="POST" netlify>
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

**Vercel: Use API Routes (Next.js) or external service (Formspree, Getform)**

---

### 9. Development Environment Setup

**package.json:**

```json
{
  "name": "ag-ekspert-website",
  "version": "1.0.0",
  "description": "AG-EKSPERT Web Platform",
  "main": "index.html",
  "scripts": {
    "dev": "live-server src/",
    "build": "node scripts/build.js",
    "optimize-images": "node scripts/optimize-images.js",
    "test": "jest",
    "lighthouse": "lighthouse index.html --view"
  },
  "dependencies": {},
  "devDependencies": {
    "live-server": "^1.2.2",
    "jest": "^29.0.0",
    "lighthouse": "^9.0.0",
    "cssnano": "^5.0.0"
  }
}
```

**Installation:**
```bash
npm install
npm run dev   # Start development server
npm run build # Minify and optimize
npm test      # Run tests
```

---

### 10. Deployment Strategy

**RECOMMENDED: Netlify + GitHub Integration**

1. Push code to GitHub
2. Netlify detects push
3. Netlify runs build command
4. Site deployed automatically
5. Deploy preview for PRs

**Configuration (netlify.toml):**

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=3600"
```

---

## Output Format

Kreiraj KOMPLETNU TEHNIČKU SPECIFIKACIJU sa:

```markdown
# AG-EKSPERT Web Development Technical Specifications

## 1. Technology Stack Decision
[Preporuka sa rationale]

## 2. Project Structure
[Detaljna mapa direktorija]

## 3. Page Specifications
[HTML za sve stranice]

## 4. CSS Architecture
[Complete CSS examples i guidelines]

## 5. JavaScript Modules
[Sve JS komponente sa kodom]

## 6. Performance Optimization Plan
[Detaljne specifikacije]

## 7. SEO & Accessibility Checklist
[Kompletni checklist]

## 8. Backend & Form Handling
[Serverless ili backend setup]

## 9. Development Environment Setup
[Package.json, installation, dev commands]

## 10. Deployment Strategy
[Netlify/Vercel setup sa konfiguracijom]

## 11. Testing Strategy
[Unit tests, integration tests, E2E]

## 12. Maintenance & Monitoring
[How to maintain, monitor, update]
```

---

## Next Step

Nakon što završiš sve specifikacije:

**Report to Lead (User):**
```
All technical specifications complete and ready for development team.
Complete documentation saved in:
- /AGENT_PHASE_1_RESEARCHER.md (Research findings)
- /AGENT_PHASE_2_ARCHITECT.md (Architecture design)
- /AGENT_PHASE_3_CODER.md (Technical specifications)

Ready to handoff to development team.
```

---

## Important Notes

- Budi IMPLEMENTATORU-PRIKLADAN - code trebat će biti ready-to-copy
- Sve primjeri trebaju biti production-ready
- Specificiraj sve verzije (Node, packages, itd.)
- Include error handling u svim kodovima
- Razmisli o edge cases
- Preporuke trebaju biti konkretne sa obrazloženjem

**Start Now - Wait for ARCHITECT SendMessage.**
