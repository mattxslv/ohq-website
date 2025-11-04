# Deployment Guide for OHQ Website

## ✅ Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `ohq-website`
3. Description: `Once HQ - TWICE fan community website in the Philippines`
4. Choose **Public**
5. **DO NOT** check "Initialize with README" (we already have one)
6. Click **Create repository**

## ✅ Step 2: Push Code to GitHub

After creating the repository, run these commands in your terminal:

```powershell
cd c:\Users\Matthew\Documents\GitHub\ohq

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ohq-website.git

# Rename branch to main
git branch -M main

# Push your code
git push -u origin main
```

## ✅ Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com
2. Click **Sign Up** or **Log In** with GitHub
3. Click **Add New...** → **Project**
4. Click **Import** next to your `ohq-website` repository
5. Vercel will auto-detect Next.js settings:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click **Deploy**
7. Wait 1-2 minutes for deployment to complete
8. Your site will be live at: `https://ohq-website.vercel.app` (or similar)

### Option B: Deploy via Vercel CLI

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## 🎉 Your Website is Live!

After deployment, you'll get:
- ✅ Live URL (e.g., `https://ohq-website.vercel.app`)
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN for fast loading
- ✅ Automatic deployments on every git push
- ✅ Preview deployments for pull requests

## 🔄 Making Updates

Every time you push to GitHub, Vercel will automatically deploy your changes:

```powershell
git add .
git commit -m "Your update message"
git push
```

## 📝 Optional: Custom Domain

To add a custom domain (e.g., oncehq.com):

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Domains**
3. Add your domain
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (5-60 minutes)

## 🆘 Troubleshooting

### Build fails on Vercel?
- Check the build logs in Vercel Dashboard
- Make sure all dependencies are in `package.json`
- Test locally with `npm run build`

### Images not loading?
- Make sure images are in the `public/` folder
- Use `/image.png` not `./image.png` in your code

### Changes not showing?
- Clear your browser cache
- Check if deployment succeeded in Vercel Dashboard
- Make sure you pushed to the correct branch

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create an issue in your repository
