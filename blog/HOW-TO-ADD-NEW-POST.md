# How to Add a New Blog Post

## Quick Steps

### 1. Create the Article Page

1. **Copy the template:**
   - Copy `_template.html`
   - Rename it to your article slug (e.g., `landing-page-vs-corporate-website.html`)

2. **Replace all placeholders:**
   - `{{ARTICLE_TITLE}}` - Your article title
   - `{{ARTICLE_DESCRIPTION}}` - Meta description (150-160 characters)
   - `{{ARTICLE_SLUG}}` - URL-friendly name (e.g., `landing-page-vs-corporate`)
   - `{{ARTICLE_IMAGE}}` - Featured image filename
   - `{{CATEGORY}}` - Category badge (e.g., "Design", "SEO", "Prețuri")
   - `{{PUBLISH_DATE}}` - ISO format: `2025-01-15T10:00:00+02:00`
   - `{{PUBLISH_DATE_READABLE}}` - Human format: `15 Ianuarie 2025`
   - `{{MODIFIED_DATE}}` - Same as publish date initially
   - `{{READ_TIME}}` - Estimated minutes (e.g., "8")

3. **Write your content:**
   - Replace the placeholder content sections
   - Use proper HTML structure: `<h2>`, `<h3>`, `<p>`, `<ul>`, `<ol>`
   - Add images with `<figure class="article-image">` wrapper
   - Keep paragraphs concise and scannable

### 2. Add Card to Blog Listing Page

1. **Open `blog/index.html`**

2. **Copy this blog card template:**

```html
<article class="blog-card">
  <a href="your-article-slug.html" class="blog-card-link">
    <div class="blog-card-image">
      <img src="../images/your-image.svg" alt="Article title" />
      <span class="blog-category">Category</span>
    </div>
    <div class="blog-card-content">
      <div class="blog-card-meta">
        <time datetime="2025-01-15">15 Ianuarie 2025</time>
        <span class="blog-card-divider">•</span>
        <span class="blog-card-read-time">8 min citire</span>
      </div>
      <h2 class="blog-card-title">Your Article Title</h2>
      <p class="blog-card-excerpt">
        Brief excerpt of your article (2-3 sentences max).
      </p>
      <span class="blog-card-cta">
        Citește articolul
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
  </a>
</article>
```

3. **Paste it inside `<div class="blog-posts-grid">` section**

4. **Update the card details** with your article info

### 3. SEO Checklist

Before publishing, make sure you have:

- ✅ Unique, descriptive title (50-60 characters)
- ✅ Meta description (150-160 characters)
- ✅ Canonical URL set correctly
- ✅ Open Graph tags filled
- ✅ Schema.org markup updated
- ✅ Alt text for all images
- ✅ Internal links to your Services/Portfolio pages
- ✅ H2/H3 headings with keywords
- ✅ 1,500+ words for better SEO

### 4. Update Sitemap (Optional but Recommended)

Add your new blog post URL to `sitemap.xml`:

```xml
<url>
  <loc>https://maxstudioweb.com/blog/your-article-slug.html</loc>
  <lastmod>2025-01-15</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

---

## Content Writing Tips

### Structure Your Article

1. **Introduction** (2-3 paragraphs)
   - Hook the reader
   - State the problem
   - Promise the solution

2. **Main Content** (5-8 sections)
   - Use H2 for main sections
   - Use H3 for subsections
   - Include bullet points and lists
   - Add images/diagrams

3. **Conclusion** (2-3 paragraphs)
   - Summarize key points
   - Call to action
   - Link to your services

### SEO Best Practices

- **Target one main keyword** per article
- **Use keyword in:**
  - Title
  - First paragraph
  - At least one H2 heading
  - Meta description
  - Image alt text
  - URL slug

- **Internal linking:**
  - Link to 2-3 other pages on your site
  - Link to relevant blog posts
  - Use descriptive anchor text

- **External linking:**
  - Link to authoritative sources
  - Open in new tab (`target="_blank"`)

### Writing Style

- **Short paragraphs** (2-4 sentences max)
- **Active voice** over passive
- **Conversational tone** (use "you", "your")
- **Bullet points** for lists
- **Bold** important points
- **Examples** and case studies
- **Numbers** in titles ("10 Tips", "5 Reasons")

---

## Example Article Ideas for MaxStudio

### High-Value Topics (Moldova-focused)

1. **"Cât costă un site web în Moldova? Ghid complet 2025"** ✅ (Already created)
2. "Landing Page vs Site Corporativ: Care este diferența?"
3. "10 Greșeli comune în design-ul site-urilor din Moldova"
4. "Cum să alegi un dezvoltator web în Chișinău"
5. "SEO local pentru afaceri din Moldova: Ghid complet"
6. "De ce viteza site-ului tău contează pentru SEO"
7. "Cum să crești conversiile pe site-ul tău cu 30%"
8. "Glass Morphism: Trend-ul de design din 2025"
9. "Mobile-First Design: De ce contează pentru afacerea ta"
10. "Cum să măsori succesul site-ului tău web"

### Content Calendar Suggestion

- **Week 1:** Pricing/Business topic
- **Week 2:** Design/UX topic
- **Week 3:** SEO/Technical topic
- **Week 4:** Case study or client success story

---

## Need Help?

If you get stuck:
1. Look at `sample-article.html` for reference
2. Copy the exact structure
3. Just replace the content
4. Keep the HTML tags the same

**Time per post:** ~30-60 minutes (including writing)

---

## Quick Reference: File Locations

```
/blog/
  ├── index.html              (Blog listing page)
  ├── _template.html          (Copy this for new posts)
  ├── sample-article.html     (Example article)
  ├── your-new-article.html   (Your new posts)
  └── HOW-TO-ADD-NEW-POST.md  (This file)
```

---

**Pro Tip:** Write your article content in a Google Doc first, then paste it into the HTML template. This makes editing easier!
