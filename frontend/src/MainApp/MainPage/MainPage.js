import React from "react";
import bgad from "../../assets/bgad.mp4"
import './MainPage.css'
const MainPage = () =>{
  return (
    <div loading="lazy" className="p-0 m-0 d-flex justify-content-center align-items-center container-fluid">
      <video className="video-Styling" src={bgad} autoPlay loop typeof="video/mp4"/>
    </div>  
  )
}

export default MainPage;



// style={{width:"100%",height:"100%",objectFit:'cover'}}