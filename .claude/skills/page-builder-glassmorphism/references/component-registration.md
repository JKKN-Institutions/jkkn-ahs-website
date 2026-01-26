# Component Registration

How to register glass components in the CMS component registry.

## Add to `lib/cms/component-registry.ts`

### GlassCard Registration

```typescript
import { GlassCard } from '@/components/cms-blocks/layout/glass-card'
import { GlassCardPropsSchema } from './registry-types'

// Add to REGISTRY object
GlassCard: {
  name: 'GlassCard',
  displayName: 'Glass Card',
  category: 'layout',
  description: 'A frosted glass card with blur effect, customizable opacity, and optional glow',
  icon: 'Square',
  component: GlassCard,
  propsSchema: GlassCardPropsSchema,
  defaultProps: {
    variant: 'light',
    blur: 'lg',
    colorTint: 'none',
    hover: true,
    glow: false,
    borderRadius: 'lg',
    padding: 'md',
  },
  supportsChildren: true,
  isFullWidth: false,
  keywords: ['glass', 'frost', 'blur', 'card', 'glassmorphism', 'modern', 'transparent'],
  editableProps: [
    { name: 'variant', label: 'Glass Variant', type: 'enum', options: ['light', 'dark', 'subtle', 'strong', 'dark-elegant', 'gradient', 'brand'] },
    { name: 'blur', label: 'Blur Level', type: 'enum', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] },
    { name: 'colorTint', label: 'Color Tint', type: 'enum', options: ['none', 'blue', 'purple', 'green', 'cyan', 'jkkn-green', 'jkkn-yellow'] },
    { name: 'hover', label: 'Hover Effect', type: 'boolean' },
    { name: 'glow', label: 'Enable Glow', type: 'boolean' },
    { name: 'glowColor', label: 'Glow Color', type: 'color' },
    { name: 'borderRadius', label: 'Border Radius', type: 'enum', options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'] },
    { name: 'padding', label: 'Padding', type: 'enum', options: ['none', 'sm', 'md', 'lg', 'xl'] },
    { name: 'title', label: 'Title', type: 'string' },
    { name: 'description', label: 'Description', type: 'string', multiline: true },
  ],
},
```

### GlassSection Registration

```typescript
import { GlassSection } from '@/components/cms-blocks/layout/glass-section'
import { GlassSectionPropsSchema } from './registry-types'

GlassSection: {
  name: 'GlassSection',
  displayName: 'Glass Section',
  category: 'layout',
  description: 'A full-width section with glassmorphism background effect',
  icon: 'Layers',
  component: GlassSection,
  propsSchema: GlassSectionPropsSchema,
  defaultProps: {
    variant: 'subtle',
    blur: 'lg',
    colorTint: 'none',
    overlayOpacity: 10,
    fullWidth: true,
    minHeight: 'auto',
    padding: 'lg',
  },
  supportsChildren: true,
  isFullWidth: true,
  keywords: ['glass', 'section', 'blur', 'container', 'wrapper', 'transparent'],
  editableProps: [
    { name: 'variant', label: 'Glass Variant', type: 'enum', options: ['light', 'dark', 'subtle', 'strong'] },
    { name: 'blur', label: 'Blur Level', type: 'enum', options: ['sm', 'md', 'lg', 'xl'] },
    { name: 'colorTint', label: 'Color Tint', type: 'enum', options: ['none', 'jkkn-green', 'jkkn-yellow', 'blue', 'purple'] },
    { name: 'overlayOpacity', label: 'Overlay Opacity', type: 'number' },
    { name: 'fullWidth', label: 'Full Width', type: 'boolean' },
    { name: 'minHeight', label: 'Minimum Height', type: 'string' },
    { name: 'padding', label: 'Padding', type: 'enum', options: ['none', 'sm', 'md', 'lg', 'xl'] },
  ],
},
```

### GlassBadge Registration

```typescript
import { GlassBadge } from '@/components/cms-blocks/layout/glass-badge'
import { GlassBadgePropsSchema } from './registry-types'

GlassBadge: {
  name: 'GlassBadge',
  displayName: 'Glass Badge',
  category: 'layout',
  description: 'A small glass pill/badge for status indicators or labels',
  icon: 'Tag',
  component: GlassBadge,
  propsSchema: GlassBadgePropsSchema,
  defaultProps: {
    text: 'Badge',
    variant: 'light',
    size: 'md',
  },
  supportsChildren: false,
  isFullWidth: false,
  keywords: ['badge', 'tag', 'pill', 'glass', 'label', 'status'],
  editableProps: [
    { name: 'text', label: 'Text', type: 'string', required: true },
    { name: 'variant', label: 'Variant', type: 'enum', options: ['light', 'dark', 'colored'] },
    { name: 'color', label: 'Color', type: 'color' },
    { name: 'size', label: 'Size', type: 'enum', options: ['sm', 'md', 'lg'] },
  ],
},
```

### GlassNav Registration

```typescript
import { GlassNav } from '@/components/cms-blocks/layout/glass-nav'
import { GlassNavPropsSchema } from './registry-types'

GlassNav: {
  name: 'GlassNav',
  displayName: 'Glass Navigation',
  category: 'layout',
  description: 'A glassmorphism navigation bar',
  icon: 'Menu',
  component: GlassNav,
  propsSchema: GlassNavPropsSchema,
  defaultProps: {
    position: 'top',
    variant: 'light',
    blur: 'xl',
    sticky: true,
    showBorder: true,
  },
  supportsChildren: true,
  isFullWidth: true,
  keywords: ['nav', 'navigation', 'menu', 'header', 'glass', 'sticky'],
  editableProps: [
    { name: 'position', label: 'Position', type: 'enum', options: ['top', 'bottom', 'floating'] },
    { name: 'variant', label: 'Variant', type: 'enum', options: ['light', 'dark'] },
    { name: 'blur', label: 'Blur Level', type: 'enum', options: ['md', 'lg', 'xl'] },
    { name: 'sticky', label: 'Sticky', type: 'boolean' },
    { name: 'showBorder', label: 'Show Border', type: 'boolean' },
  ],
},
```

## GlassCard Component Implementation

```typescript
// components/cms-blocks/layout/glass-card.tsx
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import type { z } from 'zod'
import type { GlassCardPropsSchema } from '@/lib/cms/registry-types'

type GlassCardProps = z.infer<typeof GlassCardPropsSchema> & {
  children?: React.ReactNode
  className?: string
}

const BLUR_VALUES = {
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  '3xl': '40px',
}

const PADDING_VALUES = {
  none: '0',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
}

const RADIUS_VALUES = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  full: '9999px',
}

const TINT_COLORS: Record<string, string> = {
  none: 'transparent',
  blue: 'rgba(59, 130, 246, 0.15)',
  purple: 'rgba(139, 92, 246, 0.15)',
  green: 'rgba(34, 197, 94, 0.15)',
  cyan: 'rgba(6, 182, 212, 0.15)',
  'jkkn-green': 'rgba(11, 109, 65, 0.15)',
  'jkkn-yellow': 'rgba(255, 222, 89, 0.15)',
}

export function GlassCard({
  variant = 'light',
  blur = 'lg',
  colorTint = 'none',
  hover = true,
  glow = false,
  glowColor = '#0b6d41',
  borderRadius = 'lg',
  padding = 'md',
  title,
  description,
  children,
  className,
}: GlassCardProps) {
  const bgColor = variant === 'dark'
    ? 'rgba(0, 0, 0, 0.15)'
    : variant === 'strong'
    ? 'rgba(255, 255, 255, 0.25)'
    : variant === 'subtle'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.15)'

  const tintColor = TINT_COLORS[colorTint] || 'transparent'

  return (
    <div
      className={cn(
        'relative overflow-hidden transition-all duration-300',
        hover && 'hover:scale-[1.02] hover:shadow-xl',
        className
      )}
      style={{
        backdropFilter: `blur(${BLUR_VALUES[blur]})`,
        WebkitBackdropFilter: `blur(${BLUR_VALUES[blur]})`,
        backgroundColor: bgColor,
        background: colorTint !== 'none'
          ? `linear-gradient(135deg, ${bgColor}, ${tintColor})`
          : bgColor,
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: RADIUS_VALUES[borderRadius],
        padding: PADDING_VALUES[padding],
        boxShadow: glow
          ? `0 0 20px ${glowColor}40, 0 8px 32px rgba(0, 0, 0, 0.1)`
          : '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
    >
      {title && (
        <h3
          className="mb-2 text-lg font-semibold"
          style={{ color: variant === 'dark' ? '#fff' : '#000' }}
        >
          {title}
        </h3>
      )}
      {description && (
        <p
          className="mb-4 text-sm opacity-80"
          style={{ color: variant === 'dark' ? '#fff' : '#000' }}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  )
}

export default GlassCard
```

## GlassSection Component Implementation

```typescript
// components/cms-blocks/layout/glass-section.tsx
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import type { z } from 'zod'
import type { GlassSectionPropsSchema } from '@/lib/cms/registry-types'

type GlassSectionProps = z.infer<typeof GlassSectionPropsSchema> & {
  children?: React.ReactNode
  className?: string
}

const BLUR_VALUES = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
}

const PADDING_VALUES = {
  none: '0',
  sm: '24px',
  md: '48px',
  lg: '72px',
  xl: '96px',
}

const TINT_COLORS: Record<string, string> = {
  none: 'transparent',
  'jkkn-green': 'rgba(11, 109, 65, 0.1)',
  'jkkn-yellow': 'rgba(255, 222, 89, 0.1)',
  blue: 'rgba(59, 130, 246, 0.1)',
  purple: 'rgba(139, 92, 246, 0.1)',
}

export function GlassSection({
  variant = 'subtle',
  blur = 'lg',
  colorTint = 'none',
  overlayOpacity = 10,
  fullWidth = true,
  minHeight = 'auto',
  padding = 'lg',
  children,
  className,
}: GlassSectionProps) {
  const bgOpacity = overlayOpacity / 100

  const bgColor = variant === 'dark'
    ? `rgba(0, 0, 0, ${bgOpacity})`
    : variant === 'strong'
    ? `rgba(255, 255, 255, ${bgOpacity * 2})`
    : variant === 'subtle'
    ? `rgba(255, 255, 255, ${bgOpacity * 0.5})`
    : `rgba(255, 255, 255, ${bgOpacity})`

  const tintColor = TINT_COLORS[colorTint] || 'transparent'

  return (
    <section
      className={cn(
        'relative',
        fullWidth && 'w-full',
        className
      )}
      style={{
        backdropFilter: `blur(${BLUR_VALUES[blur]})`,
        WebkitBackdropFilter: `blur(${BLUR_VALUES[blur]})`,
        backgroundColor: bgColor,
        background: colorTint !== 'none'
          ? `linear-gradient(180deg, ${bgColor}, ${tintColor})`
          : bgColor,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        minHeight,
        padding: PADDING_VALUES[padding],
      }}
    >
      {children}
    </section>
  )
}

export default GlassSection
```

## GlassBadge Component Implementation

```typescript
// components/cms-blocks/layout/glass-badge.tsx
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import type { z } from 'zod'
import type { GlassBadgePropsSchema } from '@/lib/cms/registry-types'

type GlassBadgeProps = z.infer<typeof GlassBadgePropsSchema> & {
  className?: string
}

const SIZE_CLASSES = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
}

export function GlassBadge({
  text = 'Badge',
  variant = 'light',
  color,
  size = 'md',
  className,
}: GlassBadgeProps) {
  const bgColor = variant === 'dark'
    ? 'rgba(0, 0, 0, 0.3)'
    : variant === 'colored' && color
    ? `${color}30`
    : 'rgba(255, 255, 255, 0.2)'

  const textColor = variant === 'dark'
    ? '#fff'
    : variant === 'colored' && color
    ? color
    : '#000'

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        SIZE_CLASSES[size],
        className
      )}
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        backgroundColor: bgColor,
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: textColor,
      }}
    >
      {text}
    </span>
  )
}

export default GlassBadge
```

## Adding Glass Effect to Existing Components

### HeroSection Glass Variant

Add to `components/cms-blocks/content/hero-section.tsx`:

```typescript
// Add to props schema
glassEffect: z.object({
  enabled: z.boolean().default(false),
  variant: z.enum(['light', 'dark', 'subtle', 'strong']).default('light'),
  blur: z.enum(['sm', 'md', 'lg', 'xl']).default('lg'),
}).optional(),

// Add to component
{props.glassEffect?.enabled && (
  <div
    className="absolute inset-0"
    style={{
      backdropFilter: `blur(${BLUR_VALUES[props.glassEffect.blur]}px)`,
      backgroundColor: props.glassEffect.variant === 'dark'
        ? 'rgba(0, 0, 0, 0.15)'
        : 'rgba(255, 255, 255, 0.1)',
    }}
  />
)}
```

### Add editableProps for glass effect

```typescript
{
  name: 'glassEffect',
  label: 'Glass Effect',
  type: 'object',
  properties: [
    { name: 'enabled', label: 'Enable Glass Overlay', type: 'boolean' },
    { name: 'variant', label: 'Variant', type: 'enum', options: ['light', 'dark', 'subtle', 'strong'] },
    { name: 'blur', label: 'Blur Level', type: 'enum', options: ['sm', 'md', 'lg', 'xl'] },
  ],
}
```
