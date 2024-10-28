import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


function Sidebar(){
    
    const [isToggledOn,ToggleOnOff]=useState(true);

    const ToggleSideBar = ()=>{
        ToggleOnOff(!isToggledOn); 
    }

    const[inputFeildApppar,isInputFeildAppear]=useState(false);

    const toggleInput =()=>{
        isInputFeildAppear(!inputFeildApppar)
    }


    return(
    <div className="flex">
        {/* for toggle button */}
       
        <button className="block sm:hidden p-2  text-2xl" onClick={ToggleSideBar}>
            {
                isToggledOn?
                (<FontAwesomeIcon icon={faTimes} />)
                :(<FontAwesomeIcon icon={faBars}/>)
            }
        </button>
        

        <div className={`${isToggledOn?'block':'hidden'} mx-3  px-6 py-14 text-2xl font-semibold  flex flex-wrap flex-col flex-grow w-auto h-full gap-10`}>
            <a href="" onClick={toggleInput}>Add Products</a>
            <a href="">Manage Stocks</a>
            <a href="">Sales Review</a>
            <a href="">Login</a>
        </div>

    </div>
        
    
    )
}

export default Sidebar;