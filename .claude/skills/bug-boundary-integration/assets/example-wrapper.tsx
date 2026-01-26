/**
 * Example: Bug Reporter Wrapper with Supabase Authentication
 *
 * This is a complete, production-ready example of integrating the Bug Reporter SDK
 * with Supabase authentication in a Next.js 15+ application.
 *
 * File location: components/bug-reporter-wrapper.tsx
 */

'use client';

import { BugReporterProvider } from '@boobalan_jkkn/bug-reporter-sdk';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

interface BugReporterWrapperProps {
  children: React.ReactNode;
}

export function BugReporterWrapper({ children }: BugReporterWrapperProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    // Get initial user session
    const initializeUser = async () => {
      try {
        const { data: { user: currentUser } } = await supabase.auth.getUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initializeUser();

    // Subscribe to auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  // Optional: Show loading state while checking auth
  if (isLoading) {
    return <>{children}</>;
  }

  return (
    <BugReporterProvider
      apiKey={process.env.NEXT_PUBLIC_BUG_REPORTER_API_KEY!}
      apiUrl={process.env.NEXT_PUBLIC_BUG_REPORTER_API_URL!}
      enabled={true}
      debug={process.env.NODE_ENV === 'development'}
      userContext={
        user
          ? {
              userId: user.id,
              name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'Anonymous',
              email: user.email || undefined,
            }
          : undefined
      }
    >
      {children}
    </BugReporterProvider>
  );
}

/**
 * Usage in app/layout.tsx:
 *
 * import { BugReporterWrapper } from '@/components/bug-reporter-wrapper';
 * import { Toaster } from 'react-hot-toast';
 *
 * export default function RootLayout({
 *   children,
 * }: {
 *   children: React.ReactNode;
 * }) {
 *   return (
 *     <html lang="en">
 *       <body>
 *         <BugReporterWrapper>
 *           {children}
 *         </BugReporterWrapper>
 *         <Toaster position="top-right" />
 *       </body>
 *     </html>
 *   );
 * }
 */
