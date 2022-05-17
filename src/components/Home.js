import React from 'react';
import "../Home.css";




export default function Home() {

  const wrapperStyle = {
   display: "flex",
   flexDirection: "row", 
   backgroundColor: "#022b3a",
   paddingTop: "15vw",
   paddingBottom: "15vw"
  
  };

  const h1 = {
    zIndex: "1",
    color: "white",
    fontSize: "70px",
    textAlign: "left",
    paddingTop: "1vw",
    flexWrap: "wrap",
    
    
  
  }

  const computerimg = {
   paddingTop: "2vw",
   paddingLeft: "1vw",
   justifyContent: "flex-start",
   animation: "fadeSpin 1s",
  }

 

  return (
    <div id='home' style={wrapperStyle}>
      <div id='test'>
    <h1 id='full' style={h1}>Full <br></br>Stack<br></br>Software<br></br>Developer</h1> 
    <div id='test1'></div>
    </div>
    <div style={computerimg}>
      <img alt="old Macintosh computer" src="mccomputer2.png" width="380px" ></img>
    </div>
    

      
</div>
  )
}
