const mongoose=require("mongoose")
const problemSchema = new mongoose.Schema({
    courseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"course",
        require:true
    },
    statement: {
        type:String,
        require:true
    },
    input: {
        type:String,
        require:true
    },
    output: {
        type:String,
        require:true
    },
    sample_input:{
        type:Array,
        require:true
    },
    sample_output:{
        type:Array,
        require:true
    },
});

module.exports = new mongoose.model('problem', problemSchema);