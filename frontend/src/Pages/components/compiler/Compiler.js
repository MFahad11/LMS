
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
      <div className="mx-auto max-w-md p-4 border rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Problem {currentProblem + 1}</h2>
        <p className="mb-4">{problems.length >= 1 ? problems[currentProblem].statement : ""}</p>
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
          className="mb-4"
        />
        {problems.length >= 1 && (
          <div className="mb-2">
            <label htmlFor="input" className="font-bold mr-2">
              Input:
            </label>
            <span>{problems[currentProblem].input}</span>
          </div>
        )}
        {problems.length >= 1 && (
          <div className="mb-4">
            <label htmlFor="output" className="font-bold mr-2">
              Output:
            </label>
            <span>{problems[currentProblem].output}</span>
          </div>
        )}
        <input type="file" onChange={handleFileInputChange} className="mb-4" />
        <button
          disabled={questionPassed}
          onClick={handleRunCode}
          className={`px-4 py-2 text-white font-bold bg-${questionPassed ? "gray" : "blue"}-500 rounded-lg disabled:opacity-50`}
        >
          Run Code
        </button>
        {testResult && <p className="my-2">{testResult}</p>}
        {results.length > 0 && results[0].results && (
          <div className="my-4">
            <h3 className="font-bold mb-2">Results:</h3>
            <ul>
              {results.map(({ results }, index) =>
                results.map((test, index) => <li key={index + 1}>Test Case {index + 1}:{test}</li>)
              )}
            </ul>
          </div>
        )}
        {results.length > 0 && results[0].message && (
          <div className="my-4">
            <h3 className="font-bold mb-2">Error</h3>
            <p>{results[0].message}</p>
          </div>
        )}
        {currentProblem < problems.length - 1 && results.length > 0 && results[0].results && (
          <button
            disabled={!questionPassed}
            onClick={handleNextProblem}
            className={`px-4 py-2 text-white font-bold bg-green-500 rounded-lg disabled:opacity-50 ${questionPassed ? "hover:bg-green-600" : ""}`}
          >
            Next Problem
          </button>
        )}
        {currentProblem === problems.length - 1 && results.length > 0 && results[0].results && (
          <button
            disabled={!questionPassed}
            onClick={handleFinish}
            className={`px-4 py-2 text-white font-bold bg-green-500 rounded-lg disabled:opacity-50 ${questionPassed ? "hover:bg-green-600" : ""}`}
          >
            Finish
          </button>
        )}


{timer <= 0 ? (
  <div>Time's up! Submitting all answers...</div>
  ) : (
    <div>Time left: {minutes}:{seconds}</div>
    )}
    </div>)}</>
    );
  };
  
  export default Compiler;
  
  
  
  //   <>
  //   {timer > 0 && currentProblem < 3 && (
  //   <div>
  //     <h2>Problem {currentProblem + 1}</h2>
  //     <p>{problems.length>=1?problems[currentProblem].statement:""}</p>
  //     <AceEditor
  //       mode="javascript"
  //       theme="github"
  //       value={code}
  //       onChange={(value) => setCode(value)}
  //       name="code-editor"
  //       editorProps={{ $blockScrolling: true }}
  //       setOptions={{
  //         enableBasicAutocompletion: true,
  //         enableLiveAutocompletion: true,
  //         enableSnippets: true,
  //         showLineNumbers: true,
  //         tabSize: 2,
  //       }}
  //       style={{ width: "100%", height: "300px" }}
  //     />
  //     {problems.length>=1 && <div>
  //       <p htmlFor="input">Input: {problems[currentProblem].input}</p>
  //     </div>}
  //     {problems.length>=1 && <div>
  //       <p htmlFor="output">Output: {problems[currentProblem].output}</p>
  //     </div>}
  //     <input type="file" onChange={handleFileInputChange}/>
  //     <button disabled={questionPassed} onClick={handleRunCode}>Run Code</button>
  //     {testResult && <p>{testResult}</p>}
  //     {results.length > 0 && results[0].results &&(
  //       <div>
  //         <h3>Results:</h3>
  //         <ul>
  //           {results.map(({results}, index) =>
  //             results.map((test,index)=>
  //             <li key={index+1}>{test}</li>
  //             )


  //       )}
        
  //     </ul>
      
  //   </div>

  // )}
  // {results.length > 0 && results[0].message &&(
  //       <div>
  //         <h3>Error</h3>
  //         <p>{results[0].message}</p>
  //   </div>

  // )}
  // {currentProblem < problems.length - 1 && results.length > 0 &&  results[0].results && (
  //   <button disabled={!questionPassed} onClick={handleNextProblem}>Next Problem</button>
  // )}
  // {currentProblem === problems.length - 1 && results.length > 0 &&  results[0].results && (
  //   <button disabled={!questionPassed} onClick={handleFinish}>Finish</button>
  // )}
