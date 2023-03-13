import axios from 'axios';
// Fetch questions action
export const fetchLectures = () => async (dispatch) => {
  try {
    
    dispatch({ type: 'FETCH_LECTURES_REQUEST' });
    const config={headers:{'Content-Type':'application/json'}}
    const res = await axios.get(`http://localhost:4500/api/lectures`,config);
    console.log(res)
    dispatch({
      type: 'FETCH_LECTURES_SUCCESS',
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_LECTURES_FAILURE',
      payload: error.response.data.message || 'Something went wrong',
    });
  }
};