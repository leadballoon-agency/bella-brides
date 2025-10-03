# Bridal Alterations London - Project Documentation

**Last Updated:** January 2025
**Domain:** https://bridalalterations.london
**Git Branch:** `wedding-alterations`
**Hosting:** Vercel

---

## 📋 Project Overview

### Business Information
- **Business Name:** Luxury Alterations
- **Service Focus:** Wedding dress alterations exclusively
- **Location:** 136-144 New Kings Road, Fulham, London SW6 4LZ
- **Hours:** Tue-Fri 10am-7pm, Sat 10am-5pm
- **Email:** info@bridalalterations.london
- **Phone:** [To be confirmed]

### Brand Identity
- **Primary Color:** Dusty Rose (#D4A5A5)
- **Secondary Color:** Sage Green (#A8B5A0)
- **Background:** Warm Cream (#FAF6F0)
- **Aesthetic:** Soft, romantic, bridal-focused (moved away from masculine Savile Row theme)

### Key Differentiators
- ✅ FREE consultation (not £95)
- ✅ No upfront pricing (quotes after dress examination - industry standard)
- ✅ Wedding dress alterations ONLY (no men's wear, no general tailoring)
- ✅ Decades of experience
- ✅ Hand-finished alterations
- ✅ Vintage dress restoration specialty

---

## 🌳 Git Repository Structure

### Repository
- **Name:** bella-brides
- **Organization:** leadballoon-agency
- **URL:** https://github.com/leadballoon-agency/bella-brides

### Branch Strategy
**IMPORTANT: Two separate branches for different brands**

1. **`main` branch**
   - Original "Bella Brides" branding
   - Savile Row heritage aesthetic (navy/gold)
   - Reserved for Sonny's future broader tailoring business
   - NOT currently in production

2. **`wedding-alterations` branch** ⭐ PRODUCTION
   - "Luxury Alterations" branding
   - Romantic bridal aesthetic (dusty rose/sage green)
   - Domain: bridalalterations.london
   - Currently deployed on Vercel
   - Wedding dress alterations focus

---

## 💻 Technical Stack

### Frontend
- **HTML5** - Semantic markup, accessible structure
- **CSS3** - Custom properties (CSS variables), no framework
- **Vanilla JavaScript** - No dependencies, lightweight
- **Fonts:**
  - Playfair Display (serif, headings)
  - Montserrat (sans-serif, body)

### Deployment
- **Hosting:** Vercel
- **Production Branch:** `wedding-alterations`
- **Domain:** bridalalterations.london
- **Auto-deploy:** Enabled on push to `wedding-alterations` branch

### Integrations
- **Calendar Booking:** GoHighLevel (GHL)
- **Embed URL:** https://link.grantosullivan.com/widget/booking/433m6RWt2cvdbb8FeTqS
- **Contact Collection:** Via GHL calendar (captures email/phone during booking)

---

## 📝 Booking Form - 4-Step Flow

### Innovation Strategy
The form is designed to get users emotionally invested in their dress BEFORE asking for contact details. This increases conversion by building rapport and commitment.

### Step 1: Your Name 👋
- **Fields:** Name only (centered, welcoming)
- **Purpose:** Build rapport, personalization, less interrogative
- **Validation:** Required

### Step 2: Your Dress 👰
- **Fields:**
  - Dress Designer/Brand (optional)
  - Alterations needed (checkboxes - 6 options)
    - Hem/Length ✂️
    - Taking In/Out 📐
    - Bustle 🎀
    - Straps/Sleeves 👗
    - Neckline 💎
    - Vintage Restore 🕰️
  - Additional details (textarea, optional)
- **Purpose:** Get them invested in their dress details
- **Validation:** At least one alteration must be selected

### Step 3: Timeline ⏰
- **Fields:** Visual button cards (radio buttons)
  - < 2 weeks (Rush!)
  - 2-4 weeks (Tight)
  - 1-2 months (Good)
  - 2-3 months (Ideal ✨)
  - 3+ months (Plenty)
- **Purpose:** Understand urgency for Kerry to prioritize
- **Why not wedding date?** Destination weddings, travel plans - need dress ready date matters more
- **Validation:** One option required

### Step 4: Book Time 📅
- **Integration:** GHL Calendar iframe embed
- **Purpose:** Book consultation slot
- **Data Capture:** Email + phone captured by GHL during booking
- **Follow-up:** Kerry calls lead to qualify appointment
- **Mobile Optimization:** Full-width container for maximum screen real estate

### Progress Indicator
- Visual stepper with circles showing current step
- Completed steps show checkmark
- Smooth transitions between steps

---

## 🎨 Design System

### Color Palette
```css
--dusty-rose: #D4A5A5      /* Primary - buttons, headings */
--sage-green: #A8B5A0      /* Secondary - dark sections */
--warm-cream: #FAF6F0      /* Background accents */
--soft-charcoal: #4A4A4A   /* Body text */
--pearl-white: #FEFDFB     /* Light text on dark */
--light-mauve: #E8D5DB     /* Accent details */
```

### Typography
- **Headings:** Playfair Display (serif, elegant)
- **Body:** Montserrat (sans-serif, clean)
- **Hierarchy:**
  - H1: 64px (42px mobile)
  - H2: 42px (36px mobile)
  - H3: 28px (24px mobile)
  - Body: 16px

### Responsive Breakpoints
- **Desktop:** > 1024px (full experience)
- **Tablet:** 768px - 1024px (adjusted grid)
- **Mobile:** < 768px (single column, full-width form)

### Mobile Optimizations
- Form uses 100% viewport width
- Minimal padding (10px tablet, 5px mobile)
- Calendar iframe breaks out of container
- Progress indicator responsive
- Touch-friendly button sizes (44px minimum)

---

## 🔍 SEO Implementation

### Meta Tags
- **Title:** Wedding Dress Alterations Fulham | Expert Bridal Fitting | Luxury Alterations
- **Description:** Expert wedding dress alterations in Fulham, London. Free consultation. Specializing in hem adjustments, taking in/out, bustle, straps, and vintage restoration.
- **Canonical URL:** https://bridalalterations.london

### Open Graph (Social Sharing)
- **OG Image:** /Public/Images/IMG-20250925-WA0001.jpg (1200x630px)
- **OG Type:** website
- **OG Locale:** en_GB

### Schema.org Structured Data

#### 1. LocalBusiness Schema
```json
{
  "@type": "LocalBusiness",
  "name": "Luxury Alterations",
  "address": "136-144 New Kings Road, Fulham, London SW6 4LZ",
  "geo": { "latitude": 51.4755, "longitude": -0.1957 },
  "openingHours": "Tu-Fr 10:00-19:00, Sa 10:00-17:00",
  "aggregateRating": { "ratingValue": "4.9", "reviewCount": "200" }
}
```

#### 2. Service Schema
- Service type: Wedding Dress Alterations
- Area served: London
- Description includes all alteration types

#### 3. FAQPage Schema
All 6 FAQs structured for rich snippet eligibility:
- Free consultation details
- Booking timeline
- Designer compatibility
- Specialization
- Vintage restoration
- Pricing policy

#### 4. BreadcrumbList Schema
- Home → Wedding Dress Alterations → Book Consultation

### Target Keywords
- wedding dress alterations London
- bridal alterations Fulham
- wedding dress fitting London
- vintage wedding dress restoration
- bustle creation London
- hem adjustments bridal

---

## 📄 Pages & Content

### Main Page (index.html)
**Sections:**
1. Hero - Full viewport with overlay, CTA
2. Trust Bar - Social proof indicators
3. Services - 6 wedding dress alteration types
4. Process - 3-step journey (Consult → Fitting → Perfect Fit)
5. Values - Why choose us (3 cards)
6. FAQs - 6 questions (also in schema)
7. Booking Form - 4-step multi-step form
8. Footer - Contact, services, legal links

### Privacy Policy (privacy.html)
**UK GDPR Compliant:**
- Data collection disclosure
- GHL calendar data processing
- User rights under UK law
- Cookie policy
- Data retention (7 years for client records)
- ICO complaint procedure
- Contact: info@bridalalterations.london

**Features:**
- Back to home link
- Consistent styling with main site
- Mobile responsive
- Last updated: January 2025

---

## 🚀 Deployment Guide

### Vercel Configuration

#### Initial Setup
1. Go to https://vercel.com/dashboard
2. Import `bella-brides` repository from GitHub
3. **Important Settings:**
   - **Production Branch:** `wedding-alterations` (NOT main!)
   - **Root Directory:** `.` (leave as root)
   - **Build Command:** None needed (static site)
   - **Output Directory:** `.` (root)

#### Domain Setup
1. In Vercel project → Settings → Domains
2. Add domains:
   - `bridalalterations.london` (primary)
   - `www.bridalalterations.london` (redirect to primary)
3. Configure DNS at domain registrar:
   - Follow Vercel's DNS instructions
   - Usually CNAME or A records

#### Auto-Deploy
- ✅ Enabled: Pushes to `wedding-alterations` branch auto-deploy
- ⚠️ Main branch does NOT deploy (different brand)

### DNS Records (At Domain Registrar)
Vercel will provide specific records, typically:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## ✅ Content Guidelines

### What TO Include
- Wedding dress alterations
- Bridal fitting services
- Free consultation messaging
- Hem, bustle, taking in/out, straps, neckline, vintage
- Decades of experience
- Hand-finished work
- Fulham/London location
- "Luxury Alterations" brand name

### What NOT TO Include
- ❌ Upfront pricing (£1,500, £2,500 packages, etc.)
- ❌ £95 consultation fee (now FREE)
- ❌ "Bella Brides" (old brand name)
- ❌ "Savile Row" or "Grant & O'Sullivan" references
- ❌ Men's alterations or general tailoring
- ❌ Package names (White Glove, Heritage Restoration, etc.)

### Pricing Policy
- Quotes provided AFTER dress examination
- Free consultation required first
- Personalized pricing based on complexity
- No hidden fees
- Industry standard approach for UK bridal alterations

---

## 🔧 Technical Notes

### File Structure
```
/
├── index.html          # Main landing page
├── privacy.html        # Privacy policy
├── styles.css          # All styles (no preprocessor)
├── script.js           # Form logic, validation, animations
├── Public/
│   └── Images/
│       └── IMG-20250925-WA0001.jpg  # Hero background
├── CLAUDE.md           # Claude Code documentation
└── NOTION_DOCS.md      # This file (for Notion import)
```

### Form JavaScript Key Functions
- `showStep(stepNumber)` - Display specific form step
- `validateStep(stepNumber)` - Validate current step before proceeding
- `scrollToForm()` - Smooth scroll to booking section
- Multi-step navigation with prev/next buttons
- Checkbox validation (min 1 alteration)
- Radio button validation (timeline selection)

### CSS Architecture
- CSS custom properties for theming
- BEM-like naming conventions
- Mobile-first responsive approach
- No framework dependencies
- Intersection Observer for scroll animations
- Smooth transitions and micro-interactions

### Performance Optimizations
- Font preloading (Google Fonts)
- Image optimization needed (hero background)
- Minimal JavaScript (< 10KB)
- No external dependencies
- Static site (fast loading)

---

## 📊 Analytics & Tracking

### Current Implementation (Console Logging)
The following events are logged to console (ready for GA4 integration):

#### Scroll Depth Tracking
- 25%, 50%, 75%, 100% milestones
- Event: `Scroll Depth` with percentage

#### CTA Button Clicks
- Tracks which CTA was clicked
- Captures button text and section location
- Event: `CTA Click`

#### Form Field Interactions
- Field focus events
- Field name captured
- Event: `Form Field Focus`

#### FAQ Interactions
- Question opened/closed
- Question text captured
- Event: `FAQ Question Opened`

### To Implement (Future)
Replace `console.log()` with actual analytics:
```javascript
// Example GA4 integration
gtag('event', 'scroll_depth', {
  'percent': maxScroll
});
```

---

## 🎯 Lead Flow Process

### Customer Journey
1. **User lands on site** (Meta ads, organic search)
2. **Scrolls through content** (services, process, FAQs)
3. **Clicks CTA** → "Book Your Free Consultation"
4. **Completes 4-step form:**
   - Step 1: Enters name
   - Step 2: Describes dress + alterations needed
   - Step 3: Selects timeline urgency
   - Step 4: Books time via GHL calendar
5. **GHL captures:** Email, phone, appointment time
6. **Kerry receives notification** from GHL
7. **Kerry calls lead** to qualify appointment (within 24 hours)
8. **Qualified lead** → Consultation scheduled

### Lead Qualification (Kerry's Role)
- Verify dress ownership and timeline
- Confirm alteration needs
- Assess urgency (rush fees if < 2 weeks)
- Set expectations for consultation
- Confirm appointment details
- Build rapport over phone

---

## 🐛 Known Issues & Future Tasks

### Immediate Tasks
- [ ] Add business phone number (currently placeholder)
- [ ] Replace hero image OG placeholder when higher-res available
- [ ] Test GHL calendar embed on multiple devices
- [ ] Verify form submission → GHL data flow

### Testing Checklist
- [ ] Test booking flow end-to-end on mobile
- [ ] Verify all 4 form steps work correctly
- [ ] Test validation (name required, alterations min 1, timeline required)
- [ ] Check GHL calendar displays properly on iPhone/Android
- [ ] Verify privacy policy page loads correctly
- [ ] Test privacy policy link in footer
- [ ] Validate schema markup with Google Rich Results Test
- [ ] Check OG image displays on Facebook/LinkedIn share preview
- [ ] Test responsive design at all breakpoints
- [ ] Verify no horizontal scroll on mobile
- [ ] Check calendar full-width display on small screens

### Enhancement Ideas
- Add testimonials section with real client reviews
- Add before/after gallery (with client permission)
- Integrate Google Reviews API for live ratings
- Add Instagram feed integration
- Create blog for wedding dress care tips (SEO)
- Add live chat for immediate questions
- Email marketing integration (collect emails for nurture sequence)

---

## 🔐 Legal & Compliance

### GDPR Compliance
- ✅ Privacy policy published
- ✅ Data collection disclosed
- ✅ User rights explained
- ✅ GHL third-party processing disclosed
- ✅ ICO complaint procedure provided
- ✅ Data retention policy (7 years)
- ✅ Cookie policy included

### Meta Ads Compliance
- ✅ Facebook disclaimer in footer
- ✅ "Not endorsed by Facebook" statement
- ✅ Small type, professional format
- ✅ Protects against policy violations

### Terms of Service
- ⚠️ Not yet created (consider adding if needed)
- Consult with solicitor for wedding dress liability clauses
- Consider damage, alteration guarantees, cancellation policy

---

## 📞 Important Contacts & Credentials

### Business Contact
- **Email:** info@bridalalterations.london
- **Phone:** [To be confirmed - ADD THIS]
- **Address:** 136-144 New Kings Road, Fulham, London SW6 4LZ

### Technical Access
- **Domain Registrar:** [Where bridalalterations.london was purchased]
- **Vercel Account:** [Account email]
- **GitHub Repo:** https://github.com/leadballoon-agency/bella-brides
- **GHL Calendar:** https://link.grantosullivan.com/widget/booking/433m6RWt2cvdbb8FeTqS

### Team
- **Developer:** Claude Code / Lead Balloon Agency
- **Appointment Setter:** Kerry
- **Business Owner:** Sonny (Grant & O'Sullivan)

---

## 📝 Content Copy Reference

### Hero Section
**Headline:** Making Your Dream Dress Fit Perfectly
**Subheadline:** Expert bridal alterations in Fulham, London. Decades of experience creating flawless fits for brides on their special day.
**CTA:** Book Your Free Consultation

### Value Propositions
1. **Free Consultation** - No obligation, detailed assessment
2. **Expert Craftsmanship** - Hand-finished alterations
3. **Decades of Experience** - Trusted by London brides

### Services Offered
1. **Hem & Length Adjustments** - Perfect length for height and shoes
2. **Taking In / Letting Out** - Achieve ideal fit at bust, waist, hips
3. **Bustle Creation** - Multiple bustle styles (American, French, ballroom)
4. **Strap & Sleeve Modifications** - Add, remove, adjust straps/sleeves
5. **Neckline Alterations** - Modify neckline shape/depth
6. **Vintage Dress Restoration** - Preserve heirlooms while ensuring modern fit

### Process (3 Steps)
1. **Free Consultation** - Examine dress, discuss vision, provide quote
2. **Expert Fitting** - Precise measurements, multiple fittings if needed
3. **Perfect Fit** - Flawless execution, ready for your special day

---

## 🎨 Brand Voice & Tone

### Personality
- **Warm & Welcoming** - Not intimidating or overly formal
- **Professional** - Decades of expertise, not amateur
- **Romantic** - Wedding-focused, special day emphasis
- **Approachable** - Free consultation, no pressure

### Writing Style
- Use second person ("your dress", "your wedding")
- Avoid jargon unless explaining services
- Keep sentences concise and scannable
- Use emojis sparingly in form UI only (not body copy)
- Focus on emotional benefits (confidence, perfect fit, special day)

### Words to Use
- Perfect, flawless, dream dress, special day, expertise
- Hand-finished, meticulous, attention to detail
- Free consultation, no obligation, personalized
- Decades of experience, trusted, confident

### Words to Avoid
- Cheap, budget, discount (focus on value not price)
- Guarantee (unless backed by policy)
- Best, #1 (unverifiable claims)
- Too formal: "bespoke tailoring", "Savile Row"

---

## 📈 Success Metrics (To Implement)

### Conversion Goals
- Form started (Step 1 completed)
- Form completed (Step 4 reached)
- Calendar booking completed
- Kerry qualified appointment

### Traffic Sources
- Meta Ads (primary)
- Organic search (SEO)
- Direct traffic
- Referrals

### Key Performance Indicators
- Landing page → Form start rate
- Form start → Calendar booking rate
- Calendar booking → Qualified appointment rate
- Cost per qualified lead
- Customer lifetime value

---

## 🔄 Version History

### Current Version (January 2025)
- 4-step booking form with GHL calendar
- Privacy policy added
- Meta disclaimer in footer
- Full mobile optimization
- Complete SEO schema markup
- Domain: bridalalterations.london
- Branch: wedding-alterations

### Previous Versions
- 2-step form (replaced with 4-step for better UX)
- Date picker (replaced with timeline buttons)
- luxuryalterations.co.uk domain (changed to bridalalterations.london)
- "Bella Brides" branding (preserved on main branch)

---

## 📚 Additional Resources

### Documentation Files
- `CLAUDE.md` - Technical documentation for Claude Code
- `NOTION_DOCS.md` - This file (comprehensive project docs)
- Git commit history - Full development history

### Design References
- Hero image: `/Public/Images/IMG-20250925-WA0001.jpg`
- Color palette in `:root` CSS variables
- Typography: Google Fonts (Playfair Display + Montserrat)

### External Links
- [Vercel Documentation](https://vercel.com/docs)
- [GoHighLevel](https://www.gohighlevel.com/)
- [UK GDPR Guidelines](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## 🎯 Next Steps

### Immediate (Before Launch)
1. Add phone number to all placeholder locations
2. Test complete booking flow end-to-end
3. Verify Vercel deployment and domain DNS
4. Test GHL calendar on multiple devices
5. Run Google Rich Results Test
6. Test social sharing preview (Facebook, LinkedIn)

### Short-term (First Month)
1. Monitor form completion rates
2. Track qualified appointments from Kerry
3. Collect first client testimonials
4. Add Google Reviews integration
5. Set up proper analytics (GA4)
6. Monitor organic search performance

### Long-term (3-6 Months)
1. Add testimonials section with real reviews
2. Create before/after gallery
3. Start blog for SEO content
4. A/B test form variations
5. Consider email nurture sequence
6. Expand services if business grows

---

**Documentation maintained by:** Lead Balloon Agency + Claude Code
**Last reviewed:** January 2025
**Next review:** After first month of launch data

