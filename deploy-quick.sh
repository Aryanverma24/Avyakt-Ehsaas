# 🚀 Quick Deployment Commands for Render + Netlify

echo "🎯 Deploy Meditation App to Render + Netlify"
echo "============================================="

# 1. Set up environment files
echo "1. ✅ Environment files configured"
echo "   - .env.example updated for Render"
echo "   - server/.env.example updated for Render"
echo "   - Netlify.toml configured"

# 2. Push to GitHub (run these commands)
echo "2. 📝 Push to GitHub:"
echo "   git add ."
echo "   git commit -m 'Ready for Render + Netlify deployment'"
echo "   git push origin main"

# 3. Deploy Frontend to Netlify
echo "3. 🌐 Deploy Frontend to Netlify:"
echo "   - Go to: https://netlify.com"
echo "   - Add new site > Import from Git"
echo "   - Connect GitHub repository"
echo "   - Build settings auto-configured"
echo "   - Add environment variables:"
echo "     VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here"
echo "     VITE_API_URL=https://your-backend.onrender.com"

# 4. Deploy Backend to Render
echo "4. 🚀 Deploy Backend to Render:"
echo "   - Go to: https://render.com"
echo "   - New > Web Service"
echo "   - Connect GitHub repository"
echo "   - Root directory: server"
echo "   - Build command: npm install"
echo "   - Start command: npm start"
echo "   - Add environment variables:"
echo "     STRIPE_SECRET_KEY=sk_test_your_secret_key_here"
echo "     CLIENT_URL=https://your-site.netlify.app"
echo "     PORT=10000"
echo "     NODE_ENV=production"

# 5. Test deployment
echo "5. 🧪 Test Your Deployment:"
echo "   - Frontend: https://your-site.netlify.app"
echo "   - Backend API: https://your-backend.onrender.com/health"
echo "   - Test payment with card: 4242424242424242"

echo "✅ Deployment Complete!"
echo "🎉 Your meditation website is live!"
echo ""
echo "📋 Next Steps:"
echo "- Test all features work correctly"
echo "- Replace test Stripe keys with live keys"
echo "- Set up webhook endpoints for production"
echo "- Add custom domain (optional)"
