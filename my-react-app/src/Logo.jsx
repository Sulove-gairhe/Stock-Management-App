import React from "react";
import logoImage from '../src/assets/logo.jpg'

function Logo(){
    return(
        <div>
            <img className="rounded-full h-32 w-28" src={logoImage}></img>
        </div>
    )
}

export default Logo;