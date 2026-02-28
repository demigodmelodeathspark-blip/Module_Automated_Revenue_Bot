const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

function handleWebhook(req, res){
    const sig = req.headers['stripe-signature'];
    try {
        const event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
        console.log('Stripe Event Verified:', event.type);
        res.sendStatus(200);
    } catch (err){
        console.error('Webhook Error:', err.message);
        res.sendStatus(400);
    }
}

module.exports = handleWebhook;
