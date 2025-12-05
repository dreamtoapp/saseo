
# 📄 Product Requirements Document (PRD)
## 📌 Product: Modonty – مدونتي
**Tagline:** نجاح لا وعود — _Success, Not Promises_

---

### 1. 🔍 Executive Summary
**Modonty** is a subscription-based SaaS platform that provides Arabic-first blog content to help websites, e-commerce stores, and service providers boost their organic visibility. Instead of hiring SEO specialists or content agencies, clients subscribe to Modonty and receive expertly written, optimized content posted on a high-authority blog (Modonty.com), containing backlinks to their business.

This platform is designed for stealth and scale — the term “SEO” is not publicly used in the interface. It provides transparent reporting via Meta Pixel, Google Analytics, and GTM, and includes dashboards for both clients and admins. A companion React Native mobile app is included for client tracking and updates.

---

### 2. 🧑‍💼 Target Users

#### 🎯 Primary
- Owners of Arabic e-commerce stores (on Salla, Zid, Shopify, etc.)
- SMEs with service websites (clinics, law firms, consultants)
- Marketing teams in Saudi, UAE, Egypt, etc.

#### 🎯 Secondary
- Freelance marketers and SEO resellers
- Digital agencies offering white-labeled content

---

### 3. 🚀 Goals & Success Criteria

| Goal | KPI |
|------|-----|
| Deliver content that improves visibility | ↑ Organic traffic to linked sites |
| Reduce client SEO workload | ↓ Dependency on agencies |
| Transparent client performance tracking | GTM/Pixel metrics integrated |
| Fast publishing workflows | Avg article turnaround ≤ 3 days |
| Platform stickiness | Churn rate ≤ 5% in first 3 months |

---

### 4. ⚙️ Functional Requirements

#### 4.1 🌍 Public Blog Website
- Home page with general overview and benefits
- Blog listing page with search, filters (industry, location)
- Article detail page with:
  - Hero image
  - Optimized meta tags
  - Embedded client URL as backlink
  - Client’s GTM or Meta Pixel snippet if available
- Multi-language support: Arabic (default), English fallback

#### 4.2 🧑‍💻 Client Dashboard
- Authentication via NextAuth (email, Google, phone optional)
- Sections:
  - My Articles (list with publish date, link preview, status)
  - Performance Reports (clicks, visits, traffic sources)
  - Submit a Request (form to send product/service info)
  - Profile & Subscription (billing, GTM/Pixel ID inputs)
- Notifications: New article published, report available

#### 4.3 🛠️ Admin Dashboard
- Admin Auth (separate protected route)
- Sections:
  - Clients (list, details, subscription, GTM/pixel code)
  - Article Pipeline:
    - To write → In review → Published
  - Writers & Assignments
  - Reports Generator (PDF & dashboard)
- Moderate article previews before publishing

#### 4.4 📱 Mobile App (React Native)
- Login + home screen (basic metrics)
- New article alert (push notification)
- Traffic chart (basic analytics view)
- Submit a request (simple form)

---

### 5. 🧱 Architecture & Stack

| Layer | Stack |
|-------|-------|
| Frontend | Next.js 15 App Router, Tailwind CSS, shadcn/ui |
| Backend | Node.js, tRPC |
| Forms & Validation | react-hook-form + Zod |
| ORM & DB | Prisma + MongoDB |
| Auth | NextAuth |
| Analytics | Google Tag Manager, GA4, Meta Pixel |
| Mobile | React Native |
| Localization | next-intl (Arabic/English) |

---

### 6. 🧩 Key Models (Database)
- `User`: name, email, role, stripeCustomerId
- `Company`: name, domain, industry, GTM_ID, meta_pixel_id
- `Subscription`: userId, plan, status, startDate, endDate
- `Article`: title, content, status, category, clientId, publishedAt
- `Writer`: name, email, articlesAssigned[]
- `Report`: articleId, visits, ctr, clicks, createdAt

---

### 7. 🔐 Security & Privacy
- Articles are public, but GTM/Meta Pixel is client-specific
- Clients see only their own performance
- Admins can’t impersonate clients
- Data encrypted at rest via MongoDB Atlas
- Optional 2FA for client accounts

---

### 8. 📊 Analytics & Tracking
- Inject client-specific GTM container or Meta Pixel
- Integrate GA4 for dashboard metrics
- Use Resend (or similar) to send monthly performance summaries
- Admins can compare article performance across clients

---

### 9. 📅 Development Timeline (MVP)

| Week | Deliverables |
|------|--------------|
| 1–2 | Project setup, DB schema, client auth, blog layout |
| 3–4 | Client dashboard + article management |
| 5–6 | Admin dashboard + article publishing flow |
| 7 | GTM & Meta Pixel integration |
| 8 | Mobile app + push notifications |
| 9 | PDF reports + dashboards |
| 10 | Final testing, polish, soft launch |

---

### 10. 📈 Pricing Plans (Example)

| Plan | Price (SAR/month) | Features |
|------|-------------------|----------|
| Basic | 249 | 2 articles/month, pixel tracking |
| Pro | 499 | 4 articles/month, GTM + PDF report |
| Business | 999 | 8 articles/month, custom briefs, strategy call |

---

### 11. 📌 Notes & Considerations
- Use server actions where possible for performance (Next.js 15)
- Use `revalidateTag` or `unstable_cache` for blog freshness
- Avoid explicit use of “SEO” in UI copy — stealth mode
- Use Edge Functions for article delivery at scale
- Use Stripe for billing & webhook syncing
