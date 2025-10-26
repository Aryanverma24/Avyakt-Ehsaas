import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Get client URL from environment or default to localhost
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';
const PORT = process.env.PORT || 10000; // Render uses port 10000

app.use(cors({
  origin: CLIENT_URL,
  credentials: true,
}));
app.use(express.json());

// ✅ Create Checkout Session API
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { courseName, price, priceId } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: courseName,
              description: `Meditation program: ${courseName}`,
            },
            unit_amount: price * 100, // Stripe uses paise
          },
          quantity: 1,
        },
      ],
      success_url: `${CLIENT_URL}/success?program=${encodeURIComponent(courseName)}&amount=${price}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${CLIENT_URL}/cancel`,
      metadata: {
        courseName: courseName,
        price: price.toString(),
        priceId: priceId || 'default'
      }
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Webhook endpoint for payment confirmation (optional for testing)
app.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"];

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Handle successful payment
      console.log("Payment successful for session:", session.id);
      console.log("Metadata:", session.metadata);

      // TODO: Add your business logic here
      // - Update user's enrollment status
      // - Send confirmation email
      // - Grant access to meditation programs
    }

    res.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Client URL: ${CLIENT_URL}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
