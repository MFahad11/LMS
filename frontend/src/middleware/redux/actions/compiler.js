import axios from 'axios';

export const runCode = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:4500/api/run', formData);
    dispatch({
      type: 'RUN_CODE_SUCCESS',
      payload: res.data.results,
    });
  } catch (err) {
    dispatch({
      type: 'RUN_CODE_ERROR',
      payload: err.response.data.message,
    });
  }
};
