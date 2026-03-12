# SalesGrowthPro — Deployment Guide

## Prerequisites
- Node.js 18+
- npm or yarn or pnpm

## Quick Start

### 1. Install Dependencies
```bash
cd salesgrowthpro
npm install
```

### 2. Add Your Logo
Place your logo files in the `/public` folder:
- `public/logo.png` — Full color logo (for light/scrolled header)
- `public/logo-white.png` — White version (for footer, optional)
- `public/og-image.png` — 1200×630px image for social media sharing

### 3. Configure Environment Variables
```bash
cp .env.local.example .env.local
```
Edit `.env.local` with your actual values.

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 5. Build for Production
```bash
npm run build
npm start
```

---

## Deployment Options

### Option A: Vercel (Recommended — Zero Config)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Add environment variables in Vercel dashboard
5. Deploy!

```bash
npm i -g vercel
vercel
```

### Option B: Netlify
1. Push to GitHub
2. Connect repo on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables

### Option C: Traditional VPS / cPanel (via PM2)
```bash
npm run build
npm install -g pm2
pm2 start npm --name "salesgrowthpro" -- start
pm2 save
pm2 startup
```

---

## Connecting Real Services

### Email (Contact Form)
Install Resend: `npm install resend`

In `src/app/api/contact/route.ts`, uncomment the Resend section and add:
```
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=hello@salesgrowthpro.com
```

### Newsletter
Install Mailchimp: `npm install @mailchimp/mailchimp_marketing`

In `src/app/api/newsletter/route.ts`, uncomment the Mailchimp section and add:
```
MAILCHIMP_API_KEY=your_key-us1
MAILCHIMP_LIST_ID=your_list_id
```

### Database (Optional — Store Leads)
Install Supabase: `npm install @supabase/supabase-js`

Create tables in Supabase:
```sql
-- Contact submissions
CREATE TABLE contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  company text,
  service text NOT NULL,
  message text NOT NULL,
  source text,
  ip text,
  created_at timestamptz DEFAULT now()
);

-- Newsletter subscribers
CREATE TABLE newsletter_subscribers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  source text,
  subscribed_at timestamptz DEFAULT now()
);
```

---

## Google Analytics 4 Setup
Add to `src/app/layout.tsx`:
```tsx
import Script from 'next/script'

// Inside <head> or after <body>:
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## Custom Domain Setup
1. Purchase domain (e.g., salesgrowthpro.com)
2. Add DNS records pointing to your host
3. Update `NEXT_PUBLIC_SITE_URL` in `.env.local`
4. Update all `metadataBase` URLs in `layout.tsx`

---

## Project Structure
```
salesgrowthpro/
├── public/
│   ├── logo.png              ← YOUR LOGO HERE
│   ├── logo-white.png        ← White version for footer
│   └── og-image.png          ← 1200×630 social preview image
├── src/
│   ├── app/
│   │   ├── page.tsx          ← Home page
│   │   ├── services/page.tsx ← Services page
│   │   ├── about/page.tsx    ← About page
│   │   ├── blog/page.tsx     ← Blog listing
│   │   ├── blog/[slug]/      ← Blog post template
│   │   ├── contact/page.tsx  ← Contact page
│   │   ├── api/contact/      ← Contact form API
│   │   ├── api/newsletter/   ← Newsletter API
│   │   ├── layout.tsx        ← Root layout + SEO metadata
│   │   ├── sitemap.ts        ← Auto-generated sitemap
│   │   └── robots.ts         ← Robots.txt
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx    ← Sticky nav with dropdown
│   │   │   └── Footer.tsx    ← Full footer with newsletter
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── ResultsBenefits.tsx
│   │   │   ├── BlogPreview.tsx
│   │   │   └── CTASection.tsx
│   │   ├── shared/
│   │   │   ├── ContactForm.tsx   ← Validated form with zod
│   │   │   └── NewsletterSignup.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── Card.tsx
│   └── lib/
│       ├── blog-data.ts      ← Blog post data (replace with CMS)
│       └── utils.ts
└── tailwind.config.ts        ← Brand colors configured
```

---

## Adding Blog Posts
Edit `src/lib/blog-data.ts` and add to the `blogPosts` array.

For a production blog, replace with a CMS:
- **Contentful** — `npm install contentful`
- **Sanity** — `npm install @sanity/client`
- **Notion API** — `npm install @notionhq/client`
- **Markdown files** — Use `gray-matter` + `remark`

---

## Performance Checklist
- [ ] Add real logo images to `/public`
- [ ] Configure Google Analytics
- [ ] Set up contact form email delivery
- [ ] Set up newsletter service
- [ ] Add og-image.png (1200×630)
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (target 90+ scores)
- [ ] Submit sitemap to Google Search Console
