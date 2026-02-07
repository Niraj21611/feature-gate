# Sanctuary – Spiritual Learning & Bookstore Platform

A serene, contemplative landing page for a spiritual learning platform and online bookstore.

## 🕊️ Design Philosophy

**Calm and Grounded**
- Spacious layouts with generous whitespace
- Earthy, neutral color palette
- No harsh contrasts or flashy elements
- Timeless, human-centered design

**Typography**
- **Primary (Headings)**: Playfair Display – elegant high-contrast serif
- **Secondary (Body)**: Bricolage Grotesque – clean, modern sans-serif
- Intentional letter-spacing and line-height for readability

## 🎨 Color Palette

```css
--earth-dark: #1a1614    /* Primary dark text */
--stone-gray: #4a4542    /* Secondary text, buttons */
--warm-sand: #e8dfd2     /* Overlays, accents */
--soft-white: #fdfcfb    /* Background */
--sage-muted: #8a8c7f    /* Muted text */
--dusk-beige: #c9bba8    /* Overlays, gradients */
```

## 🎬 Components

### Navigation (`SpiritualNav.tsx`)
- Fixed at top, 72px height
- Minimal layout with generous spacing
- Links: Learning, Books, Community, About
- Rounded pill CTA button
- Smooth fade-in animation on load

### Hero Section (`SpiritualHero.tsx`)
- **Rounded container** (32-36px border-radius)
- **Background video** with soft overlay
- **Animated headline** – word-by-word reveal
- **Supporting text** – delayed fade-in
- **Primary CTA** – gentle entrance
- Respects `prefers-reduced-motion`

## 🎥 Video Background

Place your hero video at:
```
/public/hero-video.mp4
```

**Recommended characteristics:**
- Slow, meditative nature footage
- 15-60 seconds (loopable)
- 1920x1080 or 4K resolution
- H.264 codec, optimized for web

**Fallback:**
If video is unavailable, a soft gradient background displays automatically.

## 🌊 Animation Details

**Timing:**
- Slow, breath-like pacing (1.2–1.8s durations)
- Custom easing: `[0.16, 1, 0.3, 1]` (ease-out curve)
- Staggered word reveals with 120ms delay

**Motion Philosophy:**
- Intentional, not distracting
- Enhances calmness
- Never bouncy or flashy

## 📱 Responsive Design

- **Desktop**: Full rounded hero container (720px height)
- **Mobile**: Adjusted height (600px), optimized spacing
- **Touch-friendly**: Adequate button sizes, clear tap targets

## ♿ Accessibility

- ✅ High contrast text (WCAG AA compliant)
- ✅ Semantic HTML structure
- ✅ `prefers-reduced-motion` support
- ✅ Video marked `aria-hidden`
- ✅ Keyboard navigation supported

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Add your video:**
   ```bash
   # Place your video in the public folder
   cp your-video.mp4 public/hero-video.mp4
   ```

3. **Run development server:**
   ```bash
   pnpm dev
   ```

4. **Open browser:**
   ```
   http://localhost:3000
   ```

## 🔧 Customization

### Change headline text
Edit `SpiritualHero.tsx`:
```tsx
const words = "Your custom headline here".split(" ");
```

### Update color palette
Edit `app/globals.css` → `:root` variables

### Adjust animation timing
Edit motion variants in `SpiritualHero.tsx`:
```tsx
const wordVariant = {
  show: {
    transition: {
      duration: 1.5, // Customize here
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
```

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Fonts**: Google Fonts (Playfair Display, Bricolage Grotesque)
- **TypeScript**: Full type safety

## 🎯 Deliverables

✅ White, minimal navigation bar
✅ Rounded hero container with video background
✅ Animated spiritual headline (word-by-word reveal)
✅ Soft overlay for readability
✅ Responsive mobile-first design
✅ Accessibility compliance
✅ Reusable, extensible components

---

**Built with intention. Designed for presence.**
