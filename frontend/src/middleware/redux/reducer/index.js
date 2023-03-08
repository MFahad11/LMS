import studentReducers from "./studentReducers"
import quizReducer from "./question"
import {combineReducers} from "redux"
import compilerReducer from "./compiler"
import lecturesReducer from "./lectures"
const rootReducer= combineReducers({
    studentReducers,
    quizReducer,
    compilerReducer,
    lecturesReducer
    
    
})

export default rootReducer