import React from 'react'
import { useState ,useEffect} from 'react'
const PlanDetails = ({accountType,price,planType}) => {
   const [timing,setTiming]=useState("")
   setTimeout(()=>{
setTiming(localStorage.getItem("message"))
   },2000)
  const [isHidden, setIsHidden] = useState(false);

const [status,setStatus] =useState("Active")
const [backgroundColor, setBackgroundColor] = useState("#C1DCFC");

  const [textColor, setTextColor] = useState("#1F4D91");
function changeHandler(){
  setBackgroundColor("#FBF0F0");
    setTextColor("#E57874");
    setStatus("Cancelled");
    setIsHidden(true);
}
  return (
    <div className='text-richblack-900 bg-gray-200 w-[700px] mx-auto mt-52 rounded-md'>
      <div className='flex flex-row justify-between'> 
      <div className='flex flex-row'> <h1 className='font-medium text-2xl mt-4 ml-11'>Current Plan Details</h1>
        <span style={{ backgroundColor: backgroundColor, color: textColor }} className='mt-4 ml-3 rounded-md py-2 px-2 font-bold text-[#1F4D91] '>{status}</span></div>
        <div> <button style={{ display: isHidden ? "none" : "block" }} className='mt-4 font-medium mr-5 text-[#1F4D91] text-lg' onClick={changeHandler}
        >Cancel</button></div></div>
        
       
        <h2 className='font-medium text-xl text-gray-500 mt-4 ml-11'>{localStorage.getItem("plantype")}</h2>

        {/* PRICE */}
        <span className='font-extrabold text-4xl  ml-11'>₹ {localStorage.getItem("planprice")} / {localStorage.getItem("planduration")}</span>
        <br/>
        <button className= ' border-2 border-[#1e4c90] bg-gray-200 rounded-md text-xl font-medium text-[#1e4c90]  py-4 w-[200px] mt-10 ml-11 mb-10'>
            Change Plan
        </button>
        <br/>
         <span>{timing}</span> 
    </div>
  )
}

export default PlanDetails