import { Route, Routes } from "react-router-dom"
import Coursecard from "../../Pages/components/cards/Coursecard"
import Coursediscription from "../../Pages/components/aboutcourses/Coursediscription"
import Payment from '../../Pages/components/payment/Payment'

export default function Routing(){
    return (
        <Routes>
            <Route path="/" element={<Coursecard/>}/>
            <Route path="/javascript" element={<Coursediscription/>}/>
            <Route path="/payment" element={<Payment/>}/>
        </Routes>
    )

}