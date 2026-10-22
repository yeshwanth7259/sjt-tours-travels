# SJT Tours & Travels Pvt. Ltd. - Multi-Page Web Portal

**Safe Journeys | Happy Destinations**  
📍 **Registered Office:** Sharanappa # 101 1st main 4th cross BGS Layout near narasappa cricle Thotadaguddadahalli Nagasandra post Bangalore 560073  
📞 **Phone / WhatsApp:** +91 99009 75920  
🌐 **Live Local URL:** http://localhost:8080/

---

## 🌟 Architecture: Dedicated Multi-Page System

The website has been architected into **10 dedicated, standalone dynamic pages**, each featuring custom hero banners, scroll reveal micro-animations, interactive filter tabs, active navigation indicators, and direct WhatsApp booking:

| Page | URL | Purpose & Features |
|---|---|---|
| **Home Portal** | [`index.html`](file:///c:/sjt%20tours%20and%20travels/index.html) | Panoramic animated hero banner, grand booking dock, alphabet-by-alphabet live location search, quick category highlights, and 3D brand logo. |
| **About Us** | [`about.html`](file:///c:/sjt%20tours%20and%20travels/about.html) | Company background, story, 4 core pillars, animated stats counters (15+ Years, 85+ Vehicles, 240+ IT Clients, 99.4% Punctuality), registered hub details. |
| **Driver Onboarding** | [`driver-onboarding.html`](file:///c:/sjt%20tours%20and%20travels/driver-onboarding.html) | Professional driver & vehicle partner onboarding portal. Direct WhatsApp document routing, client-side document previews, fleet specifications, and instant submission modal. |
| **Corporate IT Attachment** | [`corporate.html`](file:///c:/sjt%20tours%20and%20travels/corporate.html) | Dedicated employee transport portal with 6 partner logos (Accenture, IBM, Wipro, Dell, HP, Infosys), 4 mobility pillars, roster management, and corporate RFP form. |
| **Our Vehicles & Tariffs** | [`vehicles.html`](file:///c:/sjt%20tours%20and%20travels/vehicles.html) | Complete fleet showcase with interactive filter tabs (All, Tempo, Minibus, Coach, SUV, Sedan), vehicle cards with specs & per-KM prices, and master tariff matrix table. |
| **Travel Services** | [`services.html`](file:///c:/sjt%20tours%20and%20travels/services.html) | 6 specialized service verticals: Airport BLR transfers, Corporate IT attachment, Outstation group tours, Luxury wedding fleets, Sacred pilgrimages, and Hourly rentals. |
| **Destinations & Packages** | [`destinations.html`](file:///c:/sjt%20tours%20and%20travels/destinations.html) | 12 top holiday getaways from Bangalore (Coorg, Ooty, Mysore, Chikmagalur, Kodaikanal, Hampi, Tirupati, Wayanad, Gokarna, Goa, Dharmasthala, Belur) with filter tabs and WhatsApp trip planner. |
| **Photo Gallery** | [`gallery.html`](file:///c:/sjt%20tours%20and%20travels/gallery.html) | Real fleet showcase with category filter tabs, hover overlays, and an interactive fullscreen lightbox modal viewer. |
| **FAQs & Knowledge Base** | [`faq.html`](file:///c:/sjt%20tours%20and%20travels/faq.html) | 10 comprehensive questions covering zero online advance payment, per-KM billing, hill station AC performance, cancellation policy, and driver night bata. |
| **Contact Operations Hub** | [`contact.html`](file:///c:/sjt%20tours%20and%20travels/contact.html) | Prominent registered hub card (Sharanappa, # 101 1st main 4th cross BGS Layout near narasappa cricle Thotadaguddadahalli Nagasandra post Bangalore 560073), 24/7 hotline, interactive Google Map embed, and direct WhatsApp inquiry form. |

---

## 🎨 Dynamic Features & Animations

1. **Auto Navigation Highlighting:**
   `app.js` inspects `window.location.pathname` and automatically applies the `.active` indicator on the current page in both the desktop header and the mobile slide-out drawer.
2. **Scroll-Triggered Reveals:**
   Elements adorned with `.reveal` smoothly fade and slide in upon scrolling into viewport using an optimized `IntersectionObserver`.
3. **Animated Number Counters:**
   Statistics counters with `[data-target]` smoothly increment from `0` to target numbers when scrolled into view.
4. **Interactive Category Filter Tabs:**
   Zero page reload filtering across vehicles, destinations, and gallery images (`[data-category]` matching).
5. **Fullscreen Lightbox Modal:**
   Clicking any photo tile in `gallery.html` opens a responsive lightbox with photo caption and close controls.
6. **Live Alphabet Autocomplete Search:**
   On the home page, typing any character into the pickup or drop input dynamically lists matched Karnataka destinations grouped by category.
7. **Zero Online Advance Payment Workflow:**
   WhatsApp-first booking model with zero online card payments required. Trips are paid upon safe completion directly to the chauffeur or via UPI.

---

## 🚀 How to Launch Locally

### Option 1: Double-Click Launcher (Windows)
Double-click [`LAUNCH_WEBSITE.bat`](file:///c:/sjt%20tours%20and%20travels/LAUNCH_WEBSITE.bat) in the root directory.

### Option 2: Command Line
```powershell
cd "c:\sjt tours and travels"
python -m http.server 8080
```
Then visit **http://localhost:8080/** in any browser.
