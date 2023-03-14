const link = {
    data: ""
}


const linkReducers = (state = link, action) => {

    
    
    
    switch(action.type){
        case "GET-LINK":
            
        
            console.log(action.payload)

            return {...link,data:action.payload}
            

                // state.data.push(action.payload)
               
                // return state;


          
             
           default:   return state;
            
                        
    }
}

export default linkReducers;