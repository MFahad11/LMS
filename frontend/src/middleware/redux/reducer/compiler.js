const initialState = {
    results: [],
    error: null,
  };
  
  const compilerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RUN_CODE_SUCCESS':
        return {
          ...state,
          results: action.payload,
          error: null,
        };
      case 'RUN_CODE_ERROR':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default compilerReducer;
  