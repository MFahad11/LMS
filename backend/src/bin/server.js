const express = require("express");
const app = express();
const port = 4500;
const cors = require('cors');
const courseRoute=require('../Routes/course')
const lectureRoute=require('../Routes/lecture')
const questionRoute=require("../Routes/question")
var bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
require("../bootstrap/index");
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));


//MIDDLEWARES
app.use(cors())







//Routes

app.use('/api',courseRoute)
app.use('/api',lectureRoute)
app.use('/api',questionRoute)
app.use(bodyParser.json());
//Routes


app.listen(port, () => {
  console.log(`server listening on ${port} `);
});
