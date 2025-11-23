# Deployment Guide for Wood Valley Landing Page

## 🚀 Quick Deploy to Cloudflare Pages

### Prerequisites
- A Cloudflare account (free tier works)
- Git repository pushed to GitHub/GitLab (already done!)
- Node.js 18+ installed locally for development

---

## Option 1: Git Integration (Recommended)

This is the easiest and most maintainable way to deploy.

### Steps:

1. **Log in to Cloudflare**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to **Pages** in the left sidebar

2. **Create a New Project**
   - Click **"Create a project"**
   - Select **"Connect to Git"**

3. **Connect Your Repository**
   - Choose GitHub or GitLab
   - Authorize Cloudflare to access your repositories
   - Select the `woodvalley` repository
   - Select the branch: `claude/project-plan-blueprint-011totQkuw7TpZiqaeqrkMT2`

4. **Configure Build Settings**
   ```
   Project name: woodvalley
   Production branch: claude/project-plan-blueprint-011totQkuw7TpZiqaeqrkMT2
   Build command: cd woodvalley-react && npm install && npm run build
   Build output directory: woodvalley-react/dist
   Root directory: /
   ```

5. **Environment Variables** (Optional)
   - No environment variables are required for the basic setup
   - Add later if you integrate analytics or APIs

6. **Deploy**
   - Click **"Save and Deploy"**
   - Wait 2-3 minutes for the first build
   - Your site will be live at: `https://woodvalley-xxx.pages.dev`

7. **Custom Domain** (Optional)
   - Go to **Custom domains** tab
   - Click **"Set up a custom domain"**
   - Follow the DNS configuration instructions

---

## Option 2: Direct Upload via Wrangler CLI

Use this method for quick one-time deployments or if you don't want Git integration.

### Steps:

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```
   This will open a browser window to authenticate.

3. **Build the Project**
   ```bash
   cd woodvalley-react
   npm install
   npm run build
   ```

4. **Deploy to Cloudflare Pages**
   ```bash
   wrangler pages deploy dist --project-name=woodvalley
   ```

5. **Follow the Prompts**
   - If it's your first deployment, it will ask you to confirm the project name
   - The site will be deployed and you'll get a URL

6. **Subsequent Deployments**
   ```bash
   # Just rebuild and redeploy
   npm run build
   wrangler pages deploy dist --project-name=woodvalley
   ```

---

## Option 3: Drag & Drop (No Code Required)

Perfect for non-technical team members.

### Steps:

1. **Build Locally**
   - Ask a developer to run:
     ```bash
     cd woodvalley-react
     npm run build
     ```
   - This creates a `dist` folder with all production files

2. **Upload to Cloudflare**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to **Pages**
   - Click **"Upload assets"**
   - Drag the entire `dist` folder into the upload area
   - Wait for upload to complete
   - Your site is now live!

---

## 🔒 Production Checklist

Before going live with a custom domain, verify:

- [ ] All images load correctly
- [ ] Contact form behavior is as expected (currently static)
- [ ] Mobile responsiveness on real devices
- [ ] Google Fonts load properly
- [ ] All links work (especially navigation)
- [ ] SSL certificate is active (automatic with Cloudflare)
- [ ] Custom domain DNS is configured

---

## 📊 Performance Optimization Tips

Your site is already optimized, but here are some additional tips:

1. **Enable Cloudflare CDN Features**
   - Auto Minify (HTML, CSS, JS)
   - Brotli compression
   - HTTP/2 & HTTP/3

2. **Image Optimization**
   - Replace placeholder URLs with optimized images
   - Use WebP format for better compression
   - Lazy load images below the fold

3. **Analytics** (Optional)
   - Enable Cloudflare Web Analytics (privacy-friendly)
   - Or integrate Google Analytics

---

## 🔄 Continuous Deployment

If you used **Option 1 (Git Integration)**:

- Every push to your branch automatically triggers a new deployment
- Preview deployments are created for pull requests
- Rollback to previous versions in one click

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Check Node.js version
node --version  # Should be 18 or higher

# Clear cache and reinstall
cd woodvalley-react
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 Errors on Page Refresh
- Make sure `public/_redirects` file exists with content: `/* /index.html 200`
- This file is already included in the project

### Fonts Not Loading
- Check browser console for CORS errors
- Ensure Google Fonts links in `index.html` are correct
- Cloudflare automatically handles font optimization

### Build Output Directory Not Found
- Ensure build command includes: `cd woodvalley-react && npm run build`
- Output directory should be: `woodvalley-react/dist`

---

## 📞 Support

For deployment issues:
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages
- Community Discord: https://discord.gg/cloudflaredev

For project-specific issues:
- Contact: export@woodvalley.com

---

## 🎯 Next Steps After Deployment

1. **Test on Multiple Devices**
   - Mobile phones (iOS & Android)
   - Tablets
   - Different browsers

2. **Integrate Contact Form**
   - Current form is static
   - Consider: Formspree, Basin, or Cloudflare Workers

3. **Add Analytics**
   - Cloudflare Web Analytics (recommended)
   - Google Analytics
   - Plausible Analytics

4. **SEO Optimization**
   - Submit sitemap to Google Search Console
   - Add Open Graph meta tags
   - Create robots.txt

5. **Content Updates**
   - Replace placeholder images with real product photos
   - Update contact information
   - Add real testimonials

---

**Your site is now ready for the world! 🎉**

Built with modern technology and deployed on the Cloudflare edge network for maximum speed and reliability.
