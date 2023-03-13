const courseModel=require("../models/schema/course")
exports.getCourses=async()=>{
    return await courseModel.find()
}
exports.getCourse=async(id)=>{
    return await courseModel.findById({_id:id})
}