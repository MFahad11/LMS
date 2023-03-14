const express = require('express');
const axios = require('axios');
const router = express.Router();
const clientId = 'ba675ae614ecd90129cd5251d56c3d66';
const clientSecret = '12b180830473c99c829493efee65299c3486cc53c104da701a11a0b0c94c6c18';
const {testCases}=require("../data/data")
const problemModel =require('../models/schema/problem')
// router.post('/run',(req,res)=>{
// const vm=require("vm")
// const code = req.body.code;
// const language = req.body.language;
// // axios.post('https://api.jdoodle.com/v1/execute', {
// //   clientId: clientId,
// //   clientSecret: clientSecret,
// //   script: code,
// //   language: language
// // })
// // .then(response => {
// //   const {data}=response
// //   return res.json({data})
// // })
// // .catch(error => {
// //   console.log(error);
// // });
// const results = [];
// function executeUserCode(userCode, input) {
//   const context = {
//     input: input,
//     calculateEvenSum: undefined,
//   };
//   const script = new vm.Script(userCode);
//   script.runInNewContext(context);
//   return context.calculateEvenSum(input);
// }
// let score=1
// for (let elem of testCases){
//   const result = executeUserCode(code,elem.input);
//   if (result === elem.expectedOutput) {
//     results.push("Passed")
//   } else {
//     results.push("Failed")
//     score=0
//   }
// }
// return res.json({results,score})
// })
router.post("/problems",async(req,res)=>{
  res.body=await problemModel.insertMany([{
    "courseId":"64030b148005c60729a89bb3",
    "statement": "Write a function that takes in a string and returns the number of vowels in the string.",
    "input": "A string containing English letters",
    "output": "An integer representing the number of vowels in the string",
    "sample_input": ["hello", "world","fahad"],
    "sample_output": [2,1,2]
    },
    {
    "lectureId":"64030b148005c60729a89bb3",
    "statement": "Write a function that takes in a list of integers and returns the sum of all the positive integers in the list.",
    "input": "A list of integers",
    "output": "An integer representing the sum of all the positive integers in the list",
    "sample_input": [[1, -2, 3, -4, 5], [2, 4, 6, 8, 10],[-4,1,-5,3]],
    "sample_output": [9,30,4]
    },
    {
    "lectureId":"64030b148005c60729a89bb3",
    "statement": "Write a function that takes in a string and checks whether the string is a palindrome.",
    "input": "A string containing English letters",
    "output": "A boolean value representing whether the string is a palindrome or not",
    "sample_input": ["racecar", "hello","abbababba"],
    "sample_output": [true,false,true]
    }])
  return res.json(res.body)
})
router.get('/problems', async (req, res) => {
  try {
    const problems = await problemModel.find({});
    res.json(problems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /problems/:id - Get details of a specific problem
router.get('/problems/:id', async (req, res) => {
  try {
    const problem = await problemModel.findById(req.params.id);
    res.json(problem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /submit/:id - Submit a solution to a problem
router.post('/submit/:id', async (req, res) => {
  try {
    // console.log(req.body)

    const problem = await problemModel.findById(req.params.id);
    
    const testCases = problem.sample_input.map((input, index) => ({
      input,
      output: problem.sample_output[index]
    }));
    const userCode = req.body.code;
// console.log(testCases)
    // Run user's code against test cases
    const results = testCases.map(({ input, output }) => {
      const sandbox = { result: null };
      if(typeof(input)==Object){
        input=Object.values(input).map(val=>parseInt(val))
      }
      const codeToRun = `
        const input = "${input}";
        const output = "${output}";
        (${userCode})(input);
      `;
      
      if(eval(codeToRun)===output){
          return "Pass"
      }
      else{
        return "Fail"
      }
    });
    // Determine if user passed all test cases
    const passedAllTests = results.every(result => result === 'Pass');
    // console.log(passedAllTests)
    res.json({
      passedAllTests,
      results
    });
  } catch (err) {
    // console.log(err.message)
    res.json({ message: "Error retry please!" });
  }
});
module.exports = router;
