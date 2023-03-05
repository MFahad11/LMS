const lectureModel=require("../models/schema/lecture")
exports.getlectures=async()=>{
    return await lectureModel.find()
}
exports.getlecture=async(id)=>{
    return await lectureModel.findById({_id:id})
}