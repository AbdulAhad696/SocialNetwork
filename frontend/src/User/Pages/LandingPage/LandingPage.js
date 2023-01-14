import { Backdrop, Drawer } from "@mui/material";
import React from "react";
import TemporaryDrawer from "../../Components/drawer/Drawer";
import BackDrop from "../../Components/backdrop/BackDrop"



const LandingPage = () =>{
  return (
  <div className="container-fluid d-flex">
    {/* <TemporaryDrawer/> */}
    <BackDrop/>
    <div className="col-8">
      
    </div>
  </div>
  )
}

export default LandingPage;
