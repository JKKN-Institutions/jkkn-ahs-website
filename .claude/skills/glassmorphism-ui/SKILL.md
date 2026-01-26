---
name: glassmorphism-ui
description: Create modern glassmorphism UI components with frosted glass effects for React, Next.js, and HTML/CSS applications. This skill should be used when building transparent, blurred glass-like UI elements including cards, modals, navigation bars, buttons, and form inputs. Supports Tailwind CSS and vanilla CSS with accessibility considerations.
---

# Glassmorphism UI

## Overview

This skill provides comprehensive guidance and ready-to-use components for implementing glassmorphism design patterns. Glassmorphism creates a frosted glass effect using background blur, transparency, and subtle borders to achieve a modern, layered aesthetic.

## When to Use This Skill

- Building modern UI with frosted glass effects
- Creating transparent overlays, modals, or cards
- Designing floating navigation bars or sidebars
- Implementing glass-style buttons, inputs, or badges
- Adding depth and layering to dark or gradient backgrounds

## Core Glassmorphism Properties

### Essential CSS Properties

```css
.glass {
  /* Background with transparency */
  background: rgba(255, 255, 255, 0.1);
  
  /* Frosted blur effect */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  
  /* Subtle border for definition */
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  /* Rounded corners */
  border-radius: 16px;
  
  /* Optional: subtle shadow for depth */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

### Tailwind CSS Classes

```html
<div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
  <!-- Glass content -->
</div>
```

### Blur Intensity Guide

| Effect | CSS | Tailwind | Use Case |
|--------|-----|----------|----------|
| Subtle | `blur(4px)` | `backdrop-blur-sm` | Light overlay |
| Light | `blur(8px)` | `backdrop-blur` | Cards, badges |
| Medium | `blur(12px)` | `backdrop-blur-md` | Modals, panels |
| Strong | `blur(16px)` | `backdrop-blur-lg` | Navigation bars |
| Heavy | `blur(24px)` | `backdrop-blur-xl` | Full overlays |

### Transparency Levels

| Style | Background | Tailwind | Effect |
|-------|------------|----------|--------|
| Ultra Light | `rgba(255,255,255,0.05)` | `bg-white/5` | Barely visible |
| Light | `rgba(255,255,255,0.1)` | `bg-white/10` | Subtle glass |
| Medium | `rgba(255,255,255,0.2)` | `bg-white/20` | Standard glass |
| Strong | `rgba(255,255,255,0.3)` | `bg-white/30` | Prominent glass |
| Dark Glass | `rgba(0,0,0,0.2)` | `bg-black/20` | Dark mode glass |

## Quick Start Components

### Glass Card

```tsx
function GlassCard({ children, className = '' }) {
  return (
    <div className={`
      bg-white/10 backdrop-blur-xl 
      border border-white/20 
      rounded-2xl p-6
      shadow-xl
      ${className}
    `}>
      {children}
    </div>
  );
}
```

### Glass Button

```tsx
function GlassButton({ children, onClick, variant = 'default' }) {
  const variants = {
    default: 'bg-white/10 hover:bg-white/20 text-white',
    primary: 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-100',
    success: 'bg-green-500/20 hover:bg-green-500/30 text-green-100',
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${variants[variant]}
        backdrop-blur-md
        border border-white/20
        rounded-xl px-6 py-3
        font-medium
        transition-all duration-300
        hover:shadow-lg hover:scale-105
        active:scale-95
      `}
    >
      {children}
    </button>
  );
}
```

### Glass Input

```tsx
function GlassInput({ placeholder, type = 'text', ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full px-4 py-3
        bg-white/10 backdrop-blur-md
        border border-white/20 rounded-xl
        text-white placeholder-white/50
        focus:outline-none focus:ring-2 focus:ring-white/30
        focus:border-white/40
        transition-all duration-300
      "
      {...props}
    />
  );
}
```

### Glass Navigation Bar (Floating Rounded)

```tsx
function GlassNavBar({ children }) {
  return (
    <nav className="
      fixed top-4 left-4 right-4 z-50
      bg-white/10 backdrop-blur-xl
      border border-white/20
      rounded-2xl
      px-6 py-4
      shadow-xl
    ">
      {children}
    </nav>
  );
}
```

### Floating Glass Bottom Nav

```tsx
function GlassBottomNav({ items, activeId, onSelect }) {
  return (
    <nav className="
      fixed bottom-4 left-4 right-4 z-50
      bg-white/10 backdrop-blur-xl
      border border-white/20
      rounded-3xl
      shadow-2xl
    ">
      <div className="flex items-center justify-around px-4 h-16">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`
              flex flex-col items-center justify-center
              flex-1 py-2 transition-all duration-200
              ${activeId === item.id 
                ? 'text-white scale-110' 
                : 'text-white/60 hover:text-white/80'}
            `}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
```

### Glass Modal

```tsx
function GlassModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="
        relative z-10
        bg-white/15 backdrop-blur-2xl
        border border-white/20
        rounded-3xl
        p-8 max-w-md w-full
        shadow-2xl
      ">
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        <div className="text-white/80">{children}</div>
        <button
          onClick={onClose}
          className="
            mt-6 w-full py-3
            bg-white/10 hover:bg-white/20
            border border-white/20
            rounded-xl text-white font-medium
            transition-all duration-300
          "
        >
          Close
        </button>
      </div>
    </div>
  );
}
```

## Color Schemes

### Light Glass (Dark Backgrounds)

```css
.glass-light {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}
```

### Dark Glass (Light Backgrounds)

```css
.glass-dark {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #1a1a1a;
}
```

### Colored Glass

```css
.glass-blue {
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.glass-purple {
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.glass-green {
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.3);
}
```

## Background Requirements

Glassmorphism works best with colorful or gradient backgrounds:

```css
/* Gradient background for best glass effect */
.glass-background {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Dark gradient */
.dark-glass-background {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

/* Mesh gradient */
.mesh-background {
  background: 
    radial-gradient(at 40% 20%, #4f46e5 0%, transparent 50%),
    radial-gradient(at 80% 0%, #7c3aed 0%, transparent 50%),
    radial-gradient(at 0% 50%, #2563eb 0%, transparent 50%),
    radial-gradient(at 80% 50%, #db2777 0%, transparent 50%),
    radial-gradient(at 0% 100%, #0891b2 0%, transparent 50%),
    #0f172a;
}
```

## Tailwind Configuration

To extend Tailwind with custom glass utilities:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          medium: 'rgba(255, 255, 255, 0.2)',
          strong: 'rgba(255, 255, 255, 0.3)',
          dark: 'rgba(0, 0, 0, 0.1)',
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
};
```

## Accessibility Considerations

1. **Contrast**: Ensure text has sufficient contrast (4.5:1 for normal text)
2. **Focus States**: Use visible focus rings that stand out against glass
3. **Reduced Motion**: Respect `prefers-reduced-motion` for animations
4. **Background Fallback**: Provide solid color fallback for older browsers

```css
/* Accessibility-friendly glass */
.glass-accessible {
  background: rgba(0, 0, 0, 0.7); /* Fallback */
  color: white;
}

@supports (backdrop-filter: blur(12px)) {
  .glass-accessible {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
  }
}

/* Focus state */
.glass-button:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .glass-animated {
    transition: none;
  }
}
```

## Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | Full 76+ | Full support |
| Firefox | Full 103+ | Full support |
| Safari | Full 9+ | Requires `-webkit-` prefix |
| Edge | Full 79+ | Full support |
| iOS Safari | Full 9+ | Requires `-webkit-` prefix |

Always include the `-webkit-backdrop-filter` prefix for Safari:

```css
.glass {
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}
```

## Resources

### References

- `references/design-principles.md` - Deep dive into glassmorphism theory and best practices
- `references/accessibility.md` - Comprehensive accessibility guidelines

### Assets

- `assets/components/` - Ready-to-use React and HTML components
- `assets/styles/` - CSS utility classes and Tailwind extensions
