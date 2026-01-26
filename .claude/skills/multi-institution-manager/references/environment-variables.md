# Environment Variables Reference

Complete reference for all environment variables used in JKKN multi-institution deployments.

---

## Required Variables

These variables MUST be set for each Vercel deployment.

### Institution Identity

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_INSTITUTION_ID` | Unique identifier for the institution | `dental`, `nursing`, `main` |
| `NEXT_PUBLIC_INSTITUTION_NAME` | Full display name | `JKKN College of Dental Sciences` |
| `NEXT_PUBLIC_INSTITUTION_SHORT_NAME` | Abbreviated name | `JKKN Dental` |
| `NEXT_PUBLIC_SITE_URL` | Production URL with protocol | `https://dental.jkkn.ac.in` |

### Supabase Connection

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | `https://abcdefg.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anon key (safe for client) | `eyJhbGciOiJIUzI1...` |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (server only) | `eyJhbGciOiJIUzI1...` |

---

## Optional Variables

### Feature Flags

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_FEATURES` | Comma-separated feature list | `blog,careers,page-builder,analytics` |

**Available Features:**

```
blog                    # Blog system
careers                 # Job listings
page-builder            # Visual page editor
analytics               # Traffic analytics
comments                # User comments
newsletter              # Email subscriptions
events                  # Event management
gallery                 # Photo/video gallery
testimonials            # Testimonial management
admissions              # Admission portal
faculty-directory       # Faculty profiles
course-catalog          # Course listings
research-publications   # Research papers
placements              # Placement statistics
```

### Theme Customization

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_PRIMARY_COLOR` | Primary brand color | `#1e40af` |
| `NEXT_PUBLIC_SECONDARY_COLOR` | Secondary color | `#64748b` |
| `NEXT_PUBLIC_ACCENT_COLOR` | Accent color | `#f59e0b` |

### SEO Defaults

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_DEFAULT_OG_IMAGE` | Default Open Graph image URL | None |
| `NEXT_PUBLIC_TWITTER_HANDLE` | Twitter/X handle | None |

### External Services

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | For auth |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | For auth |
| `GOOGLE_SITE_VERIFICATION` | Search Console verification | Optional |
| `BING_SITE_VERIFICATION` | Bing Webmaster verification | Optional |

---

## Environment File Templates

### `.env.local` (Development)

```env
# Institution Identity
NEXT_PUBLIC_INSTITUTION_ID=main
NEXT_PUBLIC_INSTITUTION_NAME=JKKN Institutions
NEXT_PUBLIC_INSTITUTION_SHORT_NAME=JKKN
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Supabase - Main Project
NEXT_PUBLIC_SUPABASE_URL=https://pmqodbfhsejbvfbmsfeq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Features
NEXT_PUBLIC_FEATURES=blog,careers,page-builder,analytics

# Theme (optional)
NEXT_PUBLIC_PRIMARY_COLOR=#1e40af
```

### `.env.institutions` (Migration Sync)

```env
# Main Institution
SUPABASE_MAIN_URL=https://pmqodbfhsejbvfbmsfeq.supabase.co
SUPABASE_MAIN_SERVICE_KEY=eyJhbGc...

# Dental College
SUPABASE_DENTAL_URL=https://xxx.supabase.co
SUPABASE_DENTAL_SERVICE_KEY=eyJhbGc...

# Arts & Science College
SUPABASE_ARTS_URL=https://yyy.supabase.co
SUPABASE_ARTS_SERVICE_KEY=eyJhbGc...

# Engineering College
SUPABASE_ENGINEERING_URL=https://zzz.supabase.co
SUPABASE_ENGINEERING_SERVICE_KEY=eyJhbGc...

# Pharmacy College
SUPABASE_PHARMACY_URL=https://aaa.supabase.co
SUPABASE_PHARMACY_SERVICE_KEY=eyJhbGc...

# Nursing College
SUPABASE_NURSING_URL=https://bbb.supabase.co
SUPABASE_NURSING_SERVICE_KEY=eyJhbGc...
```

---

## Vercel Environment Setup

### Adding Variables via Vercel Dashboard

1. Go to Project Settings → Environment Variables
2. Add each variable with appropriate scope:
   - **Production**: Live site variables
   - **Preview**: Staging/branch deployments
   - **Development**: Local development

### Adding Variables via Vercel CLI

```bash
# Add production variable
vercel env add NEXT_PUBLIC_INSTITUTION_ID production

# Add to all environments
vercel env add NEXT_PUBLIC_SUPABASE_URL

# Pull variables to local
vercel env pull .env.local
```

### Bulk Import

Create `vercel.json` with environment variables:

```json
{
  "env": {
    "NEXT_PUBLIC_INSTITUTION_ID": "dental",
    "NEXT_PUBLIC_INSTITUTION_NAME": "JKKN College of Dental Sciences"
  }
}
```

---

## Security Considerations

### Public vs Private Variables

**Public (NEXT_PUBLIC_*):**
- Exposed to browser
- Safe for non-sensitive data
- Used for client-side configuration

**Private (no prefix):**
- Server-side only
- Never exposed to browser
- Used for API keys, secrets

### Key Rotation

To rotate Supabase keys:

1. Generate new keys in Supabase Dashboard
2. Update Vercel environment variables
3. Redeploy all affected projects
4. Update `.env.institutions` for migration sync
5. Verify all deployments work correctly

### Secrets Management

For sensitive variables:

1. Never commit secrets to Git
2. Use Vercel's encrypted environment variables
3. Rotate keys periodically
4. Use separate keys per environment when possible

---

## Troubleshooting

### Variable Not Available

**Symptoms:** `undefined` or empty value

**Solutions:**
1. Check variable name spelling (case-sensitive)
2. Ensure `NEXT_PUBLIC_` prefix for client-side access
3. Redeploy after adding new variables
4. Clear Vercel cache: `vercel --force`

### Wrong Institution Showing

**Symptoms:** Wrong content, branding, or data

**Check:**
1. `NEXT_PUBLIC_INSTITUTION_ID` matches expected value
2. `NEXT_PUBLIC_SUPABASE_URL` points to correct project
3. Clear browser cache and CDN cache

### Auth Not Working

**Check:**
1. `NEXT_PUBLIC_SUPABASE_URL` is correct
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY` matches project
3. OAuth redirect URLs configured in Supabase
4. Site URL matches `NEXT_PUBLIC_SITE_URL`
