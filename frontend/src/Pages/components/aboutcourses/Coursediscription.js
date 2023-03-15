
import { useState } from "react"
import {AiOutlineCheck} from "react-icons/ai"
import {useDispatch,useSelector} from  "react-redux"
import { addStudentData } from "../../../middleware/redux/actions";
import {useNavigate} from 'react-router-dom'
export default function Coursediscription(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate=useNavigate()
  // const for storing form data
  const [student, setStudent] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const dispatch=useDispatch();
  

  const [nameError, setNameError] = useState(true);
  const [phoneError, setphoneError] = useState(true);
  const [emailError, setEmailError] = useState(true);

  let name,value
  const handleInputs = (e) =>{
		
		name = e.target.name;
		value=e.target.value;
		
	setStudent({...student,[name] : value}); 

  if (e.target.id === 'name') {

    if (e.target.value.length <= 3  ) {
      setNameError(true)
    }
    else{
      setNameError(false)
    }
    
  }


  else if (e.target.id === 'number') {
    const p = parseInt(e.target.value)
   
    const pakPhonePattern = /^(\+923|00923)[0-9]{9}$/

    if (e.target.value.length < 11 || !pakPhonePattern.test(e.target.value)) {
      setphoneError(true)
    } else {
      setphoneError(false)
    }
  }
  
  

   else if (e.target.id === 'email') {
 
     if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
       setEmailError(false)
     }
     
     else{
       setEmailError(true)
     }
   
     
   }

}


const onFormSubmit=(e)=>{
  if( nameError  || phoneError || emailError ){
    alert("Please Fill all the form correctly ")
  }
  else{

    e.preventDefault()
  dispatch(addStudentData(student))
  setStudent({
    name: "",
    phone: "",
    email: "",
  });
  navigate('/payment')
  setNameError(true);
  setEmailError(true);
  setphoneError(true);




  
  }

  
   }

    return (

      // main div starts
      <div>
        {/* heading body start */}
        <div className="bg-black p-10">
        <h1 className="text-white text-4xl lg:text-6xl text-center pb-5 ">Learn JavaScript: The Modern JavaScript Course Addition</h1>
        <h2 className="text-white  lg:text-lg text-center pb-5">Created by: Jessy Pinkman</h2>
        <p className="text-gray-300 text-xl  pb-5">Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!</p>
        <div className="flex justify-between items-center py-5">
        <div className="flex flex-wrap items-center justify-center text-center">
  <span className="text-white text-lg mr-2">4.3</span>
  <span className="text-yellow-400 text-lg">⭐️⭐️⭐️⭐️⭐️</span>
  <span className="text-gray-400 text-lg ml-2 sm:ml-0">(4,200 ratings)</span>
  <span className="text-gray-400 text-lg ml-2 sm:ml-0">23,000 students</span>
</div>

        </div>
        <div className="text-gray-400 text-sm pb-5">Last updated: 12-January-2022 | Language: English</div>
        <button  onClick={() => setIsModalOpen(true)} className="bg-white text-black py-3 px-6 rounded-lg text-xl lg:text-2xl hover:bg-pink-600">Enroll now</button>
      </div>
      {/* heading body ends */}
        {/* body div start */}
        <div className="ml-4">
      {/* what you'll learn start */}

      <div className=" border w-fit border-gray-600 p-4 mt-4 ">
  <h2 className="font-bold">What you'll learn</h2>
  <ul className="list-disc list-inside">
    <li className="flex items-center"><AiOutlineCheck/>Introduction to JavaScript</li>
    <li className="flex items-center"><AiOutlineCheck/>JavaScript core concepts</li>
    <li className="flex items-center"><AiOutlineCheck/>JavaScript DOM</li>
  </ul>
</div>  
    {/* what you'll learn ends  */}


    {/* requirements  starts*/}
    <div className="p-4 ">
  <h2 className="font-bold">Requirements</h2>
  <ul className="list-disc">
    <li >Basic HTML CSS</li>
    <li >Internet Connection</li>
    <li >Windows/Linux/MAC</li>
  </ul>
</div>  


    {/* requirements ends */}
      {/* course discription starts */}
    <h2 className="font-bold">Course Discription</h2>
    <div className="mt-2">
    Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more?

If you’re looking to learn Python for the very first time or need a quick brush-up, this is the course for you!

Python has rapidly become one of the most popular programming languages around the world. Compared to other languages such as Java or C++, Python consistently outranks and outperforms these languages in demand from businesses and job availability. The average Python developer makes over $100,000 - this number is only going to grow in the coming years.<br/><br/>

The best part? Python is one of the easiest coding languages to learn right now. <br/><br/>It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python.<br/> By the time you finish this course, you'll be an absolute pro at programming!

If you read the above list and are feeling a bit confused,<br/> don’t worry! As an instructor and student on Udemy for almost 4 years, I know what it’s like to be overwhelmed with boring and mundane. I promise you’ll have a blast learning the ins and outs of python. I’ve successfully taught over 200,000+ students from over 200 countries jumpstart their programming journeys through my courses. 
If you read the above list and are feeling a bit confused, don’t worry! As an instructor and student on Udemy for almost 4 years, I know what it’s like to be overwhelmed with boring and mundane. I promise you’ll have a blast learning the ins and outs of python. I’ve successfully taught over 200,000+ students from over 200 countries jumpstart their programming journeys through my courses. 
    </div>
    {/* course discription ends */}


    {/* about author starts */}
    <h2 className="font-bold mt-4">About Mentor</h2>
    <div className="mt-2">
    Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more?

If you’re looking to learn Python for the very first time or need a quick brush-up, this is the course for you!

Python has rapidly become one of the most popular programming languages around the world. Compared to other languages such as Java or C++, Python consistently outranks and outperforms these languages in demand from businesses and job availability. The average Python developer makes over $100,000 - this number is only going to grow in the coming years.<br/><br/>

The best part? Python is one of the easiest coding languages to learn right now. <br/><br/>It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python.<br/> By the time you finish this course, you'll be an absolute pro at programming!

If you read the above list and are feeling a bit confused,<br/> don’t worry! As an instructor and student on Udemy for almost 4 years, I know what it’s like to be overwhelmed with boring and mundane. I promise you’ll have a blast learning the ins and outs of python. I’ve successfully taught over 200,000+ students from over 200 countries jumpstart their programming journeys through my courses. 
If you read the above list and are feeling a bit confused, don’t worry! As an instructor and student on Udemy for almost 4 years, I know what it’s like to be overwhelmed with boring and mundane. I promise you’ll have a blast learning the ins and outs of python. I’ve successfully taught over 200,000+ students from over 200 countries jumpstart their programming journeys through my courses. 
    </div>

    {/* about author ends */}

    {/* why this course?  starts*/}
    <h2 className="font-bold mt-4">Why this course?</h2>
      <div className="mt-2">Even if you haven't touched coding before, it won't matter. The easy step-to-step lectures will quickly guide you through everything you'll need to know about coding, mainly Python. This course is here for you to get accustomed and familiar with Python and its syntax. And above all, Python is one of the easiest coding languages to learn, and there's a lot you can do with it.</div>
      
    {/* why this course ends */}
        </div>

      {/* body div ends */}

        {/* modal starts */}
        <div
                  className={`fixed z-10 inset-0 overflow-y-auto ${isModalOpen ? "" : "hidden"
                    }`}
                >
                  <div className="flex items-center justify-center min-h-screen">
                    <div
                      className="bg-white border border-gray-400 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-3/5 h-3/5"
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby="modal-headline"
                    >
                      <div className="px-4 py-5 sm:p-6">
                        <div className="mb-4">
                          <label
                            htmlFor="name"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Full name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={student.name}
                            onChange={handleInputs}
                            id="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Jasson white"
                          />
                            { nameError && <span className="text-xs text-red-600">Please enter valid name</span>}
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="number"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            phone number
                          </label>
                          <input
                            type="number"
                            id="number"
                            name="phone"
                            value={student.phone}
                            onChange={handleInputs}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="03005200559"
                          />

                { phoneError && <span className="text-xs text-red-600">Please enter valid number</span>}
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={student.email}
                            onChange={handleInputs}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="xyx@xyx.com"
                          />
                            { emailError && <span className="text-xs text-red-600">Please enter valid Email address</span>}
                        </div>
                        {/* Modal Buttons Here */}
                      </div>
                      <br />
                      {/* cancel/submit start */}
                      <div className="mb-2 mx-6 flex flex-col md:flex-row md:col-span-5 justify-between items-center">
                        <div className="mb-4 md:mb-0">
                          <button
                            onClick={() => setIsModalOpen(false)}
                            className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                          >
                            &nbsp; Cancel &nbsp;
                          </button>
                        </div>
                        <div className="flex justify-end">
                          <button onClick={onFormSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Apply
                          </button>
                        </div>
                      </div>
                      {/* cancel/submit ends */}
                    </div>
                  </div>
                </div>

                {/* modal ends */}

      </div>
      // main div ends
    )
}
          