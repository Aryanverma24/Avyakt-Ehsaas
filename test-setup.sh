#!/bin/bash

echo "🧘‍♀️ Meditation App - Stripe Integration Test"
echo "=========================================="

echo ""
echo "✅ Checking if backend server is running..."
if curl -s http://localhost:5000 > /dev/null; then
    echo "✅ Backend server is running on port 5000"
else
    echo "❌ Backend server is not running. Please start it with:"
    echo "   cd server && npm run dev"
fi

echo ""
echo "✅ Checking if frontend is running..."
if curl -s http://localhost:5173 > /dev/null; then
    echo "✅ Frontend is running on port 5173"
else
    echo "❌ Frontend is not running. Please start it with:"
    echo "   npm run dev"
fi

echo ""
echo "💳 Test Payment Cards:"
echo "   ✅ Success: 4242424242424242"
echo "   ❌ Declined: 4000000000000002"
echo "   💰 Insufficient: 4000000000009995"
echo ""
echo "📝 Use any future expiry date and any CVC"

echo ""
echo "🔧 Next Steps:"
echo "   1. Update .env.local with your Stripe publishable key"
echo "   2. Update server/.env with your Stripe secret key"
echo "   3. Visit http://localhost:5173"
echo "   4. Click 'Enroll Now' on any program"
echo "   5. Test payment with test cards above"
