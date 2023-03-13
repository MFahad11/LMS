const express = require('express')
const router=express.Router()
// const questionController=require('../controllers/question')
const questionModel=require("../models/schema/question")
// const {verifyUser}  = require('../middleware/auth')
// router.get('/questions',questionController.getQuestions)
router.get('/questions/:id',async(req,res)=>{

  res.json(await questionModel.find({lectureId:req.params.id}))
  

})
router.post('/question',async(req,res)=>{
    const payload={
        lectureId:req.body.lectureId,
        question: req.body.question,
        options:req.body.options,
        answer:req.body.answer
    }
    res.body=await questionModel.insertMany([{
      "lectureId":"64035ca8fe0c25d3ff092479",
      "question":" What are the three important manipulations done in a for loop on a loop variable?",
      "options":["Updation, Incrementation, Initialization","Initialization,Testing, Updation","Testing, Updation, Testing","Initialization,Testing, Incrementation"],
      "answer":1
      },
      {
      "lectureId":"64035ca8fe0c25d3ff092479",
      "question":"One of the special features of an interpreter in reference with the for loop is that ___________",
      "options":["Before each iteration, the interpreter evaluates the variable expression and assigns the name of the property","The iterations can be infinite when an interpreter is used","The body of the loop is executed only once","the iteration is finite when an interpreter is used"],
      "answer":0
      },
      {
      "lectureId":"64035ca8fe0c25d3ff092479",
      "question":"What will happen if the body of a for/in loop deletes a property that has not yet been enumerated?",
      "options":["The property will be stored in a cache","The loop will not run","That property will not be enumerated","The property will be enumerated"],
      "answer":2
      }])
    return res.json(res.body)
})

module.exports = router;