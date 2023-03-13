const lectureService=require("../services/lecture")
const courseModel=require("../models/schema/course")
const lectureModel = require("../models/schema/lecture")
exports.getlectures=async(req,res,next)=>{
    res.body=await lectureService.getlectures()
    return res.json(res.body)
}
exports.getlecture=async(req,res,next)=>{
    const{id}=req.params
    res.body=await lectureService.getlecture(id)
    return res.json(res.body)
}
exports.setlectures=async(req,res,next)=>{
    const payload={
        courseId:req.body.courseId,
        name: req.body.name,
        video:req.body.video,
        text:req.body.text,
        status:req.body.status
    }
    res.body=await lectureModel.create(payload)
    return res.json(res.body)
}
exports.submitResult=async(req,res,next)=>{
    const payload={
       score :req.body.score,
       lectureId:req.params.id,
    }
    res.body=await lectureService.submitResult(payload)
    return res.json(res.body)
}