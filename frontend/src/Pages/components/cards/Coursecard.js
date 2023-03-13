import React from "react";
import { Link } from "react-router-dom";


export default function Coursecard(){



    return(
      <div className="antialiased  font-sans p-6">
  <div className="container mx-auto">
    <div className="flex flex-wrap -mx-4">
  
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <div  className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img className="absolute inset-0 h-full w-full object-cover" src="https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/what-is-javascript-used-for.png" alt=""/>
        </div>
        <div className="p-4">
          
          <h2 className="mt-2 mb-2  font-bold">Learn javascript: The complete javascript programming course</h2>
        <p> Jessy walter</p>
          <p className="text-sm"></p>
          <div className="mt-3 flex items-center">
              <span className="text-sm font-semibold">PKR</span>&nbsp;<span className="font-bold text-xl">5000</span>&nbsp;<span className="text-sm font-semibold">Rs</span>
          </div>

<div className="mt-2 mb-2 flex items-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-black">4.95</p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <div className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-black">73 reviews</div>
</div>
 
 <Link to="/javascript">
<button className="mx-auto bg-black hover:bg-white hover:text-black hover:border-black border-2 text-white font-bold py-2 px-4 rounded-full">
  Course discription
</button>
 </Link>

        </div>
       
      </div>
      </div>
               
    </div>
  </div>
</div>
    )
}