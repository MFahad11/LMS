// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { runCode } from '../../../middleware/redux/actions/compiler';

// const Compiler = () => {
//   const dispatch = useDispatch();
//   const {results,score,error,loading} = useSelector((state) => state.compilerReducer);
//   const [code, setCode] = useState('');
//   const [language, setLanguage] = useState('nodejs');
//   const handleCodeChange = (event) => {
//     setCode(event.target.value);
//   };
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       setCode(reader.result);
//     };
//     reader.readAsText(file);
//   };
//   const handleLanguageChange = (event) => {
//     setLanguage(event.target.value);
//   };
//   const handleRunCode = () => {
//     dispatch(runCode(code,language));
//   };

//   return (
//     <div>
//           <div>
//         <label>Select Language:</label>
//         <select value={language} onChange={handleLanguageChange}>
//           <option value="nodejs">Node.js</option>
//           <option value="python3">Python 3</option>
//           <option value="java">Java</option>
//           <option value="cpp">C++</option>
//         </select>
//       </div>
//       <textarea value={code} onChange={handleCodeChange} />
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleRunCode}>Run Code</button>
//       {results && <div>
//         <h3>Results</h3>
//       {results.map((result,index)=>(
//         <div>
//           <p>Test-{index+1}: {result}</p>
//         </div>
//       ))
      
//       }
//       <p>Score: {score}</p>
//       </div>}
//       {error && <p>{error}</p>}
//       {loading && <p>loading.....</p>}
//     </div>
//   );
// };

// export default Compiler;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AceEditor from "react-ace";
import { useNavigate } from "react-router-dom";
import {
  fetchProblems,
  runCode,
  setInitial,
} from "../../../middleware/redux/actions/compiler";

const Compiler = () => {
  const dispatch = useDispatch();
  // const problems = useSelector((state) => state.problems);
  const {results,problems,loading,error} = useSelector((state) => state.problemReducer);
  const questionPassed=results.length>0?results[0].passedAllTests:false
  
  const navigate=useNavigate()
  // console.log(useSelector((state) => state.problemReducer))
  // const results = useSelector((state) => state.results);
  const [code, setCode] = useState("");
  // console.log(questionPassed)
  const [testResult, setTestResult] = useState("");
  const [timer, setTimer] = useState(1800); // 30 minutes in seconds
  const [currentProblem, setCurrentProblem] = useState(0);
  const [testResults, setTestResults] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [answered, setAnswered] = useState(questionPassed);
  const [file,setFile]=useState(null)
  // console.log(questionPassed,answered)
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  
    return () => clearInterval(timerInterval);
  }, []);
  useEffect(() => {
    dispatch(fetchProblems());
  }, [dispatch]);
  const handleFinish = () => {
        alert("Congrats!!! You have passed")
        navigate('/lectures')
  };
  const handleRunCode = () => {
    dispatch(runCode(code,problems[currentProblem]._id));
  };

  const handleNextProblem = () => {
    console.log(results)
    if (currentProblem < problems.length - 1) {
      setCode("");
      setTestResult("");
      setSubmitted(false);
      setAnswered(false)
      dispatch(setInitial())
      setCurrentProblem((prev) => prev + 1);

    }
  };


  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setCode(reader.result);
    };
    reader.readAsText(file);
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  return (
    <>
    {timer > 0 && currentProblem < 3 && (
    <div>
      <h2>Problem {currentProblem + 1}</h2>
      <p>{problems.length>=1?problems[currentProblem].statement:""}</p>
      <AceEditor
        mode="javascript"
        theme="github"
        value={code}
        onChange={(value) => setCode(value)}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{ width: "100%", height: "300px" }}
      />
      {problems.length>=1 && <div>
        <p htmlFor="input">Input: {problems[currentProblem].input}</p>
      </div>}
      {problems.length>=1 && <div>
        <p htmlFor="output">Output: {problems[currentProblem].output}</p>
      </div>}
      <input type="file" onChange={handleFileInputChange}/>
      <button disabled={questionPassed} onClick={handleRunCode}>Run Code</button>
      {testResult && <p>{testResult}</p>}
      {results.length > 0 && results[0].results &&(
        <div>
          <h3>Results:</h3>
          <ul>
            {results.map(({results}, index) =>
              results.map((test,index)=>
              <li key={index+1}>{test}</li>
              )


        )}
        
      </ul>
      
    </div>

  )}
  {results.length > 0 && results[0].message &&(
        <div>
          <h3>Error</h3>
          <p>{results[0].message}</p>
    </div>

  )}
  {currentProblem < problems.length - 1 && results.length > 0 &&  results[0].results && (
    <button disabled={!questionPassed} onClick={handleNextProblem}>Next Problem</button>
  )}
  {currentProblem === problems.length - 1 && results.length > 0 &&  results[0].results && (
    <button disabled={!questionPassed} onClick={handleFinish}>Finish</button>
  )}

  {/* {currentProblem === problems.length - 1 && questionPassed && {alert()}} */}

{/* {timer === 0 && (
  <div>
    <p>Time's up!</p>
    {submitted ? (
      <p>Your code has been automatically submitted.</p>
    ) : (
      <div>
        <h3>Test Results:</h3>
        <ul>
          {testResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
        <button onClick={handleRunCode}>Submit</button>
      </div>
    )}
  </div>
)} */}
{timer <= 0 ? (
        <div>Time's up! Submitting all answers...</div>
      ) : (
        <div>Time left: {minutes}:{seconds}</div>
      )}
</div>)}</>
);
};

export default Compiler;


// import React, { useState, useEffect } from "react";

// const questions = [
//   {
//     id: 1,
//     text: "What is the capital of France?",
//     answer: "Paris",
//     testCases: [
//       { input: "Paris", output: true },
//       { input: "Lyon", output: false },
//       { input: "Madrid", output: false },
//     ],
//   },
//   {
//     id: 2,
//     text: "What is the tallest mountain in the world?",
//     answer: "Mount Everest",
//     testCases: [
//       { input: "Mount Everest", output: true },
//       { input: "K2", output: false },
//       { input: "Mount Kilimanjaro", output: false },
//     ],
//   },
//   {
//     id: 3,
//     text: "What is the smallest country in the world?",
//     answer: "Vatican City",
//     testCases: [
//       { input: "Vatican City", output: true },
//       { input: "Monaco", output: false },
//       { input: "Liechtenstein", output: false },
//     ],
//   },
// ];

// const Compiler = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [currentAnswer, setCurrentAnswer] = useState("");
//   const [showTestResults, setShowTestResults] = useState(false);
//   const [timer, setTimer] = useState(0);

//   const currentQuestion = questions[currentQuestionIndex];

//   const handleAnswerChange = (event) => {
//     setCurrentAnswer(event.target.value);
//   };

//   const handleAnswerSubmit = () => {
//     const testResults = currentQuestion.testCases.map(
//       (testCase) => currentAnswer === testCase.input
//     );
//     const allTestsPassed = testResults.every((result) => result === true);

//     if (allTestsPassed) {
//       if (currentQuestionIndex === questions.length - 1) {
//         setShowTestResults(true);
//       } else {
//         setCurrentQuestionIndex(currentQuestionIndex + 1);
//       }
//     }
//   };

//   useEffect(() => {
//     let interval = null;

//     if (currentQuestionIndex === 0) {
//       interval = setInterval(() => {
//         setTimer((timer) => timer + 1);
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [currentQuestionIndex]);

//   return (
//     <div>
//       {!showTestResults && (
//         <div>
//           <h2>Question {currentQuestion.id}</h2>
//           <p>{currentQuestion.text}</p>
//           <input type="text" value={currentAnswer} onChange={handleAnswerChange} />
//           <button onClick={handleAnswerSubmit}>Submit Answer</button>
//         </div>
//       )}
//       {showTestResults && (
//         <div>
//           <h2>Test Results</h2>
//           <p>You have passed all tests!</p>
//           <p>Time taken: {timer} seconds</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Compiler;


