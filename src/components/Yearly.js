import React from 'react'
import {useState} from 'react'
const Yearly = ({accountType}) => {
     const [backgroundColor, setBackgroundColor] = useState("#7894BD");
    if(accountType==="Monthly"){
        return null;
    }
    const obj={
        mobile:"1000",
       basic:"2000",
       standard:"5000",
       premium:"7000"
    }
    function clickHandler(s){
        const tdd=document.getElementsByClassName("bt");
        console.log(tdd);
     Array.from(tdd).map((e)=>{
        console.log(e);
        return e.style.backgroundColor ='#7894BD'
     })
       localStorage.setItem("planprice",obj[s.toLowerCase()]);
       localStorage.setItem("plantype",s);
        const el=document.getElementById(s.toLowerCase());
        el.style.backgroundColor='#1F4D91'; 
    }
      return (
        <table className='mt-12 mx-60 relative'>
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
             <td className='text-[#929292] text-[20px] pt-6'>Monthly price</td>
             <td className='text-[#929292] text-center pt-6 text-[20px] '>1000</td>
             <td className='pt-6 text-[#929292] text-center text-[20px] '>2000</td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>5000</td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>7000</td>
    
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
             <td className='text-[#929292] text-center text-[20px] pt-6 '>Phone</td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>Phone</td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>Phone</td>
    
         </tr>
         <tr>
             <td ></td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>Tablet</td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>Tablet</td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>Tablet</td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>Tablet</td>
             
    
         </tr>
         <tr>
             <td ></td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>Computer</td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>Computer</td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>Computer</td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>Computer</td>
    
         </tr>
         <tr>
             <td ></td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>TV</td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>TV</td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>TV</td>
             <td className='text-[#929292] text-center text-[20px] pt-6 '>TV</td>
    
         </tr>
         
        </tbody>
     </table>
  )
}

export default Yearly