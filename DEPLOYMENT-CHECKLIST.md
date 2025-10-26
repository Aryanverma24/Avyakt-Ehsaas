🚀 DEPLOYMENT CHECKLIST - Render + Netlify
==========================================

✅ PRE-DEPLOYMENT (Complete these first)
□ Git configured with your name and email
□ GitHub repository created (meditation-app)
□ All code pushed to GitHub
□ Stripe test keys ready
□ Environment files set up

🌐 FRONTEND DEPLOYMENT (Netlify)
□ Go to https://netlify.com
□ Click "Add new site" > "Import from Git"
□ Connect GitHub repository (select meditation-app)
□ Build settings auto-configured ✅
□ Add environment variables in Netlify dashboard:
  - VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
  - VITE_API_URL=https://your-backend.onrender.com
□ Site deployed ✅ (takes 2-3 minutes)

🚀 BACKEND DEPLOYMENT (Render)
□ Go to https://render.com
□ Click "New" > "Web Service"
□ Connect GitHub repository (select meditation-app)
□ Configure build settings:
  - Build Command: npm install
  - Start Command: npm start
  - Root Directory: server
□ Add environment variables in Render dashboard:
  - STRIPE_SECRET_KEY=sk_test_your_secret_key_here
  - CLIENT_URL=https://your-site-name.netlify.app
  - PORT=10000
  - NODE_ENV=production
  - STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
□ API deployed ✅ (takes 1-2 minutes)

🧪 TESTING CHECKLIST
□ Health check: curl https://your-backend.onrender.com/health
□ Frontend loads: https://your-site-name.netlify.app
□ Payment flow works with test card: 4242424242424242
□ Hash navigation works (#faq, #programs, etc.)
□ Success/cancel redirects work
□ Mobile responsive design

🔧 PRODUCTION SETUP
□ Get live Stripe keys from dashboard
□ Set up webhook endpoints
□ Update environment variables with live keys
□ Test with real payment cards

🎉 SUCCESS METRICS
□ Website loads in under 3 seconds
□ All features working correctly
□ Payment processing smooth
□ Mobile responsive
□ Professional appearance

📞 SUPPORT CONTACTS
□ Netlify: https://netlify.com/support
□ Render: https://render.com/support
□ Stripe: https://stripe.com/support

💰 COST BREAKDOWN
□ Netlify: $0/month (free tier)
□ Render: $0/month (free tier)
□ Stripe: 2.9% + $0.30 per transaction
□ Total: $0/month + payment processing fees

🚀 GO LIVE!
Your meditation website is ready for users!
Deploy in 5-10 minutes, $0 monthly cost!
