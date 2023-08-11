import React from 'react'
import { useState } from 'react'
const Monthly = ({accountType}) => {
    const [backgroundColor, setBackgroundColor] = useState("#7894BD");

    if(accountType==="Yearly"){
        return null;
    }

    const obj={
        mobile:"100",
       basic:"200",
       standard:"500",
       premium:"700"
    }

function clickHandler(s){
    const tdd=document.getElementsByClassName("bt");
    console.log(tdd);
 Array.from(tdd).map((e)=>{
    console.log(e);
    return e.style.backgroundColor ='#7894BD'
 })
   localStorage.setItem("plantype",s);
   localStorage.setItem("planprice",obj[s.toLowerCase()]);
    const el=document.getElementById(s.toLowerCase());
    el.style.backgroundColor='#1F4D91'; 
}
  return (
    <table className='mt-12 mx-40 relative'>
    <tbody>
     <tr>
         <td>
         
         </td>
         <td className='text-center '><button style={{ backgroundColor: backgroundColor }} onClick={()=>clickHandler("Mobile")} className='px-6 py-8 text-[16px] mx-10 bt' id='mobile'>Mobile</button></td>
         <td><button style={{ backgroundColor: backgroundColor }} onClick={()=>clickHandler("Basic")} className='bg-[#7894BD] px-8 py-8 text-[16px]  mx-10 bt' id='basic'>Basic</button></td>
         <td><button style={{ backgroundColor: backgroundColor }} onClick={()=>clickHandler("Standard")} className='bg-[#7894BD] px-6 py-8 text-[16px] mx-10 bt' id='standard'>Standard</button></td>
         <td><button style={{ backgroundColor: backgroundColor }} onClick={()=>clickHandler("Premium")} className='bg-[#7894BD] px-6 py-8 text-[16px] mx-10 bt' id='premium'>Premium</button></td>
     </tr>
     <tr>
         <td className='text-[#929292] text-[20px] pt-6 '>Monthly price</td>
         <td className='text-[#929292] text-center pt-6 text-[20px] '>100</td>
         <td className='pt-6 text-[#929292] text-center text-[20px] '>200</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>500</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>700</td>

     </tr>
     <tr>
         <td className='pt-6 text-[#929292] text-[20px]'>Video quality</td>
         <td className='pt-6 text-[#929292] text-center text-[20px] '>Good</td>
         <td className='pt-6 text-[#929292] text-center text-[20px] '>Good</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>Better</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>Best</td>

     </tr>
     <tr>
         <td className='text-[#929292]  text-[20px] pt-6'>Resolution</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>480p</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>480p</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>1080p</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>4K+HDR</td>

     </tr>
     <tr>
         <td className='text-[#929292]  text-[20px] pt-6 '>Devices you can use to watch</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>Phone</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>Phone+Tablet</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>Phone+Tablet+Computer</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>Phone+Tablet+TV</td>

     </tr>
     <tr>
         <td className='text-[#929292]  text-[20px] pt-6 '>Number of active screens at one time</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>1</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>3</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>5</td>
         <td className='text-[#929292] text-center text-[20px] pt-6 '>10</td>
         

     </tr>
    
    </tbody>
 </table>
  )
}

export default Monthly