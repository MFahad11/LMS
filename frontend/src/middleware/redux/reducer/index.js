import studentReducers from "./studentReducers"
import quizReducer from "./question"
import {combineReducers} from "redux"
import problemReducer from "./compiler"
import lecturesReducer from "./lectures"
import linkReducers from "./linkReducers"
const rootReducer= combineReducers({
    studentReducers,
    quizReducer,
    problemReducer,
    lecturesReducer,
    linkReducers,
    
    
    
})

export default rootReducer