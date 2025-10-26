# Meditation App with Stripe Integration

A modern meditation application built with React, Vite, and Tailwind CSS, featuring Stripe payment integration for premium meditation programs.

## Features

- 🧘‍♀️ Guided meditation programs
- 💳 Stripe payment integration for premium content
- 🎯 Focus tests and mindfulness exercises
- 📱 Responsive design with modern UI
- ✨ Smooth animations and transitions

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Payment**: Stripe Checkout
- **Animations**: Framer Motion

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Stripe account (test mode)

### 1. Clone and Install Dependencies

```bash
git clone <your-repo-url>
cd meditation
npm install
```

### 2. Set up Environment Variables

#### Frontend (.env.local)
Create a `.env.local` file in the root directory:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

#### Backend (server/.env)
Create a `.env` file in the server directory:

```env
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
CLIENT_URL=http://localhost:5173
PORT=5000
```

### 3. Get Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers > API keys**
3. Copy your **Publishable key** (starts with `pk_test_`)
4. Copy your **Secret key** (starts with `sk_test_`)
5. Replace the placeholder values in your `.env` files

### 4. Start the Development Servers

#### Backend Server
```bash
cd server
cp .env.example .env  # Copy and edit with your Stripe keys
npm install
npm run dev
```

#### Frontend Application
Open a new terminal and run:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` and the server at `http://localhost:5000`.

## Testing Payments

Use these test card numbers for testing:

- **Successful payment**: `4242424242424242`
- **Card declined**: `4000000000000002`
- **Insufficient funds**: `4000000000009995`

Any CVC and future expiry date will work.

## Project Structure

```
meditation/
├── src/
│   ├── components/
│   │   ├── MeditationPrograms.jsx    # Program listings with payment
│   │   ├── CoursePayment.jsx         # Payment component
│   │   └── pages/
│   │       ├── Success.jsx           # Payment success page
│   │       └── Cancel.jsx            # Payment cancel page
│   └── App.jsx                       # Main app component
├── server/
│   ├── index.js                      # Express server with Stripe
│   ├── package.json
│   └── .env                         # Server environment variables
└── README.md
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Payment Flow

1. User selects a meditation program
2. Clicks "Enroll Now" button
3. Redirected to Stripe Checkout
4. Completes payment with test card
5. **NEW**: Redirected to success page with 10-second auto-navigation countdown
6. **NEW**: Cancel page includes "Try Again" feature with helpful messaging

## Navigation Features

- ✅ **Hash Navigation**: Direct links to specific sections using URL fragments
- ✅ **Smooth Scrolling**: Automatic smooth scroll to sections when navigating via hash
- ✅ **React Router Integration**: Proper routing with hash fragment support

### Available Navigation Links

- `#home` - Hero/Landing section
- `#focus-test` - Focus assessment quiz
- `#why-meditation` - Benefits section
- `#how-it-works` - Process explanation
- `#meditation-programs-section` - Available programs
- `#testimonials` - User testimonials
- `#faq` - Frequently asked questions

### Usage Examples

```html
<!-- Direct link to FAQ section -->
<a href="/#faq">View FAQ</a>

<!-- Link to meditation programs -->
<a href="/#meditation-programs-section">Browse Programs</a>

<!-- Link to focus test -->
<a href="/#focus-test">Take Focus Test</a>
```

## Security Notes

- Never commit `.env` files to version control
- Use test keys for development, live keys for production
- Verify webhooks in production environment

## 🚀 Deployment Guide

This application consists of a React frontend and Node.js backend. Here's how to deploy both parts:

### Option 1: Netlify (Frontend) + Railway (Backend) ⭐ **Recommended**

## 🚀 Netlify (Frontend) + Render (Backend) ⭐ **Recommended**

This is the perfect combination for your meditation app! Both platforms offer generous free tiers and excellent performance.

### 🌐 Deploy Frontend to Netlify

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Netlify**:
   - Go to [Netlify.com](https://netlify.com)
   - Click **"Add new site"** → **"Import from Git"**
   - Connect your GitHub repository
   - **Build settings** are auto-configured from `netlify.toml`
   - **Environment Variables** (add in Netlify dashboard):
     ```
     VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
     VITE_API_URL=https://your-backend-app.onrender.com
     ```

3. **Your site will be live at:** `https://your-site-name.netlify.app`

### 🚀 Deploy Backend to Render

1. **Deploy to Render**:
   - Go to [Render.com](https://render.com)
   - Click **"New"** → **"Web Service"**
   - Connect your GitHub repository
   - **Build Settings** (auto-detected):
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
     - **Root Directory:** `server`
   - **Environment Variables** (add in Render dashboard):
     ```
     STRIPE_SECRET_KEY=sk_test_your_secret_key_here
     CLIENT_URL=https://your-site-name.netlify.app
     PORT=10000
     NODE_ENV=production
     STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
     ```

2. **Your API will be live at:** `https://your-backend-app.onrender.com`

### ✅ Step-by-Step Deployment Guide

#### **Step 1: Set Up Environment Files**

**Frontend (.env.local):**
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
VITE_API_URL=https://your-backend-app.onrender.com
```

**Backend (server/.env):**
```env
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
CLIENT_URL=https://your-site-name.netlify.app
PORT=10000
NODE_ENV=production
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

#### **Step 2: Push to GitHub**
```bash
git add .
git commit -m "Ready for Render + Netlify deployment"
git push origin main
```

#### **Step 3: Deploy Frontend**
- Netlify: Auto-deploys from GitHub
- Site ready in 2-3 minutes
- Check build logs in Netlify dashboard

#### **Step 4: Deploy Backend**
- Render: Auto-deploys from GitHub
- API ready in 1-2 minutes
- Check logs in Render dashboard

#### **Step 5: Update Environment Variables**
- Copy your Render API URL to Netlify environment variables
- Update CLIENT_URL in Render with your Netlify site URL

### 🧪 Test Your Deployment

1. **Health Check:**
   ```bash
   curl https://your-backend-app.onrender.com/health
   # Should return: {"status":"OK"}
   ```

2. **Test Payment:**
   - Visit your Netlify site
   - Click "Enroll Now" on any program
   - Complete payment with test card: `4242424242424242`

3. **Verify Navigation:**
   - Hash links work: #faq, #programs, etc.
   - Success/cancel redirects work
   - Mobile responsive

### 💰 Pricing (Free Tiers)

- **Netlify**: 100GB bandwidth/month, unlimited sites
- **Render**: 512MB RAM, 0.1 CPU, free PostgreSQL database
- **Total**: $0/month to start!

### 🔧 Production Setup

#### **Get Live Stripe Keys**
1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers > API keys**
3. Copy **Publishable key** (pk_live_...) and **Secret key** (sk_live_...)
4. Replace test keys with live keys

#### **Set Up Webhooks**
1. In Stripe Dashboard: **Developers > Webhooks**
2. Add endpoint: `https://your-backend-app.onrender.com/webhook`
3. Select events: `checkout.session.completed`
4. Copy webhook secret to Render environment

### 🎯 Alternative Deployment Options

#### **Option 2: Vercel + Render**
- **Frontend**: Vercel (excellent performance)
- **Backend**: Render (Node.js optimized)

#### **Option 3: Heroku (Full Stack)**
- Deploy everything to Heroku
- Simpler but limited free tier

### 🆘 Troubleshooting

**Common Issues:**
- **CORS errors**: Check CLIENT_URL in backend environment
- **Build failures**: Verify Node.js version (18.x)
- **Payment errors**: Ensure API keys are correct
- **Missing variables**: Check all environment variables are set

**Getting Help:**
- **Netlify Support**: Check build logs in dashboard
- **Render Support**: Check deployment logs
- **Stripe Support**: Contact for payment issues

### 🎉 Success!

Your meditation app will be:
- ✅ **Fully functional** with payments
- ✅ **Mobile responsive** design
- ✅ **Fast loading** (global CDN)
- ✅ **Production ready** with proper error handling
- ✅ **SEO optimized** with proper meta tags

**Total deployment time: 5-10 minutes**
**Monthly cost: $0 (free tiers)**

### 🔧 Production Setup

#### 1. Get Live Stripe Keys
- Go to [Stripe Dashboard](https://dashboard.stripe.com)
- Navigate to **Developers > API keys**
- Copy **Publishable key** (pk_live_...) and **Secret key** (sk_live_...)
- Replace test keys with live keys in production

#### 2. Set Up Webhooks (Production)
- In Stripe Dashboard, go to **Developers > Webhooks**
- Add endpoint: `https://your-backend-url.com/webhook`
- Select events: `checkout.session.completed`
- Copy the webhook secret to your backend environment

#### 3. Update Environment Variables

**Frontend (.env.local):**
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key_here
VITE_API_URL=https://your-backend-api.herokuapp.com
```

**Backend (server/.env):**
```env
STRIPE_SECRET_KEY=sk_live_your_live_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
CLIENT_URL=https://your-frontend-url.netlify.app
PORT=8080
NODE_ENV=production
```

### 🧪 Testing Production Deployment

1. **Test Payment Flow:**
   - Use real cards for testing (Stripe provides test card numbers)
   - Verify webhooks are working
   - Check email notifications

2. **Test Navigation:**
   - All hash navigation should work (#faq, #programs, etc.)
   - Payment success/cancel redirects should work

3. **Performance:**
   - Check loading times
   - Verify mobile responsiveness
   - Test on different browsers

### 📞 Production Support

- **Stripe Support:** Contact Stripe for payment issues
- **Domain Setup:** Configure custom domain if needed
- **SSL Certificate:** Usually automatic with deployment platforms
- **Monitoring:** Set up error tracking (Sentry, LogRocket, etc.)

### 🔒 Security Checklist

- [ ] Use live Stripe keys (not test keys)
- [ ] Set up webhook signature verification
- [ ] Configure CORS properly
- [ ] Enable HTTPS only
- [ ] Set up proper error logging
- [ ] Regular security updates

### 🆘 Troubleshooting

**Common Issues:**
- **CORS errors:** Check CLIENT_URL in backend environment
- **Payment failures:** Verify Stripe keys are live keys
- **Build failures:** Check Node.js version compatibility
- **Missing environment variables:** Ensure all required env vars are set

**Getting Help:**
- Check deployment platform documentation
- Review application logs in deployment dashboard
- Test with Stripe test cards first
- Verify all environment variables are correctly set
