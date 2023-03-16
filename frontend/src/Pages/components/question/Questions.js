import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestions, submitAnswer, submitQuiz } from '../../../middleware/redux/actions/question';
import { useParams,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Questions() {
  const [timer, setTimer] = useState(20);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score,setScore] = useState(0);
  const navigate=useNavigate()
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, error, questions,totalScore,passed} = useSelector((state) => state.quizReducer);
  // const score = useSelector((state) => state.score);
  const lectureId = params.id;

  useEffect(() => {
    dispatch(fetchQuestions(lectureId));
  }, [dispatch, lectureId]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setAnswered(true);
      handleNextQuestion()
    }
  }, [timer]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const navigateToLectures=()=>{
    window.location.assign('/lectures')
  }
  const handleAnswerSubmit = () => {
    // console.log(selectedOption, currentQuestion.options[currentQuestion.answer])
    if(selectedOption===currentQuestion.options[currentQuestion.answer]){
      setScore(score+1)
    }
    // dispatch(submitAnswer(selectedOption, currentQuestion.options[currentQuestion.answer]));
    setAnswered(true);
    if(currentQuestionIndex !== questions.length - 1){
      handleNextQuestion()
    }
    else{
      if(selectedOption===currentQuestion.options[currentQuestion.answer]){
        handleQuizSubmit(score+1)
      }
      else{
        handleQuizSubmit(score)
      }
      // handleQuizSubmit()
    }
    // setSelectedOption(null);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnswered(false);
    setTimer(20);
  };

  const handleQuizSubmit = (payload) => {
    dispatch(submitQuiz(payload,lectureId));
    setShowResult(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (showResult) {
    return (
      <div>
        {/* <p>Your score: {score} out of {questions.length}</p> */}
        {passed?passed==="Passed"?<p>Congrats You have passed with {totalScore}% marks</p>:<p>Unfortunately you haven't passed</p>:<p>Loading.....</p>}
        <button
      onClick={navigateToLectures}
      className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
    >
      Go to lectures
    </button>
        
      </div>
    );
  }

  if (questions.length === 0) {
    return (<>
    <div>No questions found for this lecture.</div>
    {/* <Link to="/lectures">Move to next Lecture</Link> */}
    <button onClick={() => {window.location.assign('/lectures')}}>Move to next Lecture</button>
    </>);
  }

  const currentQuestion = questions[currentQuestionIndex];
  // {console.log(currentQuestion)}
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-lg font-medium mb-4">Question {currentQuestionIndex + 1}</h3>
    <p className="mb-4">{currentQuestion.question}</p>
    <div className="space-y-2">
      {currentQuestion.options.map((option, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="radio"
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
            disabled={answered}
            className="form-radio text-blue-500"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
    <button
      onClick={handleAnswerSubmit}
      disabled={answered}
      className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
    >
      Submit
    </button>
    {answered && (
      <div className="mt-4">
        {currentQuestionIndex !== questions.length - 1 ? "" : (
          <button
            onClick={handleQuizSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit Quiz
          </button>
        )}
      </div>
    )}
    <div className="mt-4">Time left: {timer} seconds</div>
  </div>
  );
}

export default Questions;