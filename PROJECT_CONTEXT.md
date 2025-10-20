# MaxStudio Portfolio - Project Context

## Project Overview
This is a professional portfolio website for **MaxStudio**, a web development studio specializing in landing pages, corporate websites, and e-commerce solutions. The project is built with vanilla HTML, CSS, and JavaScript, emphasizing clean code, performance, and mobile-first responsive design.

---

## Design System

### Color Palette
**Primary Colors:**
- **Primary Purple:** `#7C3AED` - Main brand color used for CTAs, links, accents
- **Secondary Purple:** `#9333EA` - Used in gradients paired with primary
- **Dark Background:** `#1F1F1F` - Secondary color for dark sections
- **Light Background:** `#F9FAFB` - Main page background (light gray)
- **Black Text:** `#111827` - Primary text color
- **Gray Highlight:** `rgb(102, 102, 102)` or `#666666` - Secondary text/muted content

**Gradient Combinations:**
- `linear-gradient(135deg, #7C3AED, #9333EA)` - Primary gradient for buttons and accents
- Gradient text effects using `-webkit-background-clip: text`

**Transparency & Glass Effects:**
- Card backgrounds: `rgba(255, 255, 255, 0.8)` with `backdrop-filter: blur(10px)`
- Borders: `rgba(124, 58, 237, 0.08)` to `rgba(124, 58, 237, 0.25)`
- Shadows: `rgba(124, 58, 237, 0.06)` to `rgba(124, 58, 237, 0.3)`

### Typography
**Font Families:**
- **Headings:** `"Manrope", sans-serif` (font-weights: 200-800)
- **Body Text:** `"Inter", sans-serif`

**Font Sizing Pattern:**
- Use `clamp()` for responsive typography
- Example: `clamp(2rem, 5vw, 4rem)` - scales from 2rem to 4rem based on viewport
- Headings typically: 700-800 weight
- Body text: 400-600 weight

**Line Heights:**
- Headings: 1.1 - 1.2
- Body text: 1.6 - 1.8

### Spacing & Layout
**Container System:**
- Base padding: `20px` (mobile)
- Tablet: `30px` (640px+)
- Desktop: `40px` (768px+)
- Max-width: `1300px` (1024px+), `1400px` (1440px+)
- Centered with `margin: 0 auto`

**Section Padding (Vertical):**
- Mobile: `60px - 80px`
- Tablet: `80px - 100px`
- Desktop: `100px - 140px`
- Large desktop: `140px - 160px`

**Grid Gaps:**
- Small: `20px - 32px`
- Medium: `40px - 60px`
- Large: `80px - 120px`

### Responsive Breakpoints
```css
/* Mobile First Approach */
Base: 320px minimum
480px  - Small mobile
640px  - Tablet portrait
768px  - Tablet landscape
810px  - Navigation breakpoint
1024px - Desktop
1440px - Large desktop
```

---

## Component Patterns

### Cards
- **Background:** `rgba(255, 255, 255, 0.8)` or `rgba(255, 255, 255, 0.9)`
- **Backdrop filter:** `blur(10px)` for glass morphism
- **Border:** `1px solid rgba(124, 58, 237, 0.08)` to `0.15`
- **Border radius:** `16px` to `20px`
- **Shadow:** `0 8px 32px rgba(124, 58, 237, 0.06)`
- **Hover state:** `transform: translateY(-4px)`, increased shadow

### Buttons
**Primary Button:**
- Background: `linear-gradient(135deg, #7C3AED, #9333EA)`
- Color: `white`
- Padding: `16px 28px` to `20px 40px`
- Border radius: `50px` (fully rounded) or `12px` (moderate)
- Font: Manrope, 600 weight
- Shadow: `0 4px 15px rgba(124, 58, 237, 0.3)`
- Hover: `translateY(-2px)`, increased shadow

**Secondary Button:**
- Background: `transparent`
- Border: `2px solid #7C3AED`
- Color: `#7C3AED`
- Hover: Fill with purple, text turns white

### Animations
**Standard Fade-Slide-Up:**
```css
@keyframes fade-slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
- Duration: `0.8s`
- Easing: `ease-out`
- Staggered delays: `0.2s`, `0.4s`, `0.6s`, etc.

**Transitions:**
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Duration: `0.3s` for interactions
- `prefers-reduced-motion: reduce` support included

### Badges
- Inline-flex with `8px 20px` padding
- Background: `rgba(124, 58, 237, 0.1)`
- Border: `1px solid rgba(124, 58, 237, 0.2)`
- Border radius: `50px`
- Text: uppercase, purple, 0.85rem, 600 weight, 0.5px letter-spacing

---

## Page Structure

### Navigation
**Desktop (>810px):**
- Fixed header with background blur
- Horizontal nav with pill-shaped container
- Logo on left, nav center, CTA button on right
- Active page indicator with purple accent

**Mobile (<810px):**
- Hamburger menu icon
- Full-screen purple gradient overlay menu
- Animated menu items with staggered entrance
- Close button (hamburger transforms to X)

### Footer
- Dark background with wavy decorative elements
- Four columns: Brand, Navigation, Services, Contact, Social
- Responsive: stacks vertically on mobile
- Consistent link hover states

---

## Project Features

### Portfolio Page (portfolio.html)
- Hero section with badge, title, description, and illustration
- Project showcase with numbered cards (01, 02, 03...)
- Two-column layout: MacBook mockup image + details panel
- Project meta info (type, timeline, year)
- Tech stack badges
- Results/metrics highlight
- Three thumbnail images per project (lightbox on click)
- Testimonials section (3-column grid)
- Contact CTA section

### Services Page (servicii.html)
- Hero section with illustration
- Service sections for each offering:
  - **Landing Page** (Starting from €200)
  - **Corporate Website** (Starting from €399)
- Service layout: 
  - Left: "What You'll Get" characteristics list
  - Right: "Right For You If..." conditional list
- Overview section with description and testimonial
- FAQ accordion section
- CTA section with animated background

### Contact Page (contact.html)
- Full-screen split layout:
  - Left: Dark purple background, contact info (phone, email)
  - Right: White form panel
- Form fields: name, email, phone, source dropdown, message
- Formspree integration for form submission
- Mobile: stacks vertically

### Common Elements
- **Lightbox modal** for image viewing (portfolio thumbnails)
- **Mobile menu overlay** with purple gradient background
- **Navbar hide/show** on scroll behavior
- **Glass morphism effects** on cards and panels
- **Gradient text animations** for highlighted words

---

## Tech Stack & Approach

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Custom properties (CSS variables), Flexbox, Grid
- **Vanilla JavaScript** - No frameworks
- **Formspree** - Form handling on contact page

### Design Principles
1. **Mobile-first responsive design**
2. **Performance-focused** (minimal dependencies, optimized assets)
3. **Accessibility** (ARIA labels, semantic HTML, keyboard navigation)
4. **Glass morphism** aesthetic with backdrop-filter effects
5. **Smooth animations** with reduced-motion support
6. **Clean, maintainable code** architecture

### File Structure
```
Portfolio/
├── index.html
├── portfolio.html
├── servicii.html
├── contact.html
├── styles.css (main stylesheet)
├── mobile_menu.css (mobile navigation styles)
├── script.js (main JavaScript)
├── images/
│   ├── illustrations/ (SVG illustrations)
│   ├── avatars/ (testimonial photos)
│   └── [project screenshots and mockups]
└── CONTEXT.md (project documentation)
```

---

## Brand Voice & Messaging
- **Professional yet approachable**
- **Results-driven** (metrics like "+30% increase in leads")
- **Transparent pricing** ("Starting from €X")
- **Client-focused** language ("You'll get...", "Right for you if...")
- **Technical credibility** without jargon overload

---

## Key Design Details to Maintain

1. **Purple is the hero color** - use it sparingly for maximum impact
2. **White space matters** - generous padding and spacing throughout
3. **Consistent hover states** - translateY(-2px to -4px) + shadow increase
4. **Gradient text for emphasis** - use background-clip technique
5. **Rounded corners everywhere** - 12px to 20px for modern feel
6. **Box shadows are soft** - always use purple-tinted shadows with low opacity
7. **Typography hierarchy is strict** - Manrope for headings, Inter for body
8. **Animations are subtle** - 0.3s to 0.8s durations, ease-out curves
9. **Mobile menu is an experience** - full-screen gradient overlay with animations
10. **Cards float on hover** - always lift up with shadow increase

---

## Usage Instructions
When making changes or adding new features:
1. **Always use the existing color variables** from `:root` in styles.css
2. **Maintain the responsive breakpoint system** (480px, 640px, 768px, 1024px, 1440px)
3. **Follow the established animation patterns** (fade-slide-up, staggered delays)
4. **Keep the glass morphism aesthetic** (backdrop-filter, rgba backgrounds)
5. **Ensure mobile-first responsive design** (design for mobile, enhance for desktop)
6. **Add `prefers-reduced-motion` support** for all animations
7. **Use clamp() for responsive typography** to avoid manual breakpoint font sizes
8. **Maintain semantic HTML** and accessibility attributes

---

## Current Project Status
- ✅ All three main pages complete (Portfolio, Services, Contact)
- ✅ Responsive design across all breakpoints
- ✅ Mobile navigation working
- ✅ Lightbox functionality implemented
- ✅ Form integration with Formspree
- ✅ Testimonials sections
- ✅ FAQ accordion (Services page)
- ✅ Consistent footer across all pages

---

**Last Updated:** October 2025  
**Project Type:** Portfolio Website  
**Status:** Active Development
