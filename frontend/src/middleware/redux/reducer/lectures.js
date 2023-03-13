const initialState = {
    loading: false,
    lectures: [],
    error: null,
  };
  
  const lecturesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_LECTURES_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_LECTURES_SUCCESS':
        return {
          ...state,
          loading: false,
          lectures: action.payload,
        };
      case 'FETCH_LECTURES_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        default: // need this for default case
        return state
    }}
    export default lecturesReducer;