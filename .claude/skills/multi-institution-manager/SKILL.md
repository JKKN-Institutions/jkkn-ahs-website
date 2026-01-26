---
name: multi-institution-manager
description: |
  Comprehensive guide for managing multi-institution architecture in JKKN websites.
  This skill should be used when:
  - Adding a new institution to the platform
  - Creating or syncing database migrations across institutions
  - Setting up Supabase projects for new institutions
  - Configuring Vercel deployments for institutions
  - Managing environment variables and feature flags
  - Troubleshooting multi-institution issues
  - Understanding the Single Repository, Multiple Deployments (SRMD) architecture
  - Applying database schema to new or existing institution Supabase projects
  - Running local development server for a specific institution

  Automatically triggers when user mentions: "add institution", "new institution",
  "sync migrations", "multi-tenant", "setup supabase project", "setup vercel",
  "institution deployment", "switch institution", "dev:main", "dev:dental",
  or asks about managing multiple JKKN websites.
---

# Multi-Institution Manager

This skill provides comprehensive guidance for managing the JKKN multi-institution architecture where ONE codebase serves SIX institution websites through separate Supabase and Vercel deployments.

---

## CRITICAL: Institution-Specific MCP Tools

**Each Supabase project has its own dedicated MCP server.** You MUST use the correct MCP tool prefix for the target institution:

| Institution | Supabase Project ID | MCP Tool Prefix |
|-------------|---------------------|-----------------|
| **Main** | `pmqodbfhsejbvfbmsfeq` | `mcp__Main_Supabase_Project__` |
| **Dental College** | `wnmyvbnqldukeknnmnpl` | `mcp__Dental_College_Supabase_Project__` |
| **Pharmacy College** | `rwskookarbolpmtolqkd` | `mcp__Pharmacy_College_Supabase_Project__` |
| **Engineering College** | `kyvfkyjmdbtyimtedkie` | `mcp__Engineering_College_Supabase_Project__` |
| Arts & Science | TBD | TBD |
| Nursing | TBD | TBD |

### Available MCP Tools Per Institution

Each institution's MCP server provides these tools:

```
mcp__[Institution]_Supabase_Project__list_tables
mcp__[Institution]_Supabase_Project__execute_sql
mcp__[Institution]_Supabase_Project__apply_migration
mcp__[Institution]_Supabase_Project__list_migrations
mcp__[Institution]_Supabase_Project__generate_typescript_types
mcp__[Institution]_Supabase_Project__get_logs
mcp__[Institution]_Supabase_Project__get_advisors
mcp__[Institution]_Supabase_Project__get_project_url
mcp__[Institution]_Supabase_Project__get_publishable_keys
mcp__[Institution]_Supabase_Project__search_docs
```

### Example: Applying Same Migration to Multiple Institutions

```typescript
// Step 1: Apply to Main Supabase
mcp__Main_Supabase_Project__apply_migration({
  name: "add_new_feature_table",
  query: "CREATE TABLE ..."
})

// Step 2: Apply to Dental College Supabase
mcp__Dental_College_Supabase_Project__apply_migration({
  name: "add_new_feature_table",
  query: "CREATE TABLE ..."  // Same SQL
})

// Step 3: Repeat for other institutions when their MCP servers are configured
```

---

## CRITICAL: Database Documentation as Source of Truth

**ALL database schema, functions, RLS policies, and triggers are documented in `docs/database/`.**

### Documentation Structure

```
docs/database/
├── main-supabase/           # Main Supabase project (pmqodbfhsejbvfbmsfeq)
│   ├── README.md            # Documentation guide
│   ├── 01-functions.sql     # All PostgreSQL functions (51+ functions)
│   ├── 02-rls-policies.sql  # All RLS policies (126+ policies)
│   ├── 03-triggers.sql      # All triggers
│   ├── 04-foreign-keys.sql  # All foreign key relationships
│   └── 05-migrations/       # Migration history
├── dental-supabase/         # Dental College project
│   └── [same structure]
└── [other-institution]/     # Future institution projects
    └── [same structure]
```

### Mandatory Workflow: Document First, Execute Second

**BEFORE executing ANY database migration, you MUST:**

1. **Document the SQL code FIRST** in `docs/database/main-supabase/`
2. **Update the appropriate documentation file** based on change type
3. **ONLY THEN execute the migration** via MCP tools
4. **Sync to other institutions** using their MCP tools

### File Mapping: What Goes Where

| Change Type | Documentation File | Example |
|-------------|-------------------|---------|
| New function | `01-functions.sql` | `is_super_admin()`, `get_dashboard_stats()` |
| New RLS policy | `02-rls-policies.sql` | User roles SELECT policy |
| New trigger | `03-triggers.sql` | `handle_new_user()` trigger |
| New foreign key | `04-foreign-keys.sql` | `user_roles.user_id → auth.users.id` |
| New table | All files as needed | Create table + RLS + triggers |

### Documentation Format

When adding SQL to documentation files, use this format:

```sql
-- ============================================
-- Function/Policy/Trigger Name
-- ============================================
-- Purpose: [Brief description]
-- Created: [Date]
-- Modified: [Date if updated]
-- Dependencies: [List any dependencies]
-- Used by: [List tables/functions that use this]
-- Security: [SECURITY DEFINER / INVOKER if applicable]
-- ============================================

[SQL CODE HERE]

-- End of [Name]
-- ============================================
```

---

## Creating Complete Backend for New Institution

When setting up a new institution's Supabase project, follow this workflow to create the complete backend:

### Step 1: Read Existing Documentation

```typescript
// Read all SQL documentation files
Read({ file_path: "docs/database/main-supabase/01-functions.sql" })
Read({ file_path: "docs/database/main-supabase/02-rls-policies.sql" })
Read({ file_path: "docs/database/main-supabase/03-triggers.sql" })
Read({ file_path: "docs/database/main-supabase/04-foreign-keys.sql" })
```

### Step 2: Apply Functions First

Functions must be created before RLS policies that reference them:

```typescript
// Apply all functions from 01-functions.sql
mcp__[New_Institution]_Supabase_Project__apply_migration({
  name: "001_create_functions",
  query: "[SQL from 01-functions.sql]"
})
```

### Step 3: Apply Table Schemas

Create all tables (get from existing migrations or documentation):

```typescript
mcp__[New_Institution]_Supabase_Project__apply_migration({
  name: "002_create_tables",
  query: "[Table creation SQL]"
})
```

### Step 4: Apply RLS Policies

```typescript
mcp__[New_Institution]_Supabase_Project__apply_migration({
  name: "003_create_rls_policies",
  query: "[SQL from 02-rls-policies.sql]"
})
```

### Step 5: Apply Triggers

```typescript
mcp__[New_Institution]_Supabase_Project__apply_migration({
  name: "004_create_triggers",
  query: "[SQL from 03-triggers.sql]"
})
```

### Step 6: Verify Schema

```typescript
// List all tables to verify
mcp__[New_Institution]_Supabase_Project__list_tables()

// Check for security advisories
mcp__[New_Institution]_Supabase_Project__get_advisors({ type: "security" })
```

---

## Key Functions Reference (from docs/database/main-supabase/01-functions.sql)

The following functions are critical for the permission system:

### Core Permission Functions

| Function | Purpose |
|----------|---------|
| `is_super_admin(user_uuid)` | Check if user has super_admin role |
| `has_permission(user_uuid, permission)` | Check if user has specific permission |
| `has_any_role(user_uuid, role_names[])` | Check if user has any of the specified roles |
| `get_user_roles(user_uuid)` | Get all roles assigned to a user |
| `get_role_permissions(role_id)` | Get all permissions for a role |

### Dashboard & Analytics Functions

| Function | Purpose |
|----------|---------|
| `get_dashboard_stats()` | Get dashboard statistics |
| `get_user_activity_summary(user_uuid)` | Get user activity metrics |

### Auth Functions

| Function | Purpose |
|----------|---------|
| `handle_new_user()` | Trigger function for new user creation |
| `is_email_approved(email)` | Check if email is in approved list |

---

## Key RLS Policies Reference (from docs/database/main-supabase/02-rls-policies.sql)

### Policy Patterns

**Pattern 1: Public Read, Admin Write**
```sql
-- Public can view
CREATE POLICY "Public can view published"
    ON table_name FOR SELECT
    USING (status = 'published');

-- Admins can manage
CREATE POLICY "Admins can manage"
    ON table_name FOR ALL
    TO authenticated
    USING (is_super_admin(auth.uid()));
```

**Pattern 2: Owner-Based Access**
```sql
-- Users can manage their own
CREATE POLICY "Users can manage own"
    ON table_name FOR ALL
    TO authenticated
    USING (created_by = auth.uid());
```

**Pattern 3: Permission-Based Access**
```sql
-- Users with specific permission
CREATE POLICY "Users with permission can manage"
    ON table_name FOR ALL
    TO authenticated
    USING (has_permission(auth.uid(), 'module:resource:action'));
```

---

## Local Development: Institution Switcher

### Quick Start

```bash
# Start development with Main Institution
npm run dev:main

# Start development with Dental College
npm run dev:dental

# Switch without starting server
npm run switch main
npm run switch dental
```

### How It Works

The `scripts/switch-institution.ts` script:
1. Takes institution ID as argument
2. Generates `.env.local` with correct Supabase credentials
3. Dev server uses the selected institution's database

### Adding New Institution to Switcher

Edit `scripts/switch-institution.ts`:

```typescript
const INSTITUTIONS: Record<string, InstitutionEnv> = {
  main: { /* existing */ },
  dental: { /* existing */ },
  // Add new institution:
  'arts-science': {
    id: 'arts-science',
    name: 'JKKN Arts & Science College',
    supabaseUrl: 'https://xxx.supabase.co',
    supabaseAnonKey: 'eyJ...',
    siteUrl: 'http://localhost:3000',
    features: 'blog,careers,page-builder,analytics',
  },
};
```

### Service Role Key Storage

For admin operations requiring service role key:

1. Create `.env.[institution-id].servicekey` file (gitignored)
2. Paste service role key (single line)
3. Switcher will include it in `.env.local`

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    ONE GitHub Repository                         │
│                 (jkkn-institution-website)                       │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│ Vercel: Main  │     │ Vercel: Dental│     │ Vercel: Arts  │
│ jkkn.ac.in    │     │ dental.jkkn.  │     │ arts.jkkn.    │
└───────┬───────┘     └───────┬───────┘     └───────┬───────┘
        ▼                     ▼                     ▼
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│ Supabase Main │     │Supabase Dental│     │ Supabase Arts │
│ MCP: Main_... │     │ MCP: Dental...│     │  MCP: TBD     │
└───────────────┘     └───────────────┘     └───────────────┘
```

## Current Institutions

| ID | Name | Domain | Supabase Project | MCP Available |
|----|------|--------|------------------|---------------|
| `main` | JKKN Institutions | jkkn.ac.in | pmqodbfhsejbvfbmsfeq | Yes |
| `dental` | JKKN Dental College | dental.jkkn.ac.in | wnmyvbnqldukeknnmnpl | Yes |
| `pharmacy` | JKKN Pharmacy | pharmacy.jkkn.ac.in | rwskookarbolpmtolqkd | Yes |
| `engineering` | JKKN Engineering | engg.jkkn.ac.in | kyvfkyjmdbtyimtedkie | Yes |
| `arts-science` | JKKN Arts & Science | arts.jkkn.ac.in | TBD | No |
| `nursing` | JKKN Nursing | nursing.jkkn.ac.in | TBD | No |

---

## Adding a New Institution

### Prerequisites Checklist

Before starting, ensure:

- [ ] Supabase account with organization access
- [ ] Vercel account with team access
- [ ] GitHub repository access
- [ ] Domain DNS access for custom domain
- [ ] Institution branding assets (logo, colors)

### Step 1: Create Supabase Project

1. **Navigate to Supabase Dashboard:**
   ```
   https://supabase.com/dashboard/projects
   ```

2. **Create New Project:**
   - Click "New Project"
   - Select organization: JKKN
   - Project name: `jkkn-[institution-id]` (e.g., `jkkn-dental`)
   - Database password: Generate strong password (save securely)
   - Region: `ap-south-1` (Mumbai) or `ap-southeast-1` (Singapore)
   - Pricing plan: Free tier initially

3. **Wait for Project Setup:**
   - Takes 2-3 minutes for project to be ready
   - Note the project reference ID (e.g., `abcdefghijklmnop`)

4. **Get API Credentials:**
   - Go to Project Settings → API
   - Copy: `Project URL`, `anon/public key`, `service_role key`

### Step 2: Configure MCP Server

Add the new institution's Supabase MCP server to Claude Code settings:

```json
{
  "mcpServers": {
    "[Institution]_Supabase_Project": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-supabase", "--project-ref", "[project-ref]"]
    }
  }
}
```

### Step 3: Apply Database Schema from Documentation

**Read and apply from `docs/database/main-supabase/`:**

```typescript
// 1. Read the source of truth
Read({ file_path: "docs/database/main-supabase/01-functions.sql" })
Read({ file_path: "docs/database/main-supabase/02-rls-policies.sql" })

// 2. Apply functions first (required for RLS policies)
mcp__[New_Institution]_Supabase_Project__apply_migration({
  name: "001_core_functions",
  query: "[Functions SQL from documentation]"
})

// 3. Create tables from existing migrations
mcp__[New_Institution]_Supabase_Project__list_migrations()  // Check what exists

// 4. Apply RLS policies
mcp__[New_Institution]_Supabase_Project__apply_migration({
  name: "002_rls_policies",
  query: "[RLS SQL from documentation]"
})

// 5. Verify
mcp__[New_Institution]_Supabase_Project__list_tables()
mcp__[New_Institution]_Supabase_Project__get_advisors({ type: "security" })
```

### Step 4: Configure Supabase Project

1. **Enable Auth Providers:**
   - Go to Authentication → Providers
   - Enable Google OAuth
   - Configure: Client ID, Client Secret
   - Authorized redirect: `https://[domain]/auth/callback`

2. **Configure Auth Settings:**
   - Site URL: `https://[institution-domain]`
   - Redirect URLs: Add callback URLs

3. **Set up Storage Buckets:**
   ```sql
   INSERT INTO storage.buckets (id, name, public) VALUES
     ('avatars', 'avatars', true),
     ('media', 'media', true),
     ('resumes', 'resumes', false);
   ```

### Step 5: Create Vercel Project

1. **Navigate to Vercel Dashboard:**
   ```
   https://vercel.com/dashboard
   ```

2. **Import Git Repository:**
   - Click "Add New..." → Project
   - Select: `jkkn-institution-website` repository
   - Framework: Next.js (auto-detected)

3. **Configure Project:**
   - Project Name: `jkkn-[institution-id]`
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Install Command: `npm install` (default)

4. **Add Environment Variables:**

   **Required variables:**
   ```
   NEXT_PUBLIC_INSTITUTION_ID=[institution-id]
   NEXT_PUBLIC_INSTITUTION_NAME=[Full Institution Name]
   NEXT_PUBLIC_SITE_URL=https://[domain]
   NEXT_PUBLIC_SUPABASE_URL=https://[project-ref].supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[anon-key]
   SUPABASE_SERVICE_ROLE_KEY=[service-role-key]
   NEXT_PUBLIC_FEATURES=blog,careers,page-builder,analytics
   ```

5. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete

### Step 6: Configure Custom Domain

1. **In Vercel Project Settings → Domains:**
   - Add domain: `[institution].jkkn.ac.in`

2. **Configure DNS:**
   - Add CNAME record: `[institution]` → `cname.vercel-dns.com`
   - Or A record to Vercel IP if apex domain

3. **Wait for SSL:**
   - Vercel auto-provisions SSL certificate
   - Usually takes 5-10 minutes

### Step 7: Update Local Development Switcher

Add to `scripts/switch-institution.ts`:

```typescript
'[institution-id]': {
  id: '[institution-id]',
  name: '[Full Institution Name]',
  supabaseUrl: 'https://[project-ref].supabase.co',
  supabaseAnonKey: '[anon-key]',
  siteUrl: 'http://localhost:3000',
  features: '[feature-list]',
},
```

### Step 8: Update Registry and Documentation

1. **Update `lib/config/multi-tenant.ts`**
2. **Update CLAUDE.md institutions table**
3. **Update this skill's institutions table**

---

## Database Migration Management

### Syncing Changes Across Institutions

**When making database changes:**

1. **Document in `docs/database/main-supabase/` first**
2. **Apply to Main Supabase via MCP:**
   ```typescript
   mcp__Main_Supabase_Project__apply_migration({
     name: "descriptive_name",
     query: "[SQL from documentation]"
   })
   ```
3. **Apply to Dental College:**
   ```typescript
   mcp__Dental_College_Supabase_Project__apply_migration({
     name: "descriptive_name",
     query: "[Same SQL]"
   })
   ```
4. **Repeat for other institutions with MCP servers**

### Migration Best Practices

1. **Always document SQL in `docs/database/` first**
2. **Test on Main Supabase before other institutions**
3. **Use idempotent SQL (IF NOT EXISTS, etc.)**
4. **Include RLS policies for new tables**
5. **Update TypeScript types after schema changes:**
   ```typescript
   mcp__Main_Supabase_Project__generate_typescript_types()
   ```

### Checking Applied Migrations

```typescript
// Main Supabase
mcp__Main_Supabase_Project__list_migrations()

// Dental College
mcp__Dental_College_Supabase_Project__list_migrations()
```

---

## Feature Flags

### Available Features

| Feature | Description |
|---------|-------------|
| `blog` | Blog system with posts, categories, tags |
| `careers` | Job listings and applications |
| `page-builder` | Visual page editor |
| `analytics` | Traffic and engagement analytics |
| `comments` | User comments on blog posts |
| `newsletter` | Email subscription system |
| `events` | Event management and calendar |
| `gallery` | Photo/video gallery |
| `testimonials` | Testimonial management |
| `admissions` | Admission portal |
| `faculty-directory` | Faculty profiles |
| `course-catalog` | Course listings |
| `research-publications` | Research paper management |
| `placements` | Placement statistics |

### Configuring Features

**Via Environment Variable:**
```env
NEXT_PUBLIC_FEATURES=blog,careers,page-builder,analytics
```

**In Code:**
```typescript
import { hasFeature } from '@/lib/config/multi-tenant'

if (hasFeature('blog')) {
  // Blog-specific code
}
```

**In Components:**
```tsx
import { FeatureGate } from '@/lib/hooks/use-institution'

<FeatureGate feature="blog">
  <BlogSection />
</FeatureGate>
```

---

## Troubleshooting

### Common Issues

**1. Migration sync fails:**
- Verify using correct MCP tool for target institution
- Check Supabase project is accessible
- Verify service role key has correct permissions

**2. MCP tool not found:**
- MCP server may not be configured for that institution
- Check Claude Code settings for MCP server configuration

**3. Schema mismatch between institutions:**
- Compare tables: `mcp__Main_Supabase_Project__list_tables()` vs `mcp__Dental_College_Supabase_Project__list_tables()`
- Apply missing migrations to sync

**4. Wrong content showing in development:**
- Verify which institution switcher was used (`npm run dev:main` vs `npm run dev:dental`)
- Check `.env.local` has correct `NEXT_PUBLIC_INSTITUTION_ID`
- Restart dev server after switching

**5. RLS policies blocking access:**
- Check functions exist: `mcp__[Institution]__execute_sql({ query: "SELECT * FROM pg_proc WHERE proname = 'is_super_admin'" })`
- Verify user has correct roles
- Check `mcp__[Institution]__get_logs({ service: "auth" })`

### Debug Commands

```typescript
// Check Supabase connection
mcp__Main_Supabase_Project__get_project_url()
mcp__Dental_College_Supabase_Project__get_project_url()

// Check for security issues
mcp__Main_Supabase_Project__get_advisors({ type: "security" })

// Check tables exist
mcp__Main_Supabase_Project__list_tables()

// Check migrations applied
mcp__Main_Supabase_Project__list_migrations()
```

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `lib/config/multi-tenant.ts` | Institution registry, feature flags |
| `lib/hooks/use-institution.ts` | React hooks for institution context |
| `scripts/switch-institution.ts` | Local dev institution switcher |
| `docs/database/main-supabase/*.sql` | Source of truth for database schema |
| `docs/MULTI-INSTITUTION-ARCHITECTURE.md` | Full architecture docs |
| `CLAUDE.md` | Project documentation with multi-institution section |

---

## Quick Reference Commands

```bash
# Local Development
npm run dev:main        # Start with Main Institution
npm run dev:dental      # Start with Dental College
npm run switch main     # Switch to Main (no server start)
npm run switch dental   # Switch to Dental (no server start)
```

```typescript
// MCP Tools - Main Supabase
mcp__Main_Supabase_Project__list_tables()
mcp__Main_Supabase_Project__apply_migration({ name: "...", query: "..." })
mcp__Main_Supabase_Project__execute_sql({ query: "..." })

// MCP Tools - Dental College Supabase
mcp__Dental_College_Supabase_Project__list_tables()
mcp__Dental_College_Supabase_Project__apply_migration({ name: "...", query: "..." })
mcp__Dental_College_Supabase_Project__execute_sql({ query: "..." })
```

---

## Additional Resources

For detailed information, see:
- `docs/database/main-supabase/README.md` - Database documentation guide
- `references/environment-variables.md` - Complete env var reference
- `references/migration-guide.md` - Detailed migration procedures
- `references/institution-checklist.md` - Full setup checklist
