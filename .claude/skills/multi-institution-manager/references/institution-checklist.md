# New Institution Setup Checklist

Complete checklist for adding a new institution to the JKKN multi-institution platform.

---

## Pre-Setup Requirements

### Account Access

- [ ] Supabase organization access (jkkn-org)
- [ ] Vercel team access (jkkn-team)
- [ ] GitHub repository access
- [ ] Domain DNS management access
- [ ] Google Cloud Console access (for OAuth)

### Institution Information

- [ ] Official institution name
- [ ] Short name / abbreviation
- [ ] Subdomain (e.g., `dental.jkkn.ac.in`)
- [ ] Contact email
- [ ] Contact phone
- [ ] Physical address
- [ ] Logo files (PNG, SVG, ICO)
- [ ] Brand colors (primary, secondary, accent)
- [ ] Social media handles

### Technical Decisions

- [ ] Institution ID chosen (lowercase, hyphenated)
- [ ] Features to enable (see feature flags)
- [ ] Supabase region selected (ap-south-1 recommended)

---

## Phase 1: Supabase Project Setup

### Create Project

- [ ] Navigate to [Supabase Dashboard](https://supabase.com/dashboard)
- [ ] Click "New Project"
- [ ] Select organization: JKKN
- [ ] Project name: `jkkn-[institution-id]`
- [ ] Generate strong database password
- [ ] Store password securely
- [ ] Select region: `ap-south-1` (Mumbai)
- [ ] Wait for project creation (~2-3 minutes)

### Record Credentials

- [ ] Project URL: `https://[ref].supabase.co`
- [ ] Project Reference ID: `[ref]`
- [ ] Anon (public) key: `eyJ...`
- [ ] Service role key: `eyJ...`

### Apply Migrations

- [ ] Add credentials to `.env.institutions`:
  ```env
  SUPABASE_[ID]_URL=https://[ref].supabase.co
  SUPABASE_[ID]_SERVICE_KEY=eyJ...
  ```
- [ ] Run migration sync:
  ```bash
  npm run db:migrate -- --institution=[id]
  ```
- [ ] Verify migrations applied:
  ```bash
  npm run db:migrate -- --institution=[id] --dry-run
  ```
- [ ] Check tables via Supabase Dashboard

### Configure Authentication

- [ ] Go to Authentication → Providers
- [ ] Enable Google OAuth
- [ ] Add Google Client ID
- [ ] Add Google Client Secret
- [ ] Set authorized redirect URL: `https://[domain]/auth/callback`
- [ ] Go to Authentication → URL Configuration
- [ ] Set Site URL: `https://[domain]`
- [ ] Add redirect URLs:
  - `https://[domain]/auth/callback`
  - `https://[domain]/admin`
  - `http://localhost:3000/auth/callback` (for dev)

### Setup Storage

- [ ] Go to Storage
- [ ] Create bucket: `avatars` (public)
- [ ] Create bucket: `media` (public)
- [ ] Create bucket: `resumes` (private)
- [ ] Apply storage RLS policies from migrations

---

## Phase 2: Vercel Project Setup

### Create Project

- [ ] Navigate to [Vercel Dashboard](https://vercel.com/dashboard)
- [ ] Click "Add New..." → Project
- [ ] Select repository: `jkkn-institution-website`
- [ ] Project name: `jkkn-[institution-id]`

### Configure Build Settings

- [ ] Framework preset: Next.js (auto-detected)
- [ ] Root directory: `./`
- [ ] Build command: `npm run build`
- [ ] Output directory: `.next`
- [ ] Install command: `npm install`

### Add Environment Variables

**Required Variables:**

- [ ] `NEXT_PUBLIC_INSTITUTION_ID` = `[institution-id]`
- [ ] `NEXT_PUBLIC_INSTITUTION_NAME` = `[Full Name]`
- [ ] `NEXT_PUBLIC_INSTITUTION_SHORT_NAME` = `[Short Name]`
- [ ] `NEXT_PUBLIC_SITE_URL` = `https://[domain]`
- [ ] `NEXT_PUBLIC_SUPABASE_URL` = `https://[ref].supabase.co`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `[anon-key]`
- [ ] `SUPABASE_SERVICE_ROLE_KEY` = `[service-role-key]`
- [ ] `NEXT_PUBLIC_FEATURES` = `blog,careers,page-builder,analytics`

**Optional Variables:**

- [ ] `NEXT_PUBLIC_PRIMARY_COLOR` = `#[hex]`
- [ ] `NEXT_PUBLIC_SECONDARY_COLOR` = `#[hex]`
- [ ] `NEXT_PUBLIC_ACCENT_COLOR` = `#[hex]`

### Deploy

- [ ] Click "Deploy"
- [ ] Wait for build to complete
- [ ] Verify deployment at `[project].vercel.app`

---

## Phase 3: Domain Configuration

### Vercel Domain Setup

- [ ] Go to Project Settings → Domains
- [ ] Add domain: `[institution].jkkn.ac.in`
- [ ] Note DNS records required

### DNS Configuration

- [ ] Access DNS management for `jkkn.ac.in`
- [ ] Add CNAME record:
  ```
  Name: [institution]
  Type: CNAME
  Value: cname.vercel-dns.com
  ```
- [ ] Or A record if apex domain:
  ```
  Name: @
  Type: A
  Value: 76.76.21.21
  ```
- [ ] Wait for DNS propagation (5-30 minutes)

### SSL Verification

- [ ] Check Vercel domain status shows "Valid"
- [ ] Visit `https://[domain]`
- [ ] Verify SSL certificate is valid
- [ ] Test redirect from HTTP to HTTPS

---

## Phase 4: Initial Data Setup

### Create Admin User

- [ ] Access Supabase Dashboard → Table Editor
- [ ] Add email to `approved_emails` table:
  ```sql
  INSERT INTO approved_emails (email, added_by)
  VALUES ('admin@jkkn.ac.in', 'system');
  ```
- [ ] Sign in via Google OAuth at `https://[domain]/auth/signin`
- [ ] Assign `super_admin` role:
  ```sql
  INSERT INTO user_roles (user_id, role_id)
  SELECT p.id, r.id
  FROM profiles p, roles r
  WHERE p.email = 'admin@jkkn.ac.in'
  AND r.name = 'super_admin';
  ```

### Configure Site Settings

- [ ] Login to admin panel: `https://[domain]/admin`
- [ ] Go to Settings → General
- [ ] Set site name
- [ ] Set contact email
- [ ] Set contact phone
- [ ] Set address
- [ ] Save changes

### Configure Appearance

- [ ] Go to Settings → Appearance
- [ ] Upload logo (PNG, 400x100px recommended)
- [ ] Upload favicon (ICO, 32x32px)
- [ ] Set primary color
- [ ] Set secondary color
- [ ] Save changes

### Configure SEO

- [ ] Go to Settings → SEO
- [ ] Set title template: `%s | [Short Name]`
- [ ] Set default title
- [ ] Set site description (150-160 chars)
- [ ] Set default keywords
- [ ] Add Google Search Console verification (if available)
- [ ] Save changes

---

## Phase 5: Registry Updates

### Update Multi-Tenant Config

- [ ] Edit `lib/config/multi-tenant.ts`:
  ```typescript
  {
    id: '[institution-id]',
    name: '[Full Name]',
    shortName: '[Short Name]',
    domain: '[institution].jkkn.ac.in',
    type: 'college',
    theme: {
      primaryColor: '#[hex]',
      secondaryColor: '#[hex]',
      accentColor: '#[hex]',
    },
    features: ['blog', 'careers', 'page-builder', 'analytics'],
    supabaseProjectRef: '[ref]',
  }
  ```

### Update Documentation

- [ ] Edit `CLAUDE.md`:
  - Add institution to institutions table
- [ ] Edit `.env.institutions.example`:
  - Add new institution template
- [ ] Edit `docs/MULTI-INSTITUTION-ARCHITECTURE.md`:
  - Add to Current Institutions section

### Commit Changes

- [ ] `git add .`
- [ ] `git commit -m "Add [institution-name] to multi-institution registry"`
- [ ] `git push origin main`

---

## Phase 6: Verification

### Functional Testing

- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Auth flow works (sign in/out)
- [ ] Admin panel accessible
- [ ] Settings save correctly
- [ ] Media upload works

### SEO Testing

- [ ] Check page title in browser tab
- [ ] View page source for meta tags
- [ ] Test Open Graph preview (use social media debuggers)
- [ ] Verify canonical URLs

### Performance Testing

- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Verify image optimization
- [ ] Test mobile responsiveness

### Security Testing

- [ ] Verify RLS policies work
- [ ] Test unauthorized access is blocked
- [ ] Check admin routes protected
- [ ] Verify no data leakage between institutions

---

## Post-Setup Tasks

### Google Search Console

- [ ] Add property for `[institution].jkkn.ac.in`
- [ ] Verify ownership (DNS or HTML tag)
- [ ] Submit sitemap: `https://[domain]/sitemap.xml`
- [ ] Request indexing for key pages

### Analytics Setup

- [ ] Configure analytics in admin panel (if feature enabled)
- [ ] Set up conversion tracking
- [ ] Configure goals

### Content Migration

- [ ] Import existing content (if applicable)
- [ ] Set up homepage content
- [ ] Create key pages (About, Contact, Programs)
- [ ] Add initial blog posts (if blog enabled)

### Team Onboarding

- [ ] Add staff emails to `approved_emails`
- [ ] Assign appropriate roles
- [ ] Provide admin training
- [ ] Share documentation

---

## Quick Reference: Institution IDs

| Institution | ID | Domain |
|-------------|-----|--------|
| Main | `main` | jkkn.ac.in |
| Arts & Science | `arts-science` | arts.jkkn.ac.in |
| Engineering | `engineering` | engg.jkkn.ac.in |
| Dental | `dental` | dental.jkkn.ac.in |
| Pharmacy | `pharmacy` | pharmacy.jkkn.ac.in |
| Nursing | `nursing` | nursing.jkkn.ac.in |

---

## Estimated Timeline

| Phase | Duration |
|-------|----------|
| Supabase Setup | 30 minutes |
| Migration Sync | 10 minutes |
| Vercel Setup | 20 minutes |
| Domain Config | 10-30 minutes (DNS propagation) |
| Initial Data | 30 minutes |
| Registry Updates | 15 minutes |
| Verification | 30 minutes |
| **Total** | **~2.5-3 hours** |
