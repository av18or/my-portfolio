import React from 'react';





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
    fontSize: "80px",
    textAlign: "left",
    paddingTop: "100px",
    paddingLeft: "20vw",
  }

  const computerimg = {
   paddingTop: "109px",
   paddingLeft: "1vw",
   justifyContent: "flex-start"
   
  }

 

  return (
    <div style={wrapperStyle}>
  
  

    <h1 style={h1}>Full <br></br> Stack<br></br> Software <br></br>Developer</h1>
    
    <div style={computerimg}>
      <img alt="old Macintosh computer" src="mccomputer2.png" width="450px" ></img>
    </div>

      
</div>
  )
}
