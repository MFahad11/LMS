const express = require("express");
const app = express();
const port = 4500;
const cors = require('cors');
const courseRoute=require('../Routes/course')
const lectureRoute=require('../Routes/lecture')
const userRoute=require('../Routes/user')
const compilerRoute=require("../Routes/compiler")
const paymentRoute=require("../Routes/payment")
const lectureModel=require("../models/schema/lecture")
const questionRoute=require("../Routes/question")
var bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
require("../bootstrap/index");


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors())


//MIDDLEWARES






//Routes

app.use('/api',courseRoute)
app.use('/api',lectureRoute)
app.use('/api',questionRoute)
app.use('/api',userRoute)
app.use('/api',compilerRoute)
app.use('/api',paymentRoute)
app.use(bodyParser.json());
//Routes


app.listen(port, () => {
  console.log(`server listening on ${port} `);
});
