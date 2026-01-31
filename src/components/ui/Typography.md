# Typography System Documentation

## Overview

The Typography component provides a consistent, responsive, and accessible typography system for the JKKN Allied Health Sciences website using the **Poppins** font family.

---

## Quick Reference

### Font Sizes (Desktop → Mobile)

| Variant | Desktop | Tablet | Mobile | Weight | Usage |
|---------|---------|--------|---------|--------|-------|
| **h1** | 44px | 38px | 32px | 700 | Main page titles |
| **h2** | 28px | 24px | 20px | 600 | Section subtitles |
| **h3** | 22px | 20px | 18px | 600 | Sub-headings |
| **p** | 16px | 15.5px | 15px | 400 | Body text |
| **small** | 14px | 13.5px | 13px | 400 | Helper text |

---

## Installation & Setup

### 1. Font Configuration (Already Done ✅)

The Poppins font is configured in `src/app/layout.tsx`:

```tsx
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

### 2. Global Styles (Already Done ✅)

Typography utilities are defined in `src/app/globals.css`:

```css
@layer base {
  h1, .h1 {
    @apply text-[32px] md:text-[38px] lg:text-[44px] font-bold leading-tight;
  }

  h2, .h2 {
    @apply text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-snug;
  }

  h3, .h3 {
    @apply text-[18px] md:text-[20px] lg:text-[22px] font-semibold leading-snug;
  }

  p, .body {
    @apply text-[15px] md:text-[15.5px] lg:text-[16px] font-normal leading-relaxed;
  }

  small, .small {
    @apply text-[13px] md:text-[13.5px] lg:text-[14px] font-normal leading-normal;
  }
}
```

### 3. Import the Component

```tsx
import Typography from "@/components/ui/Typography";
```

---

## Basic Usage

### Simple Text Rendering

```tsx
<Typography variant="h1">Welcome to JKKN AHS</Typography>
<Typography variant="h2">Our Programs</Typography>
<Typography variant="h3">Course Details</Typography>
<Typography variant="p">This is body text for paragraphs.</Typography>
<Typography variant="small">Small helper text</Typography>
```

### With Custom Styling

```tsx
<Typography variant="h1" className="text-primary">
  Colored Heading
</Typography>

<Typography variant="p" className="text-gray-600">
  Gray paragraph text
</Typography>
```

---

## Advanced Features

### Text Alignment

```tsx
<Typography variant="h1" align="center">
  Centered Title
</Typography>

<Typography variant="p" align="justify">
  Justified paragraph for professional layouts
</Typography>
```

**Available Options:** `left` | `center` | `right` | `justify`

---

### Text Balancing

Prevents awkward single words on the last line (orphans):

```tsx
<Typography variant="h1" balance>
  This Long Heading Will Be Balanced for Better Readability
</Typography>
```

---

### Custom Colors

```tsx
{/* Using Tailwind classes */}
<Typography variant="h1" className="text-primary">
  Primary Brand Color
</Typography>

{/* Using CSS hex colors */}
<Typography variant="h2" color="#0b6d41">
  Custom Hex Color
</Typography>

{/* Using RGB */}
<Typography variant="p" color="rgb(11, 109, 65)">
  Custom RGB Color
</Typography>

{/* Using gradient (from globals.css) */}
<Typography variant="h1" className="text-gradient">
  Gradient Text
</Typography>
```

---

### Custom HTML Elements

Override the semantic element while keeping the style:

```tsx
{/* Render h1 styles but as a div (useful for multiple h1 styles, but only one semantic h1 for SEO) */}
<Typography variant="h1" as="div">
  Styled as h1 but rendered as div
</Typography>

{/* Render h3 styles as a label */}
<Typography variant="h3" as="label" htmlFor="email">
  Email Address
</Typography>
```

---

## Real-World Examples

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

### Course Card

```tsx
<div className="glass-card p-6 rounded-2xl">
  <Typography variant="h3" className="text-primary mb-2">
    B.Sc. Medical Laboratory Technology
  </Typography>
  <Typography variant="small" className="text-gray-500 mb-4">
    4 Years • Full Time
  </Typography>
  <Typography variant="p" balance>
    Comprehensive training in diagnostic testing and healthcare support.
  </Typography>
</div>
```

### Form with Accessible Labels

```tsx
<div>
  <Typography variant="h3" as="label" htmlFor="name" className="mb-2 block">
    Full Name
  </Typography>
  <input id="name" type="text" className="w-full px-4 py-2 rounded-lg border" />
  <Typography variant="small" className="text-gray-500 mt-1">
    Please enter your full legal name
  </Typography>
</div>
```

---

## Component API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"h1"` \| `"h2"` \| `"h3"` \| `"p"` \| `"small"` | `"p"` | Typography style variant |
| `children` | `React.ReactNode` | - | Content to display (required) |
| `className` | `string` | - | Additional CSS classes |
| `align` | `"left"` \| `"center"` \| `"right"` \| `"justify"` | - | Text alignment |
| `color` | `string` | - | Text color (CSS color or Tailwind class) |
| `balance` | `boolean` | `false` | Enable text balancing for better readability |
| `as` | `React.ElementType` | - | Override the HTML element |
| `...props` | - | - | All other HTML attributes are passed through |

---

## Accessibility Best Practices

### ✅ DO

- **Use semantic hierarchy**: Only one `h1` per page, then `h2`, `h3` in order
- **Enable text balancing**: Use `balance` prop for headings to prevent orphans
- **Ensure color contrast**: Text should meet WCAG AA standards (4.5:1 ratio)
- **Use proper labels**: Connect labels to form inputs with `htmlFor` attribute
- **Test responsiveness**: Verify text scales well on mobile devices

### ❌ DON'T

- **Skip heading levels**: Don't jump from `h1` to `h3`
- **Use headings for styling**: If you need h1 style but not semantics, use `as` prop
- **Use low-contrast colors**: Ensure text is readable on all backgrounds
- **Hardcode font sizes**: Always use the Typography component for consistency
- **Ignore mobile sizes**: Test on actual mobile devices

---

## SEO Optimization

### Heading Hierarchy

```tsx
{/* ✅ GOOD: Proper hierarchy */}
<Typography variant="h1">Main Title</Typography>
<Typography variant="h2">Section</Typography>
<Typography variant="h3">Subsection</Typography>

{/* ❌ BAD: Skips h2 */}
<Typography variant="h1">Main Title</Typography>
<Typography variant="h3">Subsection</Typography>
```

### Multiple H1 Styles (Only One Semantic H1)

```tsx
{/* Semantic h1 for SEO */}
<Typography variant="h1">JKKN Allied Health Sciences</Typography>

{/* Visual h1 style without semantic meaning */}
<Typography variant="h1" as="div" className="mt-8">
  Our Vision
</Typography>
```

---

## Integration with Existing Styles

The Typography component works seamlessly with your existing CSS utilities:

### With Glassmorphism

```tsx
<div className="glass-card p-8">
  <Typography variant="h2" className="text-primary">
    Glass Card Heading
  </Typography>
  <Typography variant="p">Content inside glass card</Typography>
</div>
```

### With Brand Colors

```tsx
<Typography variant="h1" className="text-primary">
  Primary Brand Color (#0b6d41)
</Typography>

<Typography variant="h2" className="text-secondary">
  Secondary Brand Color (#ffde59)
</Typography>

<Typography variant="h1" className="text-gradient">
  Brand Gradient Text
</Typography>
```

### With Buttons

```tsx
<button className="btn-primary">
  <Typography variant="small" as="span">
    Click Me
  </Typography>
</button>
```

---

## Performance Considerations

### Font Loading

- **Optimized**: Uses `next/font/google` for automatic font optimization
- **Subsetting**: Only Latin characters loaded (reduces file size)
- **Variable fonts**: CSS variable `--font-poppins` enables efficient loading
- **No layout shift**: Font metrics prevent CLS (Cumulative Layout Shift)

### Responsive Scaling

- **Mobile-first**: Base sizes for mobile, scales up for larger screens
- **Fluid sizing**: Smooth transitions between breakpoints
- **No JavaScript**: Pure CSS for maximum performance

---

## Testing Checklist

Before deploying, verify:

- [ ] Text is readable on all background colors
- [ ] Font sizes work on mobile (320px width minimum)
- [ ] Heading hierarchy is semantic and logical
- [ ] Text balancing works for long headings
- [ ] Screen readers announce headings correctly
- [ ] Color contrast meets WCAG AA standards (4.5:1)
- [ ] Text doesn't overflow on small screens
- [ ] Line height provides comfortable reading

---

## Troubleshooting

### Issue: Font not loading

**Solution**: Verify `poppins.variable` is applied in `layout.tsx`:

```tsx
<body className={`${poppins.variable} antialiased`}>
```

### Issue: Responsive sizes not working

**Solution**: Ensure Tailwind's responsive prefixes are configured:

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
};
```

### Issue: Custom colors not applying

**Solution**: Check if color is a Tailwind class or CSS color:

```tsx
{/* Tailwind class - use className */}
<Typography className="text-primary">Text</Typography>

{/* CSS color - use color prop */}
<Typography color="#0b6d41">Text</Typography>
```

---

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Mobile Safari | 14+ | ✅ Full |
| Chrome Android | 90+ | ✅ Full |

---

## Related Files

- **Component**: `src/components/ui/Typography.tsx`
- **Examples**: `src/components/ui/Typography.examples.tsx`
- **Global Styles**: `src/app/globals.css`
- **Font Config**: `src/app/layout.tsx`

---

## Support & Contributing

For questions or improvements:
1. Check the examples in `Typography.examples.tsx`
2. Review this documentation
3. Test in the browser developer tools
4. Ensure accessibility with Lighthouse audit

---

**Last Updated**: 2026-01-31
**Version**: 1.0.0
**Maintainer**: JKKN Allied Health Sciences Dev Team
