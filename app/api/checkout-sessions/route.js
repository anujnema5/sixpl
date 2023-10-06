import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function checkoutHandler(req, res){
    const amount = parseInt(req.body.amt)
    // console.log(amount)
    try {
        const params = {
            submit_type: 'donate',
            payment_method_types: ['card'],
            line_items: [
                {
                    name: 'Custom Amount Donation',
                    amount: amount,
                    currency: 'usd',
                    quantity: 1,
                }
            ],
            success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/donate-with-checkout`,
        }
        // console.log(params)

        const checkoutSession = await stripe.checkout.sessions.create(params)
        // console.log(checkoutSession)
        res.status(200).json(checkoutSession)

    } catch (error) {

        res.status(500).json({ statusCode: 500, message: error })
        
    }
}