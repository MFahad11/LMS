const paymentService=require('../services/payment')
exports.payment=async (req,res) => {
    const { token, amount } = req.body;
    res.body=await paymentService.payment(token,amount)
    // console.log(res.body)
    return res.json(res.body)
};