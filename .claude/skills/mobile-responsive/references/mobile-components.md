# Reusable Mobile Components

## Bottom Navigation

```tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Package, Users, Settings, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { href: '/dashboard', label: 'Home', icon: Home },
  { href: '/products', label: 'Products', icon: Package },
  { href: '/orders', label: 'Orders', icon: ShoppingCart },
  { href: '/customers', label: 'Customers', icon: Users },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50 safe-area-pb">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center py-2 px-3 min-w-[64px] min-h-[56px] justify-center',
                isActive ? 'text-primary' : 'text-gray-500'
              )}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
```

## Mobile Header

```tsx
'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, MoreVertical } from 'lucide-react';

interface MobileHeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  actions?: React.ReactNode;
  onMoreClick?: () => void;
}

export function MobileHeader({
  title,
  subtitle,
  showBack = true,
  actions,
  onMoreClick,
}: MobileHeaderProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 bg-white border-b">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3 min-w-0">
          {showBack && (
            <button
              onClick={() => router.back()}
              className="p-2 -ml-2 min-w-[44px] min-h-[44px] md:hidden rounded-lg hover:bg-gray-100"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold truncate">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm text-gray-500 truncate">{subtitle}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            {actions}
          </div>

          {/* Mobile more button */}
          {onMoreClick && (
            <button
              onClick={onMoreClick}
              className="md:hidden p-2 min-w-[44px] min-h-[44px] rounded-lg hover:bg-gray-100"
              aria-label="More options"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
```

## Mobile Action Sheet

```tsx
'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ActionSheetProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function MobileActionSheet({
  open,
  onClose,
  title,
  children,
}: ActionSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl safe-area-pb animate-slide-up"
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-4 pb-3 border-b">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 -mr-2 min-w-[44px] min-h-[44px]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="px-4 py-4 max-h-[60vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

// Action Sheet Item Component
interface ActionItemProps {
  icon?: React.ReactNode;
  label: string;
  onClick: () => void;
  destructive?: boolean;
}

export function ActionSheetItem({
  icon,
  label,
  onClick,
  destructive,
}: ActionItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-3 px-4 py-3 min-h-[52px] rounded-lg hover:bg-gray-100',
        destructive && 'text-red-600 hover:bg-red-50'
      )}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}
```

## Mobile Card List Item

```tsx
interface MobileCardProps {
  title: string;
  subtitle?: string;
  meta?: string;
  status?: {
    label: string;
    variant: 'success' | 'warning' | 'error' | 'default';
  };
  onClick?: () => void;
  actions?: React.ReactNode;
}

const statusColors = {
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  default: 'bg-gray-100 text-gray-800',
};

export function MobileCard({
  title,
  subtitle,
  meta,
  status,
  onClick,
  actions,
}: MobileCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-white rounded-lg p-4 shadow-sm border',
        onClick && 'cursor-pointer active:bg-gray-50'
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold truncate">{title}</h3>
            {status && (
              <span className={cn(
                'px-2 py-0.5 text-xs font-medium rounded-full whitespace-nowrap',
                statusColors[status.variant]
              )}>
                {status.label}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-sm text-gray-600 truncate">{subtitle}</p>
          )}
          {meta && (
            <p className="text-xs text-gray-400 mt-1">{meta}</p>
          )}
        </div>
        {actions && (
          <div className="flex-shrink-0">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
```

## Mobile Search Bar

```tsx
'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';

interface MobileSearchProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}

export function MobileSearch({
  placeholder = 'Search...',
  value: controlledValue,
  onChange,
  onSearch,
}: MobileSearchProps) {
  const [internalValue, setInternalValue] = useState('');
  const value = controlledValue ?? internalValue;

  const handleChange = (newValue: string) => {
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleClear = () => {
    handleChange('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(value);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="search"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
      )}
    </form>
  );
}
```

## Mobile Floating Action Button (FAB)

```tsx
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FABProps {
  onClick: () => void;
  icon?: React.ReactNode;
  label?: string;
  className?: string;
}

export function FloatingActionButton({
  onClick,
  icon = <Plus className="w-6 h-6" />,
  label,
  className,
}: FABProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'md:hidden fixed right-4 bottom-20 z-40',
        'bg-primary text-white shadow-lg',
        'rounded-full min-w-[56px] min-h-[56px]',
        'flex items-center justify-center gap-2',
        'active:scale-95 transition-transform',
        label && 'px-5',
        className
      )}
    >
      {icon}
      {label && <span className="font-medium">{label}</span>}
    </button>
  );
}
```

## Mobile Pull to Refresh

```tsx
'use client';

import { useState, useRef } from 'react';
import { RefreshCw } from 'lucide-react';

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
}

export function PullToRefresh({ onRefresh, children }: PullToRefreshProps) {
  const [refreshing, setRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current?.scrollTop === 0) {
      startY.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY.current === 0) return;
    const currentY = e.touches[0].clientY;
    const distance = Math.max(0, Math.min(100, currentY - startY.current));
    setPullDistance(distance);
  };

  const handleTouchEnd = async () => {
    if (pullDistance > 60 && !refreshing) {
      setRefreshing(true);
      await onRefresh();
      setRefreshing(false);
    }
    setPullDistance(0);
    startY.current = 0;
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative overflow-auto"
    >
      {/* Pull indicator */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center transition-all"
        style={{ top: pullDistance - 40, opacity: pullDistance / 60 }}
      >
        <RefreshCw
          className={cn(
            'w-6 h-6 text-gray-400',
            refreshing && 'animate-spin'
          )}
        />
      </div>

      {/* Content */}
      <div style={{ transform: `translateY(${pullDistance}px)` }}>
        {children}
      </div>
    </div>
  );
}
```

## Mobile Empty State

```tsx
interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function MobileEmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      {icon && (
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-gray-500 mb-4 max-w-xs">{description}</p>
      )}
      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-3 bg-primary text-white rounded-lg font-medium min-h-[44px]"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
```

## CSS Utilities to Add

```css
/* Add to globals.css */

/* Safe area for notched devices */
.safe-area-pb {
  padding-bottom: env(safe-area-inset-bottom, 0);
}

.safe-area-pt {
  padding-top: env(safe-area-inset-top, 0);
}

/* Animation for action sheet */
@keyframes slide-up {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}

/* Prevent text selection on touch */
.touch-none {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}

/* Improve tap highlight */
.tap-highlight-none {
  -webkit-tap-highlight-color: transparent;
}
```
