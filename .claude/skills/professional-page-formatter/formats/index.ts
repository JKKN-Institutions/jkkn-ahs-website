import { PageFormat } from './base-format'
import { GlassCardsFormat } from './glass-cards'
import { DentalCourseFormat } from './dental-course'

export const FORMAT_REGISTRY: Record<string, PageFormat> = {
  'glass-cards': new GlassCardsFormat(),
  'dental-course': new DentalCourseFormat()
}

export function getFormat(name: string): PageFormat {
  const format = FORMAT_REGISTRY[name]
  if (!format) {
    throw new Error(`Unknown format: ${name}. Available: ${Object.keys(FORMAT_REGISTRY).join(', ')}`)
  }
  return format
}

export function listFormats(): Array<{ name: string; description: string }> {
  return Object.values(FORMAT_REGISTRY).map(f => ({
    name: f.name,
    description: f.description
  }))
}

// Re-export types for convenience
export type { PageFormat, FormatConfig, PageBlock, TransformedBlock } from './base-format'
