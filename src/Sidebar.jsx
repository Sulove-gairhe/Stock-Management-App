import React from "react";
import CardRender from "./CardRender";

function Sidebar(){
    return(
    
        <div className=" mx-3  px-6 py-9 text-xl flex flex-wrap flex-col flex-grow w-auto h-full gap-10 ">
            <a href="">Add Products</a>
            <a href="">Manage Stocks</a>
            <a href="">Sales Review</a>
            <a href="">Login</a>
        

        </div>
    
    )
}

export default Sidebar;