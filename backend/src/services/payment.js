const paymentRepo=require('../repositories/payment')
exports.payment=async(payload)=>{
    // const result=await courseRepo.getCourses()
    return await paymentRepo.payment(payload)
}