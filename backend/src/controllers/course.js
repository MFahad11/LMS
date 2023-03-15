const courseService=require("../services/course")
const courseModel=require("../models/schema/course")
const mongoose=require("mongoose")
exports.getCourses=async(req,res,next)=>{
    res.body=await courseService.getCourses()
    return res.json(res.body)
}
exports.getCourse=async(req,res,next)=>{
    const{id}=req.params
    res.body=await courseService.getCourse(id)
    return res.json(res.body)
}
exports.updateCourse=async(req,res,next)=>{
    res.body=await courseService.updateCourse(req.params.id)
    return res.json(res.body)
}