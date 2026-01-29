'use client';

import { BottomNavbar } from "@/components/BottomNav";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Mobile-only header with logo */}
      <MobileHeader />

      <main className={cn(
        'min-h-screen bg-background',
        isMobile ? 'pt-16 pb-20' : 'pt-0'  // Top padding for mobile header, bottom padding for navbar
      )}>
        {children}
      </main>

      {/* Mobile bottom navigation */}
      <BottomNavbar />
    </>
  );
}
