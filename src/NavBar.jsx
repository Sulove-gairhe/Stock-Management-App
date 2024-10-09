import React, { useState } from "react";
import Logo from './Logo.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faSearch } from "@fortawesome/free-solid-svg-icons";   

function Navbar() {
  const[isFocused,setFocus]=useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-100 shadow-md">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Centered Search Bar */}
      <div className="flex-grow flex items-center justify-center">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search your Product"
            className="w-full h-12 pl-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
            
//for color change of border and icon when user clicks in the input field

            onFocus={()=>setFocus(true)}//when input field gains focus 
            onBlur={()=>setFocus(false)}//when input field loses focus
          />

          
          <FontAwesomeIcon
            icon={faSearch}
            className={`absolute right-4 top-4 transition-colors duration-300 ${isFocused? 'text-blue-500' : 'text-gray-500'}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
