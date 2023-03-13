const mongoose=require("mongoose")
const courseSchema = new mongoose.Schema({
    name:{
        type: String,
        ref:"course",
        require:true
    },
    teacher: {
        type:String,
        require:true
    },
    rating:{
        type:Number,
        require:true
    },
    lessons:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
});

module.exports = new mongoose.model('course', courseSchema);