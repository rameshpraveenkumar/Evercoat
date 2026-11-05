# EVERCOAT — Professional Painting & Home Renovation Contractor Website

> **Official Tagline:** *"Every Wall. A New Beginning."*  
> **Business Category:** Professional Residential Painting & Home Renovation Contractor Services  
> **Brand Identity:** Forest Green (`#29483B`), Deep Charcoal (`#242A27`), Warm Ivory (`#F7F5EF`), Muted Terracotta (`#C77D5A`), Sage Green (`#A7B7A5`)  
> **Typography:** Playfair Display (Headings) & Inter (Body)

---

## 1. Project Overview

**EVERCOAT** is a modern, responsive, multi-page website built for a premier residential painting and renovation contractor business in Austin, Texas. It showcases residential interior painting, weather-shield exterior coatings, artisan texture finishes (Venetian plaster/microcement), and whole-home renovations.

The website has undergone a complete **UI/UX Design Audit & Anti-AI Visual Refinement** to eliminate generic AI-generated design artifacts (excessive floating blur blobs, pulsing dots, repetitive 6-box SaaS grids, fake unverifiable statistics, and duplicate components), elevating the brand into an authentic, intentional, and architecturally refined contractor studio.

The website contains **nine complete, interconnected pages**:
1. **Home 1 (`index.html`):** High-impact visual showcase with interactive Before & After transformation slider in the hero, four-stage architectural surface restoration protocol ("The Anatomy of a Flawless Finish"), editorial 2-column craftsmanship commitments with master tradesperson photography, technical execution benchmarks (<12% moisture, 99% HEPA filtration, <5 g/L VOCs), single-card testimonial carousel, and featured portfolio.
2. **Home 2 (`home-2.html`):** Architectural editorial layout featuring a full-width background photograph hero with balanced natural lighting, four core disciplines lookbook with refined 1px borders, master application artisan showcase, asymmetrical photography grids, a four-step horizontal process timeline, and sophisticated typography.
3. **About Us (`about.html`):** Comprehensive company introduction presenting EVERCOAT's purpose, full-width photographic hero background, breadcrumbs (`Home / About`), two-column story, Mission & Vision cards, Core Values, the **redesigned Our Team section** (4 named specialist profiles in a 2-column layout with individual consultation CTAs and representative demo disclaimer), "The Difference Is in the Details" feature grid, 4-step work process timeline, and closing call to action.
4. **Services (`services.html`):** Full-width photographic hero background, breadcrumbs (`Home / Services`), detailed breakdown of interior painting, exterior coatings, texture finishes, and renovations with contractor comparison matrix and closing CTA.
5. **Projects Gallery (`projects.html`):** Full-width photographic hero background, breadcrumbs (`Home / Projects`), 12 curated project cards in a responsive 3-column grid (including *Modern Exterior Makeover* & *Contemporary Living Space*), filter pills with live counts, fullscreen interactive lightbox modal, authenticity inspiration badges, individual project CTAs, and closing CTA.
6. **Pricing & Estimates (`pricing.html`):** Full-width photographic hero background, breadcrumbs (`Home / Pricing`), transparent pricing tiers in USD rates ($2.50/sq.ft interior, $3.25/sq.ft exterior, $12.00/sq.ft artisan textures), paintbrush architectural icons (zero `roller-coaster` icons), detailed FAQs, and closing CTA.
7. **Contact Us (`contact.html`):** Full-width photographic hero background, breadcrumbs (`Home / Contact`), Austin, Texas studio details, interactive quote request form with smart project & team referral preselection, dismissible referral banner, and embedded responsive Google Maps "Find Us" section for Austin, Texas.
8. **Client & Staff Sign In (`login.html`):** Split-screen architectural authentication page with standardized brand logo, clean empty inputs, password eye toggle, simulated password reset notice, social sign-in demo feedback, and direct link to account creation.
9. **Client & Homeowner Registration (`register.html`):** Split-screen registration page matching the login design, featuring full name, email, standard 10-digit US phone validation (+1), password eye toggles, live password strength guidance, terms & privacy acknowledgement, and honest demo simulation notice.

---

## 2. Technologies Used

- **HTML5:** Semantic markup, accessible labels, ARIA attributes.
- **Tailwind CSS:** Modern utility-first styling with custom extended design tokens via Tailwind CDN.
- **Vanilla JavaScript:** Fast, modular client-side interactivity (`theme.js`, `interactions.js`, `main.js`) with zero external frameworks.
- **Lucide Icons:** Clean SVG icons with auto-replacement and RTL support.
- **Google Fonts:** Playfair Display (Serif Headings) & Inter (Body Typography).
- **Curated Local Photography:** High-resolution photographs organized locally with full licensing documentation in `image-sources.txt`.

---

## 3. Folder Structure

```
painting-renovation/
├── index.html                      # Home Page 1 (Visual Hero, Before/After Slider, Testimonials)
├── home-2.html                     # Home Page 2 (Full-Width Hero, Editorial & Architectural Layout)
├── about.html                      # About Page (Mission, Vision, Values, Team, Process)
├── services.html                   # Comprehensive Services & Contractor Comparison
├── projects.html                   # 12-Card Filterable Project Gallery with Lightbox Modal
├── pricing.html                    # Pricing Tiers (USD rates), Inspection Explainer & FAQs
├── contact.html                    # Business Details, Embedded Map, Referral Banner & Quote Form
├── login.html                      # Split-Screen Demo Sign In Portal
├── register.html                   # Split-Screen Demo Registration Portal
├── image-sources.txt               # Full documentation of photo IDs, Unsplash URLs, and licenses
├── README.md                       # Comprehensive Documentation
├── final_qa_report.json            # Automated CDP verification test report
├── screenshots/                    # Verified QA Screenshots
│   ├── projects-desktop.png        # 1440px desktop view of 12 project cards & filters
│   ├── projects-mobile.png         # 375px mobile view of responsive project gallery
│   ├── login-desktop.png           # 1440px split-screen sign in layout with architectural visual
│   ├── login-mobile.png            # 375px mobile sign in form and demo credentials
│   ├── register-desktop.png        # 1440px split-screen registration page with strength meter
│   ├── register-mobile.png         # 375px mobile registration form
│   ├── home-1-final-desktop.png    # 1440px final Home 1 page with slider & testimonials
│   └── home-2-final-desktop.png    # 1440px final Home 2 page with full-width hero
│
└── assets/
    ├── css/
    │   └── style.css               # Custom animations, slider styling, RTL rules & light/dark tokens
    │
    ├── js/
    │   ├── theme.js                # Instant Light/Dark & RTL/LTR toggle with LocalStorage persistence
    │   ├── interactions.js         # Slider, Lightbox, Counters, FAQ, Quote Form, Referral, Auth
    │   └── main.js                 # Lucide icon coordinator and visual QA testing hooks
    │
    └── images/
        ├── hero/                   # hero-interior.jpg, hero-home-2.jpg, hero-editorial-*.jpg
        ├── before-after/           # before-room.jpg, after-room.jpg
        ├── services/               # interior-painting.jpg, exterior-painting.jpg, texture-finish.jpg, minor-renovation.jpg
        ├── projects/               # project-1 through project-12 (complete 12-item high-res gallery)
        ├── about/                  # about-renovation.jpg, painters-work.jpg
        │   └── team/               # team-member-1.jpg through team-member-4.jpg
        └── login/                  # login-home.jpg, register-home.jpg
```

---

## 4. Header & Navigation Architecture

### Standardized Navigation Across All 9 Pages
- **Home Dropdown:** Clean, single top-level navigation item labeled `Home` with downward chevron. The dropdown displays:
  - `Home 1` &rarr; `index.html`
  - `Home 2` &rarr; `home-2.html`
  - Closes automatically on outside click or `Escape` key press.
- **Direction Toggle (LTR/RTL):** Uses a sleek bidirectional icon (`arrow-left-right`) in a `w-9 h-9 sm:w-10 sm:h-10 rounded-xl` border matching the theme toggle. Dynamically updates `title` and `aria-label` showing the current direction.
- **Theme Toggle (Light/Dark):** `w-9 h-9 sm:w-10 sm:h-10 rounded-xl` border button switching between Warm Ivory (Light) and Deep Charcoal (Dark) themes with smooth SVG icon transitions.
- **Login Button:** Standardized with a visible border (`border border-charcoal/20 dark:border-charcoal-700`) and matching `h-9 sm:h-10 rounded-xl` proportions.
- **Free Quote CTA:** Prominent Forest Green button with arrow icon, adjusting adaptively to fit cleanly across all viewport widths without clipping or horizontal overflow.
- **Mobile Menu Drawer:** Contains the expandable Home accordion, all marketing page links, an account login link, and a dedicated mobile "Get a Free Quote" button.

---

## 5. Projects Gallery Enhancement (`projects.html`)

### 12 Complete Project Showcase Cards
The gallery features a balanced 4-row by 3-column desktop grid with 12 distinct projects:
1. *Grand Living Room Makeover* (Interior)
2. *Coastal Villa Facade Weatherproofing* (Exterior)
3. *Artisan Venetian Plaster Accent Wall* (Texture Finishes)
4. *Open Concept Dining & Kitchen Refresh* (Renovations)
5. *Serene Master Bedroom Suite* (Interior)
6. *Suburban Bungalow Exterior Revamp* (Exterior)
7. *Bespoke Terracotta Texture Lounge* (Texture Finishes)
8. *Architectural Stairwell & Hallway* (Interior)
9. *Urban Penthouse Interior Makeover* (Renovations)
10. *Creative Studio & Office Refurbishment* (Renovations)
11. **`Modern Exterior Makeover`** (Exterior) &mdash; Added to complete the exterior category with durable weather-shield coating.
12. **`Contemporary Living Space`** (Renovations) &mdash; Added to complete the renovations row with refined modern living space finishes.

### Authenticity Badges & Individual Action CTAs
- **Design Inspiration Badge:** Every card features an unobtrusive, elegant badge reading `"Design Inspiration"` in the top-right overlay.
- **Individual Action CTA:** Every card includes a `"Discuss a Similar Project"` text link directing to `contact.html?project=[Project+Name]&interest=[Category]`.
- **Fullscreen Lightbox Trigger:** Every card includes an interactive preview button opening the high-resolution lightbox modal with keyboard navigation.

---

## 6. Contact Referral Integration (`contact.html`)

When visitors navigate from any project card's *"Discuss a Similar Project"* or team member's CTA:
- `initContactUrlParams()` in `interactions.js` parses the `project`, `team`, and `interest` URL parameters safely.
- A dismissible referral banner is displayed above the quote form:
  > *"You're inquiring about our project showcase: [Project Name] ([Interest])."*
- The **Service Required** dropdown automatically preselects the relevant service (e.g. `Exterior Painting`, `Interior Painting`, `Renovations`, `Multiple Services`).
- The **Project Description** textarea is prepopulated with a personalized inquiry:
  > *"Hello, I saw your '[Project Name]' showcase in the gallery and would like to discuss a similar project for my home. Please provide information on initial availability and pricing estimates."*
- The page smoothly scrolls to the form.
- The contact form verifies required fields, records the simulated enquiry in browser storage, and outputs an itemized demo confirmation with reference ID.

---

## 7. Authentication Redesign: Sign In (`login.html`) & Registration (`register.html`)

### 1. Split-Screen Client Sign In (`login.html`)
- **Left Panel:** High-resolution architectural interior photograph (`assets/images/login/login-home.jpg`), dark overlay, EVERCOAT wordmark, tagline *"Every Wall. A New Beginning."*, copy *"Your space deserves thoughtful care. Sign in to stay connected with your projects, enquiries and home transformation journey."*, and trust indicators (*Thoughtful Design*, *Quality Finishes*, *Reliable Service*).
- **Right Panel:**
  - Header: *"Welcome Back"* & *"Sign in to continue your EVERCOAT experience."*
  - Clean sign-in form with empty input fields (`name@example.com` and `••••••••` placeholders).
  - Email Address & Password input with show/hide eye toggle button.
  - Remember Me checkbox for 30-day session preference.
  - "Forgot Password?" button providing an honest prototype notice.
  - Forest Green Sign In CTA button.
  - Divider *"OR CONTINUE WITH"* and social buttons (Google, Facebook, Apple) with honest demo notices.
  - Switch link: *"Don't have an account? Create Account"* linking directly to `register.html`.

### 2. Split-Screen Client Registration (`register.html`)
- **Left Panel:** High-resolution living space visual (`assets/images/login/register-home.jpg`), dark overlay, EVERCOAT branding, and transformation guidance.
- **Right Panel:**
  - Header: *"Create Your Account"* & *"Join EVERCOAT and stay connected with your home improvement journey."*
  - Full Name input (minimum 2 characters).
  - Email Address input with format validation.
  - Mobile Number input with +1 indicator and standard US 10-digit phone validation (`^[2-9]\d{9}$`).
  - Password & Confirm Password inputs with eye toggle buttons.
  - Live Password Strength Meter with color-coded feedback (Weak / Moderate / Strong).
  - Terms of Service & Privacy Policy acknowledgement checkbox.
  - Forest Green "Create Account" CTA button.
  - Social buttons (Google, Facebook, Apple) with honest prototype feedback.
  - Switch link: *"Already have an account? Sign In"* linking directly to `login.html`.
  - Security Compliance: No plaintext passwords stored in localStorage; honest prototype feedback informs the user that account creation is simulated.

---

## 8. Authenticity & Demonstration Disclaimers Audit

- **Contact Page (`contact.html`):** Austin, Texas studio location and demo phone/email (`+1 (512) 555-0198`) are clearly identified as illustrative demonstration contractor profile details in code comments and UI notes.
- **About Page (`about.html`):** Section 5 (`#team`) includes a clear note stating that specialist profiles represent demonstration roles for contractor portfolio showcase purposes.
- **Projects Gallery (`projects.html`):** Cards are designated as `"Design Inspiration"` to maintain complete transparency.
- **Social Media Icons:** Configured in `SOCIAL_PROFILES_CONFIG` inside `interactions.js`. Without genuine configured URLs, icons render as non-clickable decorative badges; no fake social URLs are used.

---

## 9. Consolidated Quality Assurance & Screenshot Verification

### Required 8 Screenshots (`screenshots/`):
1. **`projects-desktop.png`** (2.04 MB) &mdash; Desktop 1440px view of the 12-card gallery, filter pills, and individual CTAs.
2. **`projects-mobile.png`** (1.87 MB) &mdash; Mobile 375px view of the responsive project gallery grid with zero horizontal overflow.
3. **`login-desktop.png`** (529 KB) &mdash; Desktop 1440px view of the split-screen sign in layout, architectural interior, credentials box, form, and social buttons.
4. **`login-mobile.png`** (250 KB) &mdash; Mobile 375px view of the split-screen sign in layout.
5. **`register-desktop.png`** (395 KB) &mdash; Desktop 1440px view of the registration split screen with 10-digit phone field and live password strength meter.
6. **`register-mobile.png`** (239 KB) &mdash; Mobile 375px view of the registration page.
7. **`home-1-final-desktop.png`** (1.96 MB) &mdash; Desktop 1440px full-page view of Home 1 with Before & After comparison and Testimonials carousel.
8. **`home-2-final-desktop.png`** (3.23 MB) &mdash; Desktop 1440px full-page view of Home 2 with full-width architectural background hero.

### Automated Responsiveness Audit (6 Viewports Tested):
| Page | 1920px | 1440px | 1024px | 768px | 425px | 375px | Result |
|---|---|---|---|---|---|---|---|
| `index.html` | OK | OK | OK | OK | OK | OK | **PASS** |
| `home-2.html` | OK | OK | OK | OK | OK | OK | **PASS** |
| `about.html` | OK | OK | OK | OK | OK | OK | **PASS** |
| `services.html` | OK | OK | OK | OK | OK | OK | **PASS** |
| `projects.html` | OK | OK | OK | OK | OK | OK | **PASS** |
| `pricing.html` | OK | OK | OK | OK | OK | OK | **PASS** |
| `contact.html` | OK | OK | OK | OK | OK | OK | **PASS** |
| `login.html` | OK | OK | OK | OK | OK | OK | **PASS** |
| `register.html` | OK | OK | OK | OK | OK | OK | **PASS** |

### Console Errors Audit:
- **Total captured console errors across all pages and viewports:** **0**

---

## 10. How to Run Locally

### Option A: Open directly in any browser
Double-click `index.html` (or right click -> Open With -> Chrome / Edge / Firefox).

### Option B: Local development server
```bash
cd painting-renovation
python -m http.server 8000
# Visit http://localhost:8000 in your browser
```

---

&copy; 2026 EVERCOAT Contractor Studio. Built with semantic HTML5, Tailwind CSS, and Vanilla JavaScript.
