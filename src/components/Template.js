import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc"


const Template = ({title, formType, setIsLoggedIn}) => {

    // console.log(formType)
  return (

        <div className='w-11/12 max-w-[550px] lg:order-1 order-2 flex flex-col mx-auto border rounded-lg bg-white mt-7' >
            <h1
            className='text-richblack-900 font-semibold text-[1.8rem] mt-16
             leading-[2.375rem] text-center' 
            >
                {title}
            </h1>


            {formType === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            <button className='w-[450px] flex mx-auto justify-center rounded-[8px] text-lg text-richblack-900
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 mb-10 '>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>

        </div>

    
  )
}

export default Template
