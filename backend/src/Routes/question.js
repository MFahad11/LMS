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
      "lectureId":"640364a7fe0c25d3ff09247f",
      "question":`The maximum number of global symbols a module can define is ____________`,
      "options":["2",
      "3",
      "1",
      "4"],
      "answer":2
      },
      {
        "lectureId":"640364a7fe0c25d3ff09247f",
        "question":`The scope of a function is also called as ________`,
        "options":["Predefined function","Module function","Public function","Private function"],
        "answer":1
        },
        {
      "lectureId":"640364a7fe0c25d3ff09247f",
      "question":`<p id="demo"></p>
<script>
function myFunction() 
{
   var res = "";
   res = res + Number.isInteger(0.5) + ": 0.5<br>";
   document.getElementById("demo").innerHTML = res;
}
</script>`,
      "options":["True","False","Undefined","Error"],
      "answer":1
      },
      ])
    return res.json(res.body)
})

module.exports = router;