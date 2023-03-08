const userModel=require('../models/schema/user')
exports.create=async(payload)=>{
    let user= await userModel.findOne({email:payload.email})

    if(user){
        return {
            status:"exist",
            data:user}
    }
    user=await userModel.create(payload)
    return {
        status:"create",
        data:user
        
    }
    
}
exports.update=async(payload)=>{
    return userModel.updateOne({_id:payload.user},{$set:{
        "payment":payload.payment
    }})
    
}