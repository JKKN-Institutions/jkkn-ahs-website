# Database Migration Guide

Comprehensive guide for creating, testing, and syncing database migrations across all JKKN institution Supabase projects.

---

## Migration Philosophy

### Core Principles

1. **Schema Parity**: All institutions share identical database schemas
2. **Data Independence**: Each institution has its own data
3. **Sequential Versioning**: Migrations apply in order
4. **Idempotency**: Safe to run multiple times
5. **Atomic Changes**: Each migration is a complete unit

### Migration Naming Convention

```
{version}_{description}.sql

Examples:
001_initial_schema.sql
002_add_user_profiles.sql
003_create_cms_tables.sql
004_add_rls_policies.sql
005_fix_foreign_keys.sql
```

---

## Creating Migrations

### Step 1: Create Migration File

```bash
# Create new migration file
touch supabase/migrations/007_add_new_feature.sql
```

### Step 2: Write Migration SQL

```sql
-- Migration: 007_add_new_feature
-- Description: Add support for new feature X
-- Author: [Your Name]
-- Date: [YYYY-MM-DD]

-- =========================================
-- CREATE TABLES
-- =========================================

CREATE TABLE IF NOT EXISTS feature_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    metadata JSONB DEFAULT '{}',
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add index for common queries
CREATE INDEX IF NOT EXISTS idx_feature_items_status ON feature_items(status);
CREATE INDEX IF NOT EXISTS idx_feature_items_created_by ON feature_items(created_by);

-- =========================================
-- ROW LEVEL SECURITY
-- =========================================

ALTER TABLE feature_items ENABLE ROW LEVEL SECURITY;

-- Public can view published items
CREATE POLICY "Public can view published items"
    ON feature_items
    FOR SELECT
    USING (status = 'published');

-- Authenticated users can view all items
CREATE POLICY "Authenticated users can view all"
    ON feature_items
    FOR SELECT
    TO authenticated
    USING (true);

-- Users can insert their own items
CREATE POLICY "Users can create items"
    ON feature_items
    FOR INSERT
    TO authenticated
    WITH CHECK (created_by = auth.uid());

-- Users can update their own items
CREATE POLICY "Users can update own items"
    ON feature_items
    FOR UPDATE
    TO authenticated
    USING (created_by = auth.uid())
    WITH CHECK (created_by = auth.uid());

-- Admins can do everything (via has_permission function)
CREATE POLICY "Admins have full access"
    ON feature_items
    FOR ALL
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE profiles.id = auth.uid()
            AND has_permission(auth.uid(), 'features:items:manage')
        )
    );

-- =========================================
-- TRIGGERS
-- =========================================

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_feature_items_updated_at
    BEFORE UPDATE ON feature_items
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =========================================
-- ROLLBACK (commented for reference)
-- =========================================

-- DROP TRIGGER IF EXISTS update_feature_items_updated_at ON feature_items;
-- DROP TABLE IF EXISTS feature_items;
```

### Step 3: Test on Development Database

```bash
# Apply to main Supabase project first
mcp__supabase__apply_migration

# Verify tables created
mcp__supabase__list_tables

# Test RLS policies
mcp__supabase__execute_sql
```

---

## Syncing Migrations

### Automatic Sync (Recommended)

Push to GitHub and let GitHub Actions handle sync:

```bash
git add supabase/migrations/
git commit -m "Add migration: 007_add_new_feature"
git push origin main
```

The workflow at `.github/workflows/sync-migrations.yml` will:
1. Detect changes in `supabase/migrations/`
2. Run sync script for all institutions
3. Report success/failure

### Manual Sync

#### All Institutions

```bash
npm run db:migrate:all
```

#### Preview Changes (Dry Run)

```bash
npm run db:migrate:dry
```

#### Specific Institution

```bash
npm run db:migrate -- --institution=dental
npm run db:migrate -- --institution=arts-science
npm run db:migrate -- --institution=engineering
```

#### From Specific Migration

```bash
# Apply only migrations from version 005 onwards
npm run db:migrate -- --from=005
```

#### Verbose Mode

```bash
npm run db:migrate:all -- --verbose
```

---

## Migration Tracking

### How Tracking Works

Each Supabase project has a `schema_migrations` table:

```sql
CREATE TABLE schema_migrations (
    version VARCHAR(14) PRIMARY KEY,
    applied_at TIMESTAMPTZ DEFAULT NOW()
);
```

When a migration is applied:
1. SQL is executed
2. Version is recorded in `schema_migrations`
3. Future runs skip already-applied migrations

### Checking Applied Migrations

```sql
-- Via Supabase MCP
SELECT version, applied_at
FROM schema_migrations
ORDER BY version;
```

Or use Supabase Dashboard → SQL Editor.

---

## Complex Migrations

### Data Migrations

When migrating data, never hardcode IDs:

```sql
-- WRONG: Hardcoded IDs break across databases
INSERT INTO permissions (id, name) VALUES
    ('123e4567-e89b-12d3-a456-426614174000', 'admin');

-- CORRECT: Generate IDs dynamically
INSERT INTO permissions (name, description)
SELECT 'features:manage', 'Manage feature items'
WHERE NOT EXISTS (
    SELECT 1 FROM permissions WHERE name = 'features:manage'
);
```

### Multi-Statement Transactions

```sql
BEGIN;

-- Create table
CREATE TABLE temp_data AS
SELECT * FROM old_data WHERE condition;

-- Transform data
UPDATE temp_data SET field = transform(field);

-- Replace original
DROP TABLE old_data;
ALTER TABLE temp_data RENAME TO old_data;

COMMIT;
```

### Adding Columns to Large Tables

```sql
-- For large tables, add columns without defaults first
ALTER TABLE large_table ADD COLUMN new_field TEXT;

-- Then backfill in batches (if needed)
UPDATE large_table
SET new_field = compute_value()
WHERE new_field IS NULL
LIMIT 10000;

-- Finally add default for new rows
ALTER TABLE large_table
ALTER COLUMN new_field SET DEFAULT 'default_value';
```

### Dropping Columns Safely

```sql
-- Step 1: Remove from application code first
-- Step 2: In next deployment, drop column
ALTER TABLE table_name DROP COLUMN IF EXISTS old_column;
```

---

## Rollback Procedures

### Manual Rollback

If a migration fails, manually reverse changes:

```sql
-- Execute rollback SQL
DROP TABLE IF EXISTS feature_items;
DELETE FROM schema_migrations WHERE version = '007';
```

### Rollback Script Pattern

Include rollback in migration file as comments:

```sql
-- MIGRATION
CREATE TABLE new_table (...);

/*
-- ROLLBACK
DROP TABLE IF EXISTS new_table;
DELETE FROM schema_migrations WHERE version = '007';
*/
```

### Emergency Recovery

If sync fails mid-way:

1. Identify failed institution
2. Check its `schema_migrations` table
3. Manually apply remaining migrations
4. Or rollback and retry

```bash
# Check specific institution
npm run db:migrate -- --institution=dental --dry-run
```

---

## Best Practices

### DO

- Test migrations locally first
- Use `IF NOT EXISTS` / `IF EXISTS` clauses
- Add appropriate indexes
- Include RLS policies for new tables
- Add comments explaining complex logic
- Keep migrations small and focused
- Use transactions for related changes

### DON'T

- Modify existing migrations (create new ones)
- Hardcode UUIDs or IDs
- Drop tables without backup plan
- Add constraints that might fail on existing data
- Skip testing before sync

### Code Review Checklist

- [ ] Migration creates tables with proper defaults
- [ ] RLS policies are comprehensive
- [ ] Indexes added for common queries
- [ ] Foreign keys have appropriate ON DELETE
- [ ] Rollback procedure documented
- [ ] No hardcoded IDs
- [ ] Tested on development database
- [ ] TypeScript types updated

---

## Generating TypeScript Types

After schema changes, regenerate types:

```bash
# Via Supabase MCP
mcp__supabase__generate_typescript_types
```

This updates `lib/supabase/database.types.ts` with current schema.

---

## Troubleshooting

### Migration Not Applying

**Symptom:** Migration shows as pending but doesn't apply

**Check:**
1. Valid SQL syntax
2. No conflicting constraints
3. Service role key has permissions

### Migration Applied But Table Missing

**Symptom:** `schema_migrations` has version but table doesn't exist

**Cause:** Migration failed after version was recorded

**Fix:**
```sql
-- Remove version record
DELETE FROM schema_migrations WHERE version = '007';

-- Fix migration SQL and re-apply
```

### Sync Script Authentication Error

**Symptom:** `Error: Invalid API key`

**Check:**
1. `.env.institutions` has correct credentials
2. Service role key (not anon key)
3. Supabase project is active

### Constraint Violations

**Symptom:** `violates foreign key constraint`

**Fix:**
1. Check data dependencies
2. Add migration to clean data first
3. Or use `ON DELETE CASCADE` if appropriate
