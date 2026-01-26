'use client';

import { forwardRef, ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

// =============================================================================
// Types
// =============================================================================

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'subtle' | 'strong' | 'dark';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  shadow?: boolean;
}

export interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export interface GlassNavProps {
  children: ReactNode;
  position?: 'top' | 'bottom';
  className?: string;
}

export interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface GlassBadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
}

// =============================================================================
// Glass Card
// =============================================================================

export function GlassCard({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  rounded = 'xl',
  shadow = true,
}: GlassCardProps) {
  const variants = {
    default: 'bg-white/10 border-white/20',
    subtle: 'bg-white/5 border-white/10',
    strong: 'bg-white/20 border-white/30',
    dark: 'bg-black/20 border-black/10',
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const roundings = {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    '2xl': 'rounded-[32px]',
    '3xl': 'rounded-[40px]',
  };

  return (
    <div
      className={`
        ${variants[variant]}
        backdrop-blur-xl
        border
        ${paddings[padding]}
        ${roundings[rounded]}
        ${shadow ? 'shadow-xl' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// =============================================================================
// Glass Button
// =============================================================================

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    {
      children,
      variant = 'default',
      size = 'md',
      fullWidth = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: 'bg-white/10 hover:bg-white/20 text-white border-white/20',
      primary: 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 border-blue-400/30',
      success: 'bg-green-500/20 hover:bg-green-500/30 text-green-100 border-green-400/30',
      danger: 'bg-red-500/20 hover:bg-red-500/30 text-red-100 border-red-400/30',
      ghost: 'bg-transparent hover:bg-white/10 text-white border-transparent',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={`
          ${variants[variant]}
          ${sizes[size]}
          ${fullWidth ? 'w-full' : ''}
          backdrop-blur-md
          border
          rounded-xl
          font-medium
          transition-all duration-300
          hover:shadow-lg hover:scale-[1.02]
          active:scale-[0.98]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
          ${className}
        `}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GlassButton.displayName = 'GlassButton';

// =============================================================================
// Glass Input
// =============================================================================

export const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-white/80 text-sm font-medium mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3
            bg-white/10 backdrop-blur-md
            border border-white/20 rounded-xl
            text-white placeholder-white/50
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-400/50 focus:ring-red-400/30' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-300">{error}</p>
        )}
      </div>
    );
  }
);

GlassInput.displayName = 'GlassInput';

// =============================================================================
// Glass Textarea
// =============================================================================

export const GlassTextarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; error?: string }
>(({ label, error, className = '', ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-white/80 text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={`
          w-full px-4 py-3
          bg-white/10 backdrop-blur-md
          border border-white/20 rounded-xl
          text-white placeholder-white/50
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40
          disabled:opacity-50 disabled:cursor-not-allowed
          resize-none
          ${error ? 'border-red-400/50 focus:ring-red-400/30' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-300">{error}</p>
      )}
    </div>
  );
});

GlassTextarea.displayName = 'GlassTextarea';

// =============================================================================
// Glass Navigation
// =============================================================================

export function GlassNav({ children, position = 'top', className = '' }: GlassNavProps) {
  const positions = {
    top: 'top-4',
    bottom: 'bottom-4',
  };

  return (
    <nav
      className={`
        fixed left-4 right-4 z-50
        ${positions[position]}
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-2xl
        px-6 py-4
        shadow-xl
        ${className}
      `}
    >
      {children}
    </nav>
  );
}

// =============================================================================
// Glass Bottom Navigation with Items
// =============================================================================

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

interface GlassBottomNavProps {
  items: NavItem[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
}

export function GlassBottomNav({ items, activeId, onSelect, className = '' }: GlassBottomNavProps) {
  return (
    <nav
      className={`
        fixed bottom-4 left-4 right-4 z-50
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-3xl
        shadow-2xl
        ${className}
      `}
    >
      <div className="flex items-center justify-around px-4 h-16">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`
                relative flex flex-col items-center justify-center
                flex-1 py-2 min-h-[56px]
                transition-all duration-200
                ${isActive ? 'text-white scale-110' : 'text-white/60 hover:text-white/80'}
              `}
            >
              <div className="relative">
                <Icon className="w-6 h-6" />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-4 h-4 px-1 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className={`text-xs mt-1 ${isActive ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute bottom-1 w-1 h-1 bg-white rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

// =============================================================================
// Glass Modal
// =============================================================================

export function GlassModal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}: GlassModalProps) {
  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`
          relative z-10 w-full ${sizes[size]}
          bg-white/15 backdrop-blur-2xl
          border border-white/20
          rounded-3xl
          p-8
          shadow-2xl
          animate-in fade-in zoom-in-95 duration-200
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {title && (
          <h2 id="modal-title" className="text-2xl font-bold text-white mb-4">
            {title}
          </h2>
        )}

        <div className="text-white/80">{children}</div>

        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            w-8 h-8 rounded-full
            bg-white/10 hover:bg-white/20
            flex items-center justify-center
            text-white/60 hover:text-white
            transition-all duration-200
          "
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// =============================================================================
// Glass Badge
// =============================================================================

export function GlassBadge({
  children,
  variant = 'default',
  size = 'md',
}: GlassBadgeProps) {
  const variants = {
    default: 'bg-white/15 border-white/20 text-white',
    primary: 'bg-blue-500/20 border-blue-400/30 text-blue-100',
    success: 'bg-green-500/20 border-green-400/30 text-green-100',
    warning: 'bg-yellow-500/20 border-yellow-400/30 text-yellow-100',
    danger: 'bg-red-500/20 border-red-400/30 text-red-100',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={`
        inline-flex items-center
        ${variants[variant]}
        ${sizes[size]}
        backdrop-blur-sm
        border
        rounded-full
        font-medium
      `}
    >
      {children}
    </span>
  );
}

// =============================================================================
// Glass Divider
// =============================================================================

export function GlassDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full h-px bg-white/10 ${className}`} />
  );
}

// =============================================================================
// Glass Container (Full page background)
// =============================================================================

interface GlassContainerProps {
  children: ReactNode;
  background?: 'gradient' | 'dark' | 'mesh';
  className?: string;
}

export function GlassContainer({
  children,
  background = 'gradient',
  className = '',
}: GlassContainerProps) {
  const backgrounds = {
    gradient: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
    dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
    mesh: `bg-[#0f172a] 
      bg-[radial-gradient(at_40%_20%,#4f46e5_0%,transparent_50%),radial-gradient(at_80%_0%,#7c3aed_0%,transparent_50%),radial-gradient(at_0%_50%,#2563eb_0%,transparent_50%),radial-gradient(at_80%_50%,#db2777_0%,transparent_50%),radial-gradient(at_0%_100%,#0891b2_0%,transparent_50%)]`,
  };

  return (
    <div className={`min-h-screen ${backgrounds[background]} ${className}`}>
      {children}
    </div>
  );
}

// =============================================================================
// Export all components
// =============================================================================

export default {
  GlassCard,
  GlassButton,
  GlassInput,
  GlassTextarea,
  GlassNav,
  GlassBottomNav,
  GlassModal,
  GlassBadge,
  GlassDivider,
  GlassContainer,
};
