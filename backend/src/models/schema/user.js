const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    payment:{
        type:Boolean,
        default:false
    }
   


})

const createUser = new mongoose.model('user', userSchema)

module.exports = createUser;