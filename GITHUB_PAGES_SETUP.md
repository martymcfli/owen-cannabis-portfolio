# GitHub Pages Deployment Guide

This document contains instructions for deploying your cannabis portfolio website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- The project files (already set up and ready to deploy)

## Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name your repository (e.g., `cannabis-portfolio` or `owen-cannabis-portfolio`)
3. Choose **Private** (recommended for privacy)
4. Do NOT initialize with README (we already have one)
5. Click **Create repository**

## Step 2: Configure Vite for GitHub Pages

The project is already configured, but verify these settings in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/repository-name/', // Replace with your actual repo name
  // ... rest of config
})
```

If your repo is named `owen-cannabis-portfolio`, the base should be:
```typescript
base: '/owen-cannabis-portfolio/',
```

## Step 3: Build the Project

```bash
cd /home/ubuntu/owen-cannabis-portfolio
pnpm install
pnpm build
```

This creates a `dist/` folder with the production-ready files.

## Step 4: Push to GitHub

```bash
cd /home/ubuntu/owen-cannabis-portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Cannabis portfolio website"

# Add remote (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll to **Pages** section (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select branch: **main**
6. Select folder: **/ (root)**
7. Click **Save**

GitHub will automatically build and deploy your site. This takes 1-2 minutes.

## Step 6: Access Your Site

Your site will be available at:
```
https://USERNAME.github.io/REPO_NAME/
```

Example: `https://owenmccormick.github.io/owen-cannabis-portfolio/`

## Automatic Deployment with GitHub Actions (Optional but Recommended)

For automatic deployment on every push, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22'

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Save this file and push to GitHub. Future pushes will automatically deploy.

## Custom Domain (Optional)

To use a custom domain (e.g., `www.owenpmccormick.com`):

1. In GitHub Pages settings, enter your domain in "Custom domain"
2. Update your domain's DNS settings to point to GitHub Pages
3. GitHub will handle the SSL certificate automatically

## Troubleshooting

**Site not showing up?**
- Wait 2-3 minutes after enabling Pages
- Check that the branch and folder are correct in Settings
- Verify `vite.config.ts` has the correct `base` path

**Images not loading?**
- Ensure image URLs in code use the full CDN paths (not local paths)
- The generated images are already using CDN URLs

**Styles not applying?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check that `base` path in `vite.config.ts` matches your repo name

## Updating Your Site

To update your site after making changes:

```bash
# Make your changes to the code

# Commit and push
git add .
git commit -m "Update: [describe your changes]"
git push
```

If using GitHub Actions, the site will automatically rebuild and deploy. Otherwise, manually trigger the deployment in GitHub Pages settings.

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages) or [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html#github-pages).
