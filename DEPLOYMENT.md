# GitHub Pages Deployment Guide

Deploy your Ahmed Hussain Portfolio to GitHub Pages for 24/7 hosting.

## Prerequisites

- Git installed
- GitHub account
- Node.js (v18+)

## Deployment Steps

### 1. Initialize Git Repository

```bash
cd c:\Users\abrar\Downloads\Portfiolio
git init
git add .
git commit -m "Initial commit: Ahmed Hussain Portfolio"
```

### 2. Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named **Portfiolio** (must match the base path)
3. **DO NOT** initialize with README

### 3. Connect Remote & Push

```bash
git remote add origin https://github.com/YOUR_USERNAME/Portfiolio.git
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` then `gh-pages -d dist`, pushing to `gh-pages` branch.

### 5. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **(root)**
3. Click **Save**

### 6. Access Your Portfolio

Your portfolio will be live at:

```
https://YOUR_USERNAME.github.io/Portfiolio/
```

## Updating the Site

After making changes:

```bash
git add .
git commit -m "Update: description of changes"
git push
npm run deploy
```

## Troubleshooting

| Issue          | Solution                                                                    |
| -------------- | --------------------------------------------------------------------------- |
| 404 on refresh | Normal for SPAs on GitHub Pages. Homepage works fine.                       |
| Blank page     | Check browser console. Ensure `base` in `vite.config.js` matches repo name. |
| Styles missing | Run clean build: `rm -rf dist && npm run build`                             |

## Custom Domain (Optional)

1. Add `CNAME` file in `public/` folder with your domain (e.g., `ahmed.dev`)
2. Configure DNS to point to GitHub Pages
3. Enable HTTPS in repository settings

---

**Your portfolio is now live 24/7!** 🎉
