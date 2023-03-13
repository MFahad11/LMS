const mongoose=require("mongoose")
const lectureSchema = new mongoose.Schema({
    courseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"course",
        require:true
    },
    name: {
        type:String,
        require:true
    },
    video:{
        type:String,
        require:true
    },
    text:{
        type:String,
        require:true
    },
    status:{
        type:String,
        default:"locked"
    }
});

module.exports = new mongoose.model('lecture', lectureSchema);