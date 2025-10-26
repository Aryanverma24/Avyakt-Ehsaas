#!/bin/bash

echo "🚀 Meditation App - Deployment Setup Script"
echo "=========================================="

# Check if user has GitHub repository
echo ""
echo "📋 Pre-deployment Checklist:"
echo "-----------------------------"

echo "1. ✅ Create/update GitHub repository"
echo "   - Push all your code to GitHub"
echo "   - Make sure repository is public or connected to deployment platform"

echo ""
echo "2. ✅ Get Stripe Live Keys"
echo "   - Go to Stripe Dashboard > Developers > API keys"
echo "   - Copy pk_live_... and sk_live_... keys"
echo "   - Replace test keys in production"

echo ""
echo "🔗 Deployment Options:"
echo "---------------------"

echo "🌐 Option 1: Netlify + Railway (Recommended)"
echo "   • Frontend: Netlify (Free, great for React)"
echo "   • Backend: Railway (Free tier available)"
echo "   • Total: Free to start"
echo ""

echo "⚡ Option 2: Vercel + Render"
echo "   • Frontend: Vercel (Free, excellent performance)"
echo "   • Backend: Render (Free tier available)"
echo "   • Total: Free to start"
echo ""

echo "🔄 Option 3: Heroku (Full Stack)"
echo "   • Deploy everything to Heroku"
echo "   • Simpler but limited free tier"
echo ""

echo ""
echo "📝 Quick Setup Commands:"
echo "-----------------------"

echo "1. Create .env.local file:"
echo "   cp .env.example .env.local"
echo "   # Edit .env.local with your keys"

echo ""
echo "2. Create server/.env file:"
echo "   cp server/.env.example server/.env"
echo "   # Edit server/.env with your keys"

echo ""
echo "3. Test locally first:"
echo "   # Terminal 1: cd server && npm run dev"
echo "   # Terminal 2: npm run dev"
echo "   # Visit: http://localhost:5173"

echo ""
echo "🚀 Deploy Frontend (Netlify):"
echo "-----------------------------"
echo "1. Go to: https://netlify.com"
echo "2. Click 'Add new site' > 'Import from Git'"
echo "3. Connect your GitHub repo"
echo "4. Build settings are pre-configured"
echo "5. Add environment variables in Netlify dashboard"

echo ""
echo "🚀 Deploy Backend (Railway):"
echo "----------------------------"
echo "1. Go to: https://railway.app"
echo "2. Click 'Deploy' > 'GitHub Repo'"
echo "3. Connect your repository"
echo "4. Add environment variables in Railway dashboard"
echo "5. Railway will auto-deploy!"

echo ""
echo "🔧 Environment Variables to Set:"
echo "-------------------------------"

echo "Netlify (Frontend):"
echo "   VITE_STRIPE_PUBLISHABLE_KEY=pk_live_..."
echo "   VITE_API_URL=https://your-backend.railway.app"

echo ""
echo "Railway (Backend):"
echo "   STRIPE_SECRET_KEY=sk_live_..."
echo "   CLIENT_URL=https://your-site.netlify.app"
echo "   PORT=8080"
echo "   NODE_ENV=production"

echo ""
echo "✅ Post-deployment Testing:"
echo "---------------------------"

echo "1. Test payment flow with real cards"
echo "2. Verify hash navigation works (#faq, #programs)"
echo "3. Check mobile responsiveness"
echo "4. Test success/cancel redirects"

echo ""
echo "🔗 Useful Links:"
echo "---------------"
echo "• Netlify: https://netlify.com"
echo "• Railway: https://railway.app"
echo "• Vercel: https://vercel.com"
echo "• Render: https://render.com"
echo "• Stripe Dashboard: https://dashboard.stripe.com"

echo ""
echo "💡 Pro Tips:"
echo "-----------"
echo "• Start with test keys, switch to live keys when ready"
echo "• Set up custom domain for professional look"
echo "• Monitor logs in deployment dashboard"
echo "• Set up error tracking (Sentry recommended)"

echo ""
echo "🎉 Ready to Deploy!"
echo "Your meditation app is configured for production deployment."
echo "Follow the steps above and you'll have a live website in minutes!"
