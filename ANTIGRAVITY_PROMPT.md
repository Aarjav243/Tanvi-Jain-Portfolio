# ANTIGRAVITY PROMPT
## Prof. Tanvi Jain — Academic Portfolio Website
## Biomedical Engineering & Biotechnology | BML Munjal University

---

> Copy everything below the horizontal line and paste directly into Antigravity.

---

Build a complete, professional academic portfolio website for **Prof. Tanvi Jain**, a Professor of Biomedical Engineering and Biotechnology at **BML Munjal University**. The website must communicate academic authority, scientific credibility, and approachability to prospective students, research collaborators, and industry partners.

---

## DESIGN IDENTITY

**Theme:** Biomedical Engineering & Biotechnology — clean scientific precision with biological energy.

**Visual metaphors:**
- DNA double helix (subtle animated background in hero)
- Bioluminescent color palette inspired by fluorescent cell markers and deep-sea organisms
- Hexagonal molecular lattice pattern as section dividers
- ECG/heartbeat sine wave as decorative underline on section headings
- Microscopy-style blue-teal image tints on hover

---

## COLOR PALETTE

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#0A4D68` | Nav, headings, CTA background, footer |
| `--color-secondary` | `#05C3A3` | Hover states, active tags, accent lines |
| `--color-accent` | `#C94030` | Key highlights, important badges, coral CTAs |
| `--color-amber` | `#F4A83A` | Award badges, publication year chips |
| `--color-bg` | `#F5F7FA` | Page background |
| `--color-surface` | `#ECEEF2` | Card backgrounds, input fields |
| `--color-text` | `#1C2437` | All body text |
| `--color-text-muted` | `#5A6478` | Captions, metadata, labels |
| `--color-success` | `#2ECC8B` | Success states, viable/active indicators |

**Hero gradient:** `linear-gradient(135deg, #0A4D68 0%, #073D53 50%, #05C3A3 100%)`

---

## TYPOGRAPHY

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display H1 | Playfair Display | 700 | 64px desktop / 40px mobile |
| H2 Section | Playfair Display | 600 | 40px desktop / 28px mobile |
| H3 Sub | Inter | 600 | 24px |
| Body | Inter | 400 | 17px, line-height 1.75 |
| Label / UI | Inter | 500 | 13px, letter-spacing 0.08em, uppercase |
| Numbers / stats | IBM Plex Mono | 400 | 14px |
| Pull quote | Playfair Display | 400 italic | 22px |

Load from Google Fonts: `Playfair+Display:wght@400;600;700`, `Inter:wght@400;500;600`, `IBM+Plex+Mono`

---

## SITE STRUCTURE

Build all sections as a single-page layout with smooth scroll anchors and a sticky navigation bar.

---

### SECTION 1 — NAVIGATION (sticky top)

- Left: Text logo "Prof. Tanvi Jain" in Playfair Display, color `--color-primary`
- Right: Nav links — About | Research | Publications | Teaching | Lab | Awards | Contact
- On mobile: Hamburger menu → slide-in drawer from right, backdrop blur
- Active link underline: 2px solid `--color-secondary`, animated slide-in
- Background: white, `box-shadow: 0 2px 20px rgba(10,77,104,0.08)` on scroll

---

### SECTION 2 — HERO

**Layout:** Full viewport height, gradient background (`#0A4D68` → `#05C3A3`)

**Left column (60%):**
- Eyebrow label: "PROFESSOR · BIOMEDICAL ENGINEERING & BIOTECHNOLOGY" — Inter 500, white 70% opacity, letter-spacing 0.12em
- Name H1: "Prof. Tanvi Jain" — Playfair Display 700, white, 64px
- Title: "BML Munjal University" — Inter 500, white 80%, 20px
- Tagline (Playfair italic, white 90%, 22px): "Bridging molecular science and medical innovation — one breakthrough at a time."
- Two CTAs: Primary button "Explore Research" (white bg, primary text, 8px radius) | Ghost button "Get in Touch" (white border, white text)
- Bottom: Row of 4 stat badges (glassmorphism card, white 15% bg, white border)
  - "42+" Papers Published
  - "680+" Citations
  - "18" Students Supervised
  - "8" Years at BML Munjal

**Right column (40%):**
- Circular profile photo, 280px diameter, white 4px border, subtle shadow
- Floating tag chips around the photo: #BioMEMS · #TissueEngineering · #Biosensors · #GenomicDiagnostics · #Bioinformatics
  - Chips: white bg 20%, white text, backdrop-blur

**Background decoration:**
- SVG DNA double helix, white 5% opacity, slowly rotating (20s infinite), positioned right-center
- Soft radial glow at center: `radial-gradient(ellipse at 60% 50%, rgba(5,195,163,0.15) 0%, transparent 70%)`

---

### SECTION 3 — ABOUT / BIO

**Background:** `--color-bg` (white)
**Section label (eyebrow):** "ABOUT"
**H2:** "Scientist. Educator. Innovator."

**Left column (55%):**
- Research philosophy paragraph: Inter 17px, `--color-text`, max-width 600px
  > "My research sits at the intersection of molecular biology and engineering design — developing diagnostic tools, biosensors, and tissue constructs that can move from bench to bedside. At BML Munjal, I believe in training engineers who think like scientists and scientists who build like engineers."
- Expertise tags (pill chips): `#0A4D68` text, `#E8F4F8` bg
  - MEMS Fabrication | Cell Culture | PCR & qPCR | COMSOL Simulation | Bioreactor Design | Flow Cytometry | Western Blot | Nanomaterial Synthesis

**Right column (45%):**
- Vertical timeline with alternating left/right entries:
  - 2024 — Current: Professor, BML Munjal University
  - 2019 — 2024: Associate Professor (or relevant position)
  - PhD — Biomedical Engineering (institution placeholder)
  - M.Tech — Biotechnology (institution placeholder)
  - B.Tech — (institution placeholder)
- Timeline dot: `--color-secondary` filled circle
- Timeline line: 2px dashed `--color-secondary` 30% opacity

**Bottom row:** Affiliated institution logos (greyscale, hover → color): BML Munjal, add placeholder logos for collaborating institutions

---

### SECTION 4 — RESEARCH AREAS

**Background:** `--color-surface` (very light grey)
**H2:** "Research Focus"
**Subheading:** "Five converging fields that define the lab's scientific identity"

**3-column grid of Research Area Cards** (2-column on tablet, 1 on mobile):

Each card:
- Background: white
- Border-radius: 8px
- Border-top: 4px solid `--color-secondary`
- Box shadow on hover: `0 8px 32px rgba(10,77,104,0.14)`
- Transition: transform 0ms → translateY(-4px) on hover

**6 research cards — content:**

1. **BioMEMS & Microfluidics**
   - Icon: microchip/chip SVG in `--color-secondary`
   - "Fabricating micro-scale devices for diagnostics, drug delivery, and point-of-care testing using PDMS and silicon lithography."

2. **Tissue Engineering**
   - Icon: cell/scaffold SVG
   - "Designing biocompatible scaffolds and hydrogels for regenerative medicine applications in bone, cartilage, and skin repair."

3. **Biosensors & Diagnostics**
   - Icon: signal/waveform SVG
   - "Developing electrochemical and optical biosensors for rapid, label-free detection of biomarkers and pathogens."

4. **Genomic Diagnostics & Bioinformatics**
   - Icon: DNA helix SVG
   - "Leveraging PCR, sequencing, and computational tools to decode genetic information for disease profiling and precision medicine."

5. **Nanobiotechnology**
   - Icon: nano/atom SVG
   - "Engineering nanoparticles and nanostructures for targeted drug delivery, imaging contrast agents, and anti-cancer therapy."

6. **Computational Biomedical Modeling**
   - Icon: network/simulation SVG
   - "Using COMSOL and MATLAB to simulate biological systems, device performance, and fluid dynamics in physiological environments."

---

### SECTION 5 — FEATURED RESEARCH / PROJECTS

**Background:** white
**H2:** "Recent Research"
**Subheading:** "Highlighted projects from the lab"

**Horizontal scroll card row** (or 2-column grid):

Each project card:
- Top: Colored tag (journal name or project type)
- Image: lab/research photo placeholder with teal overlay
- Title: Inter 600, 18px
- Year chip: IBM Plex Mono, amber background
- Journal/Conference name: muted text
- 2-line abstract snippet
- Footer: "Read Paper →" link in `--color-primary`

**Placeholder project cards:**
1. "Electrochemical Biosensor for Rapid COVID-19 Detection" — Biosensors & Bioelectronics, 2023
2. "3D Bioprinted Cartilage Scaffold with Alginate-GelMA Hydrogel" — Biomaterials Science, 2022
3. "Microfluidic Platform for Circulating Tumor Cell Isolation" — Lab on a Chip, 2023
4. "COMSOL-Based Simulation of Blood Flow in Stenotic Arteries" — Medical Engineering & Physics, 2021

---

### SECTION 6 — PUBLICATIONS

**Background:** `--color-bg`
**H2:** "Publications"
**Subheading:** "Peer-reviewed research advancing biomedical science"

**Filter tabs** (horizontal scroll on mobile):
All Papers | Journal Articles | Conference Proceedings | Book Chapters | Patents

**Each publication row:**
- Year badge: IBM Plex Mono, amber chip
- Title: Inter 600, 16px, `--color-primary`, hover → underline
- Authors: Inter 400, muted, 14px — bold Prof. Tanvi Jain's name
- Journal: Inter 500 italic, 14px
- Right: Citation count bubble (`--color-secondary` bg) + DOI link icon

**Bottom CTA:**
- "View Full List on Google Scholar →" button (ghost style, primary color)
- "Export BibTeX" button (secondary ghost)

---

### SECTION 7 — TEACHING

**Background:** `--color-surface`
**H2:** "Teaching"
**Subheading:** "Courses designed to build the next generation of biomedical engineers"

**2-column course cards:**
Each card:
- Course code chip (amber, IBM Plex Mono)
- Course title: Inter 600, 18px
- Level tag: UG / PG
- Semester: Spring 2024
- 2-line description
- "Course Details →"

**Placeholder courses:**
- BME 301: Introduction to Biomedical Engineering (UG)
- BIOT 501: Advanced Molecular Biology Techniques (PG)
- BME 405: BioMEMS and Microfluidics (PG)
- BIOT 601: Research Methodology in Biotechnology (PG)

**Student Testimonials carousel** below courses:
- Card: quote mark, testimonial text, student name + program
- Auto-advance every 5s, manual dots

---

### SECTION 8 — LAB & COLLABORATIONS

**Background:** white
**H2:** "The Lab"
**Subheading:** "A collaborative space for bold scientific inquiry"

**Left:** Grid of lab team member cards (photo + name + role + research area tag)
**Right:** "Open Positions" card:
- Background: `--color-primary`
- White text
- "Join the Lab" heading
- 2 open positions listed
- "Apply Now →" button (white bg, primary text)

**Below:** Collaborating institutions logo strip (greyscale, hover → color, `filter: grayscale(1)` default)

---

### SECTION 9 — AWARDS & RECOGNITION

**Background:** `--color-surface`
**H2:** "Awards & Recognition"

**Timeline layout** (left-anchored vertical line):

Each entry:
- Year: IBM Plex Mono, `--color-secondary`, 600 weight
- Award name: Inter 600, 17px, `--color-text`
- Awarding body: Inter 400, muted
- Category chip: Research Grant | Fellowship | Honor | Best Paper

**Placeholder entries:**
- 2024 — Best Research Paper Award — IEEE EMBC Conference
- 2023 — DST-SERB Research Grant — ₹25 Lakhs
- 2022 — Young Investigator Award — Indian Society of Biomedical Engineering
- 2021 — Excellence in Teaching — BML Munjal University
- 2020 — ICMR Research Fellowship

---

### SECTION 10 — CONTACT

**Background:** `--color-bg`
**H2:** "Get in Touch"
**Subheading:** "For research collaboration, student inquiries, or speaking invitations"

**Left (55%) — Contact form:**
Fields: Full Name | Email | Subject (dropdown: Collaboration | Student Inquiry | Speaking | Other) | Message
Submit CTA: "Send Message" — primary color button, full width
Success state: Green confirmation with checkmark animation

**Right (45%) — Contact info:**
- Office: Room [X], Engineering Block, BML Munjal University, Gurgaon, Haryana
- Email: tanvi.jain@bml.edu.in (placeholder)
- Office Hours: Tuesday & Thursday, 2:00–4:00 PM
- Social links (icon + label):
  - Google Scholar
  - ResearchGate
  - ORCID
  - LinkedIn

**Embedded Google Map** of BML Munjal University (below the two columns, full width)

---

### SECTION 11 — FOOTER

**Background:** `#0A4D68` (dark primary)
**Text:** white

- Left: Logo "Prof. Tanvi Jain" + tagline "BML Munjal University · Biomedical Engineering"
- Center: Quick links (same as nav)
- Right: Social icons
- Bottom bar: "© 2025 Tanvi Jain · BML Munjal University | Last updated April 2025"

---

## INTERACTIONS & ANIMATIONS

1. **Hero stat counter:** Numbers count up from 0 when hero enters viewport. Duration 1.5s, ease-out.
2. **DNA helix SVG:** Slow rotation, 20s infinite linear, opacity 0.06, pointer-events none.
3. **Research cards:** `translateY(-4px)` lift + shadow increase on hover, 200ms ease.
4. **Publication rows:** Fade in from bottom, stagger 50ms between rows, trigger on scroll.
5. **Testimonial carousel:** Auto-advance 5s, fade transition between cards.
6. **Nav scroll effect:** Background blur increases and shadow appears after 50px scroll.
7. **Mobile menu:** Slide from right, 300ms ease, backdrop overlay.
8. **All scroll triggers:** Use IntersectionObserver with threshold 0.15.
9. **Prefers-reduced-motion:** Disable all transitions and animations.

---

## ACCESSIBILITY REQUIREMENTS

- All color combinations must pass WCAG 2.1 AA (≥4.5:1 contrast for text)
- All images must have descriptive alt text
- Interactive elements must be keyboard-accessible (Tab, Enter, Escape, Arrow keys)
- Navigation must work without JavaScript
- Focus indicators: 2px solid `--color-secondary`, 2px offset
- DNA animation: `aria-hidden="true"` and `prefers-reduced-motion` override
- Contact form: All inputs labeled, errors described in text, not just color
- Touch targets: minimum 44x44px on mobile

---

## RESPONSIVE BEHAVIOR

| Breakpoint | Layout Changes |
|------------|---------------|
| ≥1440px | Max-width 1280px, centered, generous whitespace |
| 1024–1439px | Full desktop layout, slightly tighter padding |
| 768–1023px | 2-column → 1-column hero, research grid 2-col |
| 480–767px | Single column, hamburger nav, stat row wraps to 2x2 |
| <480px | Full single column, condensed padding (16px sides) |

---

## TECH STACK SUGGESTION

- Framework: Vanilla HTML/CSS/JS or React (Vite)
- Styling: Tailwind CSS or CSS custom properties
- Icons: Lucide React or Phosphor Icons
- Animations: Framer Motion (React) or native CSS + IntersectionObserver
- Forms: Formspree or Netlify Forms for contact
- Deployment: Vercel or Netlify

---

## FINAL CHECKLIST FOR ANTIGRAVITY

- [ ] All 10 content sections built and populated with placeholder content
- [ ] All 9 design tokens defined as CSS custom properties
- [ ] Playfair Display + Inter + IBM Plex Mono loaded from Google Fonts
- [ ] DNA helix SVG background in hero with rotation animation
- [ ] Sticky navigation with smooth scroll
- [ ] Mobile hamburger menu
- [ ] Stat counter animation
- [ ] Publication filter tabs functional
- [ ] Testimonial carousel auto-advancing
- [ ] Contact form with all states (default, focus, error, success)
- [ ] WCAG AA contrast verified for all color combos
- [ ] All images have alt text
- [ ] prefers-reduced-motion override in CSS
- [ ] Fully responsive at all 5 breakpoints
- [ ] Google Fonts loaded with font-display: swap

---

*End of prompt.*
