# MCP Integration Guide for UI/UX Design

## Overview

Model Context Protocol (MCP) allows Claude to access external tools and data sources during the design process. This guide shows how to leverage MCPs for UI/UX research and design work.

---

## Available MCPs for Design

### 1. Web Search MCP

**Purpose:** Research design trends, find inspiration, access documentation

**Use Cases:**
- Finding current design trends
- Researching competitor UIs
- Looking up best practices
- Finding design inspiration
- Accessing design system documentation

**Example Queries:**
```bash
# Research current trends
mcp web-search "modern dashboard UI design 2025"
mcp web-search "mobile checkout UX best practices"
mcp web-search "POS system interface examples"

# Find specific patterns
mcp web-search "data table design patterns"
mcp web-search "empty state design examples"
mcp web-search "loading skeleton UI patterns"

# Research accessibility
mcp web-search "WCAG color contrast guidelines"
mcp web-search "keyboard navigation best practices"
mcp web-search "screen reader friendly forms"

# Find component libraries
mcp web-search "Shadcn UI components documentation"
mcp web-search "Radix UI primitives guide"
mcp web-search "Tailwind CSS utility classes"
```

### 2. Context7 MCP

**Purpose:** Access up-to-date documentation for UI libraries and frameworks

**Use Cases:**
- Getting component API documentation
- Finding usage examples
- Understanding framework patterns
- Learning library best practices

**Example Usage:**

```typescript
// Get Shadcn/UI documentation
await mcp.context7.resolveLibraryId({ libraryName: "shadcn-ui" })
await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/shadcn/ui",
  topic: "button component"
})

// Get Next.js App Router docs
await mcp.context7.resolveLibraryId({ libraryName: "next.js" })
await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/vercel/next.js",
  topic: "layouts and pages"
})

// Get Tailwind CSS docs
await mcp.context7.resolveLibraryId({ libraryName: "tailwindcss" })
await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/tailwindlabs/tailwindcss",
  topic: "responsive design"
})

// Get Radix UI docs
await mcp.context7.resolveLibraryId({ libraryName: "radix-ui" })
await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/radix-ui/primitives",
  topic: "dialog component"
})

// Get Framer Motion docs
await mcp.context7.resolveLibraryId({ libraryName: "framer-motion" })
await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/framer/motion",
  topic: "animations"
})
```

### 3. Supabase MCP (if applicable)

**Purpose:** Understand the data model to inform UI design

**Use Cases:**
- Understanding database schema
- Identifying data relationships
- Planning form fields based on columns
- Designing CRUD interfaces

**Example Usage:**

```typescript
// List all tables to understand data structure
await mcp.supabase.listTables({ schemas: ['public'] })

// Get table schema to design forms
await mcp.supabase.executeSQL({
  query: `
    SELECT column_name, data_type, is_nullable
    FROM information_schema.columns
    WHERE table_name = 'products'
    ORDER BY ordinal_position
  `
})

// Understand relationships for navigation design
await mcp.supabase.executeSQL({
  query: `
    SELECT
      tc.table_name,
      kcu.column_name,
      ccu.table_name AS foreign_table_name,
      ccu.column_name AS foreign_column_name
    FROM information_schema.table_constraints AS tc
    JOIN information_schema.key_column_usage AS kcu
      ON tc.constraint_name = kcu.constraint_name
    JOIN information_schema.constraint_column_usage AS ccu
      ON ccu.constraint_name = tc.constraint_name
    WHERE tc.constraint_type = 'FOREIGN KEY'
  `
})
```

### 4. Filesystem MCP

**Purpose:** Read existing code to understand current implementation

**Use Cases:**
- Analyzing current component structure
- Understanding existing design patterns
- Reading configuration files
- Checking package dependencies

**Example Usage:**

```typescript
// Read package.json to understand tech stack
await mcp.filesystem.readTextFile({ path: "package.json" })

// Read Tailwind config to understand design tokens
await mcp.filesystem.readTextFile({ path: "tailwind.config.ts" })

// Read existing components
await mcp.filesystem.readTextFile({ path: "components/ui/button.tsx" })

// List all component files
await mcp.filesystem.searchFiles({
  path: "components",
  pattern: "*.tsx"
})

// Read multiple related files
await mcp.filesystem.readMultipleFiles({
  paths: [
    "components/ui/button.tsx",
    "components/ui/input.tsx",
    "components/ui/card.tsx"
  ]
})
```

---

## Design Research Workflow with MCPs

### Phase 1: Understanding the Application

**Step 1: Read project files**
```typescript
// Understand project structure
await mcp.filesystem.readTextFile({ path: "README.md" })
await mcp.filesystem.readTextFile({ path: "package.json" })

// Understand database schema
await mcp.supabase.listTables()
```

**Step 2: Research the domain**
```bash
# If it's a POS system:
mcp web-search "POS system user interface best practices"
mcp web-search "retail POS design examples"
mcp web-search "touchscreen POS interface guidelines"

# If it's a dashboard:
mcp web-search "SaaS dashboard design trends 2025"
mcp web-search "admin panel UI examples"
mcp web-search "data visualization best practices"
```

**Step 3: Get library documentation**
```typescript
// Get docs for tech stack
await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/shadcn/ui",
  topic: "installation and setup"
})
```

### Phase 2: Research Design Patterns

**Step 1: Find design inspiration**
```bash
# Search for specific patterns
mcp web-search "modern data table design 2025"
mcp web-search "mobile-first form design examples"
mcp web-search "empty state illustrations ideas"

# Search for domain-specific designs
mcp web-search "inventory management UI inspiration"
mcp web-search "checkout flow UX examples"
mcp web-search "customer management interface"
```

**Step 2: Research component patterns**
```typescript
// Get component documentation
await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/shadcn/ui",
  topic: "data table"
})

await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/shadcn/ui",
  topic: "form components"
})
```

**Step 3: Research accessibility**
```bash
# Accessibility research
mcp web-search "WCAG 2.1 AA compliance checklist"
mcp web-search "accessible form design patterns"
mcp web-search "keyboard navigation best practices"
mcp web-search "screen reader friendly components"
```

### Phase 3: Design System Research

**Step 1: Color palette inspiration**
```bash
mcp web-search "professional app color palette 2025"
mcp web-search "accessible color combinations WCAG"
mcp web-search "dark mode color schemes"
```

**Step 2: Typography research**
```bash
mcp web-search "modern web typography 2025"
mcp web-search "font pairing for professional apps"
mcp web-search "responsive typography scale"
```

**Step 3: Component library research**
```typescript
// Get design system docs
await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/shadcn/ui",
  topic: "theming"
})

await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/tailwindlabs/tailwindcss",
  topic: "customization"
})
```

### Phase 4: Responsive Design Research

```bash
# Mobile design research
mcp web-search "mobile-first design principles"
mcp web-search "responsive breakpoints 2025"
mcp web-search "mobile navigation patterns"

# Touch interface research
mcp web-search "touch target size guidelines"
mcp web-search "mobile gestures UX patterns"
mcp web-search "mobile form optimization"
```

### Phase 5: Animation and Interaction Research

```bash
# Animation research
mcp web-search "micro-interactions UI examples"
mcp web-search "loading animation best practices"
mcp web-search "page transition patterns"
```

```typescript
// Get animation library docs
await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/framer/motion",
  topic: "animation variants"
})
```

---

## Example: Complete Design Research Flow

### Scenario: Designing a Modern POS Dashboard

**Step 1: Understand the application**

```typescript
// Read project files
const readme = await mcp.filesystem.readTextFile({ path: "README.md" })
const packageJson = await mcp.filesystem.readTextFile({ path: "package.json" })

// Understand database
const tables = await mcp.supabase.listTables()
const businessSchema = await mcp.supabase.executeSQL({
  query: "SELECT * FROM information_schema.columns WHERE table_name = 'businesses'"
})
```

**Analysis:**
- Application: Point of Sale system for retail stores
- Users: Cashiers, store managers
- Tech Stack: Next.js 15, Supabase, Tailwind CSS, Shadcn/UI
- Database: businesses, products, sales, customers, inventory tables

**Step 2: Research POS design patterns**

```bash
# General POS research
mcp web-search "modern POS interface design 2025"
# Result: Found that modern POS uses:
# - Large touch targets (min 48px)
# - Quick access to frequent actions
# - Real-time inventory display
# - Simplified checkout flow

mcp web-search "retail POS dashboard examples"
# Result: Found that dashboards typically show:
# - Today's sales metrics
# - Recent transactions
# - Low stock alerts
# - Quick action buttons

mcp web-search "touchscreen interface guidelines"
# Result: Apple HIG and Material Design recommend:
# - Minimum 44-48px touch targets
# - Clear visual feedback
# - Avoid hover-dependent interactions
# - Use bottom navigation on mobile
```

**Step 3: Research components needed**

```typescript
// Get Shadcn/UI component docs
await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/shadcn/ui",
  topic: "card component"
})
// Use for stat cards showing metrics

await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/shadcn/ui",
  topic: "table component"
})
// Use for recent transactions list

await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/shadcn/ui",
  topic: "button component"
})
// Use for quick actions
```

**Step 4: Research color schemes**

```bash
mcp web-search "retail app color palette"
# Result: Found that retail apps often use:
# - Green for success/sales
# - Professional neutral backgrounds
# - Warm accents for friendliness

mcp web-search "accessible green color palette WCAG"
# Result: Found palette with proper contrast ratios
```

**Step 5: Get Tailwind configuration guidance**

```typescript
await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/tailwindlabs/tailwindcss",
  topic: "theme configuration"
})
// Learn how to add custom colors

await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/tailwindlabs/tailwindcss",
  topic: "responsive design"
})
// Learn breakpoint best practices
```

**Step 6: Research data visualization**

```bash
mcp web-search "sales chart design best practices"
# Result: Found that line charts work best for trends

mcp web-search "dashboard metric card design"
# Result: Found patterns for displaying KPIs
```

```typescript
await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/recharts/recharts",
  topic: "line chart"
})
// Get chart component documentation
```

**Step 7: Research mobile patterns**

```bash
mcp web-search "mobile POS interface design"
# Result: Found that mobile POS should:
# - Use bottom navigation
# - Stack content vertically
# - Use full-width buttons
# - Show critical info only

mcp web-search "mobile dashboard layout examples"
# Result: Found responsive grid patterns
```

---

## MCP Best Practices for Design Work

### 1. Start Broad, Then Narrow

```bash
# ✅ Good: Start with general research
mcp web-search "modern dashboard design trends 2025"
# Then get specific
mcp web-search "dashboard stat card design patterns"
# Then very specific
mcp web-search "animated number counter UI component"

# ❌ Bad: Too specific too soon
mcp web-search "how to make a blue button with shadow"
```

### 2. Cross-Reference Multiple Sources

```bash
# Research the same topic from different angles
mcp web-search "mobile navigation best practices Nielsen Norman"
mcp web-search "mobile navigation patterns Material Design"
mcp web-search "mobile navigation UX research 2025"
```

### 3. Use MCPs Sequentially

```typescript
// 1. First understand the tech stack
await mcp.filesystem.readTextFile({ path: "package.json" })

// 2. Then get docs for those technologies
await mcp.context7.getLibraryDocs({
  context7CompatibleLibraryID: "/shadcn/ui",
  topic: "installation"
})

// 3. Then research design patterns for the domain
// mcp web-search "..."

// 4. Then check database schema
await mcp.supabase.listTables()
```

### 4. Document Your Research

As you research, document findings:

```markdown
## Research Summary

**POS Dashboard Design Research:**

1. **General Trends (Web Search):**
   - Modern POS uses large, touch-friendly buttons
   - Real-time data is critical
   - Quick actions should be prominent
   - Source: "modern POS interface design 2025" search

2. **Component Selection (Context7):**
   - Using Shadcn/UI Card for stat display
   - Using Shadcn/UI Table for transactions
   - Using Recharts for sales trend chart
   - Sources: Shadcn/UI and Recharts docs

3. **Color Palette (Web Search):**
   - Primary: #10B981 (professional green)
   - Accent: #F59E0B (warm yellow)
   - Neutrals: Cream (#FBFBEE) for reduced eye strain
   - All colors meet WCAG AA contrast ratios
   - Source: "accessible green color palette" search

4. **Mobile Patterns (Web Search):**
   - Bottom navigation for main actions
   - Stack stat cards vertically
   - Full-width buttons (min 48px height)
   - Sources: Apple HIG, Material Design guidelines
```

### 5. Verify Accessibility

```bash
# Always research accessibility for components
mcp web-search "accessible [component type] WCAG guidelines"
mcp web-search "screen reader [component type] best practices"
mcp web-search "keyboard navigation [component type] patterns"
```

---

## Common MCP Queries for Design

### Color and Theming

```bash
mcp web-search "color palette generator tools"
mcp web-search "WCAG color contrast checker"
mcp web-search "dark mode color scheme best practices"
mcp web-search "accessible color combinations 2025"
```

### Typography

```bash
mcp web-search "web typography scale calculator"
mcp web-search "font pairing combinations"
mcp web-search "responsive typography fluid"
mcp web-search "system font stack web"
```

### Layout and Spacing

```bash
mcp web-search "8-point grid system web design"
mcp web-search "responsive grid layout examples"
mcp web-search "whitespace in UI design"
mcp web-search "spacing scale design system"
```

### Components

```bash
mcp web-search "data table design best practices"
mcp web-search "form design patterns UX"
mcp web-search "modal dialog accessibility"
mcp web-search "navigation menu examples"
```

### Interactions

```bash
mcp web-search "micro-interactions examples"
mcp web-search "loading states UI patterns"
mcp web-search "error message design UX"
mcp web-search "success feedback patterns"
```

### Mobile Design

```bash
mcp web-search "mobile-first design checklist"
mcp web-search "touch target size guidelines"
mcp web-search "mobile navigation patterns"
mcp web-search "responsive breakpoints 2025"
```

### Accessibility

```bash
mcp web-search "WCAG 2.1 AA compliance checklist"
mcp web-search "accessible form labels ARIA"
mcp web-search "keyboard shortcuts best practices"
mcp web-search "focus indicator design accessible"
```

---

## Automation: MCP Query Templates

### Template: Research a New Feature

```typescript
// 1. Understand the feature domain
const domainResearch = await webSearch(`${featureName} UI best practices 2025`)

// 2. Find real examples
const examples = await webSearch(`${featureName} interface examples`)

// 3. Get component library docs
const componentDocs = await context7.getLibraryDocs({
  libraryId: "/shadcn/ui",
  topic: relevantComponent
})

// 4. Research accessibility
const a11yGuidelines = await webSearch(`accessible ${featureName} WCAG`)

// 5. Check mobile patterns
const mobilePatterns = await webSearch(`mobile ${featureName} UX patterns`)
```

### Template: Design System Research

```typescript
// 1. Research color palettes
const colorResearch = await webSearch(`${domain} app color palette`)

// 2. Typography research
const typoResearch = await webSearch(`${domain} app typography`)

// 3. Get framework theming docs
const themingDocs = await context7.getLibraryDocs({
  libraryId: "/tailwindlabs/tailwindcss",
  topic: "theme configuration"
})

// 4. Component library patterns
const componentPatterns = await context7.getLibraryDocs({
  libraryId: "/shadcn/ui",
  topic: "customization"
})
```

### Template: Responsive Design Research

```typescript
// 1. General mobile-first principles
const mobilePrinciples = await webSearch("mobile-first design principles 2025")

// 2. Specific breakpoint guidance
const breakpoints = await webSearch("responsive breakpoints standards")

// 3. Touch interaction guidelines
const touchGuidelines = await webSearch("touch target size guidelines iOS Android")

// 4. Framework responsive docs
const responsiveDocs = await context7.getLibraryDocs({
  libraryId: "/tailwindlabs/tailwindcss",
  topic: "responsive design"
})
```

---

## Summary

**Key Takeaways:**

1. **Use MCPs systematically:** Start with understanding, then research, then implement
2. **Web Search MCP:** Your primary tool for trends, inspiration, best practices
3. **Context7 MCP:** Get accurate, up-to-date library documentation
4. **Filesystem MCP:** Understand existing codebase before designing
5. **Supabase MCP:** Let data structure inform UI design
6. **Document research:** Keep track of findings and sources
7. **Cross-reference:** Use multiple sources to validate patterns
8. **Always verify accessibility:** Use MCPs to find WCAG guidelines

**Research Flow:**
1. Understand the application (Filesystem, Supabase MCPs)
2. Research the domain (Web Search MCP)
3. Find design patterns (Web Search MCP)
4. Get library documentation (Context7 MCP)
5. Research accessibility (Web Search MCP)
6. Verify responsive patterns (Web Search + Context7 MCPs)
7. Document and synthesize findings
8. Create comprehensive design specifications
