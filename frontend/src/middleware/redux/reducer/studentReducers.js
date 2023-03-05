const initialStudentData ={
     
    data:[]
    }


const surveyReducers = (state = initialStudentData, action) => {

    
    
    
    switch(action.type){
        case "ADD-STUDENTDATA":
            
        


            return {...state,data:[...state.data,action.payload]}


                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default surveyReducers;