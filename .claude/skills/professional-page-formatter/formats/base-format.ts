export interface PageBlock {
  id: string
  type: string
  props: Record<string, any>
  order_index: number
  level?: number
  content?: string
}

export interface FormatAnalysis {
  hero?: PageBlock
  intro?: PageBlock
  categories: CategorySection[]
  items: PageBlock[]
}

export interface CategorySection {
  heading: PageBlock
  items: PageBlock[]
}

export interface FormatConfig {
  theme: {
    backgroundColor: string
    primaryColor: string
    cardBackground: string
    secondaryColor?: string
  }
  layout: {
    columns: number
    cardSpacing: string
    sectionSpacing: string
  }
  icons: {
    category: string
    item: string
    style: 'outlined' | 'filled'
  }
}

export interface TransformedBlock extends PageBlock {
  sqlUpdate: string
}

export abstract class PageFormat {
  abstract name: string
  abstract description: string

  abstract analyze(blocks: PageBlock[]): FormatAnalysis
  abstract apply(blocks: PageBlock[], config: FormatConfig): TransformedBlock[]
  abstract getDefaultConfig(): FormatConfig

  generateSQL(blocks: TransformedBlock[], institution: string): string[] {
    return blocks.map(block => block.sqlUpdate)
  }
}
