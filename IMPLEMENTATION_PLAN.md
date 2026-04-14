# Portfolio Website — Prof. Tanvi Jain
## Biomedical Engineering & Biotechnology | BML Munjal University

---

## 1. WHO IS THIS FOR

**Client:** Prof. Tanvi Jain
**Role:** Professor, Biomedical Engineering & Biotechnology, BML Munjal University
**Primary Audiences:**
- Research collaborators & funding bodies (NIH, DST, ICMR)
- Prospective PhD / M.Tech students
- Industry partners (medtech, pharma, biotech)
- Conference organizers & academic reviewers
- Peer academics & journal editors

**User Goals on the Site:**
1. Validate her research credentials and publication record
2. Understand her current research focus
3. Contact her for collaboration, speaking, or admission
4. Browse lab projects and student achievements

---

## 2. DESIGN SYSTEM — Biomedical Engineering + Biotechnology

### 2.1 Color Palette

| Role | Name | Hex | Inspiration |
|------|------|-----|-------------|
| Primary | Deep Ocean Teal | `#0A4D68` | DNA helix, scientific depth |
| Secondary | Bioluminescent Aqua | `#05C3A3` | Fluorescent cell markers, FITC dye |
| Accent | Genomic Coral | `#E85D4A` | Hemoglobin, vital life energy |
| Highlight | Lab Amber | `#F4A83A` | Cultures, golden hour microscopy |
| Background | Cryo White | `#F5F7FA` | Clean lab bench, sterile precision |
| Surface | Slide Glass | `#ECEEF2` | Glass microscope slide texture |
| Text Primary | Dark Graphite | `#1C2437` | Scientific publishing standard |
| Text Secondary | Medium Slate | `#5A6478` | Captions, metadata, labels |
| Success | Culture Green | `#2ECC8B` | Viable cells, growth indicators |

**Gradient Suggestion:** `linear-gradient(135deg, #0A4D68 0%, #05C3A3 100%)` — Hero section background, evokes deep-sea bioluminescence and scientific depth.

### 2.2 Typography

| Role | Font | Weight | Size (desktop) | Notes |
|------|------|--------|----------------|-------|
| Display / H1 | **Playfair Display** | 700 Bold | 56–72px | Serif authority, academic gravitas |
| H2 Section titles | **Playfair Display** | 600 SemiBold | 36–44px | Consistent with H1 family |
| H3 Subsections | **Inter** | 600 SemiBold | 24–28px | Sans-serif clarity |
| Body text | **Inter** | 400 Regular | 16–18px | Max readability, WCAG AA |
| Labels / UI | **Inter** | 500 Medium | 13–14px | Caps tracking 0.08em |
| Data / Stats | **IBM Plex Mono** | 400 Regular | 14–16px | Publication years, citation counts, numbers |
| Pull quotes | **Playfair Display** | 400 Italic | 22–26px | Research quote highlights |

**Line Height:** Body = 1.7 | Headings = 1.2
**Paragraph Max Width:** 680px (optimal reading width)

### 2.3 Spacing Scale (8px grid)

```
4px  — micro gap (icon to label)
8px  — xs (within component)
16px — sm (component padding)
24px — md (between related elements)
32px — lg (section inner spacing)
48px — xl (between subsections)
64px — 2xl (between major sections)
96px — 3xl (section padding top/bottom)
```

### 2.4 Border & Shape

- **Border Radius:** 4px (cards) | 8px (buttons) | 24px (pills/tags) | 50% (avatars)
- **Border:** 1px solid `#D4D8E2` for cards and dividers
- **Shadows:**
  - Card: `0 2px 12px rgba(10,77,104,0.08)`
  - Hover: `0 8px 32px rgba(10,77,104,0.16)`
  - Hero overlay: `0 20px 60px rgba(10,77,104,0.30)`

### 2.5 Visual Motifs (Biomedical Theme)

- **DNA Double Helix** — Subtle SVG animation in hero background, low opacity 0.06
- **Hexagonal grid** — Molecular lattice pattern as section divider texture
- **Dot matrix** — Used as background for research cards (protein/cell dot assay inspiration)
- **Sine wave line** — Heartbeat / ECG line as a decorative underline for section headings
- **Circular progress rings** — For research impact stats (inspired by cell viability assays)
- **Microscopy-style image overlays** — Slight blue-teal tint on hover for profile/lab images

---

## 3. PAGE ARCHITECTURE

```
┌─────────────────────────────────────┐
│ NAVIGATION (sticky)                 │
│ Logo | About | Research | Pubs |    │
│ Teaching | Lab | Awards | Contact   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ HERO                                │
│ Full-width | DNA gradient bg        │
│ Name (H1) + Title + Tagline         │
│ Profile photo (circular, lab bg)    │
│ CTA: View Research | Get in Touch   │
│ Floating stats: Papers | Citations  │
│             Students | Years        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ ABOUT / BIO                         │
│ Left: Research philosophy (text)    │
│ Right: Timeline (education/career)  │
│ Bottom: Institution logos           │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ RESEARCH AREAS                      │
│ 3-column card grid                  │
│ Each: Icon + Area name + 2-line desc│
│ Tags: #BioMEMS #TissueEngineering   │
│       #BioSensors #GenomicDiagnostics│
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ FEATURED RESEARCH / PROJECTS        │
│ Horizontal scrollable cards         │
│ Each: Image | Title | Journal |     │
│       Year | DOI link | Abstract    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ PUBLICATIONS                        │
│ Filterable list (All | Journal |    │
│ Conference | Book Chapter | Patent) │
│ Citation count badge per paper      │
│ Export BibTeX button                │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ TEACHING                            │
│ Course cards: BME301, BIOT501 etc.  │
│ Student testimonials carousel       │
│ Office hours & contact info         │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ LAB / COLLABORATIONS                │
│ Lab team photos grid                │
│ Collaborating institutions logos    │
│ Open positions CTA                  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ AWARDS & RECOGNITION                │
│ Timeline layout (newest first)      │
│ Grants | Fellowships | Honors       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ CONTACT                             │
│ Split: Form left | Info right       │
│ Office address (BML Munjal)         │
│ Google Scholar | ResearchGate links │
│ Email, LinkedIn                     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ FOOTER                              │
│ Copyright | BML Munjal logo         │
│ Last updated                        │
└─────────────────────────────────────┘
```

---

## 4. SKILLS APPLICATION MAP

### Skill 1: `/user-research`
**When to run:** Before design starts
**What it does:** Define Tanvi's audience personas
**Output:**
- Persona 1: PhD applicant (22–27 yrs, IIT/NIT grad, wants supervised research)
- Persona 2: Industry collaborator (R&D lead, medtech startup, wants expertise validation)
- Persona 3: Conference organizer (needs speaker bio, H-index, research scope)
- Persona 4: Peer reviewer (wants publication list, citation impact)
**Use this for:** Prioritizing sections, CTA wording, content depth

---

### Skill 2: `/research-synthesis`
**When to run:** After gathering Tanvi's CV, papers, bio
**What it does:** Distill raw CV data into website-ready narrative
**Input:** CV, list of publications, research statement
**Output:**
- 3–5 core research themes (condensed from publications)
- Key impact numbers (papers, citations, students, grants)
- 2-line research philosophy statement for Hero tagline
- Ordered recommendation: what content to lead with

---

### Skill 3: `/design-system`
**When to run:** After color/font decisions above are locked
**Mode:** `extend` — creating from scratch for this domain
**Output to generate:**
```
/design-system extend BiomedPortfolio
```
- Design token definitions (exact hex, font size, spacing values)
- Component specs: ResearchCard, PublicationEntry, StatBadge, TimelineItem
- Pattern specs: FilterablePublicationList, HeroWithStats, ResearchAreaGrid

---

### Skill 4: `/design-critique`
**When to run:** After first Antigravity draft is generated
**What to critique:**
- Hero: Does the DNA gradient overpower the text?
- Research cards: Is the hierarchy — title > journal > year — clear?
- Publications: Is the filter UX intuitive for non-tech academic visitors?
- Mobile: Does the professor's photo crop well on narrow screens?
**Severity levels expected:** Mostly Minor–Moderate at first pass

---

### Skill 5: `/accessibility-review`
**When to run:** After design is finalized, before handoff
**Critical checks for this site:**
- Teal `#05C3A3` on white — verify contrast ratio (must be ≥ 4.5:1)
- Deep Ocean Teal `#0A4D68` on Cryo White — should pass easily
- Genomic Coral `#E85D4A` on white — ≥ 4.5:1 required
- Publication filter buttons — keyboard navigable?
- Research area icons — all must have alt text
- DNA animation — must have `prefers-reduced-motion` CSS override
**Expected findings:** Coral accent may need darkening to #C94030 for AA compliance

---

### Skill 6: `/design-handoff`
**When to run:** When design is approved, before any dev build
**Key sections to spec:**
- Hero with floating stats panel (absolute positioning, responsive breakpoints)
- Publication filter (state: default | active | hover | loading)
- Research card hover state (shadow lift + teal border accent)
- Mobile nav (hamburger → slide-in drawer, z-index, backdrop)
- Contact form (all input states: default, focus, error, success)
**Token table to include:** All 9 colors + typography scale + spacing scale

---

### Bonus: `/ux-copy`
**When to run:** Parallel to design, for every text element
**Priority copy to generate:**
1. Hero tagline: 10–15 words, conveys research impact
2. Research area card descriptions: 25–30 words each
3. Publications section header: "Where curiosity becomes contribution"
4. Open positions CTA: compelling for PhD applicants
5. Contact section headline: warm but professional
6. Empty state for publications filter: "No results — try a different filter"
7. Lab page join CTA: "Shape the future of medicine"

---

## 5. RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Desktop XL | ≥1440px | Max-width container 1280px centered |
| Desktop | ≥1024px | Default 3-column layouts |
| Tablet | 768–1023px | 2-column, hero stacked |
| Mobile L | 480–767px | 1-column, nav becomes hamburger |
| Mobile S | <480px | Condensed stats, single column throughout |

---

## 6. ANIMATIONS & MICRO-INTERACTIONS

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Hero DNA helix | Infinite slow rotation | 20s | linear |
| Stat counters | Count-up on scroll | 1.5s | ease-out |
| Research cards | Lift + shadow on hover | 200ms | ease |
| Publication rows | Fade-in stagger on scroll | 400ms | ease-out |
| Nav links | Underline slide-in | 150ms | ease |
| Page load | Fade-in from bottom | 600ms | ease-out |
| Mobile menu | Slide from right | 300ms | cubic-bezier(0.25,0.46,0.45,0.94) |

**Reduced Motion Override (WCAG 2.1):**
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

---

## 7. SEO & METADATA SPEC

```html
<title>Prof. Tanvi Jain | Biomedical Engineering | BML Munjal University</title>
<meta name="description" content="Professor of Biomedical Engineering & Biotechnology at BML Munjal University. Research in BioMEMS, tissue engineering, biosensors, and genomic diagnostics.">
<meta property="og:image" content="/assets/tanvi-jain-og.jpg"> <!-- 1200x630 -->
Schema: Person + ProfilePage + AcademicScholar
```

---

## 8. CONTENT CHECKLIST (to gather from client)

- [ ] Professional headshot (min 800x800px, plain/lab background)
- [ ] Short bio (150 words), long bio (400 words)
- [ ] Research statement (200 words)
- [ ] Complete publication list (BibTeX or Google Scholar export)
- [ ] Current research projects (title, description, funding source)
- [ ] Courses taught (code, title, level, semester)
- [ ] Awards & grants (name, year, awarding body)
- [ ] Lab team list (names, roles, photos optional)
- [ ] Collaborating institution logos
- [ ] Google Scholar / ResearchGate / ORCID profile links
- [ ] Office address and consultation hours

---
