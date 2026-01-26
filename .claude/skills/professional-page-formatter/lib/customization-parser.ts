import { FormatConfig } from '../formats/base-format'

export function parseArgs(argsString: string): ParsedArgs {
  const parts = argsString.split(/\s+/)
  const parsed: Partial<ParsedArgs> = {}

  for (const part of parts) {
    const [key, value] = part.split('=')
    if (key && value) {
      parsed[key as keyof ParsedArgs] = value as any
    }
  }

  return parsed as ParsedArgs
}

export interface ParsedArgs {
  page_id?: string
  page_slug?: string
  institution: string
  format?: string
  mode?: 'preview' | 'apply'

  // Customizations
  bg_color?: string
  primary_color?: string
  card_bg?: string
  layout_columns?: string
  card_spacing?: string
  section_spacing?: string
  icon_category?: string
  icon_item?: string
  icon_style?: 'outlined' | 'filled'
}

export function applyCustomizations(
  defaultConfig: FormatConfig,
  args: ParsedArgs
): FormatConfig {
  const config = JSON.parse(JSON.stringify(defaultConfig)) as FormatConfig

  // Theme customizations
  if (args.bg_color) config.theme.backgroundColor = args.bg_color
  if (args.primary_color) config.theme.primaryColor = args.primary_color
  if (args.card_bg) config.theme.cardBackground = args.card_bg

  // Layout customizations
  if (args.layout_columns) config.layout.columns = parseInt(args.layout_columns)
  if (args.card_spacing) config.layout.cardSpacing = args.card_spacing
  if (args.section_spacing) config.layout.sectionSpacing = args.section_spacing

  // Icon customizations
  if (args.icon_category) config.icons.category = args.icon_category
  if (args.icon_item) config.icons.item = args.icon_item
  if (args.icon_style) config.icons.style = args.icon_style

  return config
}
