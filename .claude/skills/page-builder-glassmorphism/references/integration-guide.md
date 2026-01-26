# Integration Guide

How to integrate glass controls into the existing page builder.

## Step 1: Update BlockStyles Type

**File:** `components/page-builder/properties/props-panel.tsx`

Add glass settings to the BlockStyles interface:

```typescript
import type {
  GlassSettings,
  GradientConfig,
  ShadowConfig,
  OpacityConfig,
  NeumorphismSettings,
  MorphismStyle
} from '@/lib/cms/styling-types'

interface BlockStyles {
  // Existing styles...
  padding?: string
  margin?: string
  backgroundColor?: string
  // ... other existing properties

  // NEW: Glass/Morphism styles
  _glass?: GlassSettings
  _gradient?: GradientConfig
  _shadow?: ShadowConfig
  _opacity?: OpacityConfig
  _neumorphism?: NeumorphismSettings
  _morphismStyle?: MorphismStyle
}
```

## Step 2: Integrate Controls into style-controls.tsx

**File:** `components/page-builder/elementor/style-controls.tsx`

```typescript
'use client'

import * as React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// Import new controls
import { GlassControls } from './glass-controls'
import { GradientEditor } from './gradient-editor'
import { ShadowBuilder } from './shadow-builder'
import { OpacityControls } from './opacity-controls'
import { NeumorphismControls } from './neumorphism-controls'

import type {
  MorphismStyle,
  GlassSettings,
  GradientConfig,
  ShadowConfig,
  OpacityConfig,
  NeumorphismSettings
} from '@/lib/cms/styling-types'

interface StyleControlsProps {
  styles: BlockStyles
  onChange: (styles: BlockStyles) => void
}

const MORPHISM_STYLES: { value: MorphismStyle; label: string }[] = [
  { value: 'none', label: 'None' },
  { value: 'glass', label: 'Glassmorphism' },
  { value: 'neumorphism', label: 'Neumorphism' },
  { value: 'claymorphism', label: 'Claymorphism' },
]

export function StyleControls({ styles, onChange }: StyleControlsProps) {
  const morphismStyle = styles._morphismStyle || 'none'

  const updateStyles = (updates: Partial<BlockStyles>) => {
    onChange({ ...styles, ...updates })
  }

  return (
    <div className="space-y-4">
      {/* Morphism Style Switcher */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Design Style</Label>
        <Select
          value={morphismStyle}
          onValueChange={(value: MorphismStyle) =>
            updateStyles({ _morphismStyle: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose style..." />
          </SelectTrigger>
          <SelectContent>
            {MORPHISM_STYLES.map((style) => (
              <SelectItem key={style.value} value={style.value}>
                {style.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="effects" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="effects">Effects</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="effects" className="space-y-2">
          {/* Glass Controls - show when glassmorphism selected */}
          {(morphismStyle === 'glass' || morphismStyle === 'none') && (
            <GlassControls
              glass={styles._glass}
              onChange={(glass: GlassSettings) =>
                updateStyles({ _glass: glass })
              }
            />
          )}

          {/* Neumorphism Controls - show when neumorphism selected */}
          {morphismStyle === 'neumorphism' && (
            <NeumorphismControls
              neumorphism={styles._neumorphism}
              onChange={(neumorphism: NeumorphismSettings) =>
                updateStyles({ _neumorphism: neumorphism })
              }
            />
          )}

          {/* Shadow Builder - always available */}
          <ShadowBuilder
            shadow={styles._shadow}
            onChange={(shadow: ShadowConfig) =>
              updateStyles({ _shadow: shadow })
            }
          />
        </TabsContent>

        <TabsContent value="colors" className="space-y-2">
          {/* Gradient Editor */}
          <GradientEditor
            gradient={styles._gradient}
            onChange={(gradient: GradientConfig) =>
              updateStyles({ _gradient: gradient })
            }
          />
        </TabsContent>

        <TabsContent value="advanced" className="space-y-2">
          {/* Opacity Controls */}
          <OpacityControls
            opacity={styles._opacity}
            onChange={(opacity: OpacityConfig) =>
              updateStyles({ _opacity: opacity })
            }
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
```

## Step 3: Apply Glass Effects in Canvas

**File:** `components/page-builder/canvas/block-wrapper.tsx`

Add glass effect rendering to the block wrapper:

```typescript
import * as React from 'react'
import { cn } from '@/lib/utils'
import type { GlassSettings, ShadowConfig, GradientConfig } from '@/lib/cms/styling-types'
import { BLUR_VALUES, TINT_COLORS, GLOW_BLUR_VALUES } from '@/lib/cms/styling-types'

interface BlockWrapperProps {
  block: {
    id: string
    props: {
      _styles?: {
        _glass?: GlassSettings
        _shadow?: ShadowConfig
        _gradient?: GradientConfig
      }
    }
  }
  children: React.ReactNode
  selected?: boolean
}

function generateGlassStyles(glass: GlassSettings): React.CSSProperties {
  if (!glass.enabled) return {}

  const blurPx = BLUR_VALUES[glass.blurLevel]
  const bgOpacity = glass.backgroundOpacity / 100
  const tintColor = TINT_COLORS[glass.colorTint] || 'transparent'
  const tintOpacity = glass.tintOpacity / 100

  const bgColor = glass.variant === 'dark'
    ? `rgba(0, 0, 0, ${bgOpacity})`
    : glass.variant === 'strong'
    ? `rgba(255, 255, 255, ${bgOpacity * 2})`
    : glass.variant === 'subtle'
    ? `rgba(255, 255, 255, ${bgOpacity * 0.5})`
    : `rgba(255, 255, 255, ${bgOpacity})`

  let background = bgColor
  if (glass.colorTint !== 'none') {
    // Convert hex to rgba for tint
    const hex = tintColor
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    const tintRgba = `rgba(${r}, ${g}, ${b}, ${tintOpacity})`
    background = `linear-gradient(135deg, ${bgColor}, ${tintRgba})`
  }

  const styles: React.CSSProperties = {
    backdropFilter: `blur(${blurPx}px)`,
    WebkitBackdropFilter: `blur(${blurPx}px)`,
    background,
  }

  if (glass.borderEnabled) {
    const borderOpacity = glass.borderOpacity / 100
    styles.border = `1px solid rgba(255, 255, 255, ${borderOpacity})`
  }

  if (glass.glowEnabled && glass.glowColor) {
    const glowBlur = GLOW_BLUR_VALUES[glass.glowIntensity]
    styles.boxShadow = `0 0 ${glowBlur}px ${glass.glowColor}66`
  }

  return styles
}

function generateShadowCSS(shadow: ShadowConfig): string {
  if (!shadow.layers?.length) return 'none'

  return shadow.layers
    .map((layer) => {
      const r = parseInt(layer.color.slice(1, 3), 16)
      const g = parseInt(layer.color.slice(3, 5), 16)
      const b = parseInt(layer.color.slice(5, 7), 16)
      const rgba = `rgba(${r}, ${g}, ${b}, ${layer.opacity})`
      const inset = layer.inset ? 'inset ' : ''
      return `${inset}${layer.offsetX}px ${layer.offsetY}px ${layer.blur}px ${layer.spread}px ${rgba}`
    })
    .join(', ')
}

function generateGradientCSS(gradient: GradientConfig): string {
  const stops = gradient.stops
    .sort((a, b) => a.position - b.position)
    .map((stop) => `${stop.color} ${stop.position}%`)
    .join(', ')

  switch (gradient.type) {
    case 'linear':
      return `linear-gradient(${gradient.angle || 135}deg, ${stops})`
    case 'radial':
      const posX = gradient.position?.x || 50
      const posY = gradient.position?.y || 50
      return `radial-gradient(${gradient.shape || 'circle'} at ${posX}% ${posY}%, ${stops})`
    case 'conic':
      return `conic-gradient(from ${gradient.startAngle || 0}deg, ${stops})`
    default:
      return `linear-gradient(135deg, ${stops})`
  }
}

export function BlockWrapper({ block, children, selected }: BlockWrapperProps) {
  const styles = block.props._styles || {}

  const computedStyles = React.useMemo(() => {
    const result: React.CSSProperties = {}

    // Apply glass effects
    if (styles._glass?.enabled) {
      Object.assign(result, generateGlassStyles(styles._glass))
    }

    // Apply shadow
    if (styles._shadow?.layers?.length) {
      result.boxShadow = generateShadowCSS(styles._shadow)
    }

    // Apply gradient (as background, only if no glass)
    if (styles._gradient?.stops?.length && !styles._glass?.enabled) {
      result.background = generateGradientCSS(styles._gradient)
    }

    return result
  }, [styles])

  return (
    <div
      className={cn(
        'relative transition-all duration-300',
        selected && 'ring-2 ring-primary'
      )}
      style={computedStyles}
    >
      {children}
    </div>
  )
}
```

## Step 4: Create Styling Utility Functions

**File:** `components/page-builder/elementor/styling-utils.ts`

```typescript
import type {
  GlassSettings,
  GradientConfig,
  ShadowConfig,
  NeumorphismSettings,
} from '@/lib/cms/styling-types'
import {
  BLUR_VALUES,
  TINT_COLORS,
  GLOW_BLUR_VALUES,
} from '@/lib/cms/styling-types'

export function hexToRgba(hex: string, alpha: number = 1): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function generateGlassCSS(glass: GlassSettings): React.CSSProperties {
  if (!glass.enabled) return {}

  const blurPx = BLUR_VALUES[glass.blurLevel]
  const bgOpacity = glass.backgroundOpacity / 100
  const tintOpacity = glass.tintOpacity / 100

  const bgColor = glass.variant === 'dark'
    ? `rgba(0, 0, 0, ${bgOpacity})`
    : glass.variant === 'strong'
    ? `rgba(255, 255, 255, ${bgOpacity * 2})`
    : glass.variant === 'subtle'
    ? `rgba(255, 255, 255, ${bgOpacity * 0.5})`
    : `rgba(255, 255, 255, ${bgOpacity})`

  let background = bgColor
  if (glass.colorTint !== 'none') {
    const tintHex = TINT_COLORS[glass.colorTint]
    const tintRgba = hexToRgba(tintHex, tintOpacity)
    background = `linear-gradient(135deg, ${bgColor}, ${tintRgba})`
  }

  const styles: React.CSSProperties = {
    backdropFilter: `blur(${blurPx}px)`,
    WebkitBackdropFilter: `blur(${blurPx}px)`,
    background,
  }

  if (glass.borderEnabled) {
    styles.border = `1px solid rgba(255, 255, 255, ${glass.borderOpacity / 100})`
  }

  if (glass.glowEnabled && glass.glowColor) {
    const glowBlur = GLOW_BLUR_VALUES[glass.glowIntensity]
    styles.boxShadow = `0 0 ${glowBlur}px ${glass.glowColor}66`
  }

  return styles
}

export function generateGradientCSS(gradient: GradientConfig): string {
  const stops = gradient.stops
    .sort((a, b) => a.position - b.position)
    .map((stop) => {
      const opacity = stop.opacity !== undefined ? stop.opacity : 1
      if (opacity < 1) {
        return `${hexToRgba(stop.color, opacity)} ${stop.position}%`
      }
      return `${stop.color} ${stop.position}%`
    })
    .join(', ')

  switch (gradient.type) {
    case 'linear':
      return `linear-gradient(${gradient.angle || 135}deg, ${stops})`
    case 'radial':
      const posX = gradient.position?.x || 50
      const posY = gradient.position?.y || 50
      return `radial-gradient(${gradient.shape || 'circle'} at ${posX}% ${posY}%, ${stops})`
    case 'conic':
      return `conic-gradient(from ${gradient.startAngle || 0}deg, ${stops})`
    default:
      return `linear-gradient(135deg, ${stops})`
  }
}

export function generateShadowCSS(shadow: ShadowConfig): string {
  if (!shadow.layers?.length) return 'none'

  return shadow.layers
    .map((layer) => {
      const rgba = hexToRgba(layer.color, layer.opacity)
      const inset = layer.inset ? 'inset ' : ''
      return `${inset}${layer.offsetX}px ${layer.offsetY}px ${layer.blur}px ${layer.spread}px ${rgba}`
    })
    .join(', ')
}

export function lightenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const amt = Math.round(2.55 * percent)
  const R = Math.min(255, (num >> 16) + amt)
  const G = Math.min(255, ((num >> 8) & 0x00ff) + amt)
  const B = Math.min(255, (num & 0x0000ff) + amt)
  return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`
}

export function darkenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const amt = Math.round(2.55 * percent)
  const R = Math.max(0, (num >> 16) - amt)
  const G = Math.max(0, ((num >> 8) & 0x00ff) - amt)
  const B = Math.max(0, (num & 0x0000ff) - amt)
  return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`
}

export function generateNeumorphismCSS(
  settings: NeumorphismSettings
): React.CSSProperties {
  if (!settings.enabled) return {}

  const { type, backgroundColor, distance, blur, borderRadius } = settings
  const lightColor = lightenColor(backgroundColor, 20)
  const darkColor = darkenColor(backgroundColor, 15)

  let boxShadow = ''
  let background: string = backgroundColor

  switch (type) {
    case 'flat':
      boxShadow = `${distance}px ${distance}px ${blur}px ${darkColor}, -${distance}px -${distance}px ${blur}px ${lightColor}`
      break
    case 'pressed':
      boxShadow = `inset ${distance}px ${distance}px ${blur}px ${darkColor}, inset -${distance}px -${distance}px ${blur}px ${lightColor}`
      break
    case 'convex':
      boxShadow = `${distance}px ${distance}px ${blur}px ${darkColor}, -${distance}px -${distance}px ${blur}px ${lightColor}`
      background = `linear-gradient(145deg, ${lightColor}, ${darkenColor(backgroundColor, 5)})`
      break
    case 'concave':
      boxShadow = `${distance}px ${distance}px ${blur}px ${darkColor}, -${distance}px -${distance}px ${blur}px ${lightColor}`
      background = `linear-gradient(145deg, ${darkenColor(backgroundColor, 5)}, ${lightColor})`
      break
  }

  return {
    background,
    boxShadow,
    borderRadius: `${borderRadius}px`,
  }
}
```

## Step 5: Add Glass Variants to Existing Components

### HeroSection with Glass

**File:** `components/cms-blocks/content/hero-section.tsx`

Add to the schema:

```typescript
import { z } from 'zod'

export const HeroSectionSchema = z.object({
  // ... existing props
  title: z.string(),
  subtitle: z.string().optional(),
  backgroundImage: z.string().url(),

  // NEW: Glass effect option
  glassEffect: z.object({
    enabled: z.boolean().default(false),
    variant: z.enum(['light', 'dark', 'subtle', 'strong']).default('light'),
    blur: z.enum(['sm', 'md', 'lg', 'xl']).default('lg'),
  }).optional(),
})

// In the component:
export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  glassEffect,
  ...props
}: HeroSectionProps) {
  const BLUR_VALUES = { sm: 4, md: 8, lg: 12, xl: 16 }

  return (
    <section
      className="relative h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Glass overlay */}
      {glassEffect?.enabled && (
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${BLUR_VALUES[glassEffect.blur]}px)`,
            WebkitBackdropFilter: `blur(${BLUR_VALUES[glassEffect.blur]}px)`,
            backgroundColor: glassEffect.variant === 'dark'
              ? 'rgba(0, 0, 0, 0.15)'
              : 'rgba(255, 255, 255, 0.1)',
          }}
        />
      )}

      <div className="container relative z-10 mx-auto h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold">{title}</h1>
        {subtitle && <p className="text-xl mt-4">{subtitle}</p>}
      </div>
    </section>
  )
}
```

### Update Component Registry

**File:** `lib/cms/component-registry.ts`

Add `editableProps` for glass effect:

```typescript
HeroSection: {
  name: 'HeroSection',
  // ... existing config
  editableProps: [
    // ... existing props
    {
      name: 'glassEffect',
      label: 'Glass Effect',
      type: 'object',
      properties: [
        { name: 'enabled', label: 'Enable Glass Overlay', type: 'boolean' },
        { name: 'variant', label: 'Variant', type: 'enum', options: ['light', 'dark', 'subtle', 'strong'] },
        { name: 'blur', label: 'Blur Level', type: 'enum', options: ['sm', 'md', 'lg', 'xl'] },
      ],
    },
  ],
},
```

## Step 6: Import CSS Utilities

**File:** `app/globals.css`

```css
@import './styles/glass.css';
```

The glass.css file contains pre-built utility classes:
- `.glass` - Basic light glass
- `.glass-dark` - Dark glass variant
- `.glass-blur-sm`, `.glass-blur-md`, `.glass-blur-lg`, `.glass-blur-xl` - Blur levels
- `.glass-tint-green`, `.glass-tint-yellow` - JKKN brand tints
- `.glass-glow` - Glow effect

## Complete File List to Create

| # | File Path | Purpose |
|---|-----------|---------|
| 1 | `lib/cms/styling-types.ts` | TypeScript interfaces |
| 2 | `lib/cms/gradient-presets.ts` | 20 gradient presets |
| 3 | `lib/cms/shadow-presets.ts` | 10 shadow presets |
| 4 | `lib/cms/glass-presets.ts` | 11 glass presets |
| 5 | `components/page-builder/elementor/glass-controls.tsx` | Glass effect controls |
| 6 | `components/page-builder/elementor/gradient-editor.tsx` | Visual gradient editor |
| 7 | `components/page-builder/elementor/shadow-builder.tsx` | Shadow layer builder |
| 8 | `components/page-builder/elementor/opacity-controls.tsx` | Opacity sliders |
| 9 | `components/page-builder/elementor/enhanced-color-picker.tsx` | RGBA color picker |
| 10 | `components/page-builder/elementor/neumorphism-controls.tsx` | Neumorphism controls |
| 11 | `components/page-builder/elementor/styling-utils.ts` | Utility functions |
| 12 | `components/cms-blocks/layout/glass-card.tsx` | Glass card component |
| 13 | `components/cms-blocks/layout/glass-section.tsx` | Glass section component |
| 14 | `components/cms-blocks/layout/glass-badge.tsx` | Glass badge component |
| 15 | `components/cms-blocks/layout/glass-nav.tsx` | Glass navigation bar |
| 16 | `app/styles/glass.css` | CSS utilities |

## Files to Modify

| # | File Path | Changes |
|---|-----------|---------|
| 1 | `components/page-builder/elementor/style-controls.tsx` | Add glass panel, integrate new controls |
| 2 | `components/page-builder/properties/props-panel.tsx` | Add `_glass` to BlockStyles |
| 3 | `components/page-builder/canvas/block-wrapper.tsx` | Live blur preview |
| 4 | `lib/cms/component-registry.ts` | Register glass components |
| 5 | `lib/cms/registry-types.ts` | Add glass props schemas |
| 6 | `components/cms-blocks/content/hero-section.tsx` | Glass variant |
| 7 | `components/cms-blocks/content/testimonials.tsx` | Glass variant |
| 8 | `app/globals.css` | Import glass.css |
