# Mobile Testing Checklist

## Quick Audit Template

Use this template when auditing pages for mobile responsiveness.

```markdown
# Mobile Audit: [PAGE_NAME]
Date: [DATE]
URL: [URL]

## Layout (Score: _/5)
- [ ] No horizontal scroll at 320px
- [ ] No horizontal scroll at 375px
- [ ] No horizontal scroll at 428px
- [ ] Content fits within viewport
- [ ] Proper spacing/padding on edges

## Typography (Score: _/5)
- [ ] Text readable without zooming (min 16px body)
- [ ] Headings scale appropriately
- [ ] Line length under 75 characters
- [ ] No text overflow/truncation issues
- [ ] Proper text contrast

## Touch Targets (Score: _/5)
- [ ] All buttons min 44x44px
- [ ] All links have adequate tap area
- [ ] Form inputs easy to tap
- [ ] No overlapping touch targets
- [ ] Adequate spacing between targets

## Navigation (Score: _/5)
- [ ] Mobile nav exists (hamburger/bottom)
- [ ] Desktop nav hidden on mobile
- [ ] Back button works properly
- [ ] Current page indicated
- [ ] All nav items accessible

## Forms (Score: _/5)
- [ ] Inputs full-width on mobile
- [ ] Proper input types (email, tel, etc.)
- [ ] Labels visible and associated
- [ ] Error messages visible
- [ ] Submit button prominent

## Tables/Lists (Score: _/5)
- [ ] Tables converted to cards OR
- [ ] Tables have horizontal scroll
- [ ] List items properly spaced
- [ ] Actions accessible on mobile
- [ ] Content not cut off

## Images/Media (Score: _/5)
- [ ] Images responsive
- [ ] No image overflow
- [ ] Proper aspect ratios
- [ ] Alt text present
- [ ] Load efficiently

## Performance (Score: _/5)
- [ ] Page loads in <3s on 3G
- [ ] No layout shift
- [ ] Smooth scrolling
- [ ] No janky animations
- [ ] Touch response immediate

## Total Score: _/40

## Issues Found:
1.
2.
3.

## Fixes Required:
1.
2.
3.
```

---

## Test Viewports

Always test at these exact widths:

| Device | Width | Notes |
|--------|-------|-------|
| iPhone SE | 320px | Smallest common mobile |
| iPhone 12/13 | 390px | Most common iPhone |
| iPhone 14 Pro Max | 428px | Large phone |
| iPad Mini | 768px | Tablet (md breakpoint) |
| iPad | 820px | Tablet |
| Laptop | 1024px | lg breakpoint |
| Desktop | 1280px | xl breakpoint |

---

## Common Issues Checklist

### Layout Issues

```
[ ] Fixed width elements breaking layout
    Fix: Replace w-[400px] with max-w-[400px] w-full

[ ] Flex items not wrapping
    Fix: Add flex-wrap or switch to flex-col on mobile

[ ] Grid columns not collapsing
    Fix: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4

[ ] Sidebar pushing content off-screen
    Fix: Hidden on mobile with overlay pattern

[ ] Modal too wide
    Fix: w-full max-w-[500px] mx-4
```

### Typography Issues

```
[ ] Text too small
    Fix: Minimum text-base (16px) for body

[ ] Headings too large on mobile
    Fix: text-xl sm:text-2xl lg:text-3xl

[ ] Long words breaking layout
    Fix: break-words or truncate

[ ] Text unreadable over images
    Fix: Add overlay or shadow
```

### Touch Target Issues

```
[ ] Small buttons
    Fix: min-h-[44px] min-w-[44px]

[ ] Links too close together
    Fix: Add py-2 or space-y-2

[ ] Icon buttons too small
    Fix: p-3 for icon buttons

[ ] Dropdown items cramped
    Fix: min-h-[44px] for each item
```

### Navigation Issues

```
[ ] No mobile navigation
    Fix: Add bottom nav or hamburger menu

[ ] Navigation items hidden
    Fix: Show essential items, hide rest in menu

[ ] No back button
    Fix: Add back arrow in header

[ ] Breadcrumbs overflowing
    Fix: Hide on mobile or truncate
```

---

## Browser DevTools Testing

### Chrome DevTools

1. Open DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Select device or enter custom dimensions
4. Test touch interactions with "touch" mode
5. Throttle network to "Slow 3G"
6. Check Console for errors

### Responsive Design Mode Shortcuts

| Action | Shortcut |
|--------|----------|
| Toggle Device Mode | Ctrl+Shift+M |
| Rotate Device | Ctrl+Shift+O |
| Capture Screenshot | Ctrl+Shift+P → "screenshot" |

---

## Real Device Testing

### Essential Tests on Real Device

1. **Touch Scrolling**
   - Momentum scroll works
   - No rubber-banding issues
   - Pull-to-refresh if implemented

2. **Keyboard Handling**
   - Form inputs scroll into view
   - Keyboard doesn't cover inputs
   - Done/Next buttons work

3. **Orientation**
   - Portrait works
   - Landscape works
   - No content cut off

4. **Safe Areas**
   - Content not hidden by notch
   - Bottom nav not hidden by home indicator

5. **Performance**
   - Smooth 60fps scrolling
   - Quick tap response
   - No lag on interactions

---

## Automated Testing Script

Use this script to quickly check all pages:

```bash
#!/bin/bash
# mobile-audit.sh

# Find all page.tsx files
pages=$(find app -name "page.tsx" -type f)

echo "Mobile Audit Report"
echo "==================="
echo ""

for page in $pages; do
  route=$(echo $page | sed 's/app//' | sed 's/\/page.tsx//' | sed 's/\[.*\]/:id/g')

  # Check for responsive classes
  sm_count=$(grep -c "sm:" "$page" 2>/dev/null || echo 0)
  md_count=$(grep -c "md:" "$page" 2>/dev/null || echo 0)
  lg_count=$(grep -c "lg:" "$page" 2>/dev/null || echo 0)

  # Check for problematic patterns
  fixed_width=$(grep -c "w-\[" "$page" 2>/dev/null || echo 0)

  total_responsive=$((sm_count + md_count + lg_count))

  if [ $total_responsive -lt 5 ]; then
    status="NEEDS WORK"
  elif [ $total_responsive -lt 15 ]; then
    status="PARTIAL"
  else
    status="GOOD"
  fi

  echo "Route: $route"
  echo "  Responsive classes: $total_responsive (sm:$sm_count md:$md_count lg:$lg_count)"
  echo "  Fixed widths: $fixed_width"
  echo "  Status: $status"
  echo ""
done
```

---

## Performance Metrics

### Target Metrics for Mobile

| Metric | Target | Tool |
|--------|--------|------|
| First Contentful Paint | <1.8s | Lighthouse |
| Largest Contentful Paint | <2.5s | Lighthouse |
| Cumulative Layout Shift | <0.1 | Lighthouse |
| First Input Delay | <100ms | Lighthouse |
| Time to Interactive | <3.8s | Lighthouse |

### Testing with Lighthouse

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select "Mobile" device
4. Check "Performance" category
5. Click "Analyze page load"
6. Review results and suggestions

---

## Accessibility Checklist

### Mobile-Specific Accessibility

```
[ ] Touch targets meet 44x44px minimum
[ ] Color contrast meets WCAG AA (4.5:1)
[ ] Focus states visible for keyboard users
[ ] Screen reader announces content correctly
[ ] Pinch-to-zoom not disabled
[ ] Orientation not locked
[ ] Form labels associated with inputs
[ ] Error messages announced by screen reader
[ ] Skip links work for navigation
[ ] Reduced motion respected
```

### Testing with VoiceOver (iOS)

1. Settings → Accessibility → VoiceOver → On
2. Swipe right to navigate elements
3. Double-tap to activate
4. Check all elements are announced
5. Verify form input labels

### Testing with TalkBack (Android)

1. Settings → Accessibility → TalkBack → On
2. Swipe right to navigate
3. Double-tap to activate
4. Verify content is properly announced

---

## Batch Testing Workflow

When testing multiple pages:

1. **Create spreadsheet with all routes**
2. **Test each at 375px width**
3. **Note issues in spreadsheet**
4. **Prioritize by severity**
5. **Fix in batches by pattern type**

### Priority Levels

| Priority | Issue Type | Example |
|----------|------------|---------|
| P0 - Critical | Page unusable | Horizontal scroll, touch targets broken |
| P1 - High | Major UX issue | No mobile nav, forms broken |
| P2 - Medium | Visual issue | Text too small, spacing off |
| P3 - Low | Minor polish | Small icon, slightly tight spacing |
