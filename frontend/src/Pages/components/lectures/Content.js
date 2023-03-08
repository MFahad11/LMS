import { Link } from "react-router-dom"
export default function Content(){
    return(
        <div className="mx-auto max-w-screen-md text-center">
        <h1 className="text-2xl font-bold mt-6 mb-4">Learn JavaScript Variables</h1>
        <iframe
          src="https://www.youtube.com/embed/Q4p8vRQX8uY"
          title="Learn JavaScript Variables"
         
         
          className="my-4 w-full h-96 ml-4 mr-4"
        ></iframe>
        <p className="mb-2">Check out more:</p>
        <a href="https://www.w3schools.com/js/js_variables.asp" className="text-blue-500 underline hover:text-blue-700">
          Click here
        </a>
        <br/>
        <Link to="/quiz">
            <button className="btn">Take quiz</button>
        </Link>
      </div>
        )
    }
   