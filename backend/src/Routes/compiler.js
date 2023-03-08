const express = require('express');
const axios = require('axios');
const FormData = require('form-data');

const router = express.Router();

const API_URL = 'https://92463065.compilers.sphere-engine.com/api/v4';
const API_KEY = '76f00574081229596a2df0275398921b';
const COMPILER_ID = 112; // Replace with the ID of the programming language you want to use

// Function to run the code and return the results
const runCode = async (code, input) => {
    
  const form = new Object();
  form.compilerId=COMPILER_ID;
  form.source=code;
  form.input=input;
  form.languageId=29;
  form.withInputOutput='true';
  form.compilerArgs='';
    console.log(form)
  const response = await axios.post(`${API_URL}/submissions?access_token=${API_KEY}`, form, {
    headers: {
        Authorization:`Bearer ${API_KEY}`,
        'Content-Type':'application/json',

    },
  });


  const submissionId = response.data.id;
  while(true){
  const resultResponse = await axios.get(
    `${API_URL}/submissions/${submissionId}?access_token=${API_KEY}&withOutput=true&withStderr=true&withCmpinfo=true&withSource=true`,
  );
  const {status,output}=resultResponse.data
  console.log(resultResponse.data)
  if(status===15){
    console.log(output)
    return output
    break
  }
  else if(status>=3){
    console.log(status)
    throw new Error('Submission failed')
  }
  await new Promise((resolve) => {
    setTimeout(resolve,1000)
  })
}
//     console.log(resultResponse.data)
//   const { output, stderr, cmpinfo } = resultResponse.data;

//   if (cmpinfo) {
//     return {
//       error: `Compilation Error: ${cmpinfo}`,
//     };
//   }

//   return {
//     result:resultResponse.data,
//     output,
//     stderr,
//   };
};

// Route to run the code
router.post('/run', async (req, res) => {
  try {
    const { code, file, input } = req.body;
    console.log(req.body)
    let codeContent = '';

    // If the user provided a code file, read the contents of the file
    if (file) {
      codeContent = fs.readFileSync(file.path, 'utf-8');
    } else {
      codeContent = code;
    }

    const results = await runCode(codeContent, input);

    res.status(200).json({
      success: true,
      results,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

module.exports = router;
