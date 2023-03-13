import studentReducers from "./studentReducers"
import quizReducer from "./question"
import {combineReducers} from "redux"
import problemReducer from "./compiler"
import lecturesReducer from "./lectures"
const rootReducer= combineReducers({
    studentReducers,
    quizReducer,
    problemReducer,
    lecturesReducer
    
    
})

export default rootReducer