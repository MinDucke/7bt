import { useState, useEffect } from "react";
import { BrowserRouter as Routes } from "react-router-dom";
import "./WhereWorld.modules.scss";
import HeaderWW from "./components/Header/header";
import TaskBar from "./components/Input";



function WhereWorld() {
  return (
    
    <div className="WhereWorl-container">
      <HeaderWW />
    
       <TaskBar />
     
        <div className="national"></div>
    </div>
  );
}

export default WhereWorld;
