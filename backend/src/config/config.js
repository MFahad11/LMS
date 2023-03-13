const dotenv=require('dotenv')
const path=require('path')
dotenv.config({ path: path.join(__dirname, '../../.env') });

module.exports={

    // Database
    MONGODB_URL: "mongodb+srv://Fahad:dellinspiron15@cluster0.cn8mayv.mongodb.net/LMS?retryWrites=true&w=majority",
   
  
     
}
