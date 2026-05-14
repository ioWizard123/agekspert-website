# AG-EKSPERT Web Architecture Design Brief

## Project Scope

**Client:** AG-EKSPERT  
**Project:** Web stranica za B2B usluge (lokalna pretraga, AI eksperziza)  
**Timeline:** Sekvencijalni dizajn → Implementacija  
**Team:** researcher → architect → coder

---

## Phase 1: RESEARCHER Agent

### Research Objectives

1. **Company Context**
   - Što je AG-EKSPERT i koja je njihova jezgra poslovanja?
   - Koja je ciljna publika (B2B, lokalna konkurencija)?
   - Što ih razlikuje od konkurencije?

2. **Competitive Analysis**
   - Analiza 3-5 competitors u lokalnom tržištu
   - Best practices iz web industrije
   - Trendovi u B2B web dizajnu

3. **Technical Requirements**
   - Lokalnu pretragu zahtjevi
   - SEO zahtjevi
   - Performance benchmarks
   - Regulatory compliance (GDPR, dostupnost)

4. **User Personas**
   - Tko koristi stranicu (B2B odlučivači)
   - User journeys
   - Pain points
   - Success metrics

### Deliverables

- Research report (Markdown)
- Competitive analysis matrix
- User persona definitions
- Technical requirements checklist
- SEO strategy outline

### Next Step

**SendMessage to 'architect':**
```
Summary: Research findings for AG-EKSPERT web design
Message: [Complete research report with all findings above]
```

---

## Phase 2: SYSTEM ARCHITECT Agent

### Design Objectives (Based on Researcher Findings)

1. **Information Architecture**
   - 7-8 stranice: Home, O nama, Usluge, Zašto nas odabrati, FAQ, Kontakt, Blog (opciono)
   - Navigacijska struktura (breadcrumbs, footer links)
   - Mobile-first responsive design
   - Site map diagram (C4 component level)

2. **Wireframe Design**
   - Homepage (hero, value props, CTA, testimonials)
   - Services page (grid, cards, detailed descriptions)
   - About page (timeline, team, mission/vision)
   - Contact page (form, map, social)
   - FAQ page (accordion, searchable)
   - Blog listing page (cards, filters)
   - Footer (consistent across all)

3. **Component Architecture**
   - Header (logo, nav, CTA button, mobile menu)
   - Hero section (image/video background, headline, subheadline, CTA)
   - Services grid (3-4 columns, cards, icons, hover effects)
   - Testimonials section (carousel, 3-5 items)
   - Contact form (fields, validation, submission states)
   - FAQ accordion (expandable, searchable)
   - Footer (links, social, copyright, newsletter)
   - Blog card (image, title, excerpt, date, author)

4. **Visual Design**
   - Color scheme (3 options):
     * Professional (blues, grays)
     * Modern (teals, purples)
     * Energetic (oranges, greens)
   - Typography:
     * Heading fonts: (suggestion: Poppins, Inter, Playfair)
     * Body fonts: (suggestion: Open Sans, Lato, Roboto)
   - Spacing system (8px grid)
   - Breakpoints: 320px, 768px, 1024px, 1440px
   - Typography scale: h1-h6, body, small, label

5. **Asset Requirements**
   - Icon set (16 icons minimum: services, features, social)
   - Image placeholders (hero, team, testimonials, services)
   - Logo variations (full, icon, dark/light modes)
   - Patterns/illustrations

6. **Interactive Elements**
   - CTAs (buttons, sizes, states)
   - Form inputs (fields, validation states, success/error)
   - Navigation (active states, hover effects)
   - Mobile menu interaction
   - Scroll animations (subtle)

### Deliverables

- Wireframe document (ASCII or Figma description)
- Color palette with hex codes
- Typography scale specification
- Component library specification
- Asset list with dimensions
- Responsive breakpoint strategy
- Interactive state specifications

### Next Step

**SendMessage to 'coder':**
```
Summary: Complete architectural design for AG-EKSPERT website
Message: [All wireframes, component specs, design system, assets list]
```

---

## Phase 3: CODER Agent

### Development Specification (Based on Architect's Design)

1. **Technology Stack Decision**
   - HTML/CSS/JavaScript vs React?
   - Decision factors:
     * Complexity (7-8 pages, not highly interactive)
     * Performance (local search, fast load times)
     * Maintenance (future updates, blog)
     * Hosting (static vs Node backend)
   - **Recommendation:** Consider both, decide on merits

2. **Project Structure**
   ```
   ag-ekspert-website/
   ├── public/
   │   ├── images/
   │   ├── icons/
   │   └── fonts/
   ├── src/
   │   ├── components/ (if React)
   │   ├── pages/
   │   ├── styles/
   │   ├── js/
   │   └── data/
   ├── tests/
   ├── config/
   └── docs/
   ```

3. **Performance Requirements**
   - Lighthouse score: 90+
   - Page load: <2s
   - Mobile-first optimization
   - Image optimization strategy
   - CSS/JS minification

4. **Local Search Integration**
   - Strategy: Client-side search (JSON index) or server-side
   - Data structure for searchable content
   - Search algorithm (fuzzy matching)
   - UI implementation

5. **Contact Form Specification**
   - Fields: name, email, subject, message
   - Validation rules
   - Backend: serverless (Netlify, Vercel) or Node
   - Email notification strategy

6. **SEO & Accessibility**
   - Meta tags (title, description, OG)
   - Schema.org structured data
   - WCAG 2.1 AA compliance
   - Robot.txt, sitemap.xml

7. **Responsive Design**
   - CSS framework or custom (Tailwind vs custom CSS)
   - Mobile menu toggle
   - Flexible grid system
   - Touch-friendly interactions

8. **Browser Support**
   - Modern browsers (Chrome, Firefox, Safari, Edge)
   - Fallbacks for older browsers

### Deliverables

- Technology stack recommendation with rationale
- Detailed project structure
- Component/page specifications (with code examples)
- CSS architecture (BEM, utility-first, etc.)
- Performance optimization checklist
- Local search implementation spec
- Contact form backend spec
- SEO checklist
- Development environment setup
- Build & deployment instructions

### Handoff to Development

Ready for implementation team with complete specifications.

---

## Coordination Flow

```
User Request
    ↓
RESEARCHER (Background)
    ├── Analyzes context
    ├── Research findings
    └── SendMessage → ARCHITECT
         ↓
    ARCHITECT (Background)
         ├── Designs structure
         ├── Creates wireframes
         ├── Component specs
         └── SendMessage → CODER
              ↓
         CODER (Background)
              ├── Tech stack decision
              ├── Development specs
              ├── Project structure
              └── Ready for development
```

---

## Success Criteria

- All 3 phases completed sequentially
- Clear handoffs between agents via SendMessage
- Design system is cohesive and documented
- Technical specifications are implementation-ready
- All stakeholder requirements addressed

---

**Created:** 2026-05-13  
**Status:** INITIATING AGENT PIPELINE
