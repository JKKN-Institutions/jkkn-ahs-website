# Multi-Institution Troubleshooting Guide

Comprehensive troubleshooting guide for common issues in the JKKN multi-institution platform.

---

## Quick Diagnosis Checklist

Before diving into specific issues, run through this quick checklist:

1. **Environment Variables Set?**
   - Check Vercel dashboard for missing vars
   - Verify `NEXT_PUBLIC_INSTITUTION_ID` is correct

2. **Supabase Connection Working?**
   - Test API endpoint: `curl https://[ref].supabase.co/rest/v1/`
   - Verify anon key is correct

3. **Deployment Up-to-Date?**
   - Check last deployment time in Vercel
   - Force redeploy if needed

4. **Cache Cleared?**
   - Clear Vercel cache
   - Clear browser cache
   - Clear CDN cache

---

## Authentication Issues

### Problem: Google Sign-In Not Working

**Symptoms:**
- "Error signing in" message
- Redirect fails after Google authentication
- Stuck in auth loop

**Solutions:**

1. **Check OAuth Configuration in Supabase:**
   - Go to Authentication → Providers → Google
   - Verify Client ID and Secret are correct
   - Ensure redirect URL matches: `https://[ref].supabase.co/auth/v1/callback`

2. **Check Site URL Configuration:**
   - Go to Authentication → URL Configuration
   - Site URL must match `NEXT_PUBLIC_SITE_URL`
   - Add all redirect URLs:
     ```
     https://[domain]/auth/callback
     https://[domain]/admin
     ```

3. **Check Google Cloud Console:**
   - Authorized JavaScript origins include your domain
   - Authorized redirect URIs include Supabase callback

4. **Domain Restriction:**
   - If restricting to `@jkkn.ac.in`, verify user email domain

### Problem: User Can't Access Admin

**Symptoms:**
- Redirected to login repeatedly
- "Unauthorized" error
- Blank admin page

**Solutions:**

1. **Check User Exists:**
   ```sql
   SELECT * FROM profiles WHERE email = 'user@jkkn.ac.in';
   ```

2. **Check User Has Role:**
   ```sql
   SELECT u.email, r.name as role
   FROM profiles u
   JOIN user_roles ur ON u.id = ur.user_id
   JOIN roles r ON ur.role_id = r.id
   WHERE u.email = 'user@jkkn.ac.in';
   ```

3. **Check Approved Email:**
   ```sql
   SELECT * FROM approved_emails WHERE email = 'user@jkkn.ac.in';
   ```

4. **Assign Role if Missing:**
   ```sql
   INSERT INTO user_roles (user_id, role_id)
   SELECT p.id, r.id
   FROM profiles p, roles r
   WHERE p.email = 'user@jkkn.ac.in'
   AND r.name = 'member';
   ```

### Problem: Session Expires Immediately

**Symptoms:**
- Logged out after seconds
- Middleware redirect loop

**Solutions:**

1. **Check Cookies:**
   - Verify cookies are being set
   - Check SameSite and Secure flags

2. **Check Middleware:**
   - Ensure `middleware.ts` handles session refresh
   - Verify Supabase SSR client is configured correctly

3. **Check Site URL:**
   - Cookie domain must match site domain
   - `NEXT_PUBLIC_SITE_URL` must be correct

---

## Content & Data Issues

### Problem: Wrong Institution Data Showing

**Symptoms:**
- Content from another institution appears
- Wrong branding/logo
- Mixed data

**Solutions:**

1. **Verify Environment Variables:**
   ```bash
   # In Vercel, check these are correct:
   NEXT_PUBLIC_INSTITUTION_ID
   NEXT_PUBLIC_SUPABASE_URL
   ```

2. **Check Supabase Project:**
   - Ensure URL points to correct project
   - Verify data exists in correct database

3. **Clear All Caches:**
   ```bash
   # Vercel
   vercel --force

   # Browser
   Ctrl+Shift+R (hard refresh)
   ```

4. **Verify Build:**
   - Redeploy from Vercel dashboard
   - Check build logs for env var injection

### Problem: Data Not Saving

**Symptoms:**
- Changes don't persist
- No error shown but data lost
- Form submission appears to work

**Solutions:**

1. **Check RLS Policies:**
   ```sql
   -- Check if user has permission
   SELECT has_permission(
     '[user-uuid]',
     'module:resource:action'
   );
   ```

2. **Check Supabase Logs:**
   - Go to Supabase Dashboard → Logs
   - Look for INSERT/UPDATE errors
   - Check for RLS policy violations

3. **Verify Server Action:**
   - Check browser Network tab for action response
   - Look for error in response payload

4. **Check Revalidation:**
   - Ensure `revalidatePath()` or `revalidateTag()` called
   - Data might be saved but cache not updated

### Problem: Images Not Loading

**Symptoms:**
- Broken image icons
- 404 on image URLs
- Slow image loading

**Solutions:**

1. **Check Storage Bucket:**
   - Verify bucket exists in Supabase
   - Check bucket is public (if needed)
   - Verify file was uploaded

2. **Check Storage Policies:**
   ```sql
   -- Check storage policies
   SELECT * FROM storage.policies
   WHERE bucket_id = 'media';
   ```

3. **Check URL Format:**
   - Should be: `https://[ref].supabase.co/storage/v1/object/public/[bucket]/[path]`
   - Verify bucket name matches

4. **Check CORS:**
   - Supabase Storage has CORS enabled by default
   - If custom headers needed, configure in project settings

---

## Deployment Issues

### Problem: Build Fails on Vercel

**Symptoms:**
- Deployment fails
- TypeScript errors
- Module not found

**Solutions:**

1. **Check Build Logs:**
   - Go to Vercel → Deployments → Failed → View Logs
   - Look for specific error message

2. **Common TypeScript Errors:**
   ```bash
   # Run locally to see errors
   npm run build
   ```

3. **Environment Variables:**
   - Some builds fail if env vars missing
   - Add placeholder values if needed for build

4. **Node Version:**
   - Check Vercel uses correct Node version
   - Add to `package.json`:
     ```json
     "engines": { "node": ">=18" }
     ```

### Problem: Deployment Succeeds But Site Broken

**Symptoms:**
- 500 errors
- White screen
- Hydration errors

**Solutions:**

1. **Check Runtime Logs:**
   - Vercel → Functions → View Logs
   - Look for runtime errors

2. **Check Environment Variables:**
   - All required vars present?
   - Values correct for this environment?

3. **Hydration Errors:**
   - Usually server/client mismatch
   - Check for date/time rendering
   - Check for random values

4. **Force Clean Deploy:**
   ```bash
   vercel --force
   ```

### Problem: Domain Not Working

**Symptoms:**
- DNS not resolving
- SSL certificate error
- Wrong site showing

**Solutions:**

1. **Check DNS Records:**
   ```bash
   # Check CNAME
   dig [institution].jkkn.ac.in CNAME

   # Check A record
   dig [institution].jkkn.ac.in A
   ```

2. **Verify Vercel Domain:**
   - Go to Project Settings → Domains
   - Status should show "Valid"
   - If "Invalid", follow Vercel's instructions

3. **Wait for Propagation:**
   - DNS changes take 5-30 minutes
   - Some ISPs cache longer
   - Test with: `https://dnschecker.org`

4. **SSL Issues:**
   - Vercel auto-provisions SSL
   - If failing, remove and re-add domain

---

## Migration Issues

### Problem: Migration Sync Fails

**Symptoms:**
- Script exits with error
- Some institutions not synced
- SQL errors

**Solutions:**

1. **Check Credentials:**
   ```bash
   # Verify .env.institutions
   cat .env.institutions | grep DENTAL
   ```

2. **Test Single Institution:**
   ```bash
   npm run db:migrate -- --institution=dental --verbose
   ```

3. **Check SQL Syntax:**
   - Open migration file
   - Test SQL in Supabase Dashboard SQL Editor
   - Look for syntax errors

4. **Check Dependencies:**
   - Tables might depend on others
   - Run migrations in order
   - Check foreign key references

### Problem: Tables Missing After Migration

**Symptoms:**
- `schema_migrations` shows version
- But table doesn't exist
- Foreign key errors

**Solutions:**

1. **Check Migration Log:**
   ```sql
   SELECT * FROM schema_migrations
   ORDER BY version DESC;
   ```

2. **Re-run Migration:**
   ```sql
   -- Remove version record
   DELETE FROM schema_migrations
   WHERE version = '007';
   ```
   Then re-run sync.

3. **Check for Errors in Migration:**
   - Transaction might have rolled back
   - Check for constraint violations

### Problem: Different Schemas Across Institutions

**Symptoms:**
- Feature works on one institution
- Fails on another
- Missing columns/tables

**Solutions:**

1. **Run Dry Run:**
   ```bash
   npm run db:migrate:dry
   ```
   This shows which migrations are pending per institution.

2. **Sync All:**
   ```bash
   npm run db:migrate:all
   ```

3. **Manual Check:**
   Compare tables across Supabase dashboards.

---

## Performance Issues

### Problem: Slow Page Loads

**Symptoms:**
- Pages take >3s to load
- Spinner shows for long time
- Poor Core Web Vitals

**Solutions:**

1. **Check Query Performance:**
   - Supabase Dashboard → Database → Query Performance
   - Look for slow queries

2. **Add Indexes:**
   ```sql
   CREATE INDEX CONCURRENTLY idx_table_column
   ON table_name(column_name);
   ```

3. **Optimize Images:**
   - Use next/image
   - Enable WebP conversion
   - Set appropriate sizes

4. **Enable Caching:**
   - Use Next.js caching
   - Set appropriate staleTime in React Query

### Problem: Real-time Not Working

**Symptoms:**
- Changes don't appear immediately
- Need to refresh page
- Subscription errors in console

**Solutions:**

1. **Check Realtime Enabled:**
   - Supabase Dashboard → Database → Replication
   - Enable realtime for required tables

2. **Check Subscription Code:**
   ```typescript
   // Verify channel is subscribed
   const channel = supabase.channel('name')
     .on('postgres_changes', { ... })
     .subscribe((status) => {
       console.log('Subscription status:', status)
     })
   ```

3. **Check RLS:**
   - Realtime respects RLS
   - User might not have permission to see changes

---

## SEO Issues

### Problem: Wrong Meta Tags

**Symptoms:**
- Social media preview shows wrong data
- Search results show wrong title
- Open Graph not working

**Solutions:**

1. **Check Database Settings:**
   ```sql
   SELECT category, data
   FROM settings
   WHERE category IN ('general', 'seo');
   ```

2. **Check Page Source:**
   - View source (Ctrl+U)
   - Search for `<meta` tags
   - Verify og: tags present

3. **Clear Cache:**
   - Redeploy to update metadata
   - Use social media debuggers:
     - Facebook: https://developers.facebook.com/tools/debug/
     - Twitter: https://cards-dev.twitter.com/validator

### Problem: Sitemap Not Generating

**Symptoms:**
- `/sitemap.xml` returns 404
- Google can't find pages
- Indexing issues

**Solutions:**

1. **Check Sitemap Route:**
   - Verify `app/sitemap.ts` exists
   - Check for errors in generation

2. **Test Locally:**
   ```bash
   curl http://localhost:3000/sitemap.xml
   ```

3. **Submit to Search Console:**
   - Add property for domain
   - Submit sitemap URL
   - Check for crawl errors

---

## Emergency Procedures

### Complete Institution Reset

If an institution is completely broken:

1. **Backup Data First:**
   ```bash
   # Export via Supabase Dashboard
   # Or use pg_dump
   ```

2. **Reset Supabase Project:**
   - Create new project (or reset database)
   - Apply all migrations fresh
   - Restore data if needed

3. **Redeploy Vercel:**
   - Force deploy with cache clear
   - Verify env vars

### Rollback to Previous Version

If new deployment broke things:

1. **Vercel Rollback:**
   - Go to Deployments
   - Find last working deployment
   - Click "..." → "Promote to Production"

2. **Database Rollback:**
   - Execute rollback SQL
   - Remove migration version from `schema_migrations`

### Contact Support

- **Supabase:** support@supabase.io or Discord
- **Vercel:** support@vercel.com or Discord
- **Internal:** Create issue on GitHub repository
