# Typography Component - Migration Guide

This guide helps you migrate existing code to use the new Typography component.

---

## 🔄 Quick Migration Reference

### H1 Headings

```tsx
// ❌ BEFORE
<h1 className="text-4xl font-bold text-primary">Welcome to JKKN AHS</h1>
<h1 style={{ fontSize: '44px', fontWeight: 700 }}>Welcome</h1>

// ✅ AFTER
<Typography variant="h1" className="text-primary">Welcome to JKKN AHS</Typography>
```

### H2 Headings

```tsx
// ❌ BEFORE
<h2 className="text-2xl font-semibold">Our Programs</h2>

// ✅ AFTER
<Typography variant="h2">Our Programs</Typography>
```

### H3 Headings

```tsx
// ❌ BEFORE
<h3 className="text-xl font-semibold text-primary">Course Details</h3>

// ✅ AFTER
<Typography variant="h3" className="text-primary">Course Details</Typography>
```

### Paragraphs

```tsx
// ❌ BEFORE
<p className="text-base text-gray-600">This is body text.</p>

// ✅ AFTER
<Typography variant="p" className="text-gray-600">This is body text.</Typography>
```

### Small Text

```tsx
// ❌ BEFORE
<small className="text-sm text-gray-500">Helper text</small>
<p className="text-xs text-gray-400">Fine print</p>

// ✅ AFTER
<Typography variant="small" className="text-gray-500">Helper text</Typography>
```

---

## 📋 Common Patterns

### Centered Hero Section

```tsx
// ❌ BEFORE
<div className="text-center">
  <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
    Welcome to JKKN Allied Health Sciences
  </h1>
  <p className="text-xl text-gray-600 mt-4">
    Excellence in Healthcare Education
  </p>
</div>

// ✅ AFTER
<div className="text-center">
  <Typography variant="h1" balance className="text-gradient">
    Welcome to JKKN Allied Health Sciences
  </Typography>
  <Typography variant="h2" balance className="text-gray-600 mt-4">
    Excellence in Healthcare Education
  </Typography>
</div>
```

### Card Component

```tsx
// ❌ BEFORE
<div className="glass-card p-6">
  <h3 className="text-xl font-bold text-primary mb-2">
    B.Sc. Medical Laboratory Technology
  </h3>
  <small className="text-sm text-gray-500">4 Years • Full Time</small>
  <p className="text-base mt-4">
    A comprehensive program designed to train skilled technologists.
  </p>
</div>

// ✅ AFTER
<div className="glass-card p-6">
  <Typography variant="h3" className="text-primary mb-2">
    B.Sc. Medical Laboratory Technology
  </Typography>
  <Typography variant="small" className="text-gray-500">
    4 Years • Full Time
  </Typography>
  <Typography variant="p" balance className="mt-4">
    A comprehensive program designed to train skilled technologists.
  </Typography>
</div>
```

### Form Labels

```tsx
// ❌ BEFORE
<label htmlFor="email" className="block text-lg font-semibold mb-2">
  Email Address
</label>
<input id="email" type="email" />
<span className="text-sm text-gray-500">We'll never share your email</span>

// ✅ AFTER
<Typography variant="h3" as="label" htmlFor="email" className="block mb-2">
  Email Address
</Typography>
<input id="email" type="email" />
<Typography variant="small" className="text-gray-500">
  We'll never share your email
</Typography>
```

### Navigation Items

```tsx
// ❌ BEFORE
<nav>
  <a href="/" className="text-base font-medium hover:text-primary">
    Home
  </a>
  <a href="/about" className="text-base font-medium hover:text-primary">
    About
  </a>
</nav>

// ✅ AFTER
<nav>
  <a href="/" className="hover:text-primary">
    <Typography variant="p" className="font-medium">Home</Typography>
  </a>
  <a href="/about" className="hover:text-primary">
    <Typography variant="p" className="font-medium">About</Typography>
  </a>
</nav>
```

### List Items

```tsx
// ❌ BEFORE
<ul>
  <li className="text-base mb-2">Advanced laboratory equipment</li>
  <li className="text-base mb-2">Expert faculty members</li>
  <li className="text-base mb-2">100% placement assistance</li>
</ul>

// ✅ AFTER
<ul>
  <li className="mb-2">
    <Typography variant="p">Advanced laboratory equipment</Typography>
  </li>
  <li className="mb-2">
    <Typography variant="p">Expert faculty members</Typography>
  </li>
  <li className="mb-2">
    <Typography variant="p">100% placement assistance</Typography>
  </li>
</ul>
```

### Buttons with Text

```tsx
// ❌ BEFORE
<button className="btn-primary text-base font-semibold">
  Apply Now
</button>

// ✅ AFTER
<button className="btn-primary">
  <Typography variant="p" as="span" className="font-semibold">
    Apply Now
  </Typography>
</button>
```

### Breadcrumbs

```tsx
// ❌ BEFORE
<nav className="text-sm text-gray-500">
  Home / Programs / Medical Laboratory Technology
</nav>

// ✅ AFTER
<nav>
  <Typography variant="small" className="text-gray-500">
    Home / Programs / Medical Laboratory Technology
  </Typography>
</nav>
```

---

## 🎨 Handling Custom Styles

### Gradient Text

```tsx
// ❌ BEFORE
<h1 className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent text-5xl font-bold">
  Gradient Heading
</h1>

// ✅ AFTER
<Typography variant="h1" className="text-gradient">
  Gradient Heading
</Typography>
```

### Custom Colors

```tsx
// ❌ BEFORE
<h2 style={{ color: '#0b6d41' }} className="text-2xl font-semibold">
  Custom Color
</h2>

// ✅ AFTER
<Typography variant="h2" color="#0b6d41">
  Custom Color
</Typography>
// OR
<Typography variant="h2" className="text-primary">
  Custom Color
</Typography>
```

### Text Alignment

```tsx
// ❌ BEFORE
<h1 className="text-center text-4xl font-bold">Centered Title</h1>
<p className="text-justify text-base">Justified paragraph text...</p>

// ✅ AFTER
<Typography variant="h1" align="center">Centered Title</Typography>
<Typography variant="p" align="justify">Justified paragraph text...</Typography>
```

---

## 🔍 Finding & Replacing

### VS Code Search & Replace

Use these regex patterns in VS Code to find elements to migrate:

#### Find H1 tags:
```regex
<h1[^>]*>(.*?)</h1>
```

#### Find H2 tags:
```regex
<h2[^>]*>(.*?)</h2>
```

#### Find H3 tags:
```regex
<h3[^>]*>(.*?)</h3>
```

#### Find paragraph tags with classes:
```regex
<p className="[^"]*text-(base|lg|xl)[^"]*">(.*?)</p>
```

**Note:** After finding, manually replace each instance to preserve specific className attributes.

---

## ⚡ Batch Migration Script

For large-scale migrations, consider this approach:

```tsx
// Create a temporary wrapper that maps old classes to Typography
// Use this during transition period, then gradually migrate

import { cn } from "@/lib/utils";
import Typography, { TypographyVariant } from "@/components/ui/Typography";

export function LegacyText({
  tag,
  children,
  className,
  ...props
}: {
  tag: 'h1' | 'h2' | 'h3' | 'p' | 'small';
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const variantMap: Record<string, TypographyVariant> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    small: 'small',
  };

  return (
    <Typography
      variant={variantMap[tag]}
      className={className}
      {...props}
    >
      {children}
    </Typography>
  );
}
```

---

## 📝 Checklist for Each File

When migrating a file:

- [ ] Import Typography component
- [ ] Replace `<h1>` with `<Typography variant="h1">`
- [ ] Replace `<h2>` with `<Typography variant="h2">`
- [ ] Replace `<h3>` with `<Typography variant="h3">`
- [ ] Replace `<p>` (body text) with `<Typography variant="p">`
- [ ] Replace `<small>` with `<Typography variant="small">`
- [ ] Remove redundant font-size/weight classes
- [ ] Add `balance` prop for long headings
- [ ] Verify color classes are preserved
- [ ] Test responsive behavior on mobile
- [ ] Check accessibility with screen reader
- [ ] Verify heading hierarchy is semantic

---

## 🚨 Common Mistakes to Avoid

### ❌ Don't Keep Duplicate Styling

```tsx
// ❌ BAD - Redundant font sizing
<Typography variant="h1" className="text-4xl font-bold">Title</Typography>

// ✅ GOOD - Typography handles sizing
<Typography variant="h1">Title</Typography>
```

### ❌ Don't Skip Heading Levels

```tsx
// ❌ BAD - Skips h2
<Typography variant="h1">Main Title</Typography>
<Typography variant="h3">Subsection</Typography>

// ✅ GOOD - Proper hierarchy
<Typography variant="h1">Main Title</Typography>
<Typography variant="h2">Section</Typography>
<Typography variant="h3">Subsection</Typography>
```

### ❌ Don't Use Multiple Semantic H1s

```tsx
// ❌ BAD - Multiple h1 tags (bad for SEO)
<Typography variant="h1">Page Title</Typography>
<Typography variant="h1">Another Title</Typography>

// ✅ GOOD - One semantic h1, others as styled divs
<Typography variant="h1">Page Title</Typography>
<Typography variant="h1" as="div">Another Title</Typography>
```

---

## 🧪 Testing After Migration

After migrating each component:

1. **Visual Test**: Check that text appears correctly
2. **Responsive Test**: Test on mobile (320px), tablet (768px), desktop (1024px+)
3. **Accessibility Test**: Run Lighthouse accessibility audit
4. **Screen Reader Test**: Use VoiceOver (Mac) or NVDA (Windows)
5. **Color Contrast**: Verify text meets WCAG AA (4.5:1 ratio)
6. **Semantic HTML**: Inspect DOM to verify proper heading hierarchy

---

## 📊 Migration Progress Tracking

Track your progress with this table:

| Page/Component | Before | After | Status |
|----------------|--------|-------|--------|
| Home Page | 15 headings | 15 Typography | ✅ Done |
| About Page | 8 headings | 8 Typography | ⏳ In Progress |
| Programs Page | 20 headings | - | ❌ Not Started |
| Contact Form | 5 labels | - | ❌ Not Started |

---

## 💡 Pro Tips

### Use Find & Replace Wisely

1. Search for `<h1` across all files
2. Review each instance individually
3. Preserve important className attributes
4. Test after each major file migration

### Migrate Incrementally

1. Start with high-traffic pages (Home, About)
2. Move to component library (Cards, Forms)
3. Finish with less critical pages
4. Deploy and test after each batch

### Maintain Old Styles Temporarily

Keep old CSS classes during transition:

```css
/* Keep these until migration is complete */
.legacy-title {
  @apply text-4xl font-bold;
}
```

Then gradually remove as you migrate components.

---

## 🎯 Priority Order

Migrate in this order for maximum impact:

1. **High Priority**
   - [ ] Home page hero section
   - [ ] Navigation menu
   - [ ] Footer
   - [ ] Main landing pages

2. **Medium Priority**
   - [ ] Course/program pages
   - [ ] About page
   - [ ] Contact forms
   - [ ] Reusable card components

3. **Low Priority**
   - [ ] Admin pages
   - [ ] Archive content
   - [ ] Error pages
   - [ ] Legacy components

---

## 📞 Need Help?

If you encounter issues:

1. Check the [Typography Documentation](src/components/ui/Typography.md)
2. Review [Usage Examples](src/components/ui/Typography.examples.tsx)
3. Visit the [Live Demo](/typography-demo)
4. Inspect TypeScript type hints in your IDE

---

**Happy Migrating! 🚀**

Remember: Quality over speed. Take time to ensure each migration maintains accessibility and semantic HTML.
