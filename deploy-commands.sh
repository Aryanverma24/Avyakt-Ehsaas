# 🚀 Quick Deployment Commands

# 1. Set up environment variables
cp .env.example .env.local
cp server/.env.example server/.env

# Edit the .env files with your Stripe keys:
# Frontend: VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
# Backend: STRIPE_SECRET_KEY=sk_live_your_key_here

# 2. Push to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# 3. Deploy Frontend to Netlify
# Go to netlify.com → New Site → Import from Git → Connect GitHub
# Environment variables will be set automatically from .env.example

# 4. Deploy Backend to Railway
# Go to railway.app → New Project → Deploy from GitHub
# Add environment variables in Railway dashboard

# 5. Update API URL in frontend environment
# Set VITE_API_URL=https://your-backend.railway.app in Netlify dashboard

echo "✅ Deployment Complete!"
echo "Your site will be live at: https://your-site.netlify.app"
echo "Your API will be live at: https://your-backend.railway.app"
