import React from 'react'
import CardInput from './CardInput'
import {Link} from "react-router-dom"
import axios from 'axios';

const Payment = ({accountType=localStorage.getItem("planduration"),price=Number(localStorage.getItem("planprice")),planType=localStorage.getItem("plantype")}) => {
  const Api = axios.create({baseURL :"https://bckenddd.onrender.com"});
  const clickHandler=async()=>{
  const formData={
    email:localStorage.getItem("email"),
    plantype:accountType
  }

  const res=await Api.post("/buyplan",formData)
  console.log(res);
    localStorage.setItem("message",res.data.message);

 
  if(planType==="Mobile" && price===100){
    window.open("https://buy.stripe.com/test_14k6p6dTkaXq2Q09AB", "_blank");
  }
  else if(price===200 && planType==="Basic"){
    window.open("https://buy.stripe.com/test_28oaFmg1s9Tm2Q07ss", "_blank");
  }
  else if(price===500 && planType==="Standard"){
    window.open("https://buy.stripe.com/test_fZe6p65mOfdG1LW4gi", "_blank");
  }
  else if(price===700 && planType==="Premium"){
    window.open("https://buy.stripe.com/test_fZe3cUdTk5D64Y89AD", "_blank");
  }
  else if(price===2000 && planType==="Basic"){
    window.open("https://buy.stripe.com/test_cN28xeaH81mQ9eo5ko", "_blank");
  }
  else if(price===1000 && planType==="Mobile"){
    window.open("https://buy.stripe.com/test_6oEeVC7uWfdGduE3ch", "_blank");
  }
  else if(price===5000 && planType==="Standard"){
  console.log(planType,price)

    window.open("https://buy.stripe.com/test_4gw6p6bLcaXqduE4gm", "_blank");
  }
  else if(price===7000 && planType==="Premium"){
    window.open("https://buy.stripe.com/test_9AQ28QaH8e9C3U47sz", "_blank");
  }
}
  return (
    <div className='flex flex-row mt-[150px] bg-richblack-5 w-6/12 mx-auto rounded-lg  '>
        <div className='flex flex-col w-[1800px] ml-10 mb-12'>
        {/* Left part  */}
        <h1 className='text-5xl mt-7  font-medium '>Complete Payment</h1>
        <p className='mt-3 mb-6 text-gray-400 text-lg'>Enter your credit or debit card details below</p>
        <CardInput></CardInput>
        <Link to="/details">
        <button onClick={clickHandler} className= 'bg-[#1e4c90] rounded-md text-xl font-medium text-richblack-5 mt-10  py-4 w-[200px]'>
            Confirm Payment
        </button>
        </Link>
        </div>
        
        {/* Right Part */}
        <div className='w-full bg-gray-100 rounded-lg '>
            <h1 className='font-medium text-[2.0rem] mt-7 ml-7'>Order Summary</h1>
            <div className='flex flex-col mt-5 text-xl font-medium'>
                
               <div className='flex flex-row justify-between mb-3 ml-7' ><span>Plan Name</span><span className='mr-7'>{planType}</span></div>
               <hr/>
               <div className='flex flex-row justify-between mb-3 mt-3 ml-7'> <span>Billing Cycle</span><span className='mr-7'>{accountType}</span></div>
               <hr/>
               <div className='flex flex-row justify-between mb-3 mt-3 ml-7'> <span>Plan price</span><span className='mr-7'>{price}/month</span></div><hr/>
               
            </div>
        </div>
      </div>
  )
}

export default Payment