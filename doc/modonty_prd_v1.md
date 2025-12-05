# 📘 Modonty – Product Requirements Document (PRD)
**Version 1.0 — Full Arabic PRD**

---

# # 1. مقدمة المشروع  
Modonty هي منصة اشتراك سنوية/شهرية لإنشاء محتوى عربي احترافي، تعتمد على مدونة مركزية قوية (Authority Blog) يتم نشر مقالات احترافية فيها، ثم تخصيص نسخة من هذه المقالات لعملاء المنصة ليقوموا بنشرها في مواقعهم أو متاجرهم الإلكترونية.

الهدف الأساسي:
- بناء سلطة محتوى عربية قوية  
- مساعدة العملاء على تحسين حضورهم الرقمي  
- تقديم خطة محتوى مستمرة لمدة **18 شهر** لكل عميل  
- توفير Mentions + Links للعملاء داخل مقالات تتصدر Google  
- تقديم نسخ جاهزة للمقالات للعميل بدون جهد منه  

---

# # 2. أهداف المشروع  
### ## أهداف رئيسية:
1. بناء مدونة عربية قوية تتصدر نتائج البحث.  
2. كتابة مقالات احترافية تساعد العملاء على تحسين ظهورهم.  
3. تقديم نظام اشتراك سنوي يمنح 18 شهر محتوى.  
4. بناء محرك داخلي لإدارة المقالات وتخصيصها.  
5. بناء نظام Mentions يضيف روابط العملاء داخل المقالات الرئيسية.  
6. إنشاء لوحة تحكم داخلية لإدارة كل المقالات، العملاء، الروابط، التصنيفات.  

### ## أهداف تجارية:
- الوصول إلى 500–1000 عميل سنوي.  
- زيادة العائد الشهري (MRR).  
- بناء منصة لا يمكن للمنافسين تقليدها بسهولة.  

---

# # 3. وصف المنتج  
المنتج عبارة عن:

### 1) مدونة مركزية (Authority Blog)  
يتم نشر مقالات رئيسية (Master Articles) عليها بشكل أسبوعي أو يومي.

### 2) نظام Mentions  
كل مقال رئيسي يحتوي على روابط العملاء بشكل مدروس لرفع سلطتهم.

### 3) نظام Client Version  
يتم توليد نسخة مخصصة من المقال لكل عميل بدون Duplicate Content.

### 4) لوحة تحكم شاملة (Admin CMS):  
- كتابة المقالات  
- تعديل المقالات  
- إدارة التصنيفات  
- إدارة العملاء  
- إدارة mentions  
- إدارة النسخ المخصصة  
- إدارة الوسائط  

### 5) موقع عام يعرض:  
- صفحة المدونة  
- صفحة المقال  
- صفحة التصنيفات  
- صفحة contact  
- صفحة عروض الاشتراك  

---

# # 4. الفئات المستهدفة (Personas)
### 1) أصحاب المتاجر الإلكترونية  
يحتاجون محتوى جاهز لزيادة الزيارات.

### 2) أصحاب الأعمال الخدمية  
مثل العيادات، المحامين، المقاولين.

### 3) الشركات الصغيرة والمتوسطة  
يريدون محتوى احترافي بدون تكلفة توظيف.

### 4) المسوقين العاملين داخل الشركات  
يحتاجون محتوى مستمر.

---

# # 5. نطاق المشروع (Scope)

## **Included**
- مدونة مركزية  
- نظام المقالات Master  
- نظام المقالات Client  
- Mention Engine  
- Category System  
- Tag System  
- Admin CMS  
- خطة 18 شهر  
- SEO internal optimizations  
- Sitemap / RSS  
- Cloudinary integration  

## **Excluded (مرحلة لاحقة)**
- Mobile App كامل  
- Publishing automation  
- AI automatic rewriting  

---

# # 6. Architecture Overview

## **Frontend**
- Next.js 15  
- React 19  
- App Router  
- Tailwind  
- shadcn/ui  

## **Backend**
- Next.js API routes  
- Prisma  
- MongoDB  

## **Storage**
- Cloudinary (images)  
- MongoDB Atlas (data)  

## **Deployment**
- Vercel  

---

# # 7. البيانات المطلوبة (Database Models)

## ### 1) Article
- id  
- title  
- slug  
- description  
- featuredImage  
- contentBlocks (JSON)  
- readingTime  
- categoryId  
- tags[]  
- level (master / client)  
- mentions[]  
- relatedArticles[]  
- createdAt  
- updatedAt  

## ### 2) Mention
- id  
- articleId  
- clientId  
- url  
- label  

## ### 3) Client
- id  
- businessName  
- website  
- category  
- contactInfo  
- plan  
- startDate  
- nextRenewal  

## ### 4) Category
- id  
- name  
- slug  

## ### 5) Subcategory
- id  
- name  
- parentCategoryId  

---

# # 8. الميزات الأساسية (Core Features)

### ✔️ **Master Articles**
مقالات رئيسية تنشر في مدونة Modonty.

### ✔️ **Client Article Generator**
إنشاء نسخة مخصصة بدون Duplicate Content.

### ✔️ **Mentions System**
إضافة روابط العملاء داخل المقالات.

### ✔️ **Internal Linking Engine**
اقتراح مقالات ذات صلة تلقائيًا.

### ✔️ **SEO Engine**
- Meta tags  
- OpenGraph  
- Schema  
- Sitemap  
- RSS  

### ✔️ **Admin CMS**
لوحة كاملة لإدارة كل شيء.

### ✔️ **Categories & Tags**
تصنيف المحتوى بشكل احترافي.

---

# # 9. واجهات المستخدم (UI/UX Requirements)

## **Frontend Pages**
- Homepage  
- Blog homepage  
- Blog categories  
- Article page  
- About  
- Pricing  
- Contact  

## **Admin Pages**
- Dashboard  
- Articles list  
- Create/Edit article  
- Mentions panel  
- Categories  
- Tags  
- Clients  
- Settings  

---

# # 10. الأداء (Performance Requirements)
- PageSpeed 95+  
- ISR caching  
- Image optimization  
- Code splitting  
- CDN caching  
- Prefetching  

---

# # 11. الأمان (Security Requirements)
- حماية API  
- Rate limiting  
- XSS protection  
- CSRF  
- لوحة تحكم محمية  
- JWT أو Session-based  

---

# # 12. التحليلات (Analytics)
- Google Analytics 4  
- Microsoft Clarity  
- GTM  
- Tracking clicks  
- Scroll depth  
- Article performance dashboard  

---

# # 13. Tech Roadmap (حسب الجدول الزمني)

## **Phase 1 — Week 1–2: Setup**
- Next.js structure  
- Prisma + MongoDB  
- Auth  
- Admin shell  
- Categories model  

## **Phase 2 — Week 3–4: CMS**
- Article editor  
- Content blocks system  
- Upload images  
- Mentions CRUD  
- Drafts + Publishing  

## **Phase 3 — Week 5–6: Blog**
- Blog homepage  
- Category pages  
- Article pages  
- Internal linking  
- Related posts  

## **Phase 4 — Week 7–8: Client Version Engine**
- محتوى client  
- إعادة كتابة  
- تخصيص  
- ربط المقالات بالعملاء  

## **Phase 5 — Week 9–10: SEO & Performance**
- Sitemap  
- RSS  
- Schema  
- Cache tuning  
- Performance optimization  

## **Phase 6 — Week 11–12: Launch Prep**
- نشر أول 50 مقال  
- نشر client versions  
- مراجعة الروابط  
- QA كامل  
- Deployment  

---

# # 14. نجاح المشروع (KPIs)

### Blog KPIs:
- عدد المقالات  
- DA/Authority  
- الزيارات الشهرية  
- ترتيب الكلمات  

### Business KPIs:
- عدد الاشتراكات السنوية  
- معدل التجديد  
- MRR  
- NPS  
- رضا العملاء  

---

# # 15. الخلاصة  
هذا الـ PRD يمثل المواصفات الكاملة لمشروع Modonty، ويغطي:

- التقنية  
- المحتوى  
- الربط  
- البنية  
- الخطة  
- رحلة العميل  
- التشغيل  
- التحليل  
- النمو  

وهو الأساس لبناء المشروع بأعلى جودة 1000% كما تطمح.

