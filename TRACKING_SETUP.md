# Facebook Pixel Tracking Setup

## 🎯 Simple & Clean Tracking Strategy

We're using a **minimal tracking approach** focused only on conversion events that matter for Facebook ad optimization.

---

## 📊 Events Being Tracked

### 1. **PageView** (Automatic)
- **When:** User lands on bridalalterations.london
- **Purpose:** Track all visitors from ads
- **Setup:** Automatic with pixel base code

### 2. **Lead** (Custom)
- **When:** User completes Step 1 of booking form (enters name and clicks "Next")
- **Purpose:** Signal to Facebook that user is engaged and worth optimizing for
- **Setup:** Already implemented in script.js
- **Code:**
```javascript
trackFBEvent('Lead', { content_name: 'Form Step 1 Complete' });
```

### 3. **CompleteRegistration** (To Be Added - GHL Integration)
- **When:** User books consultation via GHL calendar (Step 4)
- **Purpose:** Primary conversion event - optimize ads for this
- **Setup:** Needs GHL webhook or thank you page redirect
- **Priority:** HIGH - this is your main conversion goal

---

## 🔧 Setup Instructions

### Step 1: Get Your Facebook Pixel ID

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Create a new Pixel or use existing one
3. Copy your Pixel ID (looks like: 1234567890123456)

### Step 2: Add Pixel ID to Website

**File:** `index.html` (line 51 and 55)

Replace `YOUR_PIXEL_ID_HERE` with your actual Pixel ID in TWO places:

```html
fbq('init', '1234567890123456'); // Line 51
```

```html
src="https://www.facebook.com/tr?id=1234567890123456&ev=PageView&noscript=1" // Line 55
```

### Step 3: Verify Pixel is Working

1. Install [Facebook Pixel Helper Chrome Extension](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Visit bridalalterations.london
3. Check extension icon - should show green checkmark
4. Should see:
   - ✅ PageView event fired
   - ✅ Pixel ID matches yours

### Step 4: Test Lead Event

1. Go to booking form on site
2. Enter name in Step 1
3. Click "Next Step"
4. Pixel Helper should show "Lead" event fired
5. In Facebook Events Manager → Data Sources → Your Pixel → Test Events
   - Should see the Lead event appear

---

## 🎯 GHL Calendar Integration (PRIMARY CONVERSION)

### The Challenge
When user completes Step 4 (calendar booking), they're redirected to GHL's domain. We need to fire the `CompleteRegistration` event **before** they leave our site OR via a thank you page redirect.

### Option A: GHL Webhook (Recommended)
**Best for:** Server-side tracking, most reliable

1. In GHL, set up webhook for "Appointment Booked" event
2. Webhook sends to your server endpoint
3. Server fires Facebook Conversions API event

**Pros:**
- Works even with iOS tracking restrictions
- Most reliable
- Can capture additional data (email, phone)

**Cons:**
- Requires server/backend setup

### Option B: Thank You Page Redirect
**Best for:** Quick setup, no backend needed

1. In GHL calendar settings, set custom thank you page URL:
   - `https://bridalalterations.london/thank-you.html`
2. Create `thank-you.html` page with:
```html
<script>
fbq('track', 'CompleteRegistration', {
    content_name: 'Consultation Booked',
    value: 20.00, // estimated value of lead
    currency: 'GBP'
});
</script>
```

**Pros:**
- Simple, no backend needed
- Works immediately

**Cons:**
- User might close window before pixel fires
- Affected by ad blockers

### Option C: Calendar Iframe Load Detection (Fallback)
**Best for:** Backup tracking

Detect when GHL calendar iframe loads confirmation screen:
```javascript
// In script.js - monitor iframe for booking confirmation
// This is approximate but better than nothing
```

**Recommendation:** Use **Option B** (Thank You Page) to start, then upgrade to **Option A** (Webhook) when you have budget for server setup.

---

## 📁 Files Modified

### 1. `index.html`
- Added Facebook Pixel base code in `<head>` (lines 41-57)
- Fires automatic `PageView` on every page load

### 2. `script.js`
- Removed all unnecessary tracking (scroll depth, CTA clicks, FAQ clicks, field focus)
- Added `trackFBEvent()` helper function (line 264-268)
- Added `Lead` event on Step 1 completion (line 107)

### 3. `thank-you.html` (TO BE CREATED)
- Simple thank you page with `CompleteRegistration` event
- Shows confirmation message
- Fires conversion pixel

---

## ✅ Quick Checklist

Before launching ads:
- [ ] Replace `YOUR_PIXEL_ID_HERE` with actual Pixel ID (2 places in index.html)
- [ ] Test pixel with Facebook Pixel Helper extension
- [ ] Test Lead event (complete Step 1 of form)
- [ ] Create thank-you.html page
- [ ] Configure GHL to redirect to thank-you.html after booking
- [ ] Test complete booking flow end-to-end
- [ ] Verify CompleteRegistration event fires in Events Manager
- [ ] Set up Custom Conversion in Facebook for "Consultation Booked"

---

## 🎯 Facebook Ads Manager Configuration

### Step 1: Verify Events in Events Manager
1. Go to Events Manager → Your Pixel → Overview
2. Should see events coming in:
   - PageView (every visitor)
   - Lead (form Step 1 completions)
   - CompleteRegistration (bookings)

### Step 2: Create Custom Conversion
1. Events Manager → Custom Conversions → Create Custom Conversion
2. **Name:** Consultation Booked
3. **Data Source:** Your Pixel
4. **Event:** CompleteRegistration
5. **Rules:** URL contains "thank-you.html"
6. **Value:** £20 (estimated lead value)

### Step 3: Set Up Ad Campaign
1. Campaign Objective: **Conversions**
2. Conversion Event: **CompleteRegistration** (or your Custom Conversion)
3. Budget: £30-50/day to start
4. Let Facebook optimize for lowest cost per conversion

---

## 📊 What You'll See in Reporting

### Events Manager Dashboard
- **PageView:** Total site visitors from ads
- **Lead:** Users who started booking form (Step 1)
- **CompleteRegistration:** Completed bookings

### Ads Manager Reporting
- **Results:** Number of CompleteRegistration events
- **Cost per Result:** Ad spend ÷ CompleteRegistration events
- **ROAS:** Revenue from bookings ÷ Ad spend

### Key Metrics to Watch
- **PageView → Lead conversion rate:** Should be > 10%
- **Lead → CompleteRegistration rate:** Should be > 30%
- **Cost per CompleteRegistration:** Target < £20

---

## 🚫 What We're NOT Tracking (and Why)

### Removed Unnecessary Events:
- ❌ Scroll depth (25%, 50%, 75%, 100%)
  - **Why:** Doesn't impact Facebook optimization
- ❌ CTA button clicks
  - **Why:** PageView already tracks arrival
- ❌ Form field focus
  - **Why:** Micro-interactions don't matter for ads
- ❌ FAQ interactions
  - **Why:** Not a conversion signal

### Focus = Conversions Only
Facebook's algorithm needs **conversion signals** (Lead, CompleteRegistration) to optimize ad delivery. Everything else is noise.

---

## 🔒 Privacy & Compliance

### What's Being Tracked:
- Page visits (PageView)
- Form progress (Lead)
- Booking completions (CompleteRegistration)

### What's NOT Being Tracked:
- No personal data sent to Facebook via pixel
- No PII (names, emails, phone numbers)
- Only events and anonymous device IDs

### Privacy Policy:
Already included mention of:
- Third-party tracking (Facebook Pixel)
- Cookie usage
- User rights under UK GDPR
- Link in footer: privacy.html

---

## 🆘 Troubleshooting

### Pixel Not Firing
1. Check browser console for errors
2. Verify Pixel Helper extension shows green checkmark
3. Check if ad blocker is blocking pixel
4. Test in incognito mode

### Lead Event Not Showing
1. Complete Step 1 of form (enter name)
2. Click "Next Step" button
3. Check Network tab for `fbq` call
4. Verify `trackFBEvent` function exists in script.js

### CompleteRegistration Not Firing
1. Verify GHL redirects to thank-you.html
2. Check thank-you.html has pixel code
3. Test complete booking flow
4. Check Events Manager → Test Events

---

## 📞 Next Steps

1. **Get Pixel ID** from Facebook Business Manager
2. **Replace placeholder** in index.html (lines 51 & 55)
3. **Create thank-you.html** page with CompleteRegistration event
4. **Configure GHL** to redirect to thank-you.html
5. **Test everything** before launching ads
6. **Launch ads** with Conversions objective
7. **Monitor** Events Manager daily first week

---

**Setup Guide Created By:** Lead Balloon Agency + Claude Code
**Last Updated:** January 2025

