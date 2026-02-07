# 🕊️ Quick Start Guide

## Project Setup Complete

Your spiritual learning platform is ready. Here's what has been created:

### ✅ Components Built

1. **SpiritualNav.tsx** - Minimal, calm navigation
   - Fixed header with gentle backdrop blur
   - Mobile-responsive with collapsible menu
   - Soft fade-in animation

2. **SpiritualHero.tsx** - Serene hero section
   - Rounded container (32-36px radius)
   - Video background with soft overlay
   - Word-by-word animated headline
   - Respects accessibility preferences

3. **VideoFallback.tsx** - Graceful fallback
   - Shows if video isn't available
   - Subtle earthy gradient

### 🎨 Design System Updated

**Colors**: Earthy, contemplative palette
- Earth Dark, Stone Gray, Warm Sand, Soft White

**Typography**: 
- Playfair Display (serif, headlines)
- Bricolage Grotesque (sans-serif, body)

### 📋 Next Steps

#### 1. Add Your Video
```bash
# Place your meditation/nature video here:
cp your-video.mp4 public/hero-video.mp4
```

**Video recommendations:**
- Slow nature scenes (water, mountains, candles)
- 15-60 seconds, loopable
- 1920x1080 or higher
- H.264 codec for web

#### 2. Install Dependencies
```bash
pnpm install
```

#### 3. Run Development Server
```bash
pnpm dev
```

Open: **http://localhost:3000**

### 🎯 Customization

**Change the headline:**
```tsx
// app/components/SpiritualHero.tsx, line 19
const words = "Your custom headline here".split(" ");
```

**Update navigation links:**
```tsx
// app/components/SpiritualNav.tsx, line 6-11
const navLinks = [
  { label: "Your Link", href: "#section" },
  // ...
];
```

**Adjust colors:**
```css
/* app/globals.css, :root section */
--earth-dark: #1a1614;
--stone-gray: #4a4542;
/* etc. */
```

### ♿ Accessibility Features

✅ Respects `prefers-reduced-motion`
✅ High contrast text (WCAG AA)
✅ Semantic HTML structure
✅ Keyboard navigation
✅ Screen reader friendly

### 📱 Responsive Design

- **Mobile**: 600px hero height, collapsible menu
- **Tablet**: Optimized spacing
- **Desktop**: 720px hero height, full navigation

### 🌊 Animation Philosophy

- **Slow & intentional** (1.2-1.8s durations)
- **Custom easing** for breath-like feel
- **Staggered reveals** for contemplation
- **Never flashy** - enhances calmness

---

**Everything is ready. Just add your video and run the dev server.**

For detailed documentation, see `SANCTUARY-README.md`
