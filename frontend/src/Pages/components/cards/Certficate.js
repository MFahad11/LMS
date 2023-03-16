import Confetti from "react-confetti"
import { downloadPDF } from "../../../helper/Download"

export default function Certificate(){
    return(
        <div className="bg-white rounded-lg shadow-md relative p-8  text-center overflow-x-hidden">
            <Confetti/>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold mx-auto">Certificate of Completion</h1>
          {/* <img src="https://via.placeholder.com/150x150" alt="Logo" className="w-16 h-16 object-cover" /> */}
        </div>
        <p className="mb-4">This certificate is awarded to:</p>
        <h2 className="text-2xl font-bold mb-4">John Doe</h2>
        <p className="mb-4">For successfully completing the course on:</p>
        <h3 className="text-xl font-bold mb-4">Javascript with herry</h3>
        <p className="mb-8">Issued on March 15, 2023</p>
        {/* <div className="bg-blue-500 rounded-full text-white text-center py-2 px-4 w-1/2 mx-auto relative z-10"> */}
          <span className="text-lg font-bold mt-full">Congratulations!</span><br/>
          <button onClick={downloadPDF}>Download PDF</button>

        {/* </div> */}
        <div className="bg-cyan-800 absolute top-0 left-0 w-16 h-16 transform -rotate-45 translate-x-px translate-y-px rounded-md shadow-lg"></div>
        <div className="bg-green-700 absolute top-24 left-0 w-16 h-16 transform -rotate-45 translate-x-px translate-y-px rounded-md shadow-lg"></div>

        <div className="bg-cyan-800 absolute bottom-0 right-0 w-16 h-16 transform rotate-45 translate-x-px translate-y-px rounded-md shadow-lg"></div>
        <div className="bg-green-700 absolute bottom-24 right-0 w-16 h-16 transform rotate-45 translate-x-px translate-y-px rounded-md shadow-lg"></div>

      </div>
      
    )
}