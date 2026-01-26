---
name: professional-page-formatter
description: |
  Transform plain page builder content into professionally styled pages with glassmorphism effects.
  Automatically detects content sections, applies JKKN Cream Glass styling, and adds brand colors.
  One-click formatting with backup/rollback support. Groups content by sections (heading + paragraphs)
  and wraps them in professional glass cards with proper spacing and alignment.

  Use when: Formatting institutional pages (IDP, policies, courses, about pages), applying consistent
  professional styling across CMS pages, transforming plain content into glassmorphism designs.

  Triggers: 'format page', 'apply glass styling', 'professional page design', 'JKKN cream glass',
  'glassmorphism cards', 'format institutional page', 'apply professional styling'
---

# Professional Page Formatter

Transform plain CMS pages into professionally styled glassmorphism designs with one command.

## Overview

This skill automatically transforms page builder content by:
- Detecting sections (heading + following content blocks)
- Applying JKKN Cream Glass styling to create professional cards
- Adding brand colors (JKKN green for headings)
- Proper spacing, shadows, and alignment
- Creating backups for safe rollback

## Features

- ✅ **Section Detection**: Auto-detects heading + content groups
- ✅ **Glass Styling**: Applies JKKN Cream Glass preset (light and professional)
- ✅ **Brand Colors**: JKKN green headings (#0b6d41), cream backgrounds
- ✅ **Safe Execution**: Automatic backup before apply, rollback on demand
- ✅ **Preview Mode**: See changes before committing to database
- ✅ **Multi-Institution**: Works with all JKKN institutions (main, dental, engineering, pharmacy)

## Quick Start

### Interactive Mode

```bash
/format-page
```

The skill will prompt you for:
- Page slug or ID
- Institution (main/dental/engineering/pharmacy)
- Mode (preview/apply)

### Command-Line Mode

**Preview changes**:
```typescript
Skill({
  skill: "professional-page-formatter",
  args: "page_slug=institutional-development-plan institution=dental mode=preview"
})
```

**Apply formatting**:
```typescript
Skill({
  skill: "professional-page-formatter",
  args: "page_slug=institutional-development-plan institution=dental mode=apply"
})
```

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `page_id` | string | Yes* | - | Page UUID from cms_pages |
| `page_slug` | string | Yes* | - | Page slug (e.g., "institutional-development-plan") |
| `institution` | string | Yes | - | Institution: `main`, `dental`, `engineering`, `pharmacy` |
| `glass_preset` | string | No | `jkkn-cream-glass` | Glass style preset to apply |
| `mode` | string | No | `preview` | Execution mode: `preview` or `apply` |
| `backup` | boolean | No | `true` | Create backup before applying changes |

*Either `page_id` or `page_slug` required (not both)

## Format Presets

The skill now supports multiple format presets. Each preset applies a different visual structure to your page.

### Available Formats

| Format | Description | Best For |
|--------|-------------|----------|
| `glass-cards` | Glassmorphism cards with section wrapping (default) | General institutional pages, policies |
| `dental-course` | Structured layout with icons, categories, and cards | Course listings, program pages, department pages |

### Using Dental Course Format

```typescript
Skill({
  skill: "professional-page-formatter",
  args: "page_slug=engineering-courses institution=main format=dental-course mode=preview"
})
```

**Default Styling:**
- Cream background (#fbfbee)
- JKKN green primary color (#0b6d41)
- Two-column card layout
- Graduation cap icons for categories
- Book icons for items

### Customization Options

**Theme Colors:**
```typescript
args: "format=dental-course bg_color=#ffffff primary_color=#1a5c3e card_bg=rgba(240,240,240,0.9)"
```

**Layout:**
```typescript
args: "format=dental-course layout_columns=3 card_spacing=2rem section_spacing=4rem"
```

**Icons:**
```typescript
args: "format=dental-course icon_category=Award icon_item=Star icon_style=outlined"
```

Available icons: GraduationCap, BookOpen, Book, Award, Certificate, Building, Building2, School, Hospital, Microscope, FlaskConical, Dna, Star, Heart, Users, User

**Combined Example:**
```typescript
Skill({
  skill: "professional-page-formatter",
  args: "page_slug=pharmacy-courses institution=pharmacy format=dental-course bg_color=#f5f5f5 layout_columns=3 icon_category=FlaskConical icon_item=Microscope mode=apply"
})
```

### Format Comparison

**Glass Cards (Original):**
- Section-based grouping
- Glassmorphism effects
- Simple heading + content pattern
- Good for text-heavy pages

**Dental Course (New):**
- Hero section with decorative underline
- Icon-based category headers
- Multi-column card layout
- Good for structured content (courses, programs, facilities)

### Creating Custom Formats

See `formats/base-format.ts` for the PageFormat interface. Implement:
1. `analyze()` - Detect page structure
2. `apply()` - Transform blocks with styles
3. `getDefaultConfig()` - Default customization values

Register in `formats/index.ts` to make available.

## How It Works

### 1. Section Detection

The skill analyzes your page blocks and groups them into sections:

```
Heading block → Start new section
  TextEditor → Add to current section
  TextEditor → Add to current section
Heading block → Start new section
  TextEditor → Add to current section
```

**Example**:
- Heading: "Our Vision"
- Content: "To be a leading..."
- Content: "We strive for..."
→ These 3 blocks become **1 section**

### 2. Glass Application

Each section gets professional styling:

**Headings**:
- JKKN green color (#0b6d41)
- Cream glass background (50% opacity)
- 12px blur
- Rounded corners (12px)
- Subtle border

**Content**:
- Cream glass card (15% opacity)
- 16px blur
- 2rem padding
- Rounded corners (16px)
- Subtle shadow

### 3. Database Update

The skill updates the `props._styles` field of each block:

```sql
UPDATE cms_page_blocks
SET props = jsonb_set(props, '{_styles}', '{ ... glass styles ... }')
WHERE id = 'block-uuid';
```

All original content is preserved - only styling is enhanced.

## Example Transformation

### Before
```
15 blocks:
- 6 plain Heading components
- 9 plain TextEditor components
- No styling, basic typography
```

### After
```
15 blocks with glassmorphism:
- 6 headings: JKKN green glass with rounded borders
- 9 content cards: Cream glass with shadows
- Proper spacing and alignment
- Professional, cohesive look
```

**Execution time**: ~2 seconds

## Usage Example

```
User: /format-page

→ Page slug or ID: institutional-development-plan
→ Institution: dental
→ Mode: preview

✓ 15 blocks analyzed
✓ 6 sections detected

Transformations:
  • Section 1: "Institutional Development Plan (IDP)"
    - Heading → JKKN green glass
    - 1 content block → Cream glass card

  • Section 2: "Commitment to Academic Excellence"
    - Heading → JKKN green glass
    - 2 content blocks → Cream glass cards

  [... 4 more sections ...]

Generated SQL: 15 UPDATE statements

Apply these changes? [yes/no]

> yes

Creating backup... ✓ backup-aea8159e-1736626789.json
Applying transformations... ✓
15/15 blocks updated ✓

Success! Page formatted professionally.

View: http://localhost:3000/institutional-development-plan
Rollback: /rollback-page backup-aea8159e-1736626789.json
```

## Rollback

If you need to undo formatting:

```bash
/rollback-page backup-aea8159e-1736626789.json
```

Or find backups in: `.claude/skills/professional-page-formatter/backups/`

Backup files contain:
- Original block props
- Page ID and institution
- Timestamp
- Block count

## Troubleshooting

### "Page not found"
- Verify `page_id` or `page_slug` is correct
- Check you're using the correct institution
- Query: `SELECT id, slug FROM cms_pages WHERE slug ILIKE '%your-search%'`

### "No blocks to format"
- Page may be empty or all blocks are hidden
- Check: `SELECT COUNT(*) FROM cms_page_blocks WHERE page_id = 'xxx' AND is_visible = true`

### "Backup failed"
- Ensure skill directory exists: `.claude/skills/professional-page-formatter/backups/`
- Check disk space and write permissions

### "SQL execution failed"
- Check Supabase MCP connection
- Verify institution parameter is correct
- Review generated SQL for syntax errors

## Advanced Usage

### Custom Glass Configuration

```typescript
Skill({
  skill: "professional-page-formatter",
  args: "page_id=xxx institution=dental glass_preset=jkkn-green-glass mode=apply"
})
```

Available presets:
- `jkkn-cream-glass` (default - light and clean)
- `jkkn-green-glass` (brand primary)
- `jkkn-yellow-glass` (warm and welcoming)

### Batch Format Multiple Pages

```bash
# Coming soon: batch mode
Skill({
  skill: "professional-page-formatter",
  args: "page_slugs=page1,page2,page3 institution=main mode=apply"
})
```

## Technical Details

### Files Modified
- `cms_page_blocks.props` (JSONB field)
  - Adds `_styles` object with glass properties
  - Preserves all other props

### Database Schema
```sql
-- No schema changes required
-- Only updates existing props field

UPDATE cms_page_blocks
SET
  props = props || '{"_styles": {...glass styles...}}'::jsonb,
  updated_at = NOW()
WHERE id = 'block-uuid';
```

### Styling Properties Added

**Headings**:
```javascript
{
  _styles: {
    color: '#0b6d41',
    backgroundColor: 'rgba(251, 251, 238, 0.5)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    padding: '1rem 1.5rem',
    borderRadius: '12px',
    border: '1px solid rgba(11, 109, 65, 0.2)',
    marginBottom: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  }
}
```

**Content**:
```javascript
{
  _styles: {
    backgroundColor: 'rgba(251, 251, 238, 0.15)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    marginBottom: '1.5rem'
  }
}
```

## Safety Guarantees

1. **Non-destructive**: Original content never modified
2. **Reversible**: Backup created automatically
3. **Preview first**: See changes before applying
4. **Transaction-based**: All updates in single SQL transaction
5. **Error recovery**: Automatic rollback on SQL errors

## Future Enhancements

- [ ] UI integration (format button in page builder)
- [ ] Page templates (IDP, course, policy templates)
- [ ] Custom glass configs via UI
- [ ] Auto-format on publish (optional)
- [ ] Batch format all pages in category
- [ ] Style presets library (minimal, bold, elegant, etc.)

## Support

For issues or questions:
- Review troubleshooting section above
- Check plan file: `C:\Users\Admin\.claude\plans\piped-shimmying-prism.md`
- Inspect backup files in `backups/` directory
- Query database to verify block states

## Related Skills

- `page-builder-glassmorphism` - UI controls for manual glass styling
- `brand-styling` - JKKN brand color system
- `glassmorphism-ui` - Glass component library

---

**Version**: 1.0.0
**Created**: 2026-01-11
**Last Updated**: 2026-01-11
