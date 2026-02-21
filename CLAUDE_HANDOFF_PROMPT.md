# Claude Handoff Prompt: Cannabis Portfolio Website Customization

Use this prompt when handing off to Claude to complete the content customization and finalize the website.

---

## HANDOFF PROMPT FOR CLAUDE

I have a cannabis industry portfolio website built with React, TypeScript, Tailwind CSS, and Vite. The framework is complete with all pages and sections set up. Now I need you to customize the content, add real information, and prepare it for GitHub Pages deployment.

### Project Overview

**Tech Stack:**
- React 18 with TypeScript
- Tailwind CSS 4 with emerald green theme
- Vite for build/dev
- Wouter for routing
- Responsive design (mobile, tablet, desktop)

**Project Location:** `/home/ubuntu/owen-cannabis-portfolio`

**Design Philosophy:** Modern Lifestyle Brand Aesthetic
- Emerald green (#10b981) accent color
- Montserrat (headlines) + Poppins (body) typography
- Full-bleed image galleries
- Professional yet creative aesthetic

### Pages to Customize

#### 1. **Home Page** (`/client/src/pages/HomeExpanded.tsx`)
Currently shows placeholder content. Customize:
- [ ] Hero section copy (already good, can refine)
- [ ] Trail Hazers section (update with real details if needed)
- [ ] Testimonials section - Replace placeholder quotes with real testimonials from:
  - Wholesale partners/accounts
  - Customers
  - Other business contacts
- [ ] Growth Timeline - Verify dates and milestones are accurate
- [ ] Skills Matrix - Ensure all skills listed are accurate
- [ ] Professional Experience section - Already populated from resume

#### 2. **Blog Page** (`/client/src/pages/Blog.tsx`)
8 blog post titles are set up with "Coming Soon" status. Write full articles for:

1. **"Word of Mouth Over Ads: How Trail Hazers Built 40+ Wholesale Accounts"** (8 min read)
   - How direct relationships replaced traditional advertising
   - Cold-walking strategy and relationship building
   - Key metrics and results

2. **"Building Brand Differentiation in a Regulated Market"** (10 min read)
   - How to stand out when everyone sells the same product
   - Experience vs. product as differentiation
   - Compliance as competitive advantage

3. **"Bootstrapping to $2.56M: What Worked and What Didn't"** (12 min read)
   - No VC capital = forced focus and efficiency
   - What worked: systems, relationships, compliance
   - What didn't: scaling too fast, poor hiring timing, cash flow mistakes

4. **"The Art of Networking: Building Real Relationships in Cannabis"** (9 min read)
   - Networking philosophy and approach
   - Genuine connection vs. transactional relationships
   - Long-term relationship building strategies

5. **"Compliance as Competitive Advantage"** (7 min read)
   - How regulations became a moat
   - Building trust through compliance expertise
   - Market differentiation through rule-following

6. **"Systems That Scale: Building Infrastructure for Growth"** (11 min read)
   - Custom booking system case study
   - How systems enable scaling without capital
   - Building processes that matter

7. **"When to Hold and When to Fold: Knowing When to Exit"** (8 min read)
   - Recognizing when it's time to sell
   - Executing a clean exit
   - Maturity in business decisions

8. **"Lessons from the Cannabis Industry That Apply Everywhere"** (10 min read)
   - Resilience in regulated markets
   - Relationship-building fundamentals
   - Adaptability and market understanding

**Instructions for Blog Posts:**
- Write in first person (Owen's voice)
- Natural, conversational tone (avoid corporate jargon)
- Include specific examples and anecdotes
- Share both successes and failures
- Actionable insights readers can apply
- 800-1200 words per article
- Update the `date` field in Blog.tsx from "Coming Soon" to actual dates

#### 3. **Resume Page** (`/client/src/pages/Resume.tsx`)
Already populated from your CV. Verify:
- [ ] All information is accurate and current
- [ ] Dates are correct
- [ ] Descriptions reflect your actual experience
- [ ] Add a real "Download PDF" button that links to a PDF version of your resume

#### 4. **Showcase Page** (`/client/src/pages/Showcase.tsx`)
Media gallery with placeholders. Add your content:
- [ ] Replace video placeholders with actual video URLs (YouTube, Vimeo, etc.)
- [ ] Add real descriptions for each commercial/advert
- [ ] Add image URLs for product photography
- [ ] Update media item titles with real content names
- [ ] Organize by category (Commercial, Campaign, Documentary, Photography)

**Current Placeholders:**
- 4 video items (commercials, brand content, behind-the-scenes, documentary)
- 2 image items (product photography, lifestyle content)
- 2 additional video items

Replace with your actual content or create hypothetical ones with realistic descriptions.

#### 5. **About Page** (`/client/src/pages/About.tsx`)
Personal bio and philosophy page. Customize:
- [ ] Update the "Who I Am" section with your personal story
- [ ] Verify core values section resonates with your philosophy
- [ ] Update "Building Trail Hazers" lessons section with real insights
- [ ] Add your actual photo (replace placeholder in "Photo Placeholder" div)
- [ ] Update "Beyond Business" section with your real interests
- [ ] Add real social media links (LinkedIn, Instagram, Twitter, Spotify, SoundCloud, etc.)
- [ ] Update personal interests list with your actual hobbies and interests

### Content to Add

#### Testimonials (for Home Page)
Add 3 real testimonials from:
- Wholesale partners/accounts
- Customers
- Business contacts

Format:
```
"[Quote about Owen's work]"
[Name]
[Title/Role]
```

Example:
```
"Owen's understanding of the cannabis market and ability to build real relationships is unmatched. Trail Hazers was a game-changer."
John Smith
Wholesale Account Partner
```

#### Press & Media Mentions
If Trail Hazers was featured in any publications, podcasts, or industry reports, add them to the Home page's "Press & Media Mentions" section. If not, create hypothetical but realistic ones:
- Industry publication article
- Podcast interview
- Industry report featuring Trail Hazers as case study

#### Network & Partnerships Stats
Update the stats in Home page's "Network & Partnerships" section:
- 40+ Wholesale Accounts (verify this is accurate)
- 15+ Strategic Partners (update if different)
- 5+ Tech Startups Advised (update if different)
- Active Industry Network (keep as is or customize)

#### Personal Photos
Add real photos to:
- About page hero section (your photo)
- About page interests section (3 photos for Music, Creative Direction, Travel)
- Home page (optional, if you want to add personal touch)

**Photo Placeholders to Replace:**
- `/client/src/pages/About.tsx` - "Photo Placeholder" in "Who I Am" section
- `/client/src/pages/About.tsx` - 3 photos in "Beyond Business" section
- `/client/src/pages/HomeExpanded.tsx` - Optional personal touches

### Technical Tasks

#### 1. Update Vite Configuration
In `vite.config.ts`, set the correct base path for GitHub Pages:
```typescript
base: '/your-repo-name/',
```

Example: If repo is `owen-cannabis-portfolio`, use:
```typescript
base: '/owen-cannabis-portfolio/',
```

#### 2. Add Resume PDF Download
- Create a PDF version of your resume
- Upload it to the project or a CDN
- Update the "Download PDF" button in `/client/src/pages/Resume.tsx` to link to it

#### 3. Update Social Links
In `/client/src/pages/About.tsx`, update the social media buttons to link to your real profiles:
- LinkedIn
- Email
- Instagram
- Twitter
- Spotify
- SoundCloud

#### 4. Verify All Image URLs
Ensure all image URLs are using the full CDN paths (not local paths):
- Hero images in HomeExpanded.tsx (already using CDN URLs)
- Any new images you add should use CDN URLs or be uploaded to a CDN first

#### 5. Update Navigation Links
Verify all navigation links work correctly:
- Home page links to all sections
- Navigation menu links to all pages
- Footer links are functional

### Optional Enhancements

- [ ] Add a contact form (requires backend or third-party service like Formspree)
- [ ] Add Google Analytics tracking
- [ ] Add social media share buttons on blog posts
- [ ] Add a newsletter signup
- [ ] Add a testimonials carousel/slider
- [ ] Add a case study page with detailed Trail Hazers breakdown
- [ ] Add a "Press Kit" download
- [ ] Add video embeds for commercials instead of just placeholders

### Deployment Checklist

Before deploying to GitHub Pages:
- [ ] All blog posts are written and published
- [ ] All media items have real content or realistic placeholders
- [ ] Personal photos are added
- [ ] Social links are updated
- [ ] Testimonials are real or realistic
- [ ] Resume PDF is linked
- [ ] Vite config has correct base path
- [ ] No broken links or missing images
- [ ] Mobile responsive design is tested
- [ ] All pages load without errors

### How to Test Locally

```bash
cd /home/ubuntu/owen-cannabis-portfolio
pnpm install
pnpm dev
```

Then visit `http://localhost:3000` (or whatever port Vite assigns) to preview.

### How to Deploy to GitHub Pages

See `GITHUB_PAGES_SETUP.md` in the project root for detailed deployment instructions.

### File Structure Reference

```
/client/src/
├── pages/
│   ├── HomeExpanded.tsx (main home page with all sections)
│   ├── About.tsx (bio and personal page)
│   ├── Blog.tsx (blog listing page)
│   ├── Resume.tsx (resume page)
│   ├── Showcase.tsx (media gallery)
│   └── NotFound.tsx
├── App.tsx (router)
├── index.css (Tailwind config with emerald theme)
├── main.tsx (entry point)
└── components/ (UI components)

/client/
├── index.html (main HTML file)
├── public/ (static assets)
└── vite.config.ts

/
├── GITHUB_PAGES_SETUP.md (deployment guide)
├── CLAUDE_HANDOFF_PROMPT.md (this file)
├── package.json
└── pnpm-lock.yaml
```

### Design Notes

- **Color Scheme**: Emerald green (#10b981) as primary accent
- **Typography**: Montserrat for headlines, Poppins for body text
- **Layout**: Modern lifestyle brand aesthetic with full-bleed sections
- **Responsive**: Mobile-first design that works on all devices
- **Theme**: Light mode by default (can be toggled in App.tsx if needed)

### Questions or Issues?

If you encounter any issues:
1. Check the browser console for errors
2. Verify all image URLs are correct
3. Ensure all file paths are correct
4. Check that dependencies are installed (`pnpm install`)
5. Clear browser cache and restart dev server

---

**This website is designed to showcase Owen's authentic cannabis industry experience and position him as a credible, professional candidate for cannabis industry roles. The content should reflect genuine experience, lessons learned, and authentic voice.**

