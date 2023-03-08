import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { runCode } from '../../../middleware/redux/actions/compiler';

const Compiler = () => {
  const dispatch = useDispatch();
  const { results, error } = useSelector((state) => state.compilerReducer);

  const [code, setCode] = useState('');
  const [file, setFile] = useState(null);

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleRunCode = () => {
    const data = new Object();
    if (file) {
        data.file=file
    } else {
        data.code=code
    }
    dispatch(runCode(data));
  };

  return (
    <div>
      <textarea value={code} onChange={handleCodeChange} />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleRunCode}>Run Code</button>
      {results && results.map((result, index) => (
        <div key={index}>
          <h4>Test Case {index + 1}</h4>
          <p>Input: {result.input}</p>
          <p>Output: {result.output}</p>
          <p>Expected Output: {result.expectedOutput}</p>
          <p>Status: {result.passed ? 'Passed' : 'Failed'}</p>
        </div>
      ))}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Compiler;
