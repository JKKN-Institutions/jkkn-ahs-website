# Core UI/UX Design Principles

## 1. Visual Hierarchy

Visual hierarchy guides users' attention to the most important elements first.

**Techniques:**
- **Size:** Larger elements attract more attention
- **Color:** High contrast draws the eye
- **Spacing:** White space creates emphasis
- **Typography:** Weight and style create hierarchy
- **Position:** Top-left gets noticed first (in LTR languages)

**Example Application:**
```
Primary Action Button: Large, high contrast, prominent color
Secondary Action: Smaller, outline style, muted color
Tertiary Action: Text link, subtle
```

## 2. Consistency

Consistent design creates predictability and reduces cognitive load.

**Apply consistency to:**
- **Colors:** Use the same colors for the same purposes
- **Typography:** Maintain type scale and font families
- **Spacing:** Use consistent spacing units
- **Components:** Reuse components across the app
- **Interactions:** Same actions produce same results
- **Layout:** Maintain grid and alignment systems

**Checklist:**
- [ ] All buttons follow the same style system
- [ ] Form inputs have consistent height and padding
- [ ] Cards use the same border radius and shadow
- [ ] Icon sizes are consistent (16px, 20px, 24px)
- [ ] Spacing follows 4px or 8px grid

## 3. Feedback

Users need to know the system is responding to their actions.

**Types of Feedback:**
- **Visual:** Color changes, animations, loading states
- **Haptic:** Vibrations on mobile devices
- **Auditory:** Sounds for notifications (use sparingly)
- **Textual:** Success/error messages

**Best Practices:**
- Show loading states for actions > 300ms
- Provide success confirmation
- Explain errors clearly
- Use optimistic UI for instant feedback
- Disable buttons during processing

**Loading States:**
```
Button States:
- Default: "Save Changes"
- Loading: "Saving..." (with spinner, disabled)
- Success: "Saved!" (brief confirmation)
- Error: "Failed to save" (with retry option)
```

## 4. Affordance

Elements should clearly indicate their function.

**Visual Affordances:**
- **Buttons:** Look clickable (shadows, borders, colors)
- **Links:** Underlined or colored differently
- **Inputs:** Clearly look like input fields
- **Draggable:** Grab cursor, drag handles
- **Interactive:** Hover states, cursor changes

**Examples:**
- Primary button: Solid background, looks "pressable"
- Input field: White background, border, cursor indicator
- Card: Subtle shadow suggests it's a container
- Disabled element: Reduced opacity, no pointer cursor

## 5. Accessibility

Design for all users, including those with disabilities.

**WCAG 2.1 AA Requirements:**
- **Color Contrast:** 4.5:1 for normal text, 3:1 for large text
- **Keyboard Navigation:** All features accessible via keyboard
- **Screen Readers:** Semantic HTML, ARIA labels
- **Text Resize:** Support up to 200% zoom
- **Focus Indicators:** Visible focus states

**Implementation:**
```html
<!-- Good: Semantic HTML -->
<button aria-label="Close dialog">×</button>

<!-- Good: Proper form labels -->
<label for="email">Email</label>
<input id="email" type="email" required>

<!-- Good: Alt text -->
<img src="product.jpg" alt="Blue denim jacket, size M">

<!-- Good: Focus visible -->
<button class="focus:ring-2 focus:ring-primary">Click</button>
```

## 6. Progressive Disclosure

Don't overwhelm users with too much information at once.

**Techniques:**
- Show only essential information initially
- Use "Show more" / "View details" for additional info
- Use tooltips for helpful hints
- Use modals/drawers for complex forms
- Use tabs/accordions to organize content

**Example - Product Card:**
```
Initially show:
- Product image
- Product name
- Price
- "Add to Cart" button

On click/hover, reveal:
- Detailed description
- Available sizes/colors
- Stock quantity
- Reviews summary
```

## 7. Recognition Over Recall

Make options visible rather than requiring users to remember.

**Techniques:**
- Show recent searches
- Display form field placeholders with examples
- Show breadcrumbs for navigation context
- Use autocomplete for input fields
- Show keyboard shortcuts in tooltips
- Display recently used items

**Example - Search:**
```
Search bar features:
- Autocomplete suggestions as user types
- Recent searches displayed on focus
- Popular searches suggested
- Clear visual categories for results
```

## 8. Error Prevention

Design to prevent errors before they occur.

**Strategies:**
- **Validation:** Real-time input validation
- **Constraints:** Disable invalid options
- **Confirmation:** Ask before destructive actions
- **Defaults:** Provide sensible default values
- **Help Text:** Show examples and format requirements

**Example - Delete Action:**
```
1. Show delete button (but make it less prominent)
2. On click, show confirmation modal:
   "Are you sure you want to delete [Item Name]?
   This action cannot be undone."
3. Require typing item name or clicking "Yes, Delete"
4. Show undo option after deletion (if possible)
```

## 9. Flexibility and Efficiency

Cater to both novice and expert users.

**Techniques:**
- **Keyboard Shortcuts:** For power users
- **Bulk Actions:** Select multiple items
- **Customization:** Allow users to customize views
- **Quick Actions:** Context menus, swipe actions
- **Search:** Fast way to find anything
- **Templates:** Reusable presets

**Example - Data Table:**
```
Novice users:
- Click column headers to sort
- Use filter dropdowns
- Pagination controls

Expert users:
- Keyboard shortcuts (Ctrl+F to search)
- Bulk select with Shift+Click
- Column reordering via drag-drop
- Custom views and saved filters
```

## 10. Aesthetic and Minimalist Design

Every element should serve a purpose.

**Principles:**
- Remove unnecessary elements
- Use white space generously
- Keep text concise
- Avoid decorative elements that don't add value
- Prioritize content over chrome

**Checklist:**
- [ ] Is every element necessary?
- [ ] Can this be said with fewer words?
- [ ] Does this decoration add value?
- [ ] Is there enough white space?
- [ ] Are we showing only relevant information?

## 11. User Control and Freedom

Users should feel in control and able to undo mistakes.

**Features:**
- **Undo/Redo:** For reversible actions
- **Cancel:** Exit flows without committing
- **Back Navigation:** Easy way to go back
- **Exit Points:** Clear way to exit modals/flows
- **Save Draft:** Don't lose work

**Example - Form:**
```
Features:
- "Cancel" button that goes back without saving
- "Save Draft" to preserve progress
- Confirmation before navigating away with unsaved changes
- Clear "×" to close modal
```

## 12. Responsive Design

Adapt to different screen sizes and devices.

**Breakpoints:**
```
Mobile:    < 640px  (1 column, simplified)
Tablet:    640-1024px (2 columns, moderate)
Desktop:   1024-1440px (3+ columns, full features)
Large:     > 1440px (max-width container)
```

**Mobile-First Approach:**
1. Design for mobile first (constraints force prioritization)
2. Add features as screen size increases
3. Test on real devices

**Responsive Patterns:**
- **Stack:** Stack columns vertically on mobile
- **Hide:** Hide secondary content on small screens
- **Hamburger:** Collapse navigation into menu
- **Bottom Sheet:** Use bottom sheets instead of modals on mobile
- **Fluid Typography:** Scale text with viewport

---

## Design System Checklist

When creating a design system, ensure you have:

**Foundation:**
- [ ] Color palette (primary, secondary, neutrals, semantics)
- [ ] Typography scale (6+ levels)
- [ ] Spacing system (consistent units)
- [ ] Border radius values
- [ ] Shadow elevation system
- [ ] Animation/transition timing

**Components:**
- [ ] Buttons (primary, secondary, ghost, destructive)
- [ ] Inputs (text, textarea, select, checkbox, radio)
- [ ] Cards
- [ ] Tables
- [ ] Modals/Dialogs
- [ ] Toasts/Notifications
- [ ] Navigation (header, sidebar, tabs)
- [ ] Forms (labels, errors, help text)
- [ ] Loading states (spinners, skeletons)
- [ ] Empty states
- [ ] Error states

**Patterns:**
- [ ] Form validation patterns
- [ ] Search patterns
- [ ] Filtering/sorting patterns
- [ ] Pagination patterns
- [ ] CRUD operation patterns
- [ ] Authentication flows
- [ ] Onboarding flows

**Documentation:**
- [ ] Component usage guidelines
- [ ] Code examples
- [ ] Accessibility notes
- [ ] Responsive behavior
- [ ] Do's and don'ts

---

## Resources for Deep Dives

**Books:**
- "Don't Make Me Think" by Steve Krug
- "The Design of Everyday Things" by Don Norman
- "Refactoring UI" by Adam Wathan & Steve Schoger

**Websites:**
- Nielsen Norman Group (nngroup.com)
- Smashing Magazine (smashingmagazine.com)
- A List Apart (alistapart.com)
- Laws of UX (lawsofux.com)

**Component Libraries:**
- Shadcn/UI (ui.shadcn.com)
- Material Design (material.io)
- Ant Design (ant.design)
- Chakra UI (chakra-ui.com)

**Design Tools:**
- Figma (design and prototyping)
- Whimsical (wireframing)
- Excalidraw (quick sketches)
- Coolors.co (color palettes)
- Type Scale (typography scale generator)
