export function addStudentData(data){
   
    return {
        type: "ADD-STUDENTDATA",
        payload:{
            id: new Date().getTime().toString(),
            data:data,
        }
    }
}


