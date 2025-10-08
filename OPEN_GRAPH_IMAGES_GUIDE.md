# 🖼️ Open Graph Images Creation Guide

## 📐 **Image Specifications**

### Required Dimensions
- **Size**: 1200 x 630 pixels (1.91:1 aspect ratio)
- **Format**: JPG or PNG
- **File Size**: < 300 KB (for fast loading)
- **Color Space**: RGB

---

## 🎨 **Design Recommendations**

### Visual Elements to Include:
1. **Logo**: SumateraWay logo (top-left or center)
2. **Hero Image**: Beach, surf, or Mentawai landscape
3. **Text Overlay**: 
   - Main heading (40-60px)
   - Subheading (24-32px)
4. **Branding Colors**: Use your ocean-inspired palette
   - Primary: `#0EA5E9` (sky blue)
   - Secondary: `#10B981` (emerald green)
   - Background: Light gray or white

### Design Tips:
- Keep text in the center 1000x500px "safe zone"
- Use high contrast for readability
- Avoid placing important elements at edges
- Include subtle wave or tropical patterns
- Use professional, high-quality images

---

## 🛠️ **Tools to Create OG Images**

### Option 1: **Canva (Easiest - Recommended)** ✅
**Free & User-Friendly**

1. Go to: https://www.canva.com
2. Create account (free)
3. Search template: "Facebook Post" or create custom size (1200x630px)
4. Design your image:
   - Add background image (beach/surf)
   - Add SumateraWay logo
   - Add text: "Plan Your West Sumatra Adventure"
   - Add subtitle: "Surf • Culture • Nature"
5. Download as PNG or JPG
6. Optimize at: https://tinypng.com

**Canva Template Ideas:**
- Travel/Tourism templates
- Beach vacation themes
- Adventure tour designs

---

### Option 2: **Figma (Professional)** 🎨
**Free for personal use**

1. Go to: https://www.figma.com
2. Create 1200x630px frame
3. Import assets:
   - Beach/surf photos from Unsplash
   - Your logo
4. Design with layers
5. Export as PNG 2x

**Figma Benefits:**
- Reusable components
- Team collaboration
- Version control

---

### Option 3: **Photoshop / GIMP** 🖌️
**For experienced designers**

1. Create 1200x630px canvas
2. Import background image
3. Add text layers with effects
4. Add logo overlay
5. Export for web (Save as PNG-24)

---

### Option 4: **Online OG Image Generators** ⚡
**Quick & Automated**

**A. Bannerbear**: https://www.bannerbear.com/tools/social-media-image-generator/
- Upload images
- Add text
- Download instantly

**B. Placid**: https://placid.app/tools/og-image-generator
- Template-based
- Fast generation

**C. Social Image Generator**: https://www.bannerbear.com
- Free tier available
- API for automation

---

## 📝 **Content Suggestions for Each Page**

### 1. **Homepage OG Image**
```
Main Text: "Discover West Sumatra"
Subtitle: "Surf • Culture • Adventure"
Background: Beach sunset or surfer
Logo: Top-left corner
```

### 2. **Experiences Page**
```
Main Text: "Adventure Experiences"
Subtitle: "Surf Charters • Cultural Tours • Wellness"
Background: Action surf shot
Logo: Top-left
```

### 3. **Stays Page**
```
Main Text: "Eco-Friendly Accommodations"
Subtitle: "Beach Resorts • Surf Camps • Luxury Villas"
Background: Resort or beachfront villa
Logo: Top-left
```

### 4. **Mentawai Destination**
```
Main Text: "Mentawai Islands"
Subtitle: "World-Class Surf Breaks"
Background: Mentawai waves
Logo: Top-left
```

### 5. **Padang Destination**
```
Main Text: "Padang Culture"
Subtitle: "Authentic Minangkabau Heritage"
Background: Traditional food or architecture
Logo: Top-left
```

### 6. **Bukittinggi Destination**
```
Main Text: "Bukittinggi Highlands"
Subtitle: "Mountain Adventures • Traditional Villages"
Background: Mountain landscape
Logo: Top-left
```

---

## 🖼️ **Where to Get Images**

### Free Stock Photos (Commercial Use):
1. **Unsplash**: https://unsplash.com
   - Search: "indonesia beach", "surfing", "tropical"
   
2. **Pexels**: https://www.pexels.com
   - Search: "mentawai", "west sumatra", "surf"

3. **Pixabay**: https://pixabay.com
   - High-quality, free images

### Paid Stock Photos (Higher Quality):
1. **Shutterstock**: https://www.shutterstock.com
2. **Adobe Stock**: https://stock.adobe.com
3. **Getty Images**: https://www.gettyimages.com

---

## 📁 **File Naming Convention**

Save your OG images with clear names:

```
og-image-home.jpg          (Homepage)
og-image-experiences.jpg   (Experiences page)
og-image-stays.jpg         (Stays page)
og-image-mentawai.jpg      (Mentawai destination)
og-image-padang.jpg        (Padang destination)
og-image-bukittinggi.jpg   (Bukittinggi destination)
og-image-itineraries.jpg   (Itineraries page)
og-image-trip-planner.jpg  (Trip planner)
```

---

## 📂 **Where to Place Files**

Place all OG images in:
```
/public/images/og/
```

Then update your metadata in each page:

**Example for Homepage** (`src/app/page.tsx`):
```typescript
export const metadata: Metadata = {
  openGraph: {
    images: ['/images/og/og-image-home.jpg'],
  },
};
```

---

## ✅ **Quality Checklist**

Before uploading, verify:

- [ ] Dimensions are exactly 1200x630px
- [ ] File size is under 300 KB
- [ ] Text is readable on mobile preview
- [ ] Logo is visible and clear
- [ ] Colors match brand identity
- [ ] No important text near edges
- [ ] Image looks good in preview
- [ ] File name is descriptive

---

## 🧪 **Testing OG Images**

### Test your images before deploying:

1. **Facebook Debugger**:
   - URL: https://developers.facebook.com/tools/debug/
   - Enter your URL
   - Click "Scrape Again"
   - Preview how it looks

2. **Twitter Card Validator**:
   - URL: https://cards-dev.twitter.com/validator
   - Enter your URL
   - See preview

3. **LinkedIn Post Inspector**:
   - URL: https://www.linkedin.com/post-inspector/
   - Check how LinkedIn displays it

4. **OpenGraph.xyz**:
   - URL: https://www.opengraph.xyz
   - Quick preview tool

---

## 🎯 **Quick Start (15 Minutes)**

### Fastest Method Using Canva:

1. **Go to Canva**: https://www.canva.com
2. **Search**: "Facebook Post" template
3. **Resize**: 1200 x 630 px (custom size)
4. **Choose**: Travel/beach template
5. **Replace**: Text with your content
6. **Add**: SumateraWay logo (if you have it)
7. **Download**: As PNG
8. **Optimize**: Upload to https://tinypng.com
9. **Save**: To `/public/images/og/`
10. **Update**: Metadata in code

**Time**: ~15 minutes per image
**Cost**: Free
**Quality**: Professional

---

## 💡 **Pro Tips**

1. **Consistency**: Use same font, colors across all OG images
2. **Branding**: Always include logo
3. **Contrast**: Dark text on light background (or vice versa)
4. **Focus**: One main message per image
5. **Mobile-First**: Test on mobile preview
6. **Localization**: Create versions for different languages (optional)
7. **A/B Testing**: Try different designs, monitor click-through rates

---

## 🔄 **Future Automation (Optional)**

For dynamic OG images (auto-generated):

1. **Vercel OG Image Generation**: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation
2. **Cloudinary**: Automated image generation
3. **API-based**: Use services like Bannerbear API

---

## 📞 **Need Help?

If you want professional OG images designed:

1. **Fiverr**: https://www.fiverr.com (search "og image design")
   - Cost: $5-50 per image
   
2. **Upwork**: https://www.upwork.com
   - Hire designer for full set

3. **99designs**: https://99designs.com
   - Design contests

---

## 📊 **Expected Impact**

After adding OG images:

✅ **Click-through rates**: +20-40% on social media  
✅ **Social shares**: Increased by 2-3x  
✅ **Brand recognition**: Professional appearance  
✅ **Engagement**: Higher interaction rates  

---

**Priority**: Medium (improves social sharing but not critical for SEO)  
**Time Investment**: 1-2 hours for full set  
**Cost**: Free (using Canva) to $50 (hiring designer)

---

*Generated: October 8, 2025*  
*For: SumateraWay Tourism Website*

