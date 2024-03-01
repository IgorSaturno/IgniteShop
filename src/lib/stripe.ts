import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
    appInfo: {
        name: 'Ignite Shop',
        // url: 'https://ignite-shop.vercel.app',
        // version: '1.0.0'
    }
})