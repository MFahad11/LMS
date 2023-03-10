import {BsBook} from "react-icons/bs"
import {AiFillLock} from "react-icons/ai"
import {BiCheck} from "react-icons/bi"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchLectures } from "../../../middleware/redux/actions/lectures";
import { useEffect } from 'react';
export default function List() {
  const dispatch = useDispatch();
  const { loading, error, lectures} = useSelector((state) => state.lecturesReducer);
  // console.log(lectures)
  useEffect(() => {
    dispatch(fetchLectures());
  }, [dispatch]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="  bg-gray-100 rounded-lg p-4 ml-5 mt-5 border-2 border-black lg:w-1/2 mr-1">
      <div className="sm:flex text-center items-center w-full">
        <h1 className="text-lg font-bold ml-2 ">Learn JavaScript 100%</h1>
        <div className="ml-auto">
          <div>10 Lectures</div>
          <div> 5 hours 8 minutes</div>
        </div>
      </div>
      {/* Lecture list */}
      <hr className="my-6  border-gray-400 border-3"></hr>
      {lectures.map((lecture,index)=>{
        
      <div key={index} className="sm:flex text-center items-center w-full h-fit hover:bg-slate-400">
   
        <BsBook className="text-2xl"/><p className="ml-1">{lecture.name}</p>
        <div className="ml-auto flex items-center">
          <BiCheck className="text-xl"/>
          <div> 8 minutes</div>
        </div>
        
      </div>
      })}


      {/* lecture list */}
    </div>
  );
}
