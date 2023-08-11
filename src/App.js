import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import {useState } from 'react'
import Payment from "./components/Payment";
import PlanDetails from "./components/PlanDetails";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  return (
    <div className="w-screen min-h-screen bg-[#1e4c90] flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element= {<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/payment" element={<Payment  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/details" element={<PlanDetails  setIsLoggedIn={setIsLoggedIn} />} />
       

      </Routes>

    </div>
    )
}

export default App;
