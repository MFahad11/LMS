const initialState = {
  loading: false,
  questions: [],
  currentQuestion: null,
  currentQuestionIndex: 0,
  passed: "",
  score: 0,
  totalScore:0,
  error: null,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONS_REQUEST':
      return{
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_QUESTIONS_SUCCESS':
      return {
        ...state,
        loading: false,
        questions: action.payload,
        currentQuestion: action.payload[0],
      };
    case 'FETCH_QUESTIONS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'SUBMIT_ANSWER_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
      case "SUBMIT_ANSWER":
        const isCorrect = action.payload.selectedOption === action.payload.correctOption;
        return {
          ...state,
          score: isCorrect ? state.score + 1 : state.score
        };
      case "SUBMIT_QUIZ":
        return {
          ...state,
          totalScore: action.payload.totalScore,
          passed: action.payload.passed
        };
    case 'SUBMIT_ANSWER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'SUBMIT_QUIZ_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
      case "SUBMIT_QUIZ_FAILURE":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
export default quizReducer;