import { useState, useEffect } from "react";
import "./WhereWorld.modules.scss";
import TaskBar from "./components/Input";
import { BsMoon } from "react-icons/bs"


function WhereWorld() {
  const [them, setThem ] = useState(true)
  return (
    
    <div className={them ? 'WhereWorl-container' :''}>

    <div className="bg-color ">
    <div className="header-ww">
      <h1 className='title-ww'> Where in the world?</h1>
              <span className='dark-mode' onClick={() => setThem(!them) }>
              <BsMoon/>
                  <h1 className='d-m'>Dark Mode</h1>
              </span>
    </div>
      
         <TaskBar />
    </div>
     
        <div className="national"></div>
    </div>
  );
}

export default WhereWorld;
