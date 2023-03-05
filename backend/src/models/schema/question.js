const mongoose=require("mongoose")
const questionSchema = new mongoose.Schema({
    lectureId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"course",
        require:true
    },
    question: {
        type:String,
        require:true
    },
    options:{
        type:Array,
        require:true
    },
    answer:{
        type:Number,
        require:true
    },
});

module.exports = new mongoose.model('question', questionSchema);