# Facebook Pixel Tracking Setup

## 🎯 Simple & Clean Tracking Strategy

We're using a **minimal tracking approach** focused only on conversion events that matter for Facebook ad optimization.

---

## 📊 Events Being Tracked

### 1. **PageView** (Browser Pixel - Automatic)
- **When:** User lands on bridalalterations.london
- **Purpose:** Track all visitors from ads
- **Setup:** Automatic with pixel base code
- **Status:** ✅ Active

### 2. **InitiateCheckout** (Browser Pixel - Custom)
- **When:** User completes Step 1 (enters name, clicks "Next")
- **Purpose:** Track assessment starts - early engagement signal for Facebook
- **Setup:** Client-side tracking in script.js
- **Status:** ✅ Active
- **Why:** Helps Facebook optimize for users who engage with form

### 3. **Lead** (GHL CAPI - Server-Side)
- **When:** User books consultation via GHL calendar (Step 4)
- **Purpose:** PRIMARY conversion event - actual bookings
- **Setup:** GHL Conversions API integration
- **Priority:** HIGH - optimize ads for this event
- **Status:** ⚠️ Configure in GHL Settings → Integrations → Meta CAPI
- **Data Sent:** Email, phone, name, appointment details (hashed, server-side)

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

### Step 4: Configure GHL CAPI Integration

**In GoHighLevel:**
1. Go to Settings → Integrations → Meta (Facebook) Conversions API
2. Add your Meta Pixel ID: `851810164179151`
3. Generate Access Token from Meta Business Settings
4. Map GHL fields to Meta parameters:
   - Email → em
   - Phone → ph
   - First Name → fn
   - Last Name → ln
5. Select event to fire: **Lead** (when appointment booked)
6. Save configuration

**Test:**
1. Complete full booking flow on site
2. Check GHL webhook logs for successful CAPI call
3. Verify in Meta Events Manager → Test Events
   - Should see "Lead" event with server-side source

---

## 🎯 Why GHL CAPI is Better

**Server-Side Tracking Benefits:**
- ✅ Works with iOS 14+ tracking restrictions
- ✅ Not affected by ad blockers
- ✅ More accurate data (email, phone hashing)
- ✅ No redirect needed (stays in iframe)
- ✅ Automatic - no custom code required

**Setup Location in GHL:**
Settings → Integrations → Conversions API → Meta (Facebook)

---

## 📁 Files Modified

### 1. `index.html`
- Added Meta Pixel base code in `<head>` (lines 41-57)
- Pixel ID: 851810164179151
- Fires automatic `PageView` on every page load

### 2. `script.js`
- Removed all unnecessary tracking (scroll depth, CTA clicks, FAQ clicks, field focus)
- Clean implementation - only PageView tracking
- Lead event handled by GHL CAPI (server-side)

---

## ✅ Quick Checklist

Before launching ads:
- [x] Add Pixel ID (851810164179151) to index.html
- [ ] Test pixel with Meta Pixel Helper extension
- [ ] Configure GHL CAPI integration (Settings → Integrations → Meta)
- [ ] Add Meta Access Token in GHL
- [ ] Map GHL fields to Meta parameters
- [ ] Test complete booking flow end-to-end
- [ ] Verify Lead event fires in Events Manager (server-side source)
- [ ] Set up ad campaign with Lead conversion objective

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

