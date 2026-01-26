# Glass Controls Component

Complete implementation of the GlassControls component for the page builder.

## File: `components/page-builder/elementor/glass-controls.tsx`

```typescript
'use client'

import * as React from 'react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { ChevronDown, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import type {
  GlassSettings,
  BlurLevel,
  GlassVariant,
  GlassColorTint,
  GlowIntensity,
} from '@/lib/cms/styling-types'
import { DEFAULT_GLASS_SETTINGS, TINT_COLORS } from '@/lib/cms/styling-types'
import { ALL_GLASS_PRESETS } from '@/lib/cms/glass-presets'

interface GlassControlsProps {
  glass?: Partial<GlassSettings>
  onChange: (glass: GlassSettings) => void
}

const BLUR_LEVELS: { value: BlurLevel; label: string }[] = [
  { value: 'xs', label: 'Extra Small (2px)' },
  { value: 'sm', label: 'Small (4px)' },
  { value: 'md', label: 'Medium (8px)' },
  { value: 'lg', label: 'Large (12px)' },
  { value: 'xl', label: 'Extra Large (16px)' },
  { value: '2xl', label: '2X Large (24px)' },
  { value: '3xl', label: '3X Large (40px)' },
]

const GLASS_VARIANTS: { value: GlassVariant; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'subtle', label: 'Subtle' },
  { value: 'strong', label: 'Strong' },
]

const GLOW_INTENSITIES: { value: GlowIntensity; label: string }[] = [
  { value: 'subtle', label: 'Subtle' },
  { value: 'medium', label: 'Medium' },
  { value: 'strong', label: 'Strong' },
]

const COLOR_TINTS: { value: GlassColorTint; label: string; color: string }[] = [
  { value: 'none', label: 'None', color: 'transparent' },
  { value: 'jkkn-green', label: 'JKKN Green', color: '#0b6d41' },
  { value: 'jkkn-yellow', label: 'JKKN Yellow', color: '#ffde59' },
  { value: 'jkkn-cream', label: 'JKKN Cream', color: '#fbfbee' },
  { value: 'jkkn-gold', label: 'JKKN Gold', color: '#f5c518' },
  { value: 'blue', label: 'Blue', color: '#3b82f6' },
  { value: 'purple', label: 'Purple', color: '#8b5cf6' },
  { value: 'green', label: 'Green', color: '#22c55e' },
  { value: 'cyan', label: 'Cyan', color: '#06b6d4' },
  { value: 'pink', label: 'Pink', color: '#ec4899' },
  { value: 'orange', label: 'Orange', color: '#f97316' },
  { value: 'red', label: 'Red', color: '#ef4444' },
]

export function GlassControls({ glass, onChange }: GlassControlsProps) {
  const [isOpen, setIsOpen] = React.useState(true)
  const [showPresets, setShowPresets] = React.useState(false)

  const settings: GlassSettings = {
    ...DEFAULT_GLASS_SETTINGS,
    ...glass,
  }

  const updateSetting = <K extends keyof GlassSettings>(
    key: K,
    value: GlassSettings[K]
  ) => {
    onChange({ ...settings, [key]: value })
  }

  const applyPreset = (presetId: string) => {
    const preset = ALL_GLASS_PRESETS.find(p => p.id === presetId)
    if (preset) {
      onChange({
        ...DEFAULT_GLASS_SETTINGS,
        ...preset.settings,
        enabled: true,
      })
    }
    setShowPresets(false)
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full items-center justify-between p-2 hover:bg-muted/50"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-medium">Glass Effects</span>
          </div>
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform',
              isOpen && 'rotate-180'
            )}
          />
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-4 px-2 pb-4">
        {/* Enable Glass Toggle */}
        <div className="flex items-center justify-between">
          <Label htmlFor="glass-enabled" className="text-sm">
            Enable Glass Effect
          </Label>
          <Switch
            id="glass-enabled"
            checked={settings.enabled}
            onCheckedChange={(checked) => updateSetting('enabled', checked)}
          />
        </div>

        {settings.enabled && (
          <>
            {/* Presets Button */}
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => setShowPresets(!showPresets)}
              >
                Quick Presets
              </Button>

              {showPresets && (
                <div className="grid grid-cols-3 gap-2 rounded-lg border p-2">
                  {ALL_GLASS_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => applyPreset(preset.id)}
                      className={cn(
                        'rounded-md border p-2 text-xs transition-colors hover:bg-muted/50',
                        preset.category === 'brand' && 'border-primary/50'
                      )}
                      title={preset.name}
                    >
                      <div
                        className="mb-1 h-6 w-full rounded"
                        style={{
                          backdropFilter: 'blur(8px)',
                          backgroundColor:
                            preset.settings.variant === 'dark'
                              ? 'rgba(0,0,0,0.15)'
                              : 'rgba(255,255,255,0.15)',
                          border: '1px solid rgba(255,255,255,0.2)',
                        }}
                      />
                      <span className="truncate">{preset.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Blur Level */}
            <div className="space-y-2">
              <Label className="text-sm">Blur Level</Label>
              <Select
                value={settings.blurLevel}
                onValueChange={(value: BlurLevel) =>
                  updateSetting('blurLevel', value)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {BLUR_LEVELS.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Background Opacity */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Background Opacity</Label>
                <span className="text-xs text-muted-foreground">
                  {settings.backgroundOpacity}%
                </span>
              </div>
              <Slider
                value={[settings.backgroundOpacity]}
                min={5}
                max={30}
                step={1}
                onValueChange={([value]) =>
                  updateSetting('backgroundOpacity', value)
                }
              />
            </div>

            {/* Glass Variant */}
            <div className="space-y-2">
              <Label className="text-sm">Variant</Label>
              <Select
                value={settings.variant}
                onValueChange={(value: GlassVariant) =>
                  updateSetting('variant', value)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {GLASS_VARIANTS.map((variant) => (
                    <SelectItem key={variant.value} value={variant.value}>
                      {variant.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Color Tint */}
            <div className="space-y-2">
              <Label className="text-sm">Color Tint</Label>
              <div className="grid grid-cols-6 gap-1">
                {COLOR_TINTS.map((tint) => (
                  <button
                    key={tint.value}
                    onClick={() => updateSetting('colorTint', tint.value)}
                    className={cn(
                      'h-8 w-full rounded-md border-2 transition-all',
                      settings.colorTint === tint.value
                        ? 'border-primary ring-2 ring-primary/20'
                        : 'border-transparent hover:border-muted-foreground/30'
                    )}
                    style={{
                      backgroundColor:
                        tint.value === 'none'
                          ? 'transparent'
                          : tint.color,
                      backgroundImage:
                        tint.value === 'none'
                          ? 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)'
                          : undefined,
                      backgroundSize: '8px 8px',
                      backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
                    }}
                    title={tint.label}
                  />
                ))}
              </div>

              {settings.colorTint !== 'none' && (
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Tint Opacity</Label>
                    <span className="text-xs text-muted-foreground">
                      {settings.tintOpacity}%
                    </span>
                  </div>
                  <Slider
                    value={[settings.tintOpacity]}
                    min={10}
                    max={30}
                    step={1}
                    onValueChange={([value]) =>
                      updateSetting('tintOpacity', value)
                    }
                  />
                </div>
              )}
            </div>

            {/* Border Section */}
            <div className="space-y-2 rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="border-enabled" className="text-sm">
                  Border
                </Label>
                <Switch
                  id="border-enabled"
                  checked={settings.borderEnabled}
                  onCheckedChange={(checked) =>
                    updateSetting('borderEnabled', checked)
                  }
                />
              </div>

              {settings.borderEnabled && (
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Border Opacity</Label>
                    <span className="text-xs text-muted-foreground">
                      {settings.borderOpacity}%
                    </span>
                  </div>
                  <Slider
                    value={[settings.borderOpacity]}
                    min={10}
                    max={40}
                    step={1}
                    onValueChange={([value]) =>
                      updateSetting('borderOpacity', value)
                    }
                  />
                </div>
              )}
            </div>

            {/* Glow Section */}
            <div className="space-y-2 rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="glow-enabled" className="text-sm">
                  Glow Effect
                </Label>
                <Switch
                  id="glow-enabled"
                  checked={settings.glowEnabled}
                  onCheckedChange={(checked) =>
                    updateSetting('glowEnabled', checked)
                  }
                />
              </div>

              {settings.glowEnabled && (
                <>
                  <div className="space-y-2 pt-2">
                    <Label className="text-sm">Glow Color</Label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={settings.glowColor || '#0b6d41'}
                        onChange={(e) =>
                          updateSetting('glowColor', e.target.value)
                        }
                        className="h-9 w-12 cursor-pointer rounded border"
                      />
                      <input
                        type="text"
                        value={settings.glowColor || '#0b6d41'}
                        onChange={(e) =>
                          updateSetting('glowColor', e.target.value)
                        }
                        className="flex-1 rounded-md border px-2 text-sm"
                        placeholder="#0b6d41"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm">Glow Intensity</Label>
                    <Select
                      value={settings.glowIntensity}
                      onValueChange={(value: GlowIntensity) =>
                        updateSetting('glowIntensity', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {GLOW_INTENSITIES.map((intensity) => (
                          <SelectItem
                            key={intensity.value}
                            value={intensity.value}
                          >
                            {intensity.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
            </div>

            {/* Preview */}
            <div className="space-y-2">
              <Label className="text-sm">Preview</Label>
              <div
                className="flex h-24 items-center justify-center rounded-lg border"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                }}
              >
                <div
                  className="flex h-16 w-32 items-center justify-center rounded-lg text-xs font-medium"
                  style={{
                    backdropFilter: `blur(${
                      { xs: 2, sm: 4, md: 8, lg: 12, xl: 16, '2xl': 24, '3xl': 40 }[
                        settings.blurLevel
                      ]
                    }px)`,
                    backgroundColor:
                      settings.variant === 'dark'
                        ? `rgba(0, 0, 0, ${settings.backgroundOpacity / 100})`
                        : `rgba(255, 255, 255, ${settings.backgroundOpacity / 100})`,
                    border: settings.borderEnabled
                      ? `1px solid rgba(255, 255, 255, ${settings.borderOpacity / 100})`
                      : undefined,
                    boxShadow: settings.glowEnabled
                      ? `0 0 ${
                          { subtle: 10, medium: 20, strong: 30 }[settings.glowIntensity]
                        }px ${settings.glowColor || '#0b6d41'}66`
                      : undefined,
                    color: settings.variant === 'dark' ? '#fff' : '#000',
                  }}
                >
                  Glass Preview
                </div>
              </div>
            </div>
          </>
        )}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default GlassControls
```

## Usage in style-controls.tsx

Add to the existing style controls:

```typescript
import { GlassControls } from './glass-controls'

// In the component:
<GlassControls
  glass={selectedBlock?.props?._styles?._glass}
  onChange={(glass) => {
    updateBlockStyles({ _glass: glass })
  }}
/>
```
