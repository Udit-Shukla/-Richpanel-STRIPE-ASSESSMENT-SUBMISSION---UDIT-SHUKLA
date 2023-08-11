import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {
 

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState( {
        email:"", password:""
    })     
    const[showPassword, setShowPassword] = useState(false);

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
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing the formData ");
        console.log(formData)
        navigate("/home");
    }

  return (
    <form onSubmit={submitHandler}
    className="flex flex-col w-[450px] gap-y-4 mt-6 mx-auto">

        <label className='w-full'>
            <p className='text-[1.25rem] text-richblack-900 mb-1 leading-[1.375rem]'>
                Email Address
            </p>
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email address"
                name="email"
                className='bg-richblack-5 rounded-[0.5rem] border-2 text-richblack- w-full p-[12px]'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[1.25rem] text-richblack-900 mb-1 leading-[1.375rem]'>
                Password
            </p>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='bg-richblack-5 rounded-[0.5rem] border-2 text-richblack-900 w-full p-[12px]'
            />

            <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 

                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password ?
                </p>
            </Link>
        </label>
         

        <button className='bg-[#1F4D91] rounded-[8px] text-[1.25rem] text-richblack-5 px-[12px] py-[8px] mt-6'>
            Login
        </button>

        <div className='text-center'>New to MyApp? <button onClick={()=>navigate("/signup")} className='text-[#1F4D91]'>Sign Up</button></div>

    </form>
  )
}

export default LoginForm
