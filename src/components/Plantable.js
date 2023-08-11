import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom"
import Monthly from './Monthly';
import Yearly from './Yearly';
const Plantable = () => {
    const [accountType, setAccountType] = useState("Monthly");
    

  return (
    <div className='bg-white mx-auto rounded-md mt-12 w-9/12 mb-4 '>
        <div
        className='flex  bg-[#1F4D91] p-1 gap-x-1 my-6 rounded-full max-w-max absolute top-[200px] left-[380px] z-40 '>

            <button
            className={`${accountType === "Monthly" 
            ?
              "bg-richblack-5 text-lg font-bold text-[#1F4D91]"
            :"bg-transparent text-richblack-200"} text-lg py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> {setAccountType("Monthly")
             localStorage.setItem("planduration","Monthly")}
            }>
                Monthly
            </button>

            <button
            className={`${accountType === "Yearly" 
            ?
            "bg-richblack-5 text-lg font-bold text-[#1F4D91]"
            :"bg-transparent text-richblack-200"}  text-lg py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => {setAccountType("Yearly")
            localStorage.setItem("planduration","Yearly")
            }}>
                Yearly
            </button>
        </div>
        <Monthly accountType={accountType}/>
        <Yearly accountType={accountType}/>
<Link to="/payment">
<button className='bg-[#1F4D91] rounded-[8px] text-[1.25rem] text-richblack-5 px-28 py-[8px] mb-10 mt-16
 '>
            Next
        </button>
</Link>
</div>
  )
}

export default Plantable