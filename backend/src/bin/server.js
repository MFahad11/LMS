const express = require("express");
const app = express();
const port = 4500;
const cors = require('cors');
const courseRoute=require('../Routes/course')
const lectureRoute=require('../Routes/lecture')
const userRoute=require('../Routes/user')
const compilerRoute=require("../Routes/compiler")
const lectureModel=require("../models/schema/lecture")
const Stripe = require('stripe')("sk_test_51LrOXkLb9HvvwBCkuhI3LwHw9n2ibkIAo4rnycGfmCOQ8YlzmEA7jOUTpTJRBiLec3oqPAiUcVczM9RqZDAH9kJN006CKz7Cho");
const questionRoute=require("../Routes/question")
var bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
require("../bootstrap/index");


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.post('/payment', async (req, res) => {
  
  let status, error;
  const { token, amount } = req.body;
  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: 'pkr',
    });
    status = 'success';
  } catch (error) {
    console.log(error);
    status = 'Failure';
  }
  res.json({ error, status });
});

//MIDDLEWARES






//Routes

app.use('/api',courseRoute)
app.use('/api',lectureRoute)
app.use('/api',questionRoute)
app.use('/api',userRoute)
app.use('/api',compilerRoute)
app.use(bodyParser.json());
//Routes


app.listen(port, () => {
  console.log(`server listening on ${port} `);
});
