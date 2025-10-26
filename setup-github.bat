# GitHub Setup Script for Windows
# Save this as setup-github.bat and run it

@echo off
echo 🚀 Setting up GitHub for Meditation App
echo ======================================

echo.
echo Step 1: Initialize Git repository
git init

echo.
echo Step 2: Add all files to Git
git add .

echo.
echo Step 3: Create initial commit
git commit -m "Initial commit: Meditation app with payment system"

echo.
echo Step 4: Check remote origin
git remote -v

echo.
echo Step 5: Setup GitHub connection
echo Please create a new repository at https://github.com/new
echo Repository name: meditation-app
echo Make it public or private
echo DON'T initialize with README
echo.
pause

echo.
echo Step 6: Connect to GitHub (replace YOUR_USERNAME)
set /p username="Enter your GitHub username: "
git remote add origin https://github.com/%username%/meditation-app.git

echo.
echo Step 7: Push to GitHub
git branch -M main
git push -u origin main

echo.
echo ✅ Successfully pushed to GitHub!
echo.
echo 🌐 Next: Deploy to Netlify + Render
echo "================================"
echo.
echo "Frontend (Netlify):"
echo "1. Go to: https://netlify.com"
echo "2. Import from GitHub (select meditation-app repo)"
echo "3. Build settings auto-configured"
echo "4. Add environment variables in Netlify dashboard"
echo.
echo "Backend (Render):"
echo "1. Go to: https://render.com"
echo "2. New Web Service from GitHub"
echo "3. Root directory: server"
echo "4. Add environment variables in Render dashboard"
echo.
echo "Environment Variables:"
echo "Netlify: VITE_STRIPE_PUBLISHABLE_KEY=pk_test_..., VITE_API_URL=https://your-backend.onrender.com"
echo "Render: STRIPE_SECRET_KEY=sk_test_..., CLIENT_URL=https://your-site.netlify.app"
echo.
pause
