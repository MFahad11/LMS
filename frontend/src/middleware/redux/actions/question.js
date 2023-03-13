import axios from 'axios';
// Fetch questions action
export const fetchQuestions = (lectureId) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_QUESTIONS_REQUEST' });
    const config={headers:{'Content-Type':'application/json'}}
    const res = await axios.get(`http://localhost:4500/api/questions/${lectureId}`,config);
    console.log(res)
    dispatch({
      type: 'FETCH_QUESTIONS_SUCCESS',
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_QUESTIONS_FAILURE',
      payload: error.response.data.message || 'Something went wrong',
    });
  }
};

// Submit answer action
export const submitAnswer = (selectedOption, correctOption) => {
  return {
    type: "SUBMIT_ANSWER",
    payload: {
      selectedOption,
      correctOption
    }
  };
};

// Submit quiz action
export const submitQuiz = (score,lectureId) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:4500/api/lectures/${lectureId}/quiz`, { score });
    console.log(response)
    dispatch({
      type: "SUBMIT_QUIZ",
      payload: response.data
    });
  } catch (error) {
    // handle error
  }
};