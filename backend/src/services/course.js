const courseRepo=require("../repositories/course")
exports.getCourses=async()=>{
    // const result=await courseRepo.getCourses()
    return await courseRepo.getCourses()
}
exports.getCourse=async(id)=>{
    // const result=await courseRepo.getCourse()
    return await courseRepo.getCourse(id)
}