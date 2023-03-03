const express = require("express");
const app = express();
const port = 4500;
const cors = require('cors');
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



app.use(bodyParser.json());


//Routes


app.listen(port, () => {
  console.log(`server listening on ${port} `);
});
