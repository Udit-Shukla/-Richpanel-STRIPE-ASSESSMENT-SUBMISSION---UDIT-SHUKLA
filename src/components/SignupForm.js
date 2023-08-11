import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import {useNavigate} from "react-router-dom"
import axios from 'axios';

const SignupForm = ({setIsLoggedIn}) => {
    const Api = axios.create({baseURL : 'https://bckenddd.onrender.com'});
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirm:"",
        remember:""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return ;
        }
        localStorage.setItem("email",formData.email);
        Api.post("/register",formData);
    console.log(setIsLoggedIn)
        setIsLoggedIn(true);
        toast.success("Account Created");
        console.log("printing Final account data ");
        console.log(formData);

        navigate("/home");
    }


  return (
    <div>
        

        <form onSubmit={submitHandler} className='w-9/12 mx-auto'>
        {/* Name*/}
            <div className='flex flex-col md:flex-row gap-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[1.25rem] text-richblack-900 mb-1 leading-[1.375rem]'>
                            Name
                        </p>
                        <input
                            required
                            type="text"
                            name="name"
                            onChange={changeHandler}
                            placeholder="Enter Your Name"
                            value={formData.name}
                            className='bg-richblack-5 rounded-[0.5rem] text-richblack-900 w-full p-[12px] '
                        />
                    </label>

                   
            </div>
            {/* email Add */}
            <div className='mt-[20px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[1.25rem] text-richblack-900 mb-1 leading-[1.375rem]'>Email Address</p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                        className='bg-richblack-5 rounded-[0.5rem] text-richblack-900 w-full p-[12px]'
                    />
            </label>
            </div>
            

            {/* createPassword and Confirm Password */}
            <div className='w-full flex flex-col md: gap-4 mt-[20px] '>
                <label className='w-full relative'>
                    <p className='text-[1.25rem] text-richblack-900 mb-1 leading-[1.375rem]'>Password</p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='bg-richblack-5 rounded-[0.5rem] text-richblack-900 w-full p-[12px]'
                    />
                    <span
                     className='absolute right-3 top-[38px] cursor-pointer' 
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? 

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : 

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[1.25rem] text-richblack-900 mb-1 leading-[1.375rem]'>Confirm Password</p>
                    <input
                        required
                        type= {showConfirmPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className='bg-richblack-5 rounded-[0.5rem] text-richblack-900 w-full p-[12px]'
                    />
                    <span 
                     className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ?

                         (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : 

                         (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
               
                <div className="flex flex-row"><input
          type="checkbox"
          onChange={changeHandler}
          name="remember"
          id="remember"
          checked={formData.remember}
        ></input>
        <label htmlFor="remember" className='ml-1 text-[1.12rem]'>Remember me </label></div>
            </div>
        <button className=' w-full bg-[#1F4D91] rounded-[8px] text-[1.25rem] text-richblack-5 px-[12px] py-[8px] mt-6'>
            Sign Up
        </button>
        
        </form>
        <div className='text-center mt-[8px]'>Already have an account? <button onClick={()=>navigate("/login")} className='text-[#1F4D91] '>Login</button></div>

    </div>
  )
}

export default SignupForm
