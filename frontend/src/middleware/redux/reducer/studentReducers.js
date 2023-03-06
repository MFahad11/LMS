const initialStudentData ={
     
    data:[],
    status: null,
    loading: false,
    error: null
    }


const surveyReducers = (state = initialStudentData, action) => {

    switch (action.type) {
        case 'ADD_STUDENTDATA_REQUEST':
          return {
            ...state,
            loading: true,
            error: null
          };
          case "ADD-STUDENTDATA":
            // console.log(action.payload.data.data)
          return {
            ...state,
            data: action.payload.data,
            status: action.payload.status,
            loading: false,
            error: null
          };
        case 'ADD_STUDENTDATA_FAILURE':
          return {
            ...state,
            loading: false,
            error: action.payload
          };
        default:
          return state;
      }
}

export default surveyReducers;