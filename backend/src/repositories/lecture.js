const lectureModel=require("../models/schema/lecture")
const questionModel=require("../models/schema/question")
exports.getlectures=async()=>{
    return await lectureModel.find()
}
exports.getlecture=async(id)=>{
    return await lectureModel.findById({_id:id})
}
exports.submitResult=async({score,lectureId})=>{
    const lecture=await lectureModel.findById({_id:lectureId}).lean()
    const questions=await questionModel.find({lectureId:lectureId})
    // const score=quiz.reduce((total,question)=>{
    //     return total+(question.answer===question.selectedOption?1:0)
    // },0)
    const final_score=(score/((questions.length)*1))*100
    console.log(final_score)
    if(final_score>=50){
        await lectureModel.updateOne({_id:lectureId},{$set:{'status':"completed"}})
        return({
            totalScore:final_score,
            passed:"Passed"
        })
    }
    else{
        return({
            totalScore:final_score,
            passed:"Not passed"
        })
    }
    
}