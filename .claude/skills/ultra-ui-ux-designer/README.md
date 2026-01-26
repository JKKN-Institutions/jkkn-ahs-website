# Ultra UI/UX Designer Skill

An advanced UI/UX design skill for Claude Code that generates comprehensive design specifications from scratch by understanding your application's core purpose.

## What This Skill Does

Unlike basic design skills that only update existing code, this skill:

✅ **Understands your application first** - Reads your codebase, database schema, and documentation to understand the domain, users, and technical constraints

✅ **Researches design best practices** - Uses web search MCP to find current design trends, examples, and accessibility guidelines

✅ **Creates comprehensive design specifications** - Generates wireframes, color palettes, typography scales, component libraries, and user flows

✅ **Designs before coding** - Creates full design deliverables before writing any implementation code

✅ **Uses MCPs for research** - Leverages web search, Context7, Supabase, and filesystem MCPs to gather design context

## When to Use This Skill

Invoke this skill when you need:

- **Complete UI/UX redesign** - "Redesign the entire dashboard with a modern look"
- **New feature design** - "Design a checkout flow for the POS system"
- **Design system creation** - "Create a design system for our application"
- **Wireframes and mockups** - "Create wireframes for the inventory management page"
- **Mobile-first design** - "Design a mobile-first interface for our app"

## What You Get

When you use this skill, Claude will provide:

1. **Application Understanding** - Summary of your app's purpose, users, and technical stack
2. **Design Research Summary** - Findings from web searches and documentation
3. **Design System** - Colors, typography, spacing, and design tokens
4. **Component Library** - Specifications for all UI components
5. **Wireframes/Mockups** - ASCII art or detailed visual descriptions
6. **User Flows** - Key user journeys mapped out
7. **Responsive Specifications** - Mobile, tablet, and desktop behavior
8. **Accessibility Checklist** - WCAG 2.1 AA compliance notes
9. **Implementation Guide** - Tech stack recommendations and component structure

## Example Usage

```
User: Redesign the POS dashboard with a modern, touch-friendly interface

Claude (with ultra-ui-ux-designer skill):
1. Reads README, package.json, database schema
2. Identifies: POS system for retail, users are cashiers/managers
3. Searches web for: "modern POS UI design 2025", "touchscreen interface guidelines"
4. Gets Shadcn/UI component docs from Context7
5. Creates comprehensive design including:
   - Color palette (professional green, warm accents)
   - Typography scale
   - Component specifications (large touch targets, 48px minimum)
   - Dashboard wireframe with stat cards, charts, quick actions
   - Mobile responsive layout
   - Accessibility checklist
   - Implementation guide with Next.js + Shadcn/UI

Result: Complete design specification ready for implementation
```

## Skill Structure

```
ultra-ui-ux-designer/
├── SKILL.md                           # Main skill instructions
├── README.md                          # This file
├── references/                        # Design reference materials
│   ├── design-principles.md          # Core UI/UX principles
│   ├── color-palettes.md             # Pre-made color palettes and guidelines
│   ├── component-patterns.md         # Common component design patterns
│   └── mcp-integration-guide.md      # How to use MCPs for design research
├── scripts/                           # (Empty - for future automation)
└── assets/                            # (Empty - for design templates)
```

## Key Features

### 🔍 Research-Driven Design
Uses web search MCP to find:
- Current design trends for your domain
- Real-world examples and case studies
- Accessibility guidelines (WCAG)
- Component library documentation
- Best practices and patterns

### 📐 Systematic Design Process
Follows proven UX methodology:
1. **Understand** - Read codebase and understand domain
2. **Research** - Find inspiration and best practices
3. **Design** - Create design system and components
4. **Specify** - Document everything comprehensively
5. **Guide** - Provide implementation guidance

### ♿ Accessibility-First
Every design includes:
- WCAG 2.1 AA compliance checks
- Color contrast ratios
- Keyboard navigation patterns
- Screen reader support
- Focus indicators
- Touch target sizing (44-48px minimum)

### 📱 Mobile-First Approach
All designs specify:
- Mobile (< 640px)
- Tablet (640-1024px)
- Desktop (> 1024px)
- Touch-optimized interactions
- Responsive patterns

### 🎨 Complete Design Systems
Generates:
- Color palettes (primary, secondary, neutrals, semantic)
- Typography scales (6+ levels)
- Spacing systems (4px/8px grid)
- Border radius values
- Shadow elevation
- Component specifications

## Reference Materials

### Design Principles ([references/design-principles.md](references/design-principles.md))
- Visual hierarchy
- Consistency
- Feedback
- Affordance
- Accessibility (WCAG 2.1 AA)
- Progressive disclosure
- Recognition over recall
- Error prevention
- Flexibility and efficiency
- Aesthetic and minimalist design
- User control and freedom
- Responsive design

### Color Palettes ([references/color-palettes.md](references/color-palettes.md))
Pre-made palettes for:
- Professional Business (SaaS)
- Modern Retail (POS/E-commerce)
- Healthcare & Medical
- Finance & Banking
- Creative & Design Tools
- Dark Mode

Plus:
- Contrast ratio guidelines
- Color accessibility (WCAG)
- Color blindness considerations
- Palette generation methods
- Tailwind CSS configuration examples

### Component Patterns ([references/component-patterns.md](references/component-patterns.md))
Detailed specifications for:
- Buttons (primary, secondary, ghost, destructive, icon)
- Form inputs (text, textarea, select, checkbox, radio, toggle)
- Cards (basic, stat, product)
- Tables (data tables, responsive patterns)
- Navigation (top nav, sidebar, bottom nav, breadcrumbs)
- Modals and overlays (modal, drawer, popover, tooltip)
- Feedback (toast, alert, progress, skeleton)
- Empty states
- Badges and tags

### MCP Integration Guide ([references/mcp-integration-guide.md](references/mcp-integration-guide.md))
How to use MCPs for design:
- Web Search MCP - Research trends and examples
- Context7 MCP - Get library documentation
- Supabase MCP - Understand data model
- Filesystem MCP - Read existing code
- Complete research workflows
- Example queries and templates

## Prerequisites

For best results, ensure you have these MCPs configured:

1. **Web Search MCP** (required) - For design research
2. **Context7 MCP** (recommended) - For library docs
3. **Filesystem MCP** (recommended) - For reading codebase
4. **Supabase MCP** (optional) - For database-driven apps

## Tips for Best Results

1. **Be specific about your domain**
   - ✅ "Redesign the POS checkout for a dental supplies store"
   - ❌ "Make it look better"

2. **Mention user types**
   - ✅ "Design for cashiers using touchscreens"
   - ❌ "Design for users"

3. **Specify constraints**
   - ✅ "Mobile-first, must work offline, accessibility required"
   - ❌ "Make it work on all devices"

4. **Let the skill research**
   - The skill will automatically use web search to find best practices
   - Don't rush to implementation - design comes first

5. **Review the design system**
   - Check the color palette, typography, and components
   - Ensure they align with your brand
   - Request changes before implementation

## Differences from Standard UI/UX Skills

| Feature | Standard UI/UX Skills | Ultra UI/UX Designer |
|---------|----------------------|---------------------|
| **Approach** | Update existing code | Design from scratch |
| **Research** | Minimal or none | Extensive web search |
| **Understanding** | Basic | Deep (reads codebase + DB) |
| **Deliverables** | Code updates | Complete design specs |
| **Design System** | Ad-hoc | Comprehensive |
| **Accessibility** | Optional | Built-in (WCAG AA) |
| **Responsive** | Basic | Mobile-first methodology |
| **Documentation** | Minimal | Extensive |
| **MCP Usage** | Limited | Web search, Context7, more |

## Version History

### v1.0.0 (2025-11-22)
- Initial release
- Complete design system generation
- MCP integration (Web Search, Context7, Supabase, Filesystem)
- Comprehensive reference materials
- Mobile-first responsive design
- WCAG 2.1 AA accessibility
- Pre-made color palettes
- Component pattern library

## Contributing

To improve this skill:

1. **Add more reference materials** in `references/`
2. **Add design templates** in `assets/`
3. **Add automation scripts** in `scripts/`
4. **Update SKILL.md** with new patterns and guidelines

## License

Part of the JKKN-POS project. Use freely within your organization.

---

**Created by:** Claude Code
**Date:** 2025-11-22
**Purpose:** Generate professional, accessible, mobile-first UI/UX designs from scratch
