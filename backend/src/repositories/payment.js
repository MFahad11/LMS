const Stripe = require('stripe')("sk_test_51LrOXkLb9HvvwBCkuhI3LwHw9n2ibkIAo4rnycGfmCOQ8YlzmEA7jOUTpTJRBiLec3oqPAiUcVczM9RqZDAH9kJN006CKz7Cho");
exports.payment=async(payload)=>{
    let status, error;
    try {
      await Stripe.charges.create({
        source: payload.token.id,
        amount:payload.amount,
        currency: 'pkr',
      });
      status = 'success';
    } catch (error) {
    //   console.log(error);
      status = 'Failure';
    }
    return { error, status };
    // return await paymentRepo.payment(payload)
}