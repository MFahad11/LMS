const courseModel=require("../models/schema/course")
exports.getCourses=async()=>{
    return await courseModel.find()
}
exports.getCourse=async(id)=>{
    return await courseModel.findById({_id:id})
}
exports.updateCourse=async(id)=>{
    // console.log(await courseModel.find({_id:id}))
    return await courseModel.updateOne({_id:id},{$set:{'status':"completed"}})
}