# Presets Data

All presets for glass effects, gradients, and shadows.

## File: `lib/cms/gradient-presets.ts`

```typescript
import type { GradientPreset, GradientConfig } from './styling-types'

// ============================================
// Brand Gradient Presets (7)
// ============================================

export const BRAND_GRADIENT_PRESETS: GradientPreset[] = [
  {
    id: 'green-primary',
    name: 'Green Primary',
    category: 'brand',
    css: 'linear-gradient(135deg, #0b6d41, #085032)',
    config: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: '1', color: '#0b6d41', position: 0 },
        { id: '2', color: '#085032', position: 100 },
      ],
    },
  },
  {
    id: 'green-radial',
    name: 'Green Radial',
    category: 'brand',
    css: 'radial-gradient(ellipse at top, #0f8f56, #0b6d41)',
    config: {
      type: 'radial',
      shape: 'ellipse',
      position: { x: 50, y: 0 },
      stops: [
        { id: '1', color: '#0f8f56', position: 0 },
        { id: '2', color: '#0b6d41', position: 100 },
      ],
    },
  },
  {
    id: 'green-yellow',
    name: 'Green Yellow',
    category: 'brand',
    css: 'linear-gradient(135deg, #0b6d41, #ffde59)',
    config: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: '1', color: '#0b6d41', position: 0 },
        { id: '2', color: '#ffde59', position: 100 },
      ],
    },
  },
  {
    id: 'yellow-warm',
    name: 'Yellow Warm',
    category: 'brand',
    css: 'linear-gradient(135deg, #ffde59, #f5c518)',
    config: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: '1', color: '#ffde59', position: 0 },
        { id: '2', color: '#f5c518', position: 100 },
      ],
    },
  },
  {
    id: 'cream-subtle',
    name: 'Cream Subtle',
    category: 'brand',
    css: 'linear-gradient(180deg, #fbfbee, #ffffff)',
    config: {
      type: 'linear',
      angle: 180,
      stops: [
        { id: '1', color: '#fbfbee', position: 0 },
        { id: '2', color: '#ffffff', position: 100 },
      ],
    },
  },
  {
    id: 'green-glow',
    name: 'Green Glow',
    category: 'brand',
    css: 'linear-gradient(135deg, #0b6d41 0%, #0f8f56 50%, #0b6d41 100%)',
    config: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: '1', color: '#0b6d41', position: 0 },
        { id: '2', color: '#0f8f56', position: 50 },
        { id: '3', color: '#0b6d41', position: 100 },
      ],
    },
  },
  {
    id: 'dark-elegant',
    name: 'Dark Elegant',
    category: 'brand',
    css: 'linear-gradient(135deg, #171717, #2d2d2d)',
    config: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: '1', color: '#171717', position: 0 },
        { id: '2', color: '#2d2d2d', position: 100 },
      ],
    },
  },
]

// ============================================
// Generic Gradient Presets (13)
// ============================================

export const GENERIC_GRADIENT_PRESETS: GradientPreset[] = [
  {
    id: 'purple-dream',
    name: 'Purple Dream',
    category: 'generic',
    css: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    config: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: '1', color: '#667eea', position: 0 },
        { id: '2', color: '#764ba2', position: 100 },
      ],
    },
  },
  {
    id: 'rose-gradient',
    name: 'Rose Gradient',
    category: 'generic',
    css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    config: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: '1', color: '#f093fb', position: 0 },
        { id: '2', color: '#f5576c', position: 100 },
      ],
    },
  },
  {
    id: 'ocean-blue',
    name: 'Ocean Blue',
    category: 'generic',
    css: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    config: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: '1', color: '#4facfe', position: 0 },
        { id: '2', color: '#00f2fe', position: 100 },
      ],
    },
  },
  {
    id: 'fresh-mint',
    name: 'Fresh Mint',
    category: 'generic',
    css: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    config: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: '1', color: '#43e97b', position: 0 },
        { id: '2', color: '#38f9d7', position: 100 },
      ],
    },
  },
  {
    id: 'sunset-fire',
    name: 'Sunset Fire',
    category: 'generic',
    css: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    config: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: '1', color: '#fa709a', position: 0 },
        { id: '2', color: '#fee140', position: 100 },
      ],
    },
  },
  {
    id: 'electric-violet',
    name: 'Electric Violet',
    category: 'generic',
    css: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    config: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: '1', color: '#a18cd1', position: 0 },
        { id: '2', color: '#fbc2eb', position: 100 },
      ],
    },
  },
  {
    id: 'steel-gray',
    name: 'Steel Gray',
    category: 'generic',
    css: 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)',
    config: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: '1', color: '#bdc3c7', position: 0 },
        { id: '2', color: '#2c3e50', position: 100 },
      ],
    },
  },
  {
    id: 'radial-glow',
    name: 'Radial Glow',
    category: 'generic',
    css: 'radial-gradient(circle at center, #ffffff 0%, #e0e0e0 100%)',
    config: {
      type: 'radial',
      shape: 'circle',
      position: { x: 50, y: 50 },
      stops: [
        { id: '1', color: '#ffffff', position: 0 },
        { id: '2', color: '#e0e0e0', position: 100 },
      ],
    },
  },
  {
    id: 'rainbow-blend',
    name: 'Rainbow Blend',
    category: 'generic',
    css: 'linear-gradient(90deg, #ff6b6b 0%, #feca57 50%, #48dbfb 100%)',
    config: {
      type: 'linear',
      angle: 90,
      stops: [
        { id: '1', color: '#ff6b6b', position: 0 },
        { id: '2', color: '#feca57', position: 50 },
        { id: '3', color: '#48dbfb', position: 100 },
      ],
    },
  },
  {
    id: 'conic-spectrum',
    name: 'Conic Spectrum',
    category: 'generic',
    css: 'conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)',
    config: {
      type: 'conic',
      startAngle: 0,
      stops: [
        { id: '1', color: '#ff0000', position: 0 },
        { id: '2', color: '#ffff00', position: 17 },
        { id: '3', color: '#00ff00', position: 33 },
        { id: '4', color: '#00ffff', position: 50 },
        { id: '5', color: '#0000ff', position: 67 },
        { id: '6', color: '#ff00ff', position: 83 },
        { id: '7', color: '#ff0000', position: 100 },
      ],
    },
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    category: 'generic',
    css: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
    config: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: '1', color: '#ffffff', position: 0, opacity: 0.4 },
        { id: '2', color: '#ffffff', position: 100, opacity: 0.1 },
      ],
    },
  },
  {
    id: 'midnight',
    name: 'Midnight',
    category: 'generic',
    css: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    config: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: '1', color: '#0f0c29', position: 0 },
        { id: '2', color: '#302b63', position: 50 },
        { id: '3', color: '#24243e', position: 100 },
      ],
    },
  },
  {
    id: 'sky-soft',
    name: 'Sky Soft',
    category: 'generic',
    css: 'linear-gradient(180deg, #89f7fe 0%, #66a6ff 100%)',
    config: {
      type: 'linear',
      angle: 180,
      stops: [
        { id: '1', color: '#89f7fe', position: 0 },
        { id: '2', color: '#66a6ff', position: 100 },
      ],
    },
  },
]

// Combined presets (20 total)
export const ALL_GRADIENT_PRESETS: GradientPreset[] = [
  ...BRAND_GRADIENT_PRESETS,
  ...GENERIC_GRADIENT_PRESETS,
]
```

## File: `lib/cms/shadow-presets.ts`

```typescript
import type { ShadowPreset, ShadowLayer } from './styling-types'

// ============================================
// Shadow Presets (10)
// ============================================

export const SHADOW_PRESETS: ShadowPreset[] = [
  {
    id: 'none',
    name: 'None',
    layers: [],
  },
  {
    id: 'subtle',
    name: 'Subtle',
    layers: [
      { id: '1', offsetX: 0, offsetY: 1, blur: 2, spread: 0, color: '#000000', opacity: 0.05, inset: false },
    ],
  },
  {
    id: 'soft',
    name: 'Soft',
    layers: [
      { id: '1', offsetX: 0, offsetY: 1, blur: 3, spread: 0, color: '#000000', opacity: 0.1, inset: false },
      { id: '2', offsetX: 0, offsetY: 1, blur: 2, spread: -1, color: '#000000', opacity: 0.1, inset: false },
    ],
  },
  {
    id: 'medium',
    name: 'Medium',
    layers: [
      { id: '1', offsetX: 0, offsetY: 4, blur: 6, spread: -1, color: '#000000', opacity: 0.1, inset: false },
      { id: '2', offsetX: 0, offsetY: 2, blur: 4, spread: -2, color: '#000000', opacity: 0.1, inset: false },
    ],
  },
  {
    id: 'strong',
    name: 'Strong',
    layers: [
      { id: '1', offsetX: 0, offsetY: 10, blur: 15, spread: -3, color: '#000000', opacity: 0.1, inset: false },
      { id: '2', offsetX: 0, offsetY: 4, blur: 6, spread: -4, color: '#000000', opacity: 0.1, inset: false },
    ],
  },
  {
    id: 'glow-green',
    name: 'Glow (Green)',
    layers: [
      { id: '1', offsetX: 0, offsetY: 0, blur: 20, spread: 0, color: '#0b6d41', opacity: 0.4, inset: false },
    ],
  },
  {
    id: 'glow-yellow',
    name: 'Glow (Yellow)',
    layers: [
      { id: '1', offsetX: 0, offsetY: 0, blur: 20, spread: 0, color: '#ffde59', opacity: 0.4, inset: false },
    ],
  },
  {
    id: 'inner',
    name: 'Inner',
    layers: [
      { id: '1', offsetX: 0, offsetY: 2, blur: 4, spread: 0, color: '#000000', opacity: 0.1, inset: true },
    ],
  },
  {
    id: 'glass-soft',
    name: 'Glass Soft',
    layers: [
      { id: '1', offsetX: 0, offsetY: 8, blur: 32, spread: 0, color: '#000000', opacity: 0.08, inset: false },
      { id: '2', offsetX: 0, offsetY: 0, blur: 1, spread: 0, color: '#ffffff', opacity: 0.1, inset: true },
    ],
  },
  {
    id: 'elevated',
    name: 'Elevated',
    layers: [
      { id: '1', offsetX: 0, offsetY: 25, blur: 50, spread: -12, color: '#000000', opacity: 0.25, inset: false },
    ],
  },
]

// Helper to get preset by ID
export function getShadowPreset(id: string): ShadowPreset | undefined {
  return SHADOW_PRESETS.find(p => p.id === id)
}

// Convert shadow layers to CSS
export function shadowLayersToCss(layers: ShadowLayer[]): string {
  if (layers.length === 0) return 'none'

  return layers.map(layer => {
    const inset = layer.inset ? 'inset ' : ''
    const r = parseInt(layer.color.slice(1, 3), 16)
    const g = parseInt(layer.color.slice(3, 5), 16)
    const b = parseInt(layer.color.slice(5, 7), 16)
    const color = `rgba(${r}, ${g}, ${b}, ${layer.opacity})`
    return `${inset}${layer.offsetX}px ${layer.offsetY}px ${layer.blur}px ${layer.spread}px ${color}`
  }).join(', ')
}
```

## File: `lib/cms/glass-presets.ts`

```typescript
import type { GlassPreset } from './styling-types'

// ============================================
// JKKN Brand Glass Presets (3)
// ============================================

export const BRAND_GLASS_PRESETS: GlassPreset[] = [
  {
    id: 'jkkn-green-glass',
    name: 'JKKN Green Glass',
    category: 'brand',
    settings: {
      enabled: true,
      blurLevel: 'lg',
      backgroundOpacity: 15,
      variant: 'light',
      colorTint: 'jkkn-green',
      tintOpacity: 15,
      borderEnabled: true,
      borderOpacity: 20,
      glowEnabled: false,
      glowIntensity: 'subtle',
    },
  },
  {
    id: 'jkkn-gold-glass',
    name: 'JKKN Gold Glass',
    category: 'brand',
    settings: {
      enabled: true,
      blurLevel: 'lg',
      backgroundOpacity: 10,
      variant: 'light',
      colorTint: 'jkkn-yellow',
      tintOpacity: 20,
      borderEnabled: true,
      borderOpacity: 30,
      glowEnabled: true,
      glowColor: '#f5c518',
      glowIntensity: 'subtle',
    },
  },
  {
    id: 'jkkn-cream-glass',
    name: 'JKKN Cream Glass',
    category: 'brand',
    settings: {
      enabled: true,
      blurLevel: 'md',
      backgroundOpacity: 20,
      variant: 'light',
      colorTint: 'jkkn-cream',
      tintOpacity: 25,
      borderEnabled: true,
      borderOpacity: 15,
      glowEnabled: false,
      glowIntensity: 'subtle',
    },
  },
]

// ============================================
// Generic Glass Presets (8)
// ============================================

export const GENERIC_GLASS_PRESETS: GlassPreset[] = [
  {
    id: 'frosted-light',
    name: 'Frosted Light',
    category: 'generic',
    settings: {
      enabled: true,
      blurLevel: 'xl',
      backgroundOpacity: 10,
      variant: 'light',
      colorTint: 'none',
      tintOpacity: 0,
      borderEnabled: true,
      borderOpacity: 20,
      glowEnabled: false,
      glowIntensity: 'subtle',
    },
  },
  {
    id: 'frosted-dark',
    name: 'Frosted Dark',
    category: 'generic',
    settings: {
      enabled: true,
      blurLevel: 'xl',
      backgroundOpacity: 15,
      variant: 'dark',
      colorTint: 'none',
      tintOpacity: 0,
      borderEnabled: true,
      borderOpacity: 10,
      glowEnabled: false,
      glowIntensity: 'subtle',
    },
  },
  {
    id: 'blue-glass',
    name: 'Blue Glass',
    category: 'generic',
    settings: {
      enabled: true,
      blurLevel: 'lg',
      backgroundOpacity: 15,
      variant: 'light',
      colorTint: 'blue',
      tintOpacity: 20,
      borderEnabled: true,
      borderOpacity: 25,
      glowEnabled: false,
      glowIntensity: 'subtle',
    },
  },
  {
    id: 'purple-glass',
    name: 'Purple Glass',
    category: 'generic',
    settings: {
      enabled: true,
      blurLevel: 'lg',
      backgroundOpacity: 15,
      variant: 'light',
      colorTint: 'purple',
      tintOpacity: 20,
      borderEnabled: true,
      borderOpacity: 25,
      glowEnabled: false,
      glowIntensity: 'subtle',
    },
  },
  {
    id: 'cyan-glass',
    name: 'Cyan Glass',
    category: 'generic',
    settings: {
      enabled: true,
      blurLevel: 'lg',
      backgroundOpacity: 15,
      variant: 'light',
      colorTint: 'cyan',
      tintOpacity: 20,
      borderEnabled: true,
      borderOpacity: 25,
      glowEnabled: false,
      glowIntensity: 'subtle',
    },
  },
  {
    id: 'pink-glass',
    name: 'Pink Glass',
    category: 'generic',
    settings: {
      enabled: true,
      blurLevel: 'lg',
      backgroundOpacity: 15,
      variant: 'light',
      colorTint: 'pink',
      tintOpacity: 20,
      borderEnabled: true,
      borderOpacity: 25,
      glowEnabled: false,
      glowIntensity: 'subtle',
    },
  },
  {
    id: 'subtle-blur',
    name: 'Subtle Blur',
    category: 'generic',
    settings: {
      enabled: true,
      blurLevel: 'sm',
      backgroundOpacity: 5,
      variant: 'subtle',
      colorTint: 'none',
      tintOpacity: 0,
      borderEnabled: true,
      borderOpacity: 10,
      glowEnabled: false,
      glowIntensity: 'subtle',
    },
  },
  {
    id: 'strong-blur',
    name: 'Strong Blur',
    category: 'generic',
    settings: {
      enabled: true,
      blurLevel: '3xl',
      backgroundOpacity: 20,
      variant: 'strong',
      colorTint: 'none',
      tintOpacity: 0,
      borderEnabled: true,
      borderOpacity: 30,
      glowEnabled: false,
      glowIntensity: 'subtle',
    },
  },
]

// Combined presets (11 total)
export const ALL_GLASS_PRESETS: GlassPreset[] = [
  ...BRAND_GLASS_PRESETS,
  ...GENERIC_GLASS_PRESETS,
]

// Helper to get preset by ID
export function getGlassPreset(id: string): GlassPreset | undefined {
  return ALL_GLASS_PRESETS.find(p => p.id === id)
}
```
