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
    const final_score=(score/((questions.length)*1))*100
    console.log(score,questions.length)
    console.log(final_score)
    if(final_score>=50){
        await lectureModel.updateOne({_id:lectureId},{$set:{'status':"completed"}})
        const {_id}=await lectureModel.findOne({ _id: { $gt: lectureId } })
        // console.log(result)
        if(!_id){
            return({
                passed:"Completed"
            })
        }
        await lectureModel.findOneAndUpdate(
            { _id: _id },
            { $set: { "status": 'in progress' } }) 
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