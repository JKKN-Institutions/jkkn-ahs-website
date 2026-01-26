#!/usr/bin/env node

/**
 * Bug Boundary Integration Diagnostic Script
 *
 * This script checks your Bug Reporter SDK integration for common issues
 * and provides actionable recommendations.
 *
 * Usage: node diagnose-integration.js
 */

const fs = require('fs');
const path = require('path');

const COLORS = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${COLORS[color]}${message}${COLORS.reset}`);
}

function header(message) {
  log('\n' + '='.repeat(60), 'cyan');
  log(message, 'cyan');
  log('='.repeat(60), 'cyan');
}

function checkResult(passed, message, recommendation = '') {
  if (passed) {
    log(`✓ ${message}`, 'green');
  } else {
    log(`✗ ${message}`, 'red');
    if (recommendation) {
      log(`  → ${recommendation}`, 'yellow');
    }
  }
  return passed;
}

// Check if file exists
function fileExists(filePath) {
  return fs.existsSync(path.join(process.cwd(), filePath));
}

// Read file content
function readFile(filePath) {
  try {
    return fs.readFileSync(path.join(process.cwd(), filePath), 'utf8');
  } catch (error) {
    return null;
  }
}

// Check if string contains pattern
function contains(content, pattern) {
  if (!content) return false;
  return content.includes(pattern);
}

// Main diagnostic function
function runDiagnostics() {
  header('Bug Boundary Integration Diagnostics');

  let allPassed = true;

  // 1. Check package.json
  header('1. Package Installation Check');
  const packageJsonExists = fileExists('package.json');
  allPassed &= checkResult(
    packageJsonExists,
    'package.json exists',
    'Run: npm init -y'
  );

  if (packageJsonExists) {
    const packageJson = readFile('package.json');
    const hasBugReporter = contains(packageJson, '@boobalan_jkkn/bug-reporter-sdk');
    allPassed &= checkResult(
      hasBugReporter,
      'Bug Reporter SDK installed in package.json',
      'Run: npm install @boobalan_jkkn/bug-reporter-sdk'
    );

    if (hasBugReporter) {
      // Try to detect version
      const versionMatch = packageJson.match(/@boobalan_jkkn\/bug-reporter-sdk":\s*"([^"]+)"/);
      if (versionMatch) {
        const version = versionMatch[1].replace('^', '').replace('~', '');
        const isLatest = version >= '1.1.0';
        checkResult(
          isLatest,
          `Using version ${version}`,
          'Update to latest: npm install @boobalan_jkkn/bug-reporter-sdk@latest'
        );
      }
    }

    const hasReactHotToast = contains(packageJson, 'react-hot-toast');
    allPassed &= checkResult(
      hasReactHotToast,
      'react-hot-toast installed (required for notifications)',
      'Run: npm install react-hot-toast'
    );
  }

  // 2. Check environment variables
  header('2. Environment Configuration Check');
  const envLocalExists = fileExists('.env.local');
  allPassed &= checkResult(
    envLocalExists,
    '.env.local file exists',
    'Create .env.local with Bug Reporter credentials'
  );

  if (envLocalExists) {
    const envContent = readFile('.env.local');
    const hasApiKey = contains(envContent, 'NEXT_PUBLIC_BUG_REPORTER_API_KEY');
    const hasApiUrl = contains(envContent, 'NEXT_PUBLIC_BUG_REPORTER_API_URL');

    allPassed &= checkResult(
      hasApiKey,
      'NEXT_PUBLIC_BUG_REPORTER_API_KEY configured',
      'Add: NEXT_PUBLIC_BUG_REPORTER_API_KEY=app_your_key'
    );

    allPassed &= checkResult(
      hasApiUrl,
      'NEXT_PUBLIC_BUG_REPORTER_API_URL configured',
      'Add: NEXT_PUBLIC_BUG_REPORTER_API_URL=https://your-platform.vercel.app'
    );

    if (hasApiKey) {
      const keyMatch = envContent.match(/NEXT_PUBLIC_BUG_REPORTER_API_KEY=(.+)/);
      if (keyMatch) {
        const key = keyMatch[1].trim();
        const isValidFormat = key.startsWith('app_');
        checkResult(
          isValidFormat,
          'API key has correct format (starts with app_)',
          'Verify API key from Bug Reporter platform'
        );
      }
    }
  }

  // Check .gitignore
  const gitignoreExists = fileExists('.gitignore');
  if (gitignoreExists) {
    const gitignoreContent = readFile('.gitignore');
    const envIgnored = contains(gitignoreContent, '.env.local');
    checkResult(
      envIgnored,
      '.env.local is in .gitignore',
      'Add ".env.local" to .gitignore to protect API keys'
    );
  }

  // 3. Check Next.js integration
  header('3. Next.js Integration Check');

  const appLayoutExists = fileExists('app/layout.tsx') || fileExists('app/layout.js');
  allPassed &= checkResult(
    appLayoutExists,
    'app/layout.tsx exists (Next.js App Router)',
    'This diagnostic assumes Next.js 15+ with App Router'
  );

  if (appLayoutExists) {
    const layoutPath = fileExists('app/layout.tsx') ? 'app/layout.tsx' : 'app/layout.js';
    const layoutContent = readFile(layoutPath);

    const hasBugReporterImport = contains(layoutContent, '@boobalan_jkkn/bug-reporter-sdk');
    allPassed &= checkResult(
      hasBugReporterImport,
      'BugReporterProvider imported in layout',
      'Add: import { BugReporterProvider } from "@boobalan_jkkn/bug-reporter-sdk"'
    );

    const hasProvider = contains(layoutContent, '<BugReporterProvider');
    allPassed &= checkResult(
      hasProvider,
      'BugReporterProvider component used in layout',
      'Wrap children with <BugReporterProvider>...</BugReporterProvider>'
    );

    const hasToaster = contains(layoutContent, 'Toaster');
    allPassed &= checkResult(
      hasToaster,
      'Toaster component included',
      'Add: <Toaster position="top-right" />'
    );

    if (hasProvider) {
      const hasApiKey = contains(layoutContent, 'NEXT_PUBLIC_BUG_REPORTER_API_KEY');
      const hasApiUrl = contains(layoutContent, 'NEXT_PUBLIC_BUG_REPORTER_API_URL');

      checkResult(
        hasApiKey,
        'API key prop configured',
        'Add apiKey prop to BugReporterProvider'
      );

      checkResult(
        hasApiUrl,
        'API URL prop configured',
        'Add apiUrl prop to BugReporterProvider'
      );
    }
  }

  // 4. Check for Supabase integration
  header('4. Supabase Integration Check (Optional)');

  const hasSupabase = fileExists('lib/supabase/client.ts') ||
                      fileExists('utils/supabase/client.ts') ||
                      fileExists('supabase/client.ts');

  if (hasSupabase) {
    log('  Supabase detected - checking for auth integration', 'blue');

    const wrapperExists = fileExists('components/bug-reporter-wrapper.tsx');
    checkResult(
      wrapperExists,
      'BugReporterWrapper component exists',
      'Create components/bug-reporter-wrapper.tsx for Supabase auth integration'
    );

    if (wrapperExists) {
      const wrapperContent = readFile('components/bug-reporter-wrapper.tsx');
      const hasAuthSubscription = contains(wrapperContent, 'onAuthStateChange');
      checkResult(
        hasAuthSubscription,
        'Auth state change subscription implemented',
        'Subscribe to auth changes for dynamic user context'
      );
    }
  } else {
    log('  No Supabase detected - skipping auth integration checks', 'blue');
  }

  // 5. TypeScript checks
  header('5. TypeScript Configuration (Optional)');

  const hasTsConfig = fileExists('tsconfig.json');
  if (hasTsConfig) {
    log('  TypeScript detected', 'blue');
    const tsConfig = readFile('tsconfig.json');

    // Check for strict mode (recommended)
    const hasStrictMode = contains(tsConfig, '"strict": true');
    checkResult(
      hasStrictMode,
      'TypeScript strict mode enabled (recommended)',
      'Enable "strict": true in tsconfig.json for better type safety'
    );
  } else {
    log('  No TypeScript detected - skipping TS checks', 'blue');
  }

  // Final summary
  header('Diagnostic Summary');

  if (allPassed) {
    log('✓ All critical checks passed!', 'green');
    log('\nYour Bug Boundary integration appears to be correctly configured.', 'green');
    log('\nNext steps:', 'cyan');
    log('  1. Start your development server: npm run dev');
    log('  2. Look for the floating bug button (bottom-right corner)');
    log('  3. Test bug reporting functionality');
  } else {
    log('✗ Some checks failed', 'red');
    log('\nPlease review the recommendations above and fix the issues.', 'yellow');
    log('Run this diagnostic again after making changes.', 'yellow');
  }

  log('\nFor more help, see:', 'cyan');
  log('  • Bug Reporter SDK docs: https://www.npmjs.com/package/@boobalan_jkkn/bug-reporter-sdk');
  log('  • Integration guide: .claude/skills/bug-boundary-integration/references/integration-guide.md');
}

// Run diagnostics
try {
  runDiagnostics();
} catch (error) {
  log('\n✗ Diagnostic failed with error:', 'red');
  console.error(error);
  process.exit(1);
}
