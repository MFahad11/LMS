import {
  FETCH_PROBLEMS_REQUEST,
  FETCH_PROBLEMS_SUCCESS,
  FETCH_PROBLEMS_FAILURE,
  RUN_CODE_REQUEST,
  RUN_CODE_SUCCESS,
  RUN_CODE_FAILURE,
  SET_INITIAL
} from "../actions/compiler";

const initialState = {
  problems: [],
  loading: false,
  error: null,
  currentProblem: 0,
  results: [],
};

const problemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROBLEMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PROBLEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        problems: action.payload,
      };
    case FETCH_PROBLEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RUN_CODE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case RUN_CODE_SUCCESS:
      return {
        ...state,
        loading: false,
        results: [action.payload],
      };
    case RUN_CODE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        };
    case SET_INITIAL:
      return {
        ...state,
        loading: false,
        results:[]
      };
    default:
      return state;
  }
}
export default problemReducer