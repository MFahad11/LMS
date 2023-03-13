const lectureRepo=require("../repositories/lecture")
exports.getlectures=async()=>{
    // const result=await courseRepo.getCourses()
    return await lectureRepo.getlectures()
}
exports.getlecture=async(id)=>{
    // const result=await courseRepo.getCourse()
    return await lectureRepo.getlecture(id)
}
exports.submitResult=async(payload)=>{
    // const result=await courseRepo.getCourse()
    return await lectureRepo.submitResult(payload)
}