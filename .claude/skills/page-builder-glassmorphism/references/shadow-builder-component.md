# Shadow Builder Component

Complete implementation of the ShadowBuilder component for the page builder.

## File: `components/page-builder/elementor/shadow-builder.tsx`

```typescript
'use client'

import * as React from 'react'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
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
import { ChevronDown, Plus, Trash2, GripVertical, Layers } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ShadowConfig, ShadowLayer } from '@/lib/cms/styling-types'
import { SHADOW_PRESETS } from '@/lib/cms/shadow-presets'

interface ShadowBuilderProps {
  shadow?: ShadowConfig
  onChange: (shadow: ShadowConfig) => void
}

const DEFAULT_LAYER: Omit<ShadowLayer, 'id'> = {
  offsetX: 0,
  offsetY: 4,
  blur: 6,
  spread: 0,
  color: '#000000',
  opacity: 0.1,
  inset: false,
}

function generateId() {
  return Math.random().toString(36).substring(2, 9)
}

function generateShadowCSS(layers: ShadowLayer[]): string {
  if (!layers.length) return 'none'

  return layers
    .map((layer) => {
      const rgba = hexToRgba(layer.color, layer.opacity)
      const inset = layer.inset ? 'inset ' : ''
      return `${inset}${layer.offsetX}px ${layer.offsetY}px ${layer.blur}px ${layer.spread}px ${rgba}`
    })
    .join(', ')
}

function hexToRgba(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export function ShadowBuilder({ shadow, onChange }: ShadowBuilderProps) {
  const [isOpen, setIsOpen] = React.useState(true)
  const [expandedLayer, setExpandedLayer] = React.useState<string | null>(null)

  const layers = shadow?.layers || []

  const updateLayers = (newLayers: ShadowLayer[]) => {
    onChange({ layers: newLayers })
  }

  const addLayer = () => {
    const newLayer: ShadowLayer = {
      ...DEFAULT_LAYER,
      id: generateId(),
    }
    updateLayers([...layers, newLayer])
    setExpandedLayer(newLayer.id)
  }

  const removeLayer = (id: string) => {
    updateLayers(layers.filter((l) => l.id !== id))
    if (expandedLayer === id) {
      setExpandedLayer(null)
    }
  }

  const updateLayer = (id: string, updates: Partial<ShadowLayer>) => {
    updateLayers(
      layers.map((l) => (l.id === id ? { ...l, ...updates } : l))
    )
  }

  const applyPreset = (presetId: string) => {
    const preset = SHADOW_PRESETS.find((p) => p.id === presetId)
    if (preset) {
      updateLayers(
        preset.layers.map((l) => ({ ...l, id: generateId() }))
      )
    }
  }

  const moveLayer = (fromIndex: number, toIndex: number) => {
    const newLayers = [...layers]
    const [moved] = newLayers.splice(fromIndex, 1)
    newLayers.splice(toIndex, 0, moved)
    updateLayers(newLayers)
  }

  const shadowCSS = generateShadowCSS(layers)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full items-center justify-between p-2 hover:bg-muted/50"
        >
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary" />
            <span className="font-medium">Shadow Builder</span>
            {layers.length > 0 && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs">
                {layers.length} layer{layers.length !== 1 ? 's' : ''}
              </span>
            )}
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
        {/* Presets */}
        <div className="space-y-2">
          <Label className="text-sm">Quick Presets</Label>
          <Select onValueChange={applyPreset}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a preset..." />
            </SelectTrigger>
            <SelectContent>
              {SHADOW_PRESETS.map((preset) => (
                <SelectItem key={preset.id} value={preset.id}>
                  {preset.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Layer List */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm">Shadow Layers</Label>
            <Button
              variant="outline"
              size="sm"
              onClick={addLayer}
              className="h-7 gap-1"
            >
              <Plus className="h-3 w-3" />
              Add Layer
            </Button>
          </div>

          {layers.length === 0 ? (
            <div className="rounded-lg border border-dashed p-4 text-center text-sm text-muted-foreground">
              No shadow layers. Add one or choose a preset.
            </div>
          ) : (
            <div className="space-y-2">
              {layers.map((layer, index) => (
                <div
                  key={layer.id}
                  className="rounded-lg border bg-card"
                >
                  {/* Layer Header */}
                  <button
                    onClick={() =>
                      setExpandedLayer(
                        expandedLayer === layer.id ? null : layer.id
                      )
                    }
                    className="flex w-full items-center gap-2 p-2 text-left hover:bg-muted/50"
                  >
                    <GripVertical className="h-4 w-4 cursor-grab text-muted-foreground" />
                    <div
                      className="h-4 w-4 rounded border"
                      style={{
                        backgroundColor: layer.color,
                        opacity: layer.opacity,
                      }}
                    />
                    <span className="flex-1 text-sm">
                      Layer {index + 1}
                      {layer.inset && (
                        <span className="ml-1 text-xs text-muted-foreground">
                          (inset)
                        </span>
                      )}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={(e) => {
                        e.stopPropagation()
                        removeLayer(layer.id)
                      }}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        expandedLayer === layer.id && 'rotate-180'
                      )}
                    />
                  </button>

                  {/* Layer Controls */}
                  {expandedLayer === layer.id && (
                    <div className="space-y-3 border-t p-3">
                      {/* Offset X */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <Label className="text-xs">Offset X</Label>
                          <span className="text-xs text-muted-foreground">
                            {layer.offsetX}px
                          </span>
                        </div>
                        <Slider
                          value={[layer.offsetX]}
                          min={-50}
                          max={50}
                          step={1}
                          onValueChange={([value]) =>
                            updateLayer(layer.id, { offsetX: value })
                          }
                        />
                      </div>

                      {/* Offset Y */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <Label className="text-xs">Offset Y</Label>
                          <span className="text-xs text-muted-foreground">
                            {layer.offsetY}px
                          </span>
                        </div>
                        <Slider
                          value={[layer.offsetY]}
                          min={-50}
                          max={50}
                          step={1}
                          onValueChange={([value]) =>
                            updateLayer(layer.id, { offsetY: value })
                          }
                        />
                      </div>

                      {/* Blur */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <Label className="text-xs">Blur</Label>
                          <span className="text-xs text-muted-foreground">
                            {layer.blur}px
                          </span>
                        </div>
                        <Slider
                          value={[layer.blur]}
                          min={0}
                          max={100}
                          step={1}
                          onValueChange={([value]) =>
                            updateLayer(layer.id, { blur: value })
                          }
                        />
                      </div>

                      {/* Spread */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <Label className="text-xs">Spread</Label>
                          <span className="text-xs text-muted-foreground">
                            {layer.spread}px
                          </span>
                        </div>
                        <Slider
                          value={[layer.spread]}
                          min={-50}
                          max={50}
                          step={1}
                          onValueChange={([value]) =>
                            updateLayer(layer.id, { spread: value })
                          }
                        />
                      </div>

                      {/* Color */}
                      <div className="space-y-1">
                        <Label className="text-xs">Color</Label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={layer.color}
                            onChange={(e) =>
                              updateLayer(layer.id, { color: e.target.value })
                            }
                            className="h-8 w-12 cursor-pointer rounded border"
                          />
                          <input
                            type="text"
                            value={layer.color}
                            onChange={(e) =>
                              updateLayer(layer.id, { color: e.target.value })
                            }
                            className="flex-1 rounded-md border px-2 text-xs"
                            placeholder="#000000"
                          />
                        </div>
                      </div>

                      {/* Opacity */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <Label className="text-xs">Opacity</Label>
                          <span className="text-xs text-muted-foreground">
                            {Math.round(layer.opacity * 100)}%
                          </span>
                        </div>
                        <Slider
                          value={[layer.opacity * 100]}
                          min={0}
                          max={100}
                          step={1}
                          onValueChange={([value]) =>
                            updateLayer(layer.id, { opacity: value / 100 })
                          }
                        />
                      </div>

                      {/* Inset */}
                      <div className="flex items-center justify-between">
                        <Label htmlFor={`inset-${layer.id}`} className="text-xs">
                          Inner Shadow (Inset)
                        </Label>
                        <Switch
                          id={`inset-${layer.id}`}
                          checked={layer.inset}
                          onCheckedChange={(checked) =>
                            updateLayer(layer.id, { inset: checked })
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Preview */}
        {layers.length > 0 && (
          <div className="space-y-2">
            <Label className="text-sm">Preview</Label>
            <div className="flex h-24 items-center justify-center rounded-lg border bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
              <div
                className="h-12 w-24 rounded-lg bg-white dark:bg-gray-700"
                style={{ boxShadow: shadowCSS }}
              />
            </div>
            <div className="rounded border bg-muted/50 p-2">
              <code className="text-xs break-all">{shadowCSS}</code>
            </div>
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default ShadowBuilder
```

## Opacity Controls Component

**File:** `components/page-builder/elementor/opacity-controls.tsx`

```typescript
'use client'

import * as React from 'react'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { ChevronDown, Eye } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { OpacityConfig } from '@/lib/cms/styling-types'

interface OpacityControlsProps {
  opacity?: OpacityConfig
  onChange: (opacity: OpacityConfig) => void
}

const DEFAULT_OPACITY: OpacityConfig = {
  background: 100,
  border: 100,
  overlay: 0,
}

export function OpacityControls({ opacity, onChange }: OpacityControlsProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const settings: OpacityConfig = {
    ...DEFAULT_OPACITY,
    ...opacity,
  }

  const updateSetting = <K extends keyof OpacityConfig>(
    key: K,
    value: OpacityConfig[K]
  ) => {
    onChange({ ...settings, [key]: value })
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full items-center justify-between p-2 hover:bg-muted/50"
        >
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-primary" />
            <span className="font-medium">Opacity</span>
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
        {/* Background Opacity */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm">Background Opacity</Label>
            <span className="text-xs text-muted-foreground">
              {settings.background}%
            </span>
          </div>
          <Slider
            value={[settings.background]}
            min={0}
            max={100}
            step={1}
            onValueChange={([value]) => updateSetting('background', value)}
          />
        </div>

        {/* Border Opacity */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm">Border Opacity</Label>
            <span className="text-xs text-muted-foreground">
              {settings.border}%
            </span>
          </div>
          <Slider
            value={[settings.border]}
            min={0}
            max={100}
            step={1}
            onValueChange={([value]) => updateSetting('border', value)}
          />
        </div>

        {/* Overlay Opacity */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm">Overlay Opacity</Label>
            <span className="text-xs text-muted-foreground">
              {settings.overlay}%
            </span>
          </div>
          <Slider
            value={[settings.overlay || 0]}
            min={0}
            max={100}
            step={1}
            onValueChange={([value]) => updateSetting('overlay', value)}
          />
        </div>

        {/* Preview */}
        <div className="space-y-2">
          <Label className="text-sm">Preview</Label>
          <div
            className="h-16 rounded-lg border"
            style={{
              backgroundImage:
                'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
              backgroundSize: '16px 16px',
              backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
            }}
          >
            <div
              className="h-full w-full rounded-lg"
              style={{
                backgroundColor: `rgba(59, 130, 246, ${settings.background / 100})`,
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: `rgba(59, 130, 246, ${settings.border / 100})`,
              }}
            />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default OpacityControls
```

## Enhanced Color Picker Component

**File:** `components/page-builder/elementor/enhanced-color-picker.tsx`

```typescript
'use client'

import * as React from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Pipette } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EnhancedColorPickerProps {
  value: string
  onChange: (value: string) => void
  label?: string
  showAlpha?: boolean
}

const BRAND_COLORS = [
  { name: 'JKKN Green', value: '#0b6d41' },
  { name: 'JKKN Yellow', value: '#ffde59' },
  { name: 'JKKN Gold', value: '#f5c518' },
  { name: 'JKKN Cream', value: '#fbfbee' },
  { name: 'Dark Green', value: '#085032' },
  { name: 'Light Green', value: '#0f8f56' },
]

const GENERIC_COLORS = [
  '#ef4444', '#f97316', '#eab308', '#22c55e',
  '#14b8a6', '#3b82f6', '#8b5cf6', '#ec4899',
  '#000000', '#374151', '#6b7280', '#ffffff',
]

function hexToRgba(hex: string): { r: number; g: number; b: number; a: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex)
  if (!result) return { r: 0, g: 0, b: 0, a: 1 }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: result[4] ? parseInt(result[4], 16) / 255 : 1,
  }
}

function rgbaToHex(r: number, g: number, b: number, a: number = 1): string {
  const toHex = (n: number) => n.toString(16).padStart(2, '0')
  if (a === 1) {
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(Math.round(a * 255))}`
}

export function EnhancedColorPicker({
  value,
  onChange,
  label,
  showAlpha = true,
}: EnhancedColorPickerProps) {
  const [recentColors, setRecentColors] = React.useState<string[]>([])
  const rgba = hexToRgba(value || '#000000')
  const [localRgba, setLocalRgba] = React.useState(rgba)

  React.useEffect(() => {
    setLocalRgba(hexToRgba(value || '#000000'))
  }, [value])

  const updateColor = (updates: Partial<typeof localRgba>) => {
    const newRgba = { ...localRgba, ...updates }
    setLocalRgba(newRgba)
    const hex = rgbaToHex(newRgba.r, newRgba.g, newRgba.b, newRgba.a)
    onChange(hex)
  }

  const selectColor = (color: string) => {
    onChange(color)
    if (!recentColors.includes(color)) {
      setRecentColors((prev) => [color, ...prev.slice(0, 9)])
    }
  }

  const tryEyedropper = async () => {
    if ('EyeDropper' in window) {
      try {
        // @ts-ignore - EyeDropper API
        const eyeDropper = new window.EyeDropper()
        const result = await eyeDropper.open()
        selectColor(result.sRGBHex)
      } catch (e) {
        // User cancelled
      }
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start gap-2"
        >
          <div
            className="h-5 w-5 rounded border"
            style={{ backgroundColor: value || '#000000' }}
          />
          <span className="flex-1 text-left text-sm">
            {value || 'Select color'}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          {label && <Label className="text-sm font-medium">{label}</Label>}

          <Tabs defaultValue="palette">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="palette">Palette</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
              <TabsTrigger value="rgba">RGBA</TabsTrigger>
            </TabsList>

            <TabsContent value="palette" className="space-y-3">
              {/* Brand Colors */}
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">
                  Brand Colors
                </Label>
                <div className="grid grid-cols-6 gap-1">
                  {BRAND_COLORS.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => selectColor(color.value)}
                      className={cn(
                        'h-8 w-full rounded-md border-2 transition-all',
                        value === color.value
                          ? 'border-primary ring-2 ring-primary/20'
                          : 'border-transparent hover:border-muted-foreground/30'
                      )}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Generic Colors */}
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">
                  Standard Colors
                </Label>
                <div className="grid grid-cols-6 gap-1">
                  {GENERIC_COLORS.map((color) => (
                    <button
                      key={color}
                      onClick={() => selectColor(color)}
                      className={cn(
                        'h-8 w-full rounded-md border-2 transition-all',
                        value === color
                          ? 'border-primary ring-2 ring-primary/20'
                          : 'border-transparent hover:border-muted-foreground/30'
                      )}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Recent Colors */}
              {recentColors.length > 0 && (
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">
                    Recent Colors
                  </Label>
                  <div className="grid grid-cols-10 gap-1">
                    {recentColors.map((color, i) => (
                      <button
                        key={`${color}-${i}`}
                        onClick={() => selectColor(color)}
                        className="h-6 w-full rounded border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="custom" className="space-y-3">
              {/* Native Color Picker */}
              <div className="flex gap-2">
                <input
                  type="color"
                  value={value?.slice(0, 7) || '#000000'}
                  onChange={(e) => onChange(e.target.value)}
                  className="h-10 w-16 cursor-pointer rounded border"
                />
                <Input
                  type="text"
                  value={value || '#000000'}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="#000000"
                  className="flex-1"
                />
              </div>

              {/* Eyedropper */}
              {'EyeDropper' in window && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2"
                  onClick={tryEyedropper}
                >
                  <Pipette className="h-4 w-4" />
                  Pick from Screen
                </Button>
              )}
            </TabsContent>

            <TabsContent value="rgba" className="space-y-3">
              {/* R */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <Label className="text-xs">Red</Label>
                  <span className="text-xs text-muted-foreground">
                    {localRgba.r}
                  </span>
                </div>
                <Slider
                  value={[localRgba.r]}
                  min={0}
                  max={255}
                  step={1}
                  onValueChange={([v]) => updateColor({ r: v })}
                  className="[&_[role=slider]]:bg-red-500"
                />
              </div>

              {/* G */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <Label className="text-xs">Green</Label>
                  <span className="text-xs text-muted-foreground">
                    {localRgba.g}
                  </span>
                </div>
                <Slider
                  value={[localRgba.g]}
                  min={0}
                  max={255}
                  step={1}
                  onValueChange={([v]) => updateColor({ g: v })}
                  className="[&_[role=slider]]:bg-green-500"
                />
              </div>

              {/* B */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <Label className="text-xs">Blue</Label>
                  <span className="text-xs text-muted-foreground">
                    {localRgba.b}
                  </span>
                </div>
                <Slider
                  value={[localRgba.b]}
                  min={0}
                  max={255}
                  step={1}
                  onValueChange={([v]) => updateColor({ b: v })}
                  className="[&_[role=slider]]:bg-blue-500"
                />
              </div>

              {/* Alpha */}
              {showAlpha && (
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs">Alpha</Label>
                    <span className="text-xs text-muted-foreground">
                      {Math.round(localRgba.a * 100)}%
                    </span>
                  </div>
                  <Slider
                    value={[localRgba.a * 100]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={([v]) => updateColor({ a: v / 100 })}
                  />
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Preview */}
          <div className="flex items-center gap-2 rounded-lg border p-2">
            <div
              className="h-10 w-10 rounded border"
              style={{
                backgroundColor: value || '#000000',
                backgroundImage:
                  'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
                backgroundSize: '8px 8px',
                backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
              }}
            >
              <div
                className="h-full w-full rounded"
                style={{ backgroundColor: value || '#000000' }}
              />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{value || '#000000'}</div>
              <div className="text-xs text-muted-foreground">
                rgba({localRgba.r}, {localRgba.g}, {localRgba.b},{' '}
                {localRgba.a.toFixed(2)})
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default EnhancedColorPicker
```

## Neumorphism Controls Component

**File:** `components/page-builder/elementor/neumorphism-controls.tsx`

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
import { ChevronDown, Box } from 'lucide-react'
import { cn } from '@/lib/utils'
import type {
  NeumorphismSettings,
  NeumorphismType,
  NeumorphismIntensity,
} from '@/lib/cms/styling-types'
import { DEFAULT_NEUMORPHISM_SETTINGS } from '@/lib/cms/styling-types'

interface NeumorphismControlsProps {
  neumorphism?: Partial<NeumorphismSettings>
  onChange: (neumorphism: NeumorphismSettings) => void
}

const NEUMORPHISM_TYPES: { value: NeumorphismType; label: string }[] = [
  { value: 'flat', label: 'Flat' },
  { value: 'pressed', label: 'Pressed' },
  { value: 'convex', label: 'Convex' },
  { value: 'concave', label: 'Concave' },
]

const INTENSITIES: { value: NeumorphismIntensity; label: string }[] = [
  { value: 'subtle', label: 'Subtle' },
  { value: 'medium', label: 'Medium' },
  { value: 'strong', label: 'Strong' },
]

function lightenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const amt = Math.round(2.55 * percent)
  const R = Math.min(255, (num >> 16) + amt)
  const G = Math.min(255, ((num >> 8) & 0x00ff) + amt)
  const B = Math.min(255, (num & 0x0000ff) + amt)
  return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`
}

function darkenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const amt = Math.round(2.55 * percent)
  const R = Math.max(0, (num >> 16) - amt)
  const G = Math.max(0, ((num >> 8) & 0x00ff) - amt)
  const B = Math.max(0, (num & 0x0000ff) - amt)
  return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`
}

function generateNeumorphismCSS(settings: NeumorphismSettings): React.CSSProperties {
  const { type, backgroundColor, distance, blur, borderRadius } = settings
  const lightColor = lightenColor(backgroundColor, 20)
  const darkColor = darkenColor(backgroundColor, 15)

  let boxShadow = ''
  let background = backgroundColor

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

export function NeumorphismControls({
  neumorphism,
  onChange,
}: NeumorphismControlsProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const settings: NeumorphismSettings = {
    ...DEFAULT_NEUMORPHISM_SETTINGS,
    ...neumorphism,
  }

  const updateSetting = <K extends keyof NeumorphismSettings>(
    key: K,
    value: NeumorphismSettings[K]
  ) => {
    onChange({ ...settings, [key]: value })
  }

  const previewStyles = generateNeumorphismCSS(settings)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full items-center justify-between p-2 hover:bg-muted/50"
        >
          <div className="flex items-center gap-2">
            <Box className="h-4 w-4 text-primary" />
            <span className="font-medium">Neumorphism</span>
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
        {/* Enable Toggle */}
        <div className="flex items-center justify-between">
          <Label htmlFor="neumorphism-enabled" className="text-sm">
            Enable Neumorphism
          </Label>
          <Switch
            id="neumorphism-enabled"
            checked={settings.enabled}
            onCheckedChange={(checked) => updateSetting('enabled', checked)}
          />
        </div>

        {settings.enabled && (
          <>
            {/* Type */}
            <div className="space-y-2">
              <Label className="text-sm">Type</Label>
              <div className="grid grid-cols-4 gap-1">
                {NEUMORPHISM_TYPES.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => updateSetting('type', type.value)}
                    className={cn(
                      'rounded-md border p-2 text-xs transition-colors',
                      settings.type === type.value
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:bg-muted/50'
                    )}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Intensity */}
            <div className="space-y-2">
              <Label className="text-sm">Intensity</Label>
              <Select
                value={settings.intensity}
                onValueChange={(value: NeumorphismIntensity) =>
                  updateSetting('intensity', value)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {INTENSITIES.map((intensity) => (
                    <SelectItem key={intensity.value} value={intensity.value}>
                      {intensity.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Background Color */}
            <div className="space-y-2">
              <Label className="text-sm">Background Color</Label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={settings.backgroundColor}
                  onChange={(e) =>
                    updateSetting('backgroundColor', e.target.value)
                  }
                  className="h-9 w-12 cursor-pointer rounded border"
                />
                <input
                  type="text"
                  value={settings.backgroundColor}
                  onChange={(e) =>
                    updateSetting('backgroundColor', e.target.value)
                  }
                  className="flex-1 rounded-md border px-2 text-sm"
                  placeholder="#e0e0e0"
                />
              </div>
            </div>

            {/* Distance */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Shadow Distance</Label>
                <span className="text-xs text-muted-foreground">
                  {settings.distance}px
                </span>
              </div>
              <Slider
                value={[settings.distance]}
                min={2}
                max={20}
                step={1}
                onValueChange={([value]) => updateSetting('distance', value)}
              />
            </div>

            {/* Blur */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Shadow Blur</Label>
                <span className="text-xs text-muted-foreground">
                  {settings.blur}px
                </span>
              </div>
              <Slider
                value={[settings.blur]}
                min={4}
                max={40}
                step={1}
                onValueChange={([value]) => updateSetting('blur', value)}
              />
            </div>

            {/* Border Radius */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Border Radius</Label>
                <span className="text-xs text-muted-foreground">
                  {settings.borderRadius}px
                </span>
              </div>
              <Slider
                value={[settings.borderRadius]}
                min={0}
                max={50}
                step={1}
                onValueChange={([value]) => updateSetting('borderRadius', value)}
              />
            </div>

            {/* Preview */}
            <div className="space-y-2">
              <Label className="text-sm">Preview</Label>
              <div
                className="flex h-24 items-center justify-center rounded-lg"
                style={{ backgroundColor: settings.backgroundColor }}
              >
                <div
                  className="flex h-16 w-32 items-center justify-center text-xs font-medium"
                  style={previewStyles}
                >
                  Neumorphism
                </div>
              </div>
            </div>
          </>
        )}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default NeumorphismControls
```
