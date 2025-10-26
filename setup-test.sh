#!/bin/bash

echo "🧘‍♀️ Meditation App - Complete Payment Integration Test"
echo "======================================================"

echo ""
echo "🔧 Step 1: Checking Environment Setup..."
echo "----------------------------------------"

# Check if .env files exist
if [ -f ".env.local" ]; then
    echo "✅ Frontend .env.local exists"
else
    echo "❌ Frontend .env.local missing - Create it from .env.example"
fi

if [ -f "server/.env" ]; then
    echo "✅ Backend server/.env exists"
else
    echo "❌ Backend server/.env missing - Create it from server/.env.example"
fi

# Check if node_modules exist
if [ -d "node_modules" ]; then
    echo "✅ Frontend dependencies installed"
else
    echo "❌ Frontend dependencies missing - Run: npm install"
fi

if [ -d "server/node_modules" ]; then
    echo "✅ Backend dependencies installed"
else
    echo "❌ Backend dependencies missing - Run: cd server && npm install"
fi

echo ""
echo "🚀 Step 2: Starting Services..."
echo "-------------------------------"

echo "📡 Starting backend server..."
echo "   Run in terminal: cd server && npm run dev"
echo "   Expected: Server running on port 5000"
echo ""

echo "🌐 Starting frontend application..."
echo "   Run in new terminal: npm run dev"
echo "   Expected: App running on http://localhost:5173"
echo ""

echo ""
echo "💳 Step 3: Testing Payment Flow..."
echo "---------------------------------"

echo "Test Card Numbers:"
echo "   ✅ Success: 4242424242424242"
echo "   ❌ Declined: 4000000000000002"
echo "   💰 Insufficient: 4000000000009995"
echo ""
echo "Any future expiry date and any CVC will work"
echo ""

echo ""
echo "🔄 Step 4: Complete Test Flow..."
echo "--------------------------------"

echo "1. Visit: http://localhost:5173"
echo "2. Scroll to 'Meditation Programs' section"
echo "3. Click 'Enroll Now' on any program"
echo "4. Complete payment with test card"
echo "5. Should redirect to success page with countdown"
echo "6. Auto-redirect to home page after 10 seconds"
echo ""

echo ""
echo "📋 Step 5: Testing Error Scenarios..."
echo "------------------------------------"

echo "Cancel Payment Test:"
echo "1. Start enrollment process"
echo "2. Click cancel/back during Stripe checkout"
echo "3. Should redirect to cancel page with 'Try Again' options"
echo ""

echo ""
echo "🔐 Step 6: Environment Variables..."
echo "----------------------------------"

echo "Frontend (.env.local):"
echo "   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_..."
echo ""

echo "Backend (server/.env):"
echo "   STRIPE_SECRET_KEY=sk_test_..."
echo "   CLIENT_URL=http://localhost:5173"
echo "   PORT=5000"
echo ""

echo ""
echo "🎯 Step 7: Production Deployment..."
echo "-----------------------------------"

echo "For production deployment:"
echo "1. Update STRIPE_SECRET_KEY to live key (sk_live_...)"
echo "2. Update VITE_STRIPE_PUBLISHABLE_KEY to live key (pk_live_...)"
echo "3. Set up webhook endpoint for payment confirmations"
echo "4. Update CLIENT_URL to production domain"
echo "5. Enable webhook signature verification"
echo ""

echo ""
echo ""
echo "🔗 Step 8: Testing Hash Navigation..."
echo "-------------------------------------"

echo "Hash Navigation Test URLs:"
echo "   🏠 Home: http://localhost:5173/#home"
echo "   🎯 Focus Test: http://localhost:5173/#focus-test"
echo "   🌿 Why Meditation: http://localhost:5173/#why-meditation"
echo "   ⚙️ How It Works: http://localhost:5173/#how-it-works"
echo "   💳 Programs: http://localhost:5173/#meditation-programs-section"
echo "   💬 Testimonials: http://localhost:5173/#testimonials"
echo "   ❓ FAQ: http://localhost:5173/#faq"
echo ""
echo "Test Navigation:"
echo "1. Visit any URL above"
echo "2. Page should automatically scroll to the correct section"
echo "3. Navigation should be smooth and animated"
echo "4. Try the FAQ link from the cancel page after a failed payment"
