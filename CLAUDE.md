# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**IMPORTANT: This repository has TWO branches with different branding:**
- `main` branch: "Bella Brides" - Savile Row heritage branding (for Sonny's future broader business)
- `wedding-alterations` branch: "Luxury Alterations" - Wedding dress alterations focus (current production)

**Current Branch: wedding-alterations**
Luxury Alterations is a static landing page for wedding dress alteration services in Fulham, London. The site focuses exclusively on bridal alterations with a soft, romantic aesthetic and no upfront pricing.

**Technology Stack:**
- Pure HTML, CSS, and vanilla JavaScript (no build tools or frameworks)
- Static site serving images from `Public/Images/`
- Client-side form handling with validation

## File Structure

```
/
├── index.html          # Main landing page with full content
├── styles.css          # All styling (CSS custom properties for theming)
├── script.js           # Vanilla JS for interactions and form handling
├── mockup.html         # Development mockup/prototype (not production)
└── Public/
    └── Images/         # Gallery images (IMG-20250925-WA0000.jpg through WA0008.jpg)
```

## Development Workflow

**No build process required** - this is a static HTML site. Simply open `index.html` in a browser to view changes.

**Local Development:**
```bash
# Option 1: Use Python's built-in server
python3 -m http.server 8000

# Option 2: Use Node's http-server (if installed)
npx http-server -p 8000

# Then visit: http://localhost:8000
```

**Testing:**
- Manually test form submission (currently logs to console)
- Verify responsive design at breakpoints: 1024px, 768px, 480px
- Check scroll animations and smooth scrolling behavior
- Test package selection buttons that populate the booking form

## Code Architecture

### HTML Structure (index.html)

The page follows a semantic single-page layout with these main sections:

1. **`<head>`** - Comprehensive SEO and social sharing setup:
   - Open Graph tags for Facebook/LinkedIn
   - Twitter Card metadata
   - JSON-LD structured data (LocalBusiness + Service schemas - **NO pricing data**)
   - Google Fonts: Playfair Display (serif) + Montserrat (sans-serif)
   - Canonical URL: https://luxuryalterations.co.uk

2. **Main Sections (in order):**
   - `.hero` - Full-screen hero with "Book Your Free Consultation" CTA
   - `.trust-bar` - Social proof (500+ brides, 20+ years, FREE consultation)
   - `#about` - Three value proposition cards (wedding-focused)
   - `#services` - Six wedding dress alteration services (hem, taking in/out, bustle, straps, neckline, vintage)
   - `#process` - Three-step simple process (Consultation → Alterations → Perfect Fit)
   - `#gallery` - 3-column responsive gallery
   - `#testimonials` - Three customer reviews
   - `#faq` - Accordion-style FAQ using `<details>`
   - `#booking` - Wedding-specific form (NO packages, NO pricing)
   - `.footer` - Four-column layout with contact info

### CSS Architecture (styles.css)

**Design System (Soft Romantic Wedding Theme):**
```css
--dusty-rose: #D4A5A5;       /* Primary brand color (buttons, headings) */
--sage-green: #A8B5A0;       /* Secondary/dark sections */
--warm-cream: #FAF6F0;       /* Background accent */
--soft-charcoal: #4A4A4A;    /* Body text */
--pearl-white: #FEFDFB;      /* Light text on dark backgrounds */
--light-mauve: #E8D5DB;      /* Accent details */
```

**Key Patterns:**
- CSS Grid for all multi-column layouts
- Mobile-first responsive breakpoints (1024px, 768px, 480px)
- Smooth transitions (0.3s ease) on interactive elements
- Fixed parallax background on hero (scroll on mobile)
- Cards use hover transforms: `translateY(-5px)` with shadow

### JavaScript Architecture (script.js)

**Core Functions:**
1. `scrollToForm()` - Smooth scroll to booking section
2. `showSuccessMessage()` - Displays temporary success notification

**Event Listeners:**
- Form submission handler (line 42-62) - validates and logs data
- Input validation with blur/focus events (line 64-79)
- Scroll depth tracking for analytics (line 148-163)
- CTA click tracking (line 166-178)
- FAQ interaction tracking (line 191-198)

**Animations:**
- Intersection Observer for scroll-triggered fade-ins (line 125-145)
- CSS keyframes injected for slide animations (line 201-225)

## Form Integration

**Current State:** Form submission is client-side only (logs to console).

**To integrate with backend:**
1. Update form handler in `script.js` (line ~20-35)
2. Replace `console.log()` with fetch/axios POST request to Calendly or booking system
3. Update endpoint URL and payload format
4. Handle loading states and error messages

**Form Fields (Wedding-Specific):**
- Full name (required)
- Email (required)
- Phone (required)
- Wedding date (required, date input)
- Dress designer/brand (optional)
- Postcode (optional)
- Alterations needed (required, textarea)
- Additional information (optional, textarea)

## SEO & Performance

**Schema Markup:**
- LocalBusiness schema with geo-coordinates, hours, ratings (NO pricing)
- Service schema describing alterations (NO pricing/packages)
- Update placeholder phone number in JSON-LD when available
- **IMPORTANT: Never add pricing to schema - against industry norms**

**Images:**
- Gallery images should be optimized (lazy loading already implemented)
- Hero background image: `Public/Images/IMG-20250925-WA0001.jpg`
- All images use descriptive alt text for wedding dresses

**Meta Tags:**
- Canonical URL: `https://luxuryalterations.co.uk`
- Business name: "Luxury Alterations"
- Focus: Wedding dress alterations, Fulham, free consultation

## Design Principles

1. **Wedding Focus** - Exclusively wedding dress alterations (no men's wear, no general tailoring)
2. **Soft Romantic Aesthetic** - Dusty rose, sage green, warm cream palette. Light, elegant, bride-focused.
3. **No Upfront Pricing** - Industry standard: quote after dress examination. Free consultation.
4. **Trust Building** - Experience, testimonials, social proof (NOT heritage or Savile Row)
5. **Local Focus** - Fulham/Kings Road location prominently featured
6. **Mobile Experience** - Fully responsive, touch-friendly interactions
7. **Ad Congruence** - Landing page messaging must match ad copy exactly

## Common Modifications

**IMPORTANT - DO NOT:**
- Add pricing anywhere on the site (packages, schema, or text)
- Reference "Bella Brides," "Savile Row," or "Grant & O'Sullivan"
- Add services beyond wedding dress alterations
- Change free consultation to paid consultation

**Change Color Scheme:**
- Modify CSS custom properties in `:root` (line 12-20 in styles.css)
- Current palette: soft romantic (dusty rose, sage green, warm cream)

**Add Gallery Images:**
- Place wedding dress images in `Public/Images/`
- Add `.gallery-item` divs with proper alt text
- Maintain 4:5 aspect ratio for consistency
- Focus: before/after alterations, wedding dresses only

**Update Services:**
- Services section uses 6 cards in two rows (line ~179-221 in index.html)
- Keep wedding-focused: hem, taking in/out, bustle, straps, neckline, vintage
- NO general tailoring or men's alterations

## Analytics Setup

The JavaScript includes placeholder analytics tracking for:
- Scroll depth milestones (25%, 50%, 75%, 100%)
- CTA button clicks with section context
- Form field interactions
- FAQ question opens

**To activate:** Replace `console.log()` calls with your analytics provider (e.g., Google Analytics, Plausible).
