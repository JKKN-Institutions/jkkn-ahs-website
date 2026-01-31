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
        isMobile ? 'pt-14 pb-20' : 'pt-20'  // Reduced mobile top padding from pt-16 to pt-14 (56px)
      )}>
        {children}
      </main>

      {/* Mobile bottom navigation */}
      <BottomNavbar />
    </>
  );
}
