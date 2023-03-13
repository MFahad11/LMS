import axios from 'axios'
// export function addStudentData (data){
//    const config={headers:{'Content-Type':'application/json'}}
//    const result= axios.post('http://localhost:4500/api/user',data,config)

//     return {
//         type: "ADD-STUDENTDATA",
//         payload:{
//             id: new Date().getTime().toString(),
//             data:data,
//         }
//     }
// }
export const addStudentData = (data) => {
  return async (dispatch) => {
    try {
        const config={headers:{'Content-Type':'application/json'}}
        const response=await axios.post('http://localhost:4500/api/user',data,config)
      dispatch({
        type: "ADD-STUDENTDATA",
        payload: {
            data: response.data,
            status: response.status
          }
      });
    } catch (error) {
      dispatch({
        type:'ADD-STUDENTDATA_FAILURE',
        payload: error.message
      });
    }
  };
};

// export function setPayment (data){
//     const config={headers:{'Content-Type':'application/json'}}
//     const result= axios.put('http://localhost:4500/api/user',data,config)
//      return {
//          type: "SETPAYMENT",
//          payload:{
//              id: new Date().getTime().toString(),
//              data:data,
//          }
//      }
//  }


