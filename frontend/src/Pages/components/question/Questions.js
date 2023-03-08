import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestions, submitAnswer, submitQuiz } from '../../../middleware/redux/actions/question';
import { useParams } from 'react-router-dom';

function Questions() {
  const [timer, setTimer] = useState(20);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const params = useParams();
  const dispatch = useDispatch();
  const { loading, error, questions,totalScore,passed,score} = useSelector((state) => state.quizReducer);
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
    }
  }, [timer]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleAnswerSubmit = () => {
    // console.log(selectedOption, currentQuestion.options[currentQuestion.answer])
    dispatch(submitAnswer(selectedOption, currentQuestion.options[currentQuestion.answer]));
    setAnswered(true);
    setTimer(20);
    // setSelectedOption(null);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnswered(false);
    setTimer(20);
  };

  const handleQuizSubmit = () => {
    dispatch(submitQuiz(score,lectureId));
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
        
      </div>
    );
  }

  if (questions.length === 0) {
    return <div>No questions found for this lecture.</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  // {console.log(currentQuestion)}
  return (
    <div className="Question">
      <div>
        <h3>Question {currentQuestionIndex + 1}</h3>
        <p>{currentQuestion.question}</p>
        <div>
          {currentQuestion.options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                disabled={answered}
              />
              {option}
            </label>
          ))}
        </div>
        <button onClick={handleAnswerSubmit} disabled={answered}>
          Submit
        </button>
        {answered && (
          <div>
            {currentQuestionIndex !== questions.length - 1 ? (
              <button onClick={handleNextQuestion}>Next Question</button>
            ) : (
              <button onClick={handleQuizSubmit}>Submit Quiz</button>
            )}
          </div>
        )}
      </div>
      <div>
      <div>Time left: {timer} seconds</div>
      </div>
    </div>
  );
}

export default Questions;