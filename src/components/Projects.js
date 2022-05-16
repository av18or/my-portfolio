import React from "react";
import Card from "react-bootstrap/Card";
import { IoNavigateOutline } from "react-icons/io5";
import "../projects.css"


// import { useSelector } from "react-redux"; // gets data from the store
// import { useDispatch } from "react-redux"; // updates the store data
// import { changeColor } from "../store/colorStore"; // updates the store data

export default function Projects() {
  
  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "#022b3a",
    paddingTop: "20vw",
    paddingBottom: "20vw",
    paddingLeft: "20vw",
    paddingRight: "20vw",
    

  };

  const textStyle = {
    color: "white",
  };

  const newcards ={
    // display: "flex",
    // flexDirection: "row",
    // flexWrap: "nowrap",
    // justifyContent: "space-between",
    // alignItems: "stretch",
    
   

  }

  


    

  return (
    
    <div id='projectsh2' style={wrapperStyle}>
    <h2 style={textStyle}>PROJECTS</h2>
    

<div id='projects' style={newcards}>
<Card border="light" style={{ width: '15rem' }}>
<IoNavigateOutline />
    <Card.Body>
      <Card.Title>Bug Tracker</Card.Title>
      <Card.Text>
        A bug/ticket tracker created as a MERN stack application.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">HTML | CSS | JAVASCRIPT | MONGOdb </small>
    </Card.Footer>
  </Card>

  <Card border="light" style={{ width: '15rem' }}>
    <IoNavigateOutline />
    <Card.Body>
      <Card.Title>Tic Tac Toe</Card.Title>
      <Card.Text>
        This is a game I created as a project during bootcamp.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">HTML | CSS | JAVASCRIPT</small>
    </Card.Footer>
  </Card>

  <Card border="light" style={{ width: '15rem' }}>
  <IoNavigateOutline />
    <Card.Body>
      <Card.Title>Project #3</Card.Title>
      <Card.Text>
        This is project #3. It is not complete. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Building ...</small>
    </Card.Footer>
  </Card>
 </div>
</div>
  )
}
