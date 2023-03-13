import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';
export default function Content(){
    const location = useLocation();
    const data = location.state;
    
    return(
        <div className="mx-auto max-w-screen-md text-center">
        <h1 className="text-2xl font-bold mt-6 mb-4">{data.name}</h1>
        <iframe
          src={data.video}

          title={data.name}
          
        ></iframe>
        <p className="mb-2">Check out more:</p>
        <a href={data.text} className="text-blue-500 underline hover:text-blue-700">
          Click here
        </a>
        <br/>
        <Link to={`/quiz/${data._id}`}>
            <button className="btn">Take quiz</button>
        </Link>
      </div>
        )
    }
   