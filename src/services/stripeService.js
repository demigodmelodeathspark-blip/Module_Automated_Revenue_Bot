const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function createCheckoutSession(userId, priceId) {
    return await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'subscription',
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: process.env.FRONTEND_URL + '/success',
        cancel_url: process.env.FRONTEND_URL + '/cancel',
        metadata: { userId }
    });
}

module.exports = { createCheckoutSession };
