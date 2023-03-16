import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';
export default function Content(){
    const location = useLocation();
    const data = location.state;
    
    return(
      <div className="mx-auto max-w-screen-md text-center">
  <h1 className="text-3xl font-bold mt-8 mb-6">{data.name}</h1>
  <div className="flex justify-center items-center w-full h-80">
    <iframe className="w-full h-full" src={data.video} title={data.name}></iframe>
  </div>
  <p className="my-4">Check out more:</p>
  <a href={data.text} className="text-blue-500 underline hover:text-blue-700">
    Click here
  </a>
  <br/>
  <Link to={`/quiz/${data._id}`}>
    <button className="mt-6 px-8 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      Take quiz
    </button>
  </Link>
</div>

      //   <div className="mx-auto max-w-screen-md text-center">
      //   <h1 className="text-2xl font-bold mt-6 mb-4">{data.name}</h1>
      //   <iframe className="mx-auto w-5/6 h-80"
      //     src={data.video}

      //     title={data.name}
          
      //   ></iframe>
      //   <p className="mb-2">Check out more:</p>
      //   <a href={data.text} className="text-blue-500 underline hover:text-blue-700">
      //     Click here
      //   </a>
      //   <br/>
      //   <Link to={`/quiz/${data._id}`}>
      //       <button className="btn">Take quiz</button>
      //   </Link>
      // </div>
        )
    }
   