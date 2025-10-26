# Avyakt Ehsaas - Meditation App

A modern meditation application to help users find inner peace through guided sessions, focus tests, and premium programs with Stripe integration.

## Features

- 🧘‍♀️ Guided meditation programs
- 💳 Stripe payment integration for premium content
- 🎯 Focus tests and mindfulness exercises
- 📱 Responsive design with Tailwind CSS
- ✨ Smooth animations and transitions

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Payment**: Stripe Checkout

## Setup

### Prerequisites
- Node.js (v18+)
- Stripe account

### Local Development

1. **Clone the repo**:
   ```bash
   git clone <repo-url>
   cd meditation
   npm install
   ```

2. **Set up environment variables**:
   - Create `.env.local` in root:
     ```env
     VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
     VITE_API_URL=http://localhost:5000
     ```
   - In `server/`, create `.env`:
     ```env
     STRIPE_SECRET_KEY=sk_test_your_key_here
     CLIENT_URL=http://localhost:5173
     PORT=5000
     ```

3. **Run the app**:
   - Backend: `cd server && npm install && npm run dev`
   - Frontend: `npm run dev`
   - Visit http://localhost:5173

## Deployment

- **Frontend**: Deployed on Netlify (https://avyakt-ehsaas.netlify.app)
- **Backend**: Deployed on Render (https://avyakt-ehsaas.onrender.com)

For setup, update environment variables in deployment dashboards.

## Project Structure

```
meditation/
├── src/                    # Frontend React components
├── server/                 # Backend API
├── public/                 # Static assets
└── README.md
```

## License

MIT
