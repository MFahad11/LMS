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
export const fetchCourse = () => async (dispatch) => {
  try {
    
    dispatch({ type: 'FETCH_COURSE_REQUEST' });
    const config={headers:{'Content-Type':'application/json'}}
    const res = await axios.get(`http://localhost:4500/api/course/64108791fabdd0d3bb673309`,config);
    console.log(res)
    dispatch({
      type: 'FETCH_COURSE_SUCCESS',
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_COURSE_FAILURE',
      payload: error.response.data.message || 'Something went wrong',
    });
  }
};