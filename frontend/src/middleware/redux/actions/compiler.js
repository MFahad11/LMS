import axios from "axios";

export const FETCH_PROBLEMS_REQUEST = "FETCH_PROBLEMS_REQUEST";
export const FETCH_PROBLEMS_SUCCESS = "FETCH_PROBLEMS_SUCCESS";
export const FETCH_PROBLEMS_FAILURE = "FETCH_PROBLEMS_FAILURE";
export const RUN_CODE_REQUEST = "RUN_CODE_REQUEST";
export const RUN_CODE_SUCCESS = "RUN_CODE_SUCCESS";
export const RUN_CODE_FAILURE = "RUN_CODE_FAILURE";

export const fetchProblems = () => {
  return (dispatch) => {
    dispatch(fetchProblemsRequest());
    axios
      .get("http://localhost:4500/api/problems")
      .then((response) => {
        dispatch(fetchProblemsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProblemsFailure(error.message));
      });
  };
};

export const fetchProblemsRequest = () => {
  return {
    type: FETCH_PROBLEMS_REQUEST,
  };
};

export const fetchProblemsSuccess = (problems) => {

  return {
    type: FETCH_PROBLEMS_SUCCESS,
    payload: problems,
  };
};

export const fetchProblemsFailure = (error) => {
  return {
    type: FETCH_PROBLEMS_FAILURE,
    payload: error,
  };
};

export const runCode = (code,id) => {
  return (dispatch) => {
    dispatch(runCodeRequest());
    console.log(id)
    axios
      .post(`http://localhost:4500/api/submit/${id}`, { code})
      .then((response) => {
        dispatch(runCodeSuccess(response.data));
      })
      .catch((error) => {
        dispatch(runCodeFailure(error.message));
      });
  };
};

export const runCodeRequest = () => {
  return {
    type: RUN_CODE_REQUEST,
  };
};

export const runCodeSuccess = (result) => {

  return {
    type: RUN_CODE_SUCCESS,
    payload: result,
  };
};

export const runCodeFailure = (error) => {
  return {
    type: RUN_CODE_FAILURE,
    payload: error,
  };
};
