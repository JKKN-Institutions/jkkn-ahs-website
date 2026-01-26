# Glassmorphism Design Principles

## What is Glassmorphism?

Glassmorphism is a design trend that creates a frosted glass aesthetic through the combination of transparency, blur effects, and subtle borders. The effect mimics looking through frosted or textured glass, creating depth and hierarchy in user interfaces.

## The Four Pillars of Glassmorphism

### 1. Transparency

The foundation of glassmorphism is a semi-transparent background that allows underlying content to show through.

**Guidelines:**
- Use opacity between 5% and 30% for most elements
- Lower opacity (5-10%) for subtle overlays
- Higher opacity (20-30%) for prominent elements that need to stand out
- Consider the background when choosing opacity levels

**Formula:**
```
background: rgba(R, G, B, opacity);

Light glass on dark: rgba(255, 255, 255, 0.1-0.2)
Dark glass on light: rgba(0, 0, 0, 0.05-0.15)
Colored glass: rgba(accent_color, 0.1-0.25)
```

### 2. Blur (Backdrop Filter)

The blur effect creates the frosted appearance that defines glassmorphism.

**Guidelines:**
- 8-16px blur is ideal for most use cases
- Larger blur (20-40px) for full-screen overlays
- Smaller blur (4-8px) for subtle accents
- Higher blur requires more transparency to maintain visibility

**Performance Note:**
`backdrop-filter` can be performance-intensive. Use sparingly and consider:
- Limiting the number of blurred elements on screen
- Using `will-change: backdrop-filter` for animated elements
- Testing on lower-end devices

### 3. Border Definition

Subtle borders are essential for defining the edges of glass elements against their backgrounds.

**Guidelines:**
- Use semi-transparent white borders on dark backgrounds
- Use semi-transparent dark borders on light backgrounds
- Border opacity typically 10-30%
- 1px borders work best; thicker borders lose the glass effect

**Top-Left Light Effect:**
For enhanced realism, add a lighter top or left border to simulate light refraction:
```css
.glass-realistic {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}
```

### 4. Shadow and Depth

Shadows create the floating effect and establish visual hierarchy.

**Guidelines:**
- Use soft, diffused shadows
- Shadow color should be black with low opacity (5-15%)
- Large blur radius creates softer, more realistic shadows
- Position shadows to suggest a consistent light source

**Layered Shadows:**
```css
.glass-layered-shadow {
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.05),
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 25px 50px rgba(0, 0, 0, 0.15);
}
```

## Background Considerations

Glassmorphism requires careful background selection to be effective.

### Best Backgrounds

1. **Gradients** - Create depth and visual interest behind glass
2. **Blurred Images** - Photography with blur creates rich texture
3. **Mesh Gradients** - Multiple color points create dynamic backgrounds
4. **Solid Dark Colors** - Simple but effective for light glass

### Poor Backgrounds

1. **Pure White** - Glass becomes invisible or dirty-looking
2. **Busy Patterns** - Compete with the glass effect
3. **Low Contrast Colors** - Glass elements blend in too much
4. **Text-Heavy Areas** - Glass over text reduces readability

## Hierarchy and Layering

### Creating Depth

Use varying levels of blur and transparency to create visual hierarchy:

```
Layer 1 (Background): Solid or gradient
Layer 2 (Far glass): 5% opacity, 8px blur
Layer 3 (Mid glass): 10% opacity, 12px blur  
Layer 4 (Near glass): 15% opacity, 16px blur
Layer 5 (Foreground): 20% opacity, 20px blur
```

### Z-Index Strategy

```css
:root {
  --z-background: 0;
  --z-glass-far: 10;
  --z-glass-mid: 20;
  --z-glass-near: 30;
  --z-modal-backdrop: 40;
  --z-modal: 50;
  --z-tooltip: 60;
}
```

## Color Theory in Glassmorphism

### Neutral Glass

White glass on dark backgrounds is the most versatile:
- Clean, modern appearance
- Works with any accent color
- Professional and polished

### Tinted Glass

Adding color to glass creates mood and brand identity:
- Blue tint: Trust, technology, calm
- Purple tint: Creativity, luxury, mystery
- Green tint: Growth, nature, success
- Warm tints: Energy, warmth, urgency

### Color Recommendations

```css
/* Neutral */
.glass-neutral {
  background: rgba(255, 255, 255, 0.1);
}

/* Cool tint */
.glass-cool {
  background: rgba(100, 150, 255, 0.08);
}

/* Warm tint */
.glass-warm {
  background: rgba(255, 150, 100, 0.08);
}
```

## Common Patterns

### Card Pattern

Best for content containers, profiles, and information display:
```
- 10-15% opacity
- 12-16px blur
- 16-24px border radius
- Generous padding (24-32px)
- Subtle shadow
```

### Navigation Pattern

Ideal for headers, sidebars, and bottom navigation:
```
- 8-12% opacity
- 16-24px blur (more blur = more separation)
- Consistent padding
- Floating position (gap from edges)
- Stronger shadow for elevation
```

### Modal Pattern

For dialogs, popups, and overlays:
```
- 15-20% opacity (needs to stand out)
- 20-32px blur (strong separation)
- Larger border radius (24-32px)
- Backdrop blur on overlay
- Prominent shadow
```

### Button Pattern

Interactive glass elements:
```
- 10% opacity (resting)
- 20% opacity (hover)
- 8-12px blur
- Subtle scale on hover
- Press feedback (scale down)
```

## Animation Guidelines

### Entrance Animations

Glass elements should appear smoothly:
```css
.glass-enter {
  animation: glassAppear 0.3s ease-out;
}

@keyframes glassAppear {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.98);
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    backdrop-filter: blur(12px);
  }
}
```

### Hover Transitions

Smooth state changes enhance the glass effect:
```css
.glass-interactive {
  transition: 
    background-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.glass-interactive:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
```

### Performance Tips

1. Use `transform` and `opacity` for animations (GPU-accelerated)
2. Avoid animating `backdrop-filter` if possible
3. Use `will-change` sparingly and remove after animation
4. Consider reduced motion preferences

## Anti-Patterns to Avoid

### 1. Too Much Blur

Excessive blur makes content unreadable and looks muddy.
- Maximum recommended: 24px for overlays, 16px for content areas

### 2. Too Many Glass Layers

Multiple overlapping glass elements create visual noise.
- Limit to 2-3 glass layers visible at once

### 3. Glass on Glass

Stacking glass elements directly reduces clarity.
- Add opacity or solid color between glass layers

### 4. Inconsistent Transparency

Varying opacity randomly creates a messy appearance.
- Use a consistent transparency scale across the design

### 5. Missing Fallbacks

Not all browsers support `backdrop-filter`.
- Always provide a fallback background color

### 6. Poor Contrast

Light text on light glass is unreadable.
- Test contrast ratios, especially for text content

## Responsive Considerations

### Mobile Adjustments

- Reduce blur intensity (performance)
- Increase opacity slightly (readability on smaller screens)
- Ensure touch targets are large enough
- Consider reducing number of glass elements

### Desktop Considerations

- Can use more intensive effects
- More screen real estate for layered glass
- Hover states become important
- Consider parallax effects with glass layers

## File Organization

When implementing glassmorphism in a project:

```
styles/
├── glass/
│   ├── _variables.css    # Opacity, blur values
│   ├── _base.css         # Core glass classes
│   ├── _components.css   # Cards, buttons, etc.
│   ├── _animations.css   # Transitions, keyframes
│   └── _utilities.css    # Helper classes
└── glass.css             # Combined output
```
