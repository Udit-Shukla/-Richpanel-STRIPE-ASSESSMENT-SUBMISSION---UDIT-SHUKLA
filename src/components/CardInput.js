import React, { useState } from "react";

const CardInput = ({ cardNumber, monthYear, cvv }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className=" border-2 border-gray-400 rounded-sm w-[410px] bg-white ">
      <input 
        type="text"
        placeholder="Card number"
        value={cardNumber}
        onChange={handleChange}
        className="w-[275px] py-1 font-semibold text-xl"
      />
      <input
        type="text"
        placeholder="MM/YY"
        value={monthYear}
        onChange={handleChange}
        className="text-right w-[68px] py-1 mr-2 font-semibold text-xl"
      />
      <input
        type="text"
        placeholder="CVV"
        value={cvv}
        onChange={handleChange}
        className="text-left w-[50px] py-1 font-semibold text-xl"
      />
    </div>
  );
};

export default CardInput;
