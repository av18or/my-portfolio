import React from 'react';
import "../Home.css";




export default function Home() {

  const wrapperStyle = {
   display: "flex",
   flexDirection: "row", 
   justifyContent: "flex-start",
   backgroundColor: "#022b3a",
   paddingTop: "18vw"
  
  };

  const h1 = {
    zIndex: "1",
    color: "white",
    fontSize: "70px",
    textAlign: "left",
    paddingTop: "100px",
    paddingLeft: "20vw",
    animation: "fadeIn 3s",
  }

  const computerimg = {
   paddingTop: "115px",
   paddingLeft: "1vw",
   justifyContent: "flex-start",
   animation: "fadeIn 3s",
  }

 

  return (
    <div style={wrapperStyle}>
  
  

    <h1 style={h1}>Full <br></br> Stack<br></br> Software <br></br>Developer</h1>
    
    <div style={computerimg}>
      <img alt="old Macintosh computer" src="mccomputer2.png" width="380px" ></img>
    </div>

      
</div>
  )
}
