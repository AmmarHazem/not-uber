import stripe from "stripe";

const instance = new stripe(process.env.STRIPE_SECRET_KEY ?? "");

export async function POST() {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await instance.customers.create();
  const ephemeralKey = await instance.ephemeralKeys.create({ customer: customer.id }, { apiVersion: "2020-08-27" });
  const paymentIntent = await instance.paymentIntents.create({
    amount: 10000,
    currency: "aed",
    customer: customer.id,
  });
  return Response.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  });
}
