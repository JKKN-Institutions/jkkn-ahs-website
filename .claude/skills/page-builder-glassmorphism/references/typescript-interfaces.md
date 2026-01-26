# TypeScript Interfaces

All TypeScript interfaces for the glassmorphism page builder enhancement.

## File: `lib/cms/styling-types.ts`

```typescript
// ============================================
// Glass Effect Types
// ============================================

export type BlurLevel = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type GlassVariant = 'light' | 'dark' | 'subtle' | 'strong'
export type GlowIntensity = 'subtle' | 'medium' | 'strong'

export type GlassColorTint =
  | 'none'
  | 'blue'
  | 'purple'
  | 'green'
  | 'red'
  | 'orange'
  | 'pink'
  | 'cyan'
  | 'jkkn-green'
  | 'jkkn-yellow'
  | 'jkkn-cream'
  | 'jkkn-gold'

export interface GlassSettings {
  enabled: boolean
  blurLevel: BlurLevel
  backgroundOpacity: number // 5-30%
  variant: GlassVariant
  colorTint: GlassColorTint
  customTintColor?: string
  tintOpacity: number // 10-30%
  borderEnabled: boolean
  borderOpacity: number // 10-40%
  glowEnabled: boolean
  glowColor?: string
  glowIntensity: GlowIntensity
}

export const DEFAULT_GLASS_SETTINGS: GlassSettings = {
  enabled: false,
  blurLevel: 'lg',
  backgroundOpacity: 10,
  variant: 'light',
  colorTint: 'none',
  tintOpacity: 15,
  borderEnabled: true,
  borderOpacity: 20,
  glowEnabled: false,
  glowIntensity: 'subtle',
}

// ============================================
// Gradient Types
// ============================================

export type GradientType = 'linear' | 'radial' | 'conic'
export type RadialShape = 'circle' | 'ellipse'

export interface GradientColorStop {
  id: string
  color: string
  position: number // 0-100%
  opacity?: number // 0-1
}

export interface GradientConfig {
  type: GradientType
  stops: GradientColorStop[]
  // Linear gradient specific
  angle?: number // 0-360 degrees
  // Radial gradient specific
  shape?: RadialShape
  position?: {
    x: number // 0-100 percentage
    y: number // 0-100 percentage
  }
  // Conic gradient specific
  startAngle?: number // 0-360 degrees
}

export interface GradientPreset {
  id: string
  name: string
  category: 'brand' | 'generic'
  css: string
  config: GradientConfig
}

export const DEFAULT_GRADIENT_CONFIG: GradientConfig = {
  type: 'linear',
  angle: 135,
  stops: [
    { id: '1', color: '#0b6d41', position: 0 },
    { id: '2', color: '#085032', position: 100 },
  ],
}

// ============================================
// Shadow Types
// ============================================

export interface ShadowLayer {
  id: string
  offsetX: number // pixels
  offsetY: number // pixels
  blur: number // pixels
  spread: number // pixels
  color: string // Hex color
  opacity: number // 0-1
  inset: boolean // Inner shadow
}

export interface ShadowConfig {
  layers: ShadowLayer[]
}

export interface ShadowPreset {
  id: string
  name: string
  layers: ShadowLayer[]
}

export const DEFAULT_SHADOW_LAYER: ShadowLayer = {
  id: '',
  offsetX: 0,
  offsetY: 4,
  blur: 6,
  spread: 0,
  color: '#000000',
  opacity: 0.1,
  inset: false,
}

// ============================================
// Opacity Types
// ============================================

export interface OpacityConfig {
  background: number // 0-100 percentage
  border: number // 0-100 percentage
  overlay?: number // 0-100 percentage
}

export const DEFAULT_OPACITY_CONFIG: OpacityConfig = {
  background: 100,
  border: 100,
  overlay: 0,
}

// ============================================
// Color Types
// ============================================

export type ColorMode = 'hex' | 'rgba' | 'hsla'

export interface ColorConfig {
  hex: string
  alpha: number // 0-1
  hsla?: {
    h: number // 0-360
    s: number // 0-100
    l: number // 0-100
    a: number // 0-1
  }
}

export interface ColorPickerState {
  mode: ColorMode
  recentColors: string[] // Last 10 used colors
  showEyedropper: boolean
}

// ============================================
// Neumorphism Types
// ============================================

export type NeumorphismType = 'flat' | 'pressed' | 'convex' | 'concave'
export type NeumorphismIntensity = 'subtle' | 'medium' | 'strong'

export interface NeumorphismSettings {
  enabled: boolean
  type: NeumorphismType
  intensity: NeumorphismIntensity
  backgroundColor: string // Base color for the effect
  lightColor?: string // Auto-calculated lighter shade
  darkColor?: string // Auto-calculated darker shade
  distance: number // Shadow distance 2-20px
  blur: number // Shadow blur 4-40px
  borderRadius: number
}

export const DEFAULT_NEUMORPHISM_SETTINGS: NeumorphismSettings = {
  enabled: false,
  type: 'flat',
  intensity: 'medium',
  backgroundColor: '#e0e0e0',
  distance: 5,
  blur: 10,
  borderRadius: 12,
}

// ============================================
// Morphism Style Type
// ============================================

export type MorphismStyle = 'none' | 'glass' | 'neumorphism' | 'claymorphism'

// ============================================
// Enhanced Block Styles
// ============================================

export interface EnhancedBlockStyles {
  _glass?: GlassSettings
  _gradient?: GradientConfig
  _shadow?: ShadowConfig
  _opacity?: OpacityConfig
  _neumorphism?: NeumorphismSettings
  _morphismStyle?: MorphismStyle
}

// ============================================
// Glass Preset Types
// ============================================

export interface GlassPreset {
  id: string
  name: string
  category: 'brand' | 'generic'
  settings: Partial<GlassSettings>
}

// ============================================
// Utility Constants
// ============================================

export const BLUR_VALUES: Record<BlurLevel, number> = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  '3xl': 40,
}

export const TINT_COLORS: Record<GlassColorTint, string> = {
  none: 'transparent',
  blue: '#3b82f6',
  purple: '#8b5cf6',
  green: '#22c55e',
  red: '#ef4444',
  orange: '#f97316',
  pink: '#ec4899',
  cyan: '#06b6d4',
  'jkkn-green': '#0b6d41',
  'jkkn-yellow': '#ffde59',
  'jkkn-cream': '#fbfbee',
  'jkkn-gold': '#f5c518',
}

export const GLOW_BLUR_VALUES: Record<GlowIntensity, number> = {
  subtle: 10,
  medium: 20,
  strong: 30,
}

export const NEUMORPHISM_DISTANCE: Record<NeumorphismIntensity, number> = {
  subtle: 3,
  medium: 5,
  strong: 8,
}

export const NEUMORPHISM_BLUR: Record<NeumorphismIntensity, number> = {
  subtle: 6,
  medium: 10,
  strong: 16,
}
```

## Zod Schemas for Registry Types

Add to `lib/cms/registry-types.ts`:

```typescript
import { z } from 'zod'

// Glass Settings Schema
export const GlassSettingsSchema = z.object({
  enabled: z.boolean().default(false),
  blurLevel: z.enum(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']).default('lg'),
  backgroundOpacity: z.number().min(5).max(30).default(10),
  variant: z.enum(['light', 'dark', 'subtle', 'strong']).default('light'),
  colorTint: z.enum([
    'none', 'blue', 'purple', 'green', 'red', 'orange', 'pink', 'cyan',
    'jkkn-green', 'jkkn-yellow', 'jkkn-cream', 'jkkn-gold'
  ]).default('none'),
  customTintColor: z.string().optional(),
  tintOpacity: z.number().min(10).max(30).default(15),
  borderEnabled: z.boolean().default(true),
  borderOpacity: z.number().min(10).max(40).default(20),
  glowEnabled: z.boolean().default(false),
  glowColor: z.string().optional(),
  glowIntensity: z.enum(['subtle', 'medium', 'strong']).default('subtle'),
})

// Gradient Config Schema
export const GradientColorStopSchema = z.object({
  id: z.string(),
  color: z.string(),
  position: z.number().min(0).max(100),
  opacity: z.number().min(0).max(1).optional(),
})

export const GradientConfigSchema = z.object({
  type: z.enum(['linear', 'radial', 'conic']).default('linear'),
  stops: z.array(GradientColorStopSchema).min(2),
  angle: z.number().min(0).max(360).optional(),
  shape: z.enum(['circle', 'ellipse']).optional(),
  position: z.object({
    x: z.number().min(0).max(100),
    y: z.number().min(0).max(100),
  }).optional(),
  startAngle: z.number().min(0).max(360).optional(),
})

// Shadow Layer Schema
export const ShadowLayerSchema = z.object({
  id: z.string(),
  offsetX: z.number().min(-50).max(50),
  offsetY: z.number().min(-50).max(50),
  blur: z.number().min(0).max(100),
  spread: z.number().min(-50).max(50),
  color: z.string(),
  opacity: z.number().min(0).max(1),
  inset: z.boolean().default(false),
})

export const ShadowConfigSchema = z.object({
  layers: z.array(ShadowLayerSchema),
})

// Neumorphism Settings Schema
export const NeumorphismSettingsSchema = z.object({
  enabled: z.boolean().default(false),
  type: z.enum(['flat', 'pressed', 'convex', 'concave']).default('flat'),
  intensity: z.enum(['subtle', 'medium', 'strong']).default('medium'),
  backgroundColor: z.string().default('#e0e0e0'),
  lightColor: z.string().optional(),
  darkColor: z.string().optional(),
  distance: z.number().min(2).max(20).default(5),
  blur: z.number().min(4).max(40).default(10),
  borderRadius: z.number().min(0).max(50).default(12),
})

// GlassCard Component Schema
export const GlassCardPropsSchema = z.object({
  variant: z.enum(['light', 'dark', 'subtle', 'strong', 'dark-elegant', 'gradient', 'brand']).default('light'),
  blur: z.enum(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']).default('lg'),
  colorTint: z.enum(['none', 'blue', 'purple', 'green', 'cyan', 'jkkn-green', 'jkkn-yellow']).default('none'),
  hover: z.boolean().default(true),
  glow: z.boolean().default(false),
  glowColor: z.string().optional(),
  borderRadius: z.enum(['sm', 'md', 'lg', 'xl', '2xl', 'full']).default('lg'),
  padding: z.enum(['none', 'sm', 'md', 'lg', 'xl']).default('md'),
  title: z.string().optional(),
  description: z.string().optional(),
})

// GlassSection Component Schema
export const GlassSectionPropsSchema = z.object({
  variant: z.enum(['light', 'dark', 'subtle', 'strong']).default('subtle'),
  blur: z.enum(['sm', 'md', 'lg', 'xl']).default('lg'),
  colorTint: z.enum(['none', 'jkkn-green', 'jkkn-yellow', 'blue', 'purple']).default('none'),
  overlayOpacity: z.number().min(0).max(50).default(10),
  fullWidth: z.boolean().default(true),
  minHeight: z.string().default('auto'),
  padding: z.enum(['none', 'sm', 'md', 'lg', 'xl']).default('lg'),
})

// GlassNav Component Schema
export const GlassNavPropsSchema = z.object({
  position: z.enum(['top', 'bottom', 'floating']).default('top'),
  variant: z.enum(['light', 'dark']).default('light'),
  blur: z.enum(['md', 'lg', 'xl']).default('xl'),
  sticky: z.boolean().default(true),
  showBorder: z.boolean().default(true),
})

// GlassBadge Component Schema
export const GlassBadgePropsSchema = z.object({
  text: z.string().default('Badge'),
  variant: z.enum(['light', 'dark', 'colored']).default('light'),
  color: z.string().optional(),
  size: z.enum(['sm', 'md', 'lg']).default('md'),
})

// Glass Effect for existing components
export const GlassEffectSchema = z.object({
  enabled: z.boolean().default(false),
  variant: z.enum(['light', 'dark', 'subtle', 'strong']).default('light'),
  blur: z.enum(['sm', 'md', 'lg', 'xl']).default('lg'),
}).optional()
```
