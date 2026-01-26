import {
  PageFormat,
  PageBlock,
  FormatAnalysis,
  CategorySection,
  FormatConfig,
  TransformedBlock
} from './base-format'

export class GlassCardsFormat extends PageFormat {
  name = "glass-cards"
  description = "Glassmorphism cards with section-based wrapping"

  analyze(blocks: PageBlock[]): FormatAnalysis {
    // Groups blocks into sections (heading + content)
    const categories: CategorySection[] = []
    let currentCategory: CategorySection | null = null

    for (const block of blocks) {
      if (block.type === 'Heading') {
        if (currentCategory) categories.push(currentCategory)
        currentCategory = { heading: block, items: [] }
      } else if (currentCategory) {
        currentCategory.items.push(block)
      }
    }
    if (currentCategory) categories.push(currentCategory)

    return { categories, items: [] }
  }

  apply(blocks: PageBlock[], config: FormatConfig): TransformedBlock[] {
    return blocks.map(block => {
      if (block.type === 'Heading') {
        const headingStyles = {
          color: config.theme.primaryColor,
          backgroundColor: 'rgba(251, 251, 238, 0.5)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          padding: '1rem 1.5rem',
          borderRadius: '12px',
          border: `1px solid ${config.theme.primaryColor}33`,
          marginBottom: '1rem',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        }

        return {
          ...block,
          props: {
            ...block.props,
            _styles: headingStyles
          },
          sqlUpdate: this.buildUpdateSQL(block.id, { _styles: headingStyles })
        }
      } else {
        const contentStyles = {
          backgroundColor: 'rgba(251, 251, 238, 0.15)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '2rem',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          marginBottom: '1.5rem'
        }

        return {
          ...block,
          props: {
            ...block.props,
            _styles: contentStyles
          },
          sqlUpdate: this.buildUpdateSQL(block.id, { _styles: contentStyles })
        }
      }
    })
  }

  getDefaultConfig(): FormatConfig {
    return {
      theme: {
        backgroundColor: '#fbfbee',
        primaryColor: '#0b6d41',
        cardBackground: 'rgba(251, 251, 238, 0.15)'
      },
      layout: {
        columns: 1,
        cardSpacing: '1.5rem',
        sectionSpacing: '2rem'
      },
      icons: {
        category: '',
        item: '',
        style: 'outlined'
      }
    }
  }

  private buildUpdateSQL(blockId: string, propsToMerge: Record<string, any>): string {
    const jsonString = JSON.stringify(propsToMerge).replace(/'/g, "''")
    return `
      UPDATE cms_page_blocks
      SET
        props = props || '${jsonString}'::jsonb,
        updated_at = NOW()
      WHERE id = '${blockId}';
    `.trim()
  }
}
