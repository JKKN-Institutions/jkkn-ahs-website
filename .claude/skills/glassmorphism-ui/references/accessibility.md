# Glassmorphism Accessibility Guidelines

## Overview

Glassmorphism presents unique accessibility challenges due to its reliance on transparency and blur effects. This guide provides solutions for creating inclusive glass-style interfaces.

## Core Accessibility Concerns

### 1. Color Contrast

Glass elements often reduce contrast between text and background.

**WCAG Requirements:**
- Normal text: 4.5:1 contrast ratio minimum
- Large text (18px+ or 14px+ bold): 3:1 minimum
- UI components: 3:1 minimum

**Solutions:**

```css
/* Add text shadow for improved readability */
.glass-text-readable {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Use a darker backdrop for text areas */
.glass-text-container {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
}

/* Increase opacity for critical content */
.glass-important {
  background: rgba(255, 255, 255, 0.25);
}
```

**Testing Contrast:**
Use tools like:
- WebAIM Contrast Checker
- Chrome DevTools Color Picker
- Stark plugin for Figma

### 2. Focus Indicators

Glass elements can obscure default focus indicators.

**Requirements:**
- Focus must be clearly visible
- 3:1 contrast against adjacent colors
- Consistent across the interface

**Solutions:**

```css
/* High-visibility focus ring */
.glass-element:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
  box-shadow: 
    0 0 0 4px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(255, 255, 255, 0.5);
}

/* Alternative: inner glow focus */
.glass-button:focus-visible {
  outline: none;
  box-shadow: 
    inset 0 0 0 2px white,
    0 0 20px rgba(255, 255, 255, 0.3);
}

/* Remove default outline only when custom is applied */
.glass-element:focus:not(:focus-visible) {
  outline: none;
}
```

### 3. Motion and Animation

Glass interfaces often include animations that can cause issues.

**Concerns:**
- Vestibular disorders
- Motion sensitivity
- Cognitive load

**Solutions:**

```css
/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .glass-animated {
    animation: none !important;
    transition: none !important;
  }
  
  .glass-element {
    backdrop-filter: blur(12px); /* Static, no animation */
  }
}

/* Alternative: reduce rather than remove */
@media (prefers-reduced-motion: reduce) {
  .glass-animated {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 4. Browser Fallbacks

Not all browsers or devices support `backdrop-filter`.

**Fallback Strategy:**

```css
/* Layer 1: Solid fallback for all browsers */
.glass {
  background: rgba(30, 41, 59, 0.95);
  color: white;
}

/* Layer 2: Enhanced for supporting browsers */
@supports (backdrop-filter: blur(12px)) {
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}

/* Layer 3: High contrast mode support */
@media (prefers-contrast: more) {
  .glass {
    background: rgba(0, 0, 0, 0.9);
    border: 2px solid white;
  }
}
```

## Screen Reader Considerations

### Semantic Structure

Glass is purely visual; ensure proper semantics:

```html
<!-- Good: Semantic with ARIA when needed -->
<nav class="glass-nav" aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<!-- Good: Modal with proper roles -->
<div class="glass-modal" role="dialog" aria-labelledby="modal-title" aria-modal="true">
  <h2 id="modal-title">Settings</h2>
  <!-- content -->
</div>
```

### Live Regions

For dynamic glass elements:

```html
<!-- Notifications in glass container -->
<div class="glass-toast" role="alert" aria-live="polite">
  Your changes have been saved.
</div>

<!-- Loading states -->
<div class="glass-loading" role="status" aria-live="polite">
  <span class="sr-only">Loading...</span>
  <div class="glass-spinner" aria-hidden="true"></div>
</div>
```

### Hidden Decorative Elements

```html
<!-- Hide purely decorative glass effects -->
<div class="glass-decoration" aria-hidden="true"></div>

<!-- Ensure icons have labels -->
<button class="glass-button">
  <svg aria-hidden="true"><!-- icon --></svg>
  <span class="sr-only">Close menu</span>
</button>
```

## Keyboard Navigation

### Focus Order

Ensure logical focus order despite visual layering:

```css
/* Glass overlay should not disrupt tab order */
.glass-overlay {
  /* Visual only, not in tab order */
  pointer-events: none;
}

.glass-overlay.active {
  pointer-events: auto;
}
```

### Focus Trapping for Modals

```javascript
// Trap focus within glass modal
function trapFocus(modal) {
  const focusable = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}
```

### Skip Links

For glass navigation that appears above content:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<nav class="glass-nav"><!-- navigation --></nav>

<main id="main-content"><!-- content --></main>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px 16px;
  background: white;
  color: black;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
</style>
```

## Touch and Mobile Accessibility

### Touch Targets

Glass buttons must be large enough for touch:

```css
/* Minimum 44x44px touch target */
.glass-button {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 24px;
}

/* Adequate spacing between touch targets */
.glass-button-group {
  gap: 8px;
}
```

### Touch Feedback

Provide clear feedback for touch interactions:

```css
.glass-button {
  transition: all 0.15s ease;
}

.glass-button:active {
  transform: scale(0.95);
  background: rgba(255, 255, 255, 0.2);
}

/* iOS-style haptic feedback hint */
@media (hover: none) {
  .glass-button:active {
    opacity: 0.7;
  }
}
```

## High Contrast Mode

Support Windows High Contrast Mode:

```css
@media (forced-colors: active) {
  .glass-element {
    /* Use system colors */
    background: Canvas;
    color: CanvasText;
    border: 1px solid CanvasText;
    
    /* Remove blur effects */
    backdrop-filter: none;
  }
  
  .glass-button {
    background: ButtonFace;
    color: ButtonText;
    border: 2px solid ButtonText;
  }
  
  .glass-button:hover,
  .glass-button:focus {
    background: Highlight;
    color: HighlightText;
  }
}
```

## Testing Checklist

### Automated Testing

1. Run axe-core or similar accessibility scanner
2. Check color contrast with automated tools
3. Validate HTML semantics
4. Test focus order programmatically

### Manual Testing

- [ ] Navigate entire interface with keyboard only
- [ ] Test with screen reader (NVDA, VoiceOver, JAWS)
- [ ] Verify focus indicators are visible on all glass elements
- [ ] Check contrast ratios for all text on glass backgrounds
- [ ] Test with `prefers-reduced-motion: reduce`
- [ ] Test with `prefers-contrast: more`
- [ ] Test in Windows High Contrast Mode
- [ ] Verify touch targets are at least 44x44px
- [ ] Test on mobile devices (iOS VoiceOver, Android TalkBack)
- [ ] Zoom to 200% and verify layout works

### Browser Testing

- [ ] Chrome (with and without backdrop-filter support disabled)
- [ ] Firefox
- [ ] Safari (webkit prefix)
- [ ] Edge
- [ ] iOS Safari
- [ ] Android Chrome

## Accessible Glass Component Example

```tsx
function AccessibleGlassCard({ 
  title, 
  children, 
  actions,
  ariaLabelledBy 
}) {
  return (
    <article 
      className="glass-card"
      aria-labelledby={ariaLabelledBy}
    >
      <h2 
        id={ariaLabelledBy} 
        className="glass-card-title"
      >
        {title}
      </h2>
      
      <div className="glass-card-content">
        {children}
      </div>
      
      {actions && (
        <div 
          className="glass-card-actions" 
          role="group" 
          aria-label="Card actions"
        >
          {actions}
        </div>
      )}
    </article>
  );
}

// CSS
const styles = `
.glass-card {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 24px;
  color: white;
}

/* Fallback for no backdrop-filter support */
@supports not (backdrop-filter: blur(12px)) {
  .glass-card {
    background: rgba(30, 41, 59, 0.95);
  }
}

.glass-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
  /* Ensure readable */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.glass-card:focus-within {
  outline: 2px solid white;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .glass-card {
    transition: none;
  }
}

@media (prefers-contrast: more) {
  .glass-card {
    background: black;
    border: 2px solid white;
  }
}
`;
```

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN: backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
