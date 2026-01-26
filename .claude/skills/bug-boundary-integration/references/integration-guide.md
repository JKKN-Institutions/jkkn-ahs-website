# Bug Boundary Integration Reference Guide

## Package Information

- **Package Name**: `@boobalan_jkkn/bug-reporter-sdk`
- **Latest Version**: 1.1.0
- **NPM Registry**: https://www.npmjs.com/package/@boobalan_jkkn/bug-reporter-sdk
- **Package Size**: 18.6 KB (86.4 KB unpacked)
- **Formats**: CJS, ESM, TypeScript definitions included

## Installation Methods

### Method 1: NPM Registry (Recommended for Production)

```bash
npm install @boobalan_jkkn/bug-reporter-sdk
```

Or using yarn:

```bash
yarn add @boobalan_jkkn/bug-reporter-sdk
```

**Troubleshooting 404 Errors:**
If you encounter "npm error 404 Not Found":

```bash
npm cache clean --force
npm install @boobalan_jkkn/bug-reporter-sdk
```

Alternative with explicit registry:

```bash
npm install @boobalan_jkkn/bug-reporter-sdk --registry=https://registry.npmjs.org/
```

### Method 2: Local File Path (Development Only)

```bash
npm install file:../packages/bug-reporter-sdk
```

### Method 3: Built Package (Development)

```bash
# Build the SDK
cd packages/bug-reporter-sdk
npm run build

# Install in project
cd your-project-directory
npm install file:path/to/packages/bug-reporter-sdk
```

## Environment Requirements

- **Next.js**: 15+ with App Router
- **React**: 19+
- **TypeScript**: 5+ (recommended)
- **Node.js**: 18+

## Environment Variables

Create or update `.env.local`:

```env
# JKKN Bug Reporter Configuration
NEXT_PUBLIC_BUG_REPORTER_API_KEY=app_your_api_key_here
NEXT_PUBLIC_BUG_REPORTER_API_URL=https://your-platform.vercel.app
```

**Security Note**: Never commit API keys to version control. Ensure `.env.local` is in `.gitignore`.

## Core Integration Patterns

### Pattern 1: Basic Next.js App Router Integration

File: `app/layout.tsx`

```typescript
import { BugReporterProvider } from '@boobalan_jkkn/bug-reporter-sdk';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BugReporterProvider
          apiKey={process.env.NEXT_PUBLIC_BUG_REPORTER_API_KEY!}
          apiUrl={process.env.NEXT_PUBLIC_BUG_REPORTER_API_URL!}
          enabled={true}
          debug={process.env.NODE_ENV === 'development'}
          userContext={{
            userId: 'user-id-here',
            name: 'John Doe',
            email: 'user@jkkn.ac.in'
          }}
        >
          {children}
        </BugReporterProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
```

### Pattern 2: Supabase Authentication Integration

Create a client wrapper component:

File: `components/bug-reporter-wrapper.tsx`

```typescript
'use client';

import { BugReporterProvider } from '@boobalan_jkkn/bug-reporter-sdk';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export function BugReporterWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <BugReporterProvider
      apiKey={process.env.NEXT_PUBLIC_BUG_REPORTER_API_KEY!}
      apiUrl={process.env.NEXT_PUBLIC_BUG_REPORTER_API_URL!}
      enabled={true}
      debug={process.env.NODE_ENV === 'development'}
      userContext={user ? {
        userId: user.id,
        name: user.user_metadata?.full_name,
        email: user.email
      } : undefined}
    >
      {children}
    </BugReporterProvider>
  );
}
```

Then update `app/layout.tsx`:

```typescript
import { BugReporterWrapper } from '@/components/bug-reporter-wrapper';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BugReporterWrapper>
          {children}
        </BugReporterWrapper>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
```

### Pattern 3: Conditional Rendering (Production/Beta Only)

```typescript
<BugReporterProvider
  apiKey={process.env.NEXT_PUBLIC_BUG_REPORTER_API_KEY!}
  apiUrl={process.env.NEXT_PUBLIC_BUG_REPORTER_API_URL!}
  enabled={
    process.env.NODE_ENV === 'production' &&
    user?.role === 'beta-tester'
  }
  debug={false}
>
  {children}
</BugReporterProvider>
```

## Advanced Features

### My Bugs Panel

Allow users to view their submitted bug reports:

```typescript
import { MyBugsPanel } from '@boobalan_jkkn/bug-reporter-sdk';

export default function ProfilePage() {
  return (
    <div>
      <h1>My Profile</h1>
      <MyBugsPanel />
    </div>
  );
}
```

### Programmatic Bug Reporting

Report bugs from error boundaries or catch blocks:

```typescript
import { useBugReporter } from '@boobalan_jkkn/bug-reporter-sdk';

function MyComponent() {
  const { apiClient } = useBugReporter();

  const handleError = async (error: Error) => {
    try {
      await apiClient?.createBugReport({
        title: 'Automatic Error Report',
        description: error.message,
        page_url: window.location.href,
        category: 'error',
        console_logs: [],
        // Screenshot is now mandatory and handled automatically
      });
    } catch (err) {
      console.error('Failed to report bug:', err);
    }
  };

  return (
    <button onClick={() => handleError(new Error('Test'))}>
      Report Error
    </button>
  );
}
```

### Custom Widget Styling

Override default styles in `globals.css` or component CSS:

```css
/* Custom floating button position */
.bug-reporter-widget {
  bottom: 2rem !important;
  right: 2rem !important;
}

/* Custom modal/widget styles */
.bug-reporter-sdk {
  font-family: 'Your Custom Font' !important;
}
```

## API Key Setup Process

1. **Sign up/Log in**: Visit the JKKN Bug Reporter platform login page
2. **Create Organization**: Create or join an organization (usually department name)
3. **Register Application**: Navigate to Applications → New Application
   - Name: Your application name
   - Slug: unique-app-slug
   - Description: Brief description
4. **Copy API Key**: Save the generated API key (format: `app_xxxxxxxxxx`)

## Features Included (v1.1.0+)

- **Floating Bug Report Button**: Bottom-right corner by default
- **MANDATORY Screenshot Capture**: Automatic screenshot on bug report (required)
- **AUTOMATIC Console Logs**: Captures console output automatically
- **User Context Tracking**: Associates bugs with authenticated users
- **Browser & System Info**: Automatic device/browser metadata collection

## Common Issues & Solutions

### Issue: Widget Not Appearing

**Possible Causes:**
- `enabled` prop is `false`
- Invalid API key
- API URL unreachable
- JavaScript errors blocking initialization

**Solutions:**
1. Verify `enabled={true}` in BugReporterProvider
2. Check API key format (should start with `app_`)
3. Verify API URL is accessible
4. Check browser console for errors

### Issue: API Key Validation Failed

**Possible Causes:**
- Incorrect API key
- Inactive application
- Wrong API URL

**Solutions:**
1. Verify API key starts with "app_"
2. Check application is active in platform
3. Ensure API URL matches platform URL
4. Try regenerating the API key

### Issue: Screenshots Not Capturing (v1.1.0+)

**Possible Causes:**
- Browser blocking html2canvas library
- Content Security Policy (CSP) restrictions
- Conflicting screenshot libraries
- Modal/overlay interference

**Solutions:**
1. Check CSP headers allow html2canvas
2. Disable conflicting screenshot tools
3. Close overlays/modals before reporting
4. Check browser console for html2canvas errors

### Issue: Console Logs Empty (v1.1.0+)

**Possible Causes:**
- Using version older than v1.1.0
- No console activity before reporting
- BugReporterProvider not wrapping app correctly

**Solutions:**
1. Update to latest version: `npm install @boobalan_jkkn/bug-reporter-sdk@latest`
2. Verify version: `npm list @boobalan_jkkn/bug-reporter-sdk`
3. Ensure BugReporterProvider wraps entire app in layout
4. Perform actions that generate console output before reporting

### Issue: NPM 404 Error

**Possible Causes:**
- Package not yet in npm registry cache
- Network/registry connectivity issues

**Solutions:**
1. Clear npm cache: `npm cache clean --force`
2. Wait 5-10 minutes if package was recently published
3. Use explicit registry: `npm install @boobalan_jkkn/bug-reporter-sdk --registry=https://registry.npmjs.org/`
4. Verify package exists: https://www.npmjs.com/package/@boobalan_jkkn/bug-reporter-sdk

## Version 1.1.0 Updates

### Breaking Changes
None - fully backward compatible

### New Features (Automatic)
- **Mandatory Screenshots**: Widget requires screenshot capture before submission
- **Automatic Console Log Capture**: All console output captured automatically
- No configuration changes needed - features work automatically

### Upgrading from Previous Versions

```bash
npm install @boobalan_jkkn/bug-reporter-sdk@latest
```

No code changes required - new features activate automatically.
