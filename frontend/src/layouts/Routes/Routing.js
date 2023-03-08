import { Route, Routes } from "react-router-dom"
import Coursecard from "../../Pages/components/cards/Coursecard"
import Coursediscription from "../../Pages/components/aboutcourses/Coursediscription"
import Payment from '../../Pages/components/payment/Payment'
import Questions from "../../Pages/components/question/Questions"
import Compiler from "../../Pages/components/compiler/Compiler"
import List from "../../Pages/components/lectures/List"
import Content from "../../Pages/components/lectures/Content"

export default function Routing(){
    return (
        <Routes>
            <Route path="/" element={<Coursecard/>}/>
            <Route path="/javascript" element={<Coursediscription/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/quiz/:id" element={<Questions/>}/>
            <Route path="/compiler" element={<Compiler/>}/>
            <Route path="/lectures" element={<List/>}/>
            <Route path="/lecture/:id" element={<Content/>}/>
        </Routes>
    )

}