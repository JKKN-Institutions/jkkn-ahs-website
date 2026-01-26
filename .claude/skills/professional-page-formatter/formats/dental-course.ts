import {
  PageFormat,
  PageBlock,
  FormatAnalysis,
  CategorySection,
  FormatConfig,
  TransformedBlock
} from './base-format'

export class DentalCourseFormat extends PageFormat {
  name = "dental-course"
  description = "Structured layout with hero, icon-based categories, and content cards"

  analyze(blocks: PageBlock[]): FormatAnalysis {
    const hero = blocks.find(b => b.type === 'Heading' && b.level === 1)
    const heroIndex = blocks.indexOf(hero!)
    const intro = heroIndex >= 0 && heroIndex + 1 < blocks.length ? blocks[heroIndex + 1] : null

    // Detect category sections (H2/H3 headings)
    const categories: CategorySection[] = []
    let currentCategory: CategorySection | null = null

    const startIndex = heroIndex >= 0 ? heroIndex + 2 : 0
    for (const block of blocks.slice(startIndex)) {
      if (block.type === 'Heading' && (block.level === 2 || block.level === 3)) {
        if (currentCategory) categories.push(currentCategory)
        currentCategory = { heading: block, items: [] }
      } else if (currentCategory) {
        currentCategory.items.push(block)
      }
    }
    if (currentCategory) categories.push(currentCategory)

    return { hero, intro, categories, items: [] }
  }

  apply(blocks: PageBlock[], config: FormatConfig): TransformedBlock[] {
    const analysis = this.analyze(blocks)
    const transformed: TransformedBlock[] = []

    // Hero section
    if (analysis.hero) {
      const heroStyles = {
        fontSize: '2.5rem',
        fontWeight: 700,
        color: config.theme.primaryColor,
        borderBottom: `4px solid ${config.theme.primaryColor}`,
        width: '180px',
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem'
      }

      transformed.push({
        ...analysis.hero,
        props: {
          ...analysis.hero.props,
          _styles: heroStyles
        },
        sqlUpdate: this.buildUpdateSQL(analysis.hero.id, { _styles: heroStyles })
      })
    }

    // Intro paragraph
    if (analysis.intro) {
      const introStyles = {
        fontSize: '1.125rem',
        lineHeight: '1.75',
        color: '#333',
        marginBottom: '3rem',
        maxWidth: '900px'
      }

      transformed.push({
        ...analysis.intro,
        props: {
          ...analysis.intro.props,
          _styles: introStyles
        },
        sqlUpdate: this.buildUpdateSQL(analysis.intro.id, { _styles: introStyles })
      })
    }

    // Category sections
    for (const category of analysis.categories) {
      // Category heading with icon
      const categoryStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        backgroundColor: `${config.theme.primaryColor}1A`, // 10% opacity
        padding: '1.5rem',
        borderRadius: '12px',
        marginBottom: '1.5rem',
        marginTop: config.layout.sectionSpacing
      }

      const categoryIcon = {
        name: config.icons.category,
        size: 48,
        color: config.theme.primaryColor,
        background: config.theme.backgroundColor,
        borderRadius: '50%',
        padding: '12px'
      }

      transformed.push({
        ...category.heading,
        props: {
          ...category.heading.props,
          _styles: categoryStyles,
          _icon: categoryIcon
        },
        sqlUpdate: this.buildUpdateSQL(category.heading.id, {
          _styles: categoryStyles,
          _icon: categoryIcon
        })
      })

      // Category items (cards)
      for (const item of category.items) {
        const cardStyles = {
          backgroundColor: config.theme.cardBackground,
          padding: '1.5rem',
          borderRadius: '12px',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          marginBottom: config.layout.cardSpacing,
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          transition: 'all 0.2s ease',
          cursor: 'pointer',
          ':hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(-2px)'
          }
        }

        const itemIcon = {
          name: config.icons.item,
          size: 24,
          color: config.theme.primaryColor
        }

        const itemLayout = {
          columns: config.layout.columns,
          gap: config.layout.cardSpacing
        }

        transformed.push({
          ...item,
          props: {
            ...item.props,
            _styles: cardStyles,
            _icon: itemIcon,
            _layout: itemLayout
          },
          sqlUpdate: this.buildUpdateSQL(item.id, {
            _styles: cardStyles,
            _icon: itemIcon,
            _layout: itemLayout
          })
        })
      }
    }

    return transformed
  }

  getDefaultConfig(): FormatConfig {
    return {
      theme: {
        backgroundColor: '#fbfbee',
        primaryColor: '#0b6d41',
        cardBackground: 'rgba(255, 255, 255, 0.8)',
        secondaryColor: '#f0f0e0'
      },
      layout: {
        columns: 2,
        cardSpacing: '1.5rem',
        sectionSpacing: '3rem'
      },
      icons: {
        category: 'GraduationCap',
        item: 'BookOpen',
        style: 'filled'
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
