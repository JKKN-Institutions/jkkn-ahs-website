# Typography Component - Quick Reference Cheat Sheet

## 📦 Import

```tsx
import Typography from "@/components/ui/Typography";
// or
import { Typography } from "@/components/ui";
```

---

## 🎯 Basic Variants

```tsx
<Typography variant="h1">Main Page Title</Typography>
<Typography variant="h2">Section Subtitle</Typography>
<Typography variant="h3">Sub-heading</Typography>
<Typography variant="p">Body text paragraph</Typography>
<Typography variant="small">Helper text</Typography>
```

---

## 📏 Font Sizes (Responsive)

| Variant | Mobile | Tablet | Desktop | Weight |
|---------|--------|--------|---------|--------|
| h1 | 32px | 38px | 44px | 700 |
| h2 | 20px | 24px | 28px | 600 |
| h3 | 18px | 20px | 22px | 600 |
| p | 15px | 15.5px | 16px | 400 |
| small | 13px | 13.5px | 14px | 400 |

---

## 🎨 With Brand Colors

```tsx
{/* Primary green */}
<Typography variant="h1" className="text-primary">Title</Typography>

{/* Secondary yellow */}
<Typography variant="h2" className="text-secondary">Title</Typography>

{/* Gradient */}
<Typography variant="h1" className="text-gradient">Title</Typography>

{/* Custom hex */}
<Typography variant="h2" color="#0b6d41">Title</Typography>

{/* Custom RGB */}
<Typography variant="p" color="rgb(11, 109, 65)">Text</Typography>
```

---

## 📐 Alignment

```tsx
<Typography align="left">Left aligned</Typography>
<Typography align="center">Center aligned</Typography>
<Typography align="right">Right aligned</Typography>
<Typography align="justify">Justified text</Typography>
```

---

## ⚖️ Text Balancing

```tsx
{/* Prevents orphaned words on last line */}
<Typography variant="h1" balance>
  Long Heading That Benefits from Balance
</Typography>
```

---

## 🔄 Custom Elements

```tsx
{/* Render h1 style as div */}
<Typography variant="h1" as="div">Styled as h1</Typography>

{/* Render h3 style as label */}
<Typography variant="h3" as="label" htmlFor="email">
  Email Address
</Typography>

{/* Render p style as span */}
<Typography variant="p" as="span">Inline text</Typography>
```

---

## 🎯 Common Use Cases

### Hero Section
```tsx
<Typography variant="h1" balance className="text-gradient">
  Welcome to JKKN AHS
</Typography>
```

### Course Card
```tsx
<div className="glass-card p-6">
  <Typography variant="h3" className="text-primary">
    B.Sc. MLT
  </Typography>
  <Typography variant="small" className="text-gray-500">
    4 Years
  </Typography>
  <Typography variant="p" balance>
    Description text
  </Typography>
</div>
```

### Form Label
```tsx
<Typography variant="h3" as="label" htmlFor="name" className="block mb-2">
  Full Name
</Typography>
<input id="name" type="text" />
<Typography variant="small" className="text-gray-500">
  Helper text
</Typography>
```

### Button Text
```tsx
<button className="btn-primary">
  <Typography variant="p" as="span" className="font-semibold">
    Apply Now
  </Typography>
</button>
```

---

## ♿ Accessibility

```tsx
{/* ✅ GOOD: Semantic hierarchy */}
<Typography variant="h1">Page Title</Typography>
<Typography variant="h2">Section</Typography>
<Typography variant="h3">Subsection</Typography>

{/* ❌ BAD: Skips levels */}
<Typography variant="h1">Page Title</Typography>
<Typography variant="h3">Subsection</Typography> {/* Missing h2! */}

{/* ✅ GOOD: Only one semantic h1 */}
<Typography variant="h1">Main Title</Typography>
<Typography variant="h1" as="div">Visual H1</Typography>

{/* ❌ BAD: Multiple h1s */}
<Typography variant="h1">Title 1</Typography>
<Typography variant="h1">Title 2</Typography>
```

---

## 🎨 With Tailwind Classes

```tsx
<Typography variant="h1" className="text-primary mb-4 hover:text-primary-dark">
  Styled Title
</Typography>

<Typography variant="p" className="text-gray-600 leading-relaxed max-w-2xl">
  Paragraph with custom spacing
</Typography>
```

---

## 📱 Responsive Example

```tsx
<Typography
  variant="h1"
  balance
  className="text-primary text-center md:text-left lg:mb-8"
>
  Responsive Title
</Typography>
```

---

## 🔗 All Props

| Prop | Type | Default | Example |
|------|------|---------|---------|
| variant | `"h1"` \| `"h2"` \| `"h3"` \| `"p"` \| `"small"` | `"p"` | `variant="h1"` |
| children | `React.ReactNode` | - | `{children}` |
| className | `string` | - | `className="text-primary"` |
| align | `"left"` \| `"center"` \| `"right"` \| `"justify"` | - | `align="center"` |
| color | `string` | - | `color="#0b6d41"` |
| balance | `boolean` | `false` | `balance` |
| as | `React.ElementType` | - | `as="div"` |

---

## 🚀 Quick Copy-Paste Templates

### Landing Page Hero
```tsx
<section className="text-center py-20">
  <Typography variant="h1" balance className="text-gradient mb-4">
    Welcome to JKKN Allied Health Sciences
  </Typography>
  <Typography variant="h2" balance className="text-gray-600 mb-6">
    Excellence in Healthcare Education
  </Typography>
  <Typography variant="p" balance className="max-w-2xl mx-auto">
    Empowering the next generation of healthcare professionals.
  </Typography>
</section>
```

### Feature Grid
```tsx
<div className="grid md:grid-cols-3 gap-6">
  <div className="glass-card p-6">
    <Typography variant="h3" className="text-primary mb-3">
      Expert Faculty
    </Typography>
    <Typography variant="p" balance>
      Learn from industry professionals
    </Typography>
  </div>
  {/* Repeat for other features */}
</div>
```

### Contact Form
```tsx
<form className="space-y-4">
  <div>
    <Typography variant="h3" as="label" htmlFor="name" className="block mb-2">
      Full Name
    </Typography>
    <input id="name" type="text" className="w-full px-4 py-2 rounded-lg" />
    <Typography variant="small" className="text-gray-500 mt-1">
      Enter your full legal name
    </Typography>
  </div>
</form>
```

---

## 🎨 Brand Color Variables

```tsx
// Available in globals.css
--primary: #0b6d41        // Green
--primary-dark: #085231   // Dark Green
--secondary: #ffde59      // Yellow
--background: #fbfbee     // Cream
--foreground: #1a1a1a     // Dark Text
```

---

## 📊 Browser Support

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ All modern mobile browsers

---

## 🔗 Resources

- **Demo Page**: `/typography-demo`
- **Full Docs**: `src/components/ui/Typography.md`
- **Examples**: `src/components/ui/Typography.examples.tsx`
- **Migration Guide**: `TYPOGRAPHY_MIGRATION_GUIDE.md`

---

## 💡 Pro Tips

1. **Always use `balance` for long headings** - prevents orphans
2. **Only one semantic `<h1>` per page** - use `as="div"` for visual h1s
3. **Maintain heading hierarchy** - don't skip levels
4. **Test on mobile** - verify responsive sizing
5. **Check color contrast** - ensure WCAG AA compliance (4.5:1)
6. **Use semantic HTML** - helps with SEO and accessibility

---

**Quick Help**: Visit `/typography-demo` to see all examples in action!
