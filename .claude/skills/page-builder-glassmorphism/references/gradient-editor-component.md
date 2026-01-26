# Gradient Editor Component

Visual gradient editor with drag-drop color stops.

## File: `components/page-builder/elementor/gradient-editor.tsx`

```typescript
'use client'

import * as React from 'react'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ChevronDown, Plus, Trash2, Copy, Palette } from 'lucide-react'
import { cn } from '@/lib/utils'
import type {
  GradientConfig,
  GradientColorStop,
  GradientType,
  RadialShape,
} from '@/lib/cms/styling-types'
import { ALL_GRADIENT_PRESETS } from '@/lib/cms/gradient-presets'

interface GradientEditorProps {
  gradient?: GradientConfig
  onChange: (gradient: GradientConfig) => void
}

const DEFAULT_GRADIENT: GradientConfig = {
  type: 'linear',
  angle: 135,
  stops: [
    { id: '1', color: '#0b6d41', position: 0 },
    { id: '2', color: '#085032', position: 100 },
  ],
}

// Generate unique ID
const generateId = () => Math.random().toString(36).substr(2, 9)

// Convert gradient config to CSS
export function gradientConfigToCss(config: GradientConfig): string {
  const stopsStr = config.stops
    .sort((a, b) => a.position - b.position)
    .map((stop) => {
      const color =
        stop.opacity !== undefined && stop.opacity < 1
          ? hexToRgba(stop.color, stop.opacity)
          : stop.color
      return `${color} ${stop.position}%`
    })
    .join(', ')

  switch (config.type) {
    case 'linear':
      return `linear-gradient(${config.angle || 135}deg, ${stopsStr})`
    case 'radial':
      const pos = config.position || { x: 50, y: 50 }
      const shape = config.shape || 'ellipse'
      return `radial-gradient(${shape} at ${pos.x}% ${pos.y}%, ${stopsStr})`
    case 'conic':
      return `conic-gradient(from ${config.startAngle || 0}deg, ${stopsStr})`
  }
}

function hexToRgba(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export function GradientEditor({ gradient, onChange }: GradientEditorProps) {
  const [isOpen, setIsOpen] = React.useState(true)
  const [selectedStopId, setSelectedStopId] = React.useState<string | null>(null)
  const [showPresets, setShowPresets] = React.useState(false)
  const gradientBarRef = React.useRef<HTMLDivElement>(null)

  const config: GradientConfig = gradient || DEFAULT_GRADIENT
  const cssValue = gradientConfigToCss(config)

  const updateConfig = (updates: Partial<GradientConfig>) => {
    onChange({ ...config, ...updates })
  }

  const updateStop = (stopId: string, updates: Partial<GradientColorStop>) => {
    const newStops = config.stops.map((stop) =>
      stop.id === stopId ? { ...stop, ...updates } : stop
    )
    updateConfig({ stops: newStops })
  }

  const addStop = (position: number) => {
    // Find colors at position for interpolation
    const sortedStops = [...config.stops].sort((a, b) => a.position - b.position)
    let leftStop = sortedStops[0]
    let rightStop = sortedStops[sortedStops.length - 1]

    for (let i = 0; i < sortedStops.length - 1; i++) {
      if (sortedStops[i].position <= position && sortedStops[i + 1].position >= position) {
        leftStop = sortedStops[i]
        rightStop = sortedStops[i + 1]
        break
      }
    }

    const newStop: GradientColorStop = {
      id: generateId(),
      color: leftStop.color,
      position: Math.round(position),
    }

    updateConfig({ stops: [...config.stops, newStop] })
    setSelectedStopId(newStop.id)
  }

  const removeStop = (stopId: string) => {
    if (config.stops.length <= 2) return // Minimum 2 stops
    const newStops = config.stops.filter((stop) => stop.id !== stopId)
    updateConfig({ stops: newStops })
    setSelectedStopId(null)
  }

  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gradientBarRef.current) return
    const rect = gradientBarRef.current.getBoundingClientRect()
    const position = ((e.clientX - rect.left) / rect.width) * 100
    addStop(position)
  }

  const handleStopDrag = (
    stopId: string,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.stopPropagation()
    setSelectedStopId(stopId)

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!gradientBarRef.current) return
      const rect = gradientBarRef.current.getBoundingClientRect()
      let position = ((moveEvent.clientX - rect.left) / rect.width) * 100
      position = Math.max(0, Math.min(100, position))
      updateStop(stopId, { position: Math.round(position) })
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const applyPreset = (presetId: string) => {
    const preset = ALL_GRADIENT_PRESETS.find((p) => p.id === presetId)
    if (preset) {
      onChange(preset.config)
    }
    setShowPresets(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssValue)
  }

  const selectedStop = config.stops.find((s) => s.id === selectedStopId)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full items-center justify-between p-2 hover:bg-muted/50"
        >
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4 text-primary" />
            <span className="font-medium">Gradient</span>
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
        {/* Gradient Type Tabs */}
        <Tabs
          value={config.type}
          onValueChange={(value: GradientType) => updateConfig({ type: value })}
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="linear">Linear</TabsTrigger>
            <TabsTrigger value="radial">Radial</TabsTrigger>
            <TabsTrigger value="conic">Conic</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Presets Button */}
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => setShowPresets(!showPresets)}
        >
          Gradient Presets
        </Button>

        {showPresets && (
          <div className="grid grid-cols-4 gap-2 rounded-lg border p-2">
            {ALL_GRADIENT_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => applyPreset(preset.id)}
                className={cn(
                  'h-10 w-full rounded-md border-2 transition-all',
                  preset.category === 'brand'
                    ? 'border-primary/50'
                    : 'border-transparent',
                  'hover:border-primary'
                )}
                style={{ background: preset.css }}
                title={preset.name}
              />
            ))}
          </div>
        )}

        {/* Interactive Gradient Bar */}
        <div className="space-y-2">
          <Label className="text-sm">Color Stops</Label>
          <div
            ref={gradientBarRef}
            className="relative h-8 cursor-crosshair rounded-lg border"
            style={{ background: cssValue }}
            onClick={handleBarClick}
          >
            {config.stops.map((stop) => (
              <div
                key={stop.id}
                className={cn(
                  'absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-white shadow-md',
                  selectedStopId === stop.id && 'ring-2 ring-primary'
                )}
                style={{
                  left: `${stop.position}%`,
                  backgroundColor: stop.color,
                }}
                onMouseDown={(e) => handleStopDrag(stop.id, e)}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedStopId(stop.id)
                }}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Click on bar to add stops. Drag stops to reposition.
          </p>
        </div>

        {/* Selected Stop Editor */}
        {selectedStop && (
          <div className="space-y-3 rounded-lg border p-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm">Edit Stop</Label>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => removeStop(selectedStop.id)}
                disabled={config.stops.length <= 2}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>

            <div className="flex gap-2">
              <input
                type="color"
                value={selectedStop.color}
                onChange={(e) =>
                  updateStop(selectedStop.id, { color: e.target.value })
                }
                className="h-9 w-12 cursor-pointer rounded border"
              />
              <Input
                value={selectedStop.color}
                onChange={(e) =>
                  updateStop(selectedStop.id, { color: e.target.value })
                }
                className="flex-1"
                placeholder="#000000"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Position</Label>
                <span className="text-xs text-muted-foreground">
                  {selectedStop.position}%
                </span>
              </div>
              <Slider
                value={[selectedStop.position]}
                min={0}
                max={100}
                step={1}
                onValueChange={([value]) =>
                  updateStop(selectedStop.id, { position: value })
                }
              />
            </div>
          </div>
        )}

        {/* Type-specific controls */}
        {config.type === 'linear' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-sm">Angle</Label>
              <span className="text-xs text-muted-foreground">
                {config.angle || 135}°
              </span>
            </div>
            <Slider
              value={[config.angle || 135]}
              min={0}
              max={360}
              step={1}
              onValueChange={([value]) => updateConfig({ angle: value })}
            />
            <div className="flex flex-wrap gap-1">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <Button
                  key={angle}
                  variant={config.angle === angle ? 'default' : 'outline'}
                  size="sm"
                  className="h-7 w-10 text-xs"
                  onClick={() => updateConfig({ angle })}
                >
                  {angle}°
                </Button>
              ))}
            </div>
          </div>
        )}

        {config.type === 'radial' && (
          <>
            <div className="space-y-2">
              <Label className="text-sm">Shape</Label>
              <div className="flex gap-2">
                {(['circle', 'ellipse'] as RadialShape[]).map((shape) => (
                  <Button
                    key={shape}
                    variant={config.shape === shape ? 'default' : 'outline'}
                    size="sm"
                    className="flex-1 capitalize"
                    onClick={() => updateConfig({ shape })}
                  >
                    {shape}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm">Position</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <Label className="text-xs">X: {config.position?.x || 50}%</Label>
                  <Slider
                    value={[config.position?.x || 50]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={([x]) =>
                      updateConfig({
                        position: { x, y: config.position?.y || 50 },
                      })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Y: {config.position?.y || 50}%</Label>
                  <Slider
                    value={[config.position?.y || 50]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={([y]) =>
                      updateConfig({
                        position: { x: config.position?.x || 50, y },
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {config.type === 'conic' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-sm">Start Angle</Label>
              <span className="text-xs text-muted-foreground">
                {config.startAngle || 0}°
              </span>
            </div>
            <Slider
              value={[config.startAngle || 0]}
              min={0}
              max={360}
              step={1}
              onValueChange={([value]) => updateConfig({ startAngle: value })}
            />
          </div>
        )}

        {/* CSS Output */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm">CSS Output</Label>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={copyToClipboard}
              title="Copy CSS"
            >
              <Copy className="h-3 w-3" />
            </Button>
          </div>
          <Input
            value={cssValue}
            readOnly
            className="text-xs font-mono"
          />
        </div>

        {/* Preview */}
        <div className="space-y-2">
          <Label className="text-sm">Preview</Label>
          <div
            className="h-20 w-full rounded-lg border"
            style={{ background: cssValue }}
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default GradientEditor
```

## Helper Utilities

Add to `components/page-builder/elementor/styling-utils.ts`:

```typescript
// Parse CSS gradient string to GradientConfig
export function parseGradientCss(css: string): GradientConfig | null {
  if (!css) return null

  try {
    // Linear gradient
    const linearMatch = css.match(
      /linear-gradient\((\d+)deg,\s*(.+)\)/
    )
    if (linearMatch) {
      const angle = parseInt(linearMatch[1])
      const stopsStr = linearMatch[2]
      const stops = parseColorStops(stopsStr)
      return { type: 'linear', angle, stops }
    }

    // Radial gradient
    const radialMatch = css.match(
      /radial-gradient\((circle|ellipse)\s+at\s+(\d+)%\s+(\d+)%,\s*(.+)\)/
    )
    if (radialMatch) {
      const shape = radialMatch[1] as 'circle' | 'ellipse'
      const x = parseInt(radialMatch[2])
      const y = parseInt(radialMatch[3])
      const stopsStr = radialMatch[4]
      const stops = parseColorStops(stopsStr)
      return { type: 'radial', shape, position: { x, y }, stops }
    }

    // Conic gradient
    const conicMatch = css.match(
      /conic-gradient\(from\s+(\d+)deg,\s*(.+)\)/
    )
    if (conicMatch) {
      const startAngle = parseInt(conicMatch[1])
      const stopsStr = conicMatch[2]
      const stops = parseColorStops(stopsStr)
      return { type: 'conic', startAngle, stops }
    }

    return null
  } catch {
    return null
  }
}

function parseColorStops(stopsStr: string): GradientColorStop[] {
  const stops: GradientColorStop[] = []
  const regex = /(#[a-fA-F0-9]{6}|rgba?\([^)]+\))\s+(\d+)%/g
  let match

  while ((match = regex.exec(stopsStr)) !== null) {
    stops.push({
      id: Math.random().toString(36).substr(2, 9),
      color: match[1].startsWith('rgba')
        ? rgbaToHex(match[1])
        : match[1],
      position: parseInt(match[2]),
    })
  }

  return stops
}

function rgbaToHex(rgba: string): string {
  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (!match) return '#000000'
  const r = parseInt(match[1]).toString(16).padStart(2, '0')
  const g = parseInt(match[2]).toString(16).padStart(2, '0')
  const b = parseInt(match[3]).toString(16).padStart(2, '0')
  return `#${r}${g}${b}`
}
```
