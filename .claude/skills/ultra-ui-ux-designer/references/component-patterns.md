# Common Component Design Patterns

## Buttons

### Primary Button
**Use:** Main call-to-action, most important action on page

```tsx
Design Specs:
- Height: 40px (desktop), 48px (mobile)
- Padding: 12px 24px (horizontal)
- Border Radius: 8px
- Font Size: 16px
- Font Weight: 600
- Background: Primary-500
- Text: White
- Hover: Primary-600 (darken 10%)
- Active: Primary-700 (darken 20%)
- Disabled: Opacity 50%, cursor not-allowed
```

### Secondary Button
**Use:** Secondary actions, less emphasis than primary

```tsx
Design Specs:
- Height: 40px (desktop), 48px (mobile)
- Padding: 12px 24px
- Border Radius: 8px
- Font Size: 16px
- Font Weight: 600
- Background: Transparent
- Text: Primary-600
- Border: 1px solid Primary-600
- Hover: Background Primary-50
- Active: Background Primary-100
- Disabled: Opacity 50%
```

### Ghost/Text Button
**Use:** Tertiary actions, minimal emphasis

```tsx
Design Specs:
- Height: 40px
- Padding: 12px 16px
- Border Radius: 8px
- Font Size: 16px
- Font Weight: 500
- Background: Transparent
- Text: Neutral-700
- Border: None
- Hover: Background Neutral-100
- Active: Background Neutral-200
- Disabled: Opacity 50%
```

### Destructive Button
**Use:** Delete, remove, destructive actions

```tsx
Design Specs:
- Same as Primary Button
- Background: Error-500 (red)
- Hover: Error-600
- Active: Error-700
- Often requires confirmation dialog
```

### Icon Button
**Use:** Actions with icon only (save, edit, delete)

```tsx
Design Specs:
- Size: 40px × 40px (desktop), 48px × 48px (mobile)
- Border Radius: 8px
- Icon Size: 20px (desktop), 24px (mobile)
- Background: Transparent
- Hover: Background Neutral-100
- Active: Background Neutral-200
- Must have aria-label for accessibility
```

---

## Form Inputs

### Text Input
**Use:** Single-line text entry

```tsx
Design Specs:
- Height: 40px (desktop), 48px (mobile)
- Padding: 12px 16px
- Border: 1px solid Neutral-300
- Border Radius: 8px
- Font Size: 16px (prevents zoom on iOS)
- Background: White

States:
- Default: Border Neutral-300
- Focus: Border Primary-500, Ring 3px Primary-100
- Error: Border Error-500, Ring 3px Error-100
- Disabled: Background Neutral-100, Opacity 70%
- Read-only: Background Neutral-50, cursor default
```

### Textarea
**Use:** Multi-line text entry

```tsx
Design Specs:
- Min Height: 80px
- Max Height: 200px (then scroll)
- Padding: 12px 16px
- Resize: Vertical only
- Other specs same as Text Input
```

### Select Dropdown
**Use:** Choose from predefined options

```tsx
Design Specs:
- Height: 40px (desktop), 48px (mobile)
- Padding: 12px 16px
- Border: 1px solid Neutral-300
- Border Radius: 8px
- Chevron Icon: 20px on right
- Dropdown: Box shadow, max-height 300px, scroll

Selected Option:
- Background: Primary-50
- Text: Primary-700
- Checkmark icon on right

Hover Option:
- Background: Neutral-100
```

### Checkbox
**Use:** Multiple selections, boolean options

```tsx
Design Specs:
- Size: 20px × 20px (desktop), 24px × 24px (mobile)
- Border: 2px solid Neutral-400
- Border Radius: 4px
- Checkmark: White, 16px
- Background (checked): Primary-500
- Background (unchecked): White
- Focus: Ring 2px Primary-500

Label:
- Font Size: 16px
- Padding Left: 8px from checkbox
- Cursor: Pointer (entire label clickable)
```

### Radio Button
**Use:** Single selection from options

```tsx
Design Specs:
- Size: 20px × 20px (desktop), 24px × 24px (mobile)
- Border: 2px solid Neutral-400
- Border Radius: 50% (full circle)
- Inner Circle: 10px, Primary-500 (selected)
- Background: White
- Focus: Ring 2px Primary-500

Label:
- Font Size: 16px
- Padding Left: 8px from radio
- Cursor: Pointer
```

### Toggle/Switch
**Use:** On/off settings, boolean state

```tsx
Design Specs:
- Width: 48px (desktop), 56px (mobile)
- Height: 24px (desktop), 32px (mobile)
- Border Radius: 9999px (pill)
- Background (off): Neutral-300
- Background (on): Primary-500
- Handle: 20px circle (desktop), 28px (mobile)
- Handle Position (off): Left
- Handle Position (on): Right
- Transition: 200ms ease

Label:
- Font Size: 16px
- Position: Right of switch
```

---

## Cards

### Basic Card
**Use:** Grouping related content

```tsx
Design Specs:
- Background: White
- Border: 1px solid Neutral-200
- Border Radius: 12px
- Padding: 24px
- Box Shadow: sm (subtle)
- Hover: Box shadow md, translate -2px
```

### Stat Card
**Use:** Displaying key metrics/statistics

```tsx
Design Specs:
- Background: White
- Border: 1px solid Neutral-200
- Border Radius: 12px
- Padding: 24px

Layout:
┌─────────────────────────┐
│ [Icon]  Metric Label    │
│                          │
│ 1,234  ←Large number    │
│                          │
│ +12% ←Trend indicator   │
└─────────────────────────┘

- Icon: 24px, Primary-500 background circle
- Label: 14px, Neutral-600, uppercase
- Number: 32px, bold, Neutral-900
- Trend: 14px, Success-500 or Error-500
```

### Product Card
**Use:** E-commerce, inventory items

```tsx
Design Specs:
- Background: White
- Border: 1px solid Neutral-200
- Border Radius: 12px
- Overflow: Hidden

Layout:
┌─────────────────────────┐
│ [Product Image]         │
│                          │
├─────────────────────────┤
│ Product Name            │
│ Brief description...    │
│                          │
│ ₹999  [Add to Cart]    │
└─────────────────────────┘

- Image: Aspect ratio 1:1, object-fit cover
- Name: 18px, bold, Neutral-900
- Description: 14px, Neutral-600, 2 lines max
- Price: 20px, bold, Primary-600
- Button: Small, full-width bottom
```

---

## Tables

### Data Table
**Use:** Displaying tabular data

```tsx
Design Specs:

Header:
- Background: Neutral-100
- Border Bottom: 2px solid Neutral-300
- Padding: 12px 16px
- Font Size: 14px
- Font Weight: 600
- Text Transform: Uppercase
- Letter Spacing: 0.5px
- Sortable columns have chevron icon

Row:
- Padding: 12px 16px
- Border Bottom: 1px solid Neutral-200
- Font Size: 14px
- Hover: Background Neutral-50

Cell:
- Vertical Align: Middle
- Text Align: Left (text), Right (numbers)

Actions Column:
- Icon buttons (edit, delete)
- Dropdown menu for more actions
- Fixed width, right-aligned
```

### Responsive Table Pattern (Mobile)

**Option 1: Card Stack**
```
Desktop: Traditional table
Mobile: Each row becomes a card
```

**Option 2: Horizontal Scroll**
```
Mobile: Table scrolls horizontally
Freeze first column (sticky)
```

---

## Navigation

### Top Navigation Bar
**Use:** Main navigation (desktop)

```tsx
Design Specs:
- Height: 64px
- Background: White
- Border Bottom: 1px solid Neutral-200
- Box Shadow: sm
- Padding: 0 24px

Layout:
[Logo] [Nav Links] [Search] [User Menu]

- Logo: 40px height
- Nav Links: 16px, Neutral-700, hover Primary-600
- Active Link: Primary-600, border-bottom 2px
- User Menu: Avatar 40px, dropdown on click
```

### Sidebar Navigation
**Use:** Dashboard, admin panels

```tsx
Design Specs:
- Width: 256px (expanded), 80px (collapsed)
- Background: White or Neutral-900 (dark)
- Border Right: 1px solid Neutral-200
- Padding: 16px 12px

Navigation Item:
- Height: 40px
- Padding: 8px 12px
- Border Radius: 8px
- Icon: 20px
- Text: 14px, medium weight
- Hover: Background Neutral-100
- Active: Background Primary-50, Text Primary-700
- Collapsed: Show icon only, tooltip on hover
```

### Bottom Navigation (Mobile)
**Use:** Primary navigation on mobile apps

```tsx
Design Specs:
- Height: 64px
- Background: White
- Border Top: 1px solid Neutral-200
- Box Shadow: lg (upward)
- Position: Fixed bottom

Layout (4-5 items):
[Icon] [Icon] [Icon] [Icon] [Icon]
Home   Search Cart   Profile

- Icon: 24px
- Label: 12px (below icon)
- Active: Icon and text Primary-500
- Inactive: Neutral-500
```

### Breadcrumbs
**Use:** Show navigation hierarchy

```tsx
Design Specs:
- Font Size: 14px
- Color: Neutral-600
- Separator: "/" or ">" (8px, Neutral-400)
- Current Page: Primary-600, not clickable
- Links: Underline on hover
- Max visible: 3 items, collapse middle with "..."
```

---

## Modals and Overlays

### Modal Dialog
**Use:** Focused tasks, confirmations

```tsx
Design Specs:

Overlay:
- Background: Black with 50% opacity
- Blur: backdrop-blur-sm
- Z-index: 50

Modal:
- Max Width: 500px (small), 800px (large)
- Background: White
- Border Radius: 16px
- Box Shadow: 2xl
- Padding: 24px
- Position: Centered in viewport

Layout:
┌─────────────────────────┐
│ Title           [×]     │
├─────────────────────────┤
│ Content                 │
│                          │
│                          │
├─────────────────────────┤
│        [Cancel] [Save]  │
└─────────────────────────┘

- Title: 24px, bold
- Close button: Icon button top-right
- Footer: Buttons right-aligned
- Esc key closes modal
- Click outside closes (optional)
```

### Drawer/Slide-out
**Use:** Filters, settings, secondary content

```tsx
Design Specs:
- Width: 400px (desktop), 100% (mobile)
- Height: 100vh
- Background: White
- Box Shadow: 2xl
- Slide from: Right (typically)
- Transition: 300ms ease

Layout:
┌─────────────────┐
│ Title      [×]  │
├─────────────────┤
│ Content         │
│ scrollable      │
│                 │
│                 │
│                 │
├─────────────────┤
│ [Cancel] [Apply]│
└─────────────────┘
```

### Popover
**Use:** Contextual actions, additional info

```tsx
Design Specs:
- Max Width: 300px
- Background: White
- Border: 1px solid Neutral-200
- Border Radius: 8px
- Box Shadow: lg
- Padding: 12px
- Arrow: 8px pointing to trigger

Trigger:
- Button or clickable element
- Focus/click shows popover
- Positioned automatically (avoid overflow)
```

### Tooltip
**Use:** Helpful hints, icon explanations

```tsx
Design Specs:
- Max Width: 200px
- Background: Neutral-900
- Text: White, 12px
- Padding: 6px 12px
- Border Radius: 6px
- Arrow: 4px pointing to element
- Show on: Hover (desktop), long-press (mobile)
- Delay: 500ms
- Position: Auto (top, bottom, left, right)
```

---

## Feedback Components

### Toast Notification
**Use:** Success messages, error alerts

```tsx
Design Specs:
- Width: 350px (desktop), calc(100% - 32px) (mobile)
- Min Height: 60px
- Background: White
- Border: 1px solid (semantic color)
- Border Radius: 12px
- Box Shadow: lg
- Padding: 16px
- Position: Top-right (desktop), top-center (mobile)

Layout:
[Icon] Title          [×]
       Message

- Icon: 24px, semantic color background
- Title: 16px, bold
- Message: 14px, Neutral-600
- Auto-dismiss: 5 seconds (configurable)
- Click to dismiss
- Swipe to dismiss (mobile)

Variants:
- Success: Green icon/border
- Error: Red icon/border
- Warning: Yellow icon/border
- Info: Blue icon/border
```

### Alert Banner
**Use:** Page-level notifications

```tsx
Design Specs:
- Width: 100%
- Min Height: 48px
- Background: Semantic color at 10% opacity
- Border Left: 4px solid semantic color
- Padding: 12px 16px
- Position: Top of page

Layout:
[Icon] Message                [×]

- Icon: 20px, semantic color
- Message: 14px
- Close button: Optional
- Can include action link

Variants:
- Success: Green background/border
- Error: Red background/border
- Warning: Yellow background/border
- Info: Blue background/border
```

### Progress Indicator

**Linear Progress Bar:**
```tsx
Design Specs:
- Height: 8px
- Width: 100%
- Background: Neutral-200
- Border Radius: 9999px (pill)
- Fill: Primary-500
- Animation: Smooth transition 300ms

With Label:
- Label above: "Uploading... 45%"
- Font Size: 14px
```

**Circular Progress (Spinner):**
```tsx
Design Specs:
- Size: 40px (medium), 24px (small), 64px (large)
- Stroke Width: 3px
- Color: Primary-500
- Animation: Rotate 360deg, 1s linear infinite

With Label:
- Label below: "Loading..."
- Font Size: 14px
- Color: Neutral-600
```

### Skeleton Loading
**Use:** Content placeholder while loading

```tsx
Design Specs:
- Background: Linear gradient animation
  - From: Neutral-200
  - Via: Neutral-300
  - To: Neutral-200
- Border Radius: Match final content
- Animation: Shimmer effect, 1.5s ease-in-out infinite

Example - Card Skeleton:
┌─────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    │ ← Image
│                          │
│ ▓▓▓▓▓▓▓▓▓▓              │ ← Title
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓        │ ← Description
│                          │
│ ▓▓▓▓    ▓▓▓▓▓▓▓▓▓▓▓▓   │ ← Price + Button
└─────────────────────────┘
```

---

## Empty States

### General Empty State
**Use:** No data to display

```tsx
Design Specs:

Layout:
        [Icon/Illustration]

              Title

         Description text

        [Primary Action]

- Icon: 64px, Neutral-400
- Illustration: 200px width, subtle colors
- Title: 24px, bold, Neutral-900
- Description: 16px, Neutral-600, max 400px
- Action: Primary button
- Centered in container
- Min height: 400px

Example:
        📦

    No products found

  Get started by adding
  your first product

  [Add Product]
```

### Search Empty State
**Use:** No search results

```tsx
Layout:
        🔍

  No results for "query"

  Try different keywords or
  check your spelling

  [Clear Search]
```

### Error Empty State
**Use:** Error loading data

```tsx
Layout:
        ⚠️

  Failed to load data

  Something went wrong.
  Please try again.

  [Retry]  [Report Issue]
```

---

## Badges and Tags

### Status Badge
**Use:** Display status, state, category

```tsx
Design Specs:
- Height: 24px
- Padding: 4px 12px
- Border Radius: 12px (pill)
- Font Size: 12px
- Font Weight: 600
- Text Transform: Uppercase
- Letter Spacing: 0.5px

Variants:
- Success: Green-100 bg, Green-700 text
- Warning: Yellow-100 bg, Yellow-700 text
- Error: Red-100 bg, Red-700 text
- Info: Blue-100 bg, Blue-700 text
- Neutral: Neutral-100 bg, Neutral-700 text
```

### Count Badge
**Use:** Notification count, cart items

```tsx
Design Specs:
- Min Size: 20px × 20px
- Padding: 2px 6px
- Border Radius: 9999px (circle/pill)
- Background: Error-500
- Text: White, 12px, bold
- Position: Absolute top-right of parent
- Border: 2px solid white (if overlapping)

Example:
[🔔 with "3" badge]
```

### Tag (Removable)
**Use:** Filters, selected items

```tsx
Design Specs:
- Height: 32px
- Padding: 6px 12px
- Border Radius: 6px
- Background: Neutral-100
- Border: 1px solid Neutral-300
- Font Size: 14px

Layout:
[Label] [×]

- Remove button: 16px × 16px, hover red
```

---

## Summary

**Component Design Checklist:**

- [ ] All touch targets minimum 44-48px
- [ ] Focus states clearly visible
- [ ] Disabled states have reduced opacity
- [ ] Hover states provide feedback
- [ ] Loading states prevent double-clicks
- [ ] Error states are clear and helpful
- [ ] Empty states are friendly and actionable
- [ ] Consistent spacing and sizing
- [ ] Consistent border radius
- [ ] Semantic colors for status
- [ ] Accessibility: ARIA labels, keyboard navigation
- [ ] Responsive behavior defined
- [ ] Dark mode variants (if applicable)

**Remember:**
- Design for the 80% use case, handle edge cases gracefully
- Consistency creates familiarity and reduces cognitive load
- Always provide feedback for user actions
- Make interactive elements obviously clickable
- Test on real devices and screen sizes
