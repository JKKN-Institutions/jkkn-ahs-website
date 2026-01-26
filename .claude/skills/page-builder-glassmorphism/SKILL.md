---
name: page-builder-glassmorphism
description: |
  Comprehensive glassmorphism enhancement skill for the Next.js page builder. This skill should be used when implementing modern glass effects, visual gradient editors, enhanced shadow controls, opacity controls, and neumorphism features in the page builder. Automatically triggers when user mentions 'glassmorphism', 'glass effect', 'frosted glass', 'blur effect', 'gradient editor', 'shadow builder', 'neumorphism', or requests modern/professional page styling controls. (project)
---

# Page Builder Glassmorphism Enhancement Skill

This skill provides complete implementation guidance for adding professional glassmorphism design capabilities to the Next.js page builder, including glass controls, visual gradient editor, enhanced shadows, and neumorphism support.

## Overview

The page builder already has 75+ CMS components, drag-drop, and animations. This skill exposes glassmorphism CSS utilities through the visual editor UI, enabling content creators to build modern, professional pages without coding.

## When to Use This Skill

- Adding glass effect controls to the page builder style panel
- Creating visual gradient editors with drag-drop color stops
- Implementing enhanced shadow builders with multiple layers
- Adding opacity controls for backgrounds, borders, overlays
- Registering glass components (GlassCard, GlassSection, GlassNav, GlassBadge)
- Adding glass variants to existing components (Hero, Cards, Testimonials)
- Implementing neumorphism controls
- Creating morphism style switchers

## Implementation Architecture

### Files to Create

| File | Purpose |
|------|---------|
| `components/page-builder/elementor/glass-controls.tsx` | Glass effect controls panel |
| `components/page-builder/elementor/glass-presets.tsx` | Glass preset quick-apply panel |
| `components/page-builder/elementor/gradient-editor.tsx` | Visual gradient editor |
| `components/page-builder/elementor/shadow-builder.tsx` | Enhanced shadow controls |
| `components/page-builder/elementor/opacity-controls.tsx` | Opacity sliders |
| `components/page-builder/elementor/enhanced-color-picker.tsx` | RGBA color picker |
| `components/page-builder/elementor/neumorphism-controls.tsx` | Neumorphism controls |
| `components/page-builder/elementor/styling-utils.ts` | Utility functions |
| `components/cms-blocks/layout/glass-section.tsx` | Full-width glass wrapper |
| `components/cms-blocks/layout/glass-nav.tsx` | Glass navigation bar |
| `lib/cms/styling-types.ts` | TypeScript interfaces |
| `lib/cms/gradient-presets.ts` | Gradient presets (20) |
| `lib/cms/shadow-presets.ts` | Shadow presets (10) |

### Files to Modify

| File | Changes |
|------|---------|
| `components/page-builder/elementor/style-controls.tsx` | Add glass panel, integrate controls |
| `components/page-builder/properties/props-panel.tsx` | Add `_glass` to BlockStyles |
| `components/page-builder/canvas/block-wrapper.tsx` | Live blur preview |
| `lib/cms/component-registry.ts` | Register glass components |
| `lib/cms/registry-types.ts` | Add glass props schemas |
| `app/globals.css` | Import glass.css |

## Implementation Phases

### Phase 1: Foundation

1. Create TypeScript interfaces in `lib/cms/styling-types.ts`
2. Create glass-controls.tsx component
3. Create glass-presets.tsx with branded + generic presets
4. Copy glass.css to `app/styles/` and import in globals.css

### Phase 2: Component Registration

1. Register GlassCard, GlassSection, GlassBadge in component registry
2. Add glass props schemas to registry-types.ts
3. Update props-panel.tsx to include `_glass` in BlockStyles

### Phase 3: Enhanced Controls

1. Create gradient-editor.tsx with drag-drop color stops
2. Create shadow-builder.tsx with multiple layers
3. Create opacity-controls.tsx
4. Create enhanced-color-picker.tsx with RGBA support

### Phase 4: Integration

1. Integrate glass controls into style-controls.tsx
2. Add live blur preview in block-wrapper.tsx
3. Add glass variants to HeroSection, Testimonials, CardBlock

### Phase 5: Advanced Features

1. Create neumorphism-controls.tsx
2. Create morphism style switcher
3. Add theme export functionality

## Reference Files

For detailed implementation code, refer to:

- `references/typescript-interfaces.md` - All TypeScript interfaces
- `references/glass-controls-component.md` - GlassControls component code
- `references/gradient-editor-component.md` - GradientEditor component code
- `references/shadow-builder-component.md` - ShadowBuilder component code
- `references/presets-data.md` - All gradient, shadow, and glass presets
- `references/component-registration.md` - Registry entries for glass components
- `references/integration-guide.md` - How to integrate into existing files

## CSS Assets

The glass CSS utilities are available at `assets/styles/glass.css`. Copy this file to `app/styles/glass.css` and import in globals.css:

```css
@import './styles/glass.css';
```

## Quick Start

To implement glassmorphism in the page builder:

1. Read `references/typescript-interfaces.md` for type definitions
2. Create styling-types.ts with the interfaces
3. Follow Phase 1-5 implementation order
4. Use presets from `references/presets-data.md`
5. Integrate controls following `references/integration-guide.md`

## Key TypeScript Interfaces

### GlassSettings

```typescript
interface GlassSettings {
  enabled: boolean
  blurLevel: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  backgroundOpacity: number // 5-30%
  variant: 'light' | 'dark' | 'subtle' | 'strong'
  colorTint: 'none' | 'blue' | 'purple' | 'green' | 'jkkn-green' | 'jkkn-yellow' | 'jkkn-cream'
  tintOpacity: number
  borderEnabled: boolean
  borderOpacity: number
  glowEnabled: boolean
  glowColor?: string
  glowIntensity: 'subtle' | 'medium' | 'strong'
}
```

### GradientConfig

```typescript
interface GradientColorStop {
  id: string
  color: string
  position: number // 0-100%
  opacity?: number
}

interface GradientConfig {
  type: 'linear' | 'radial' | 'conic'
  angle?: number
  stops: GradientColorStop[]
  shape?: 'circle' | 'ellipse'
  position?: { x: number; y: number }
}
```

### NeumorphismSettings

```typescript
interface NeumorphismSettings {
  enabled: boolean
  type: 'flat' | 'pressed' | 'convex' | 'concave'
  intensity: 'subtle' | 'medium' | 'strong'
  backgroundColor: string
  distance: number
  blur: number
  borderRadius: number
}
```

## Blur Values Map

```typescript
const BLUR_VALUES = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  '3xl': 40
}
```

## Glass CSS Generator

```typescript
function generateGlassCSS(settings: GlassSettings): CSSProperties {
  if (!settings.enabled) return {}

  const blurPx = BLUR_VALUES[settings.blurLevel]
  const bgOpacity = settings.backgroundOpacity / 100
  const borderOpacity = settings.borderOpacity / 100

  return {
    backdropFilter: `blur(${blurPx}px)`,
    WebkitBackdropFilter: `blur(${blurPx}px)`,
    backgroundColor: settings.variant === 'dark'
      ? `rgba(0, 0, 0, ${bgOpacity})`
      : `rgba(255, 255, 255, ${bgOpacity})`,
    border: settings.borderEnabled
      ? `1px solid rgba(255, 255, 255, ${borderOpacity})`
      : undefined,
    boxShadow: settings.glowEnabled
      ? `0 0 ${settings.glowIntensity === 'strong' ? 30 : settings.glowIntensity === 'medium' ? 20 : 10}px ${settings.glowColor || '#0b6d41'}40`
      : undefined,
  }
}
```

## UI Component Structure

### GlassControls Panel

```
GlassControls (Collapsible)
├── Enable Glass Toggle (Switch)
├── Blur Level (Select: xs→3xl)
├── Background Opacity (Slider: 5-30%)
├── Glass Variant (Select: light/dark/subtle/strong)
├── Color Tint Section
│   ├── Tint Color Grid (brand + generic colors)
│   └── Tint Opacity (Slider: 10-30%)
├── Border Section
│   ├── Enable Border (Switch)
│   └── Border Opacity (Slider)
└── Glow Section
    ├── Enable Glow (Switch)
    ├── Glow Color (Color Picker)
    └── Glow Intensity (Select: subtle/medium/strong)
```

### GradientEditor Panel

```
GradientEditor
├── Gradient Type Tabs (Linear | Radial | Conic)
├── Interactive Gradient Bar
│   └── Draggable Color Stop Handles
├── Selected Stop Editor
│   ├── Color Picker
│   ├── Position Slider (0-100%)
│   └── Delete Button
├── Angle/Position Control
│   ├── Linear: Angle Dial (0-360°)
│   └── Radial: X/Y Position + Shape
├── Presets Grid (20 swatches)
└── CSS Output (Copy/Paste)
```

### ShadowBuilder Panel

```
ShadowBuilder
├── Shadow Layers List (Accordion)
│   └── Per Layer:
│       ├── X Offset Slider (-50 to 50px)
│       ├── Y Offset Slider (-50 to 50px)
│       ├── Blur Slider (0-100px)
│       ├── Spread Slider (-50 to 50px)
│       ├── Color Picker with Opacity
│       └── Inset Toggle
├── Add Layer Button
├── Preset Buttons (10 presets)
└── Live Preview Box
```

## Performance Considerations

- **Debouncing:** 100ms for sliders, 300ms for text inputs
- **Memoization:** All computed CSS values with useMemo
- **Canvas rendering:** CSS for previews, Canvas API for color picker
- **LocalStorage:** Persist recent colors, user preferences
