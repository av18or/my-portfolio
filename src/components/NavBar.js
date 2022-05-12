import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import '../navbar.css';

// import { useSelector } from "react-redux"; // gets data from the store
// import { useDispatch } from "react-redux"; // updates the store data
// import { changeColor } from "../store/colorStore"; // updates the store data

export default function NavigationBar() {
  //   const dispatch = useDispatch(); // send info (a.k.a. "state") to the store
  //   const color = useSelector((state) => state.colorStore.color); // get initial value from store
  const wrapperStyle = {
    
    backgroundColor: "#022b3a",


  };

  const navbartext = {
    paddingLeft: "19.5vw",
  }


  return (
    
    <div style={wrapperStyle}>

    <Navbar bg='dark' variant='dark'>
    <div style={navbartext} >
      <Container>
        <Navbar.Brand href='#home'>CLAYTON GORHAM</Navbar.Brand> 
        <Nav className='me-auto'>
          {/* <Nav.Link href='#home'>About</Nav.Link>
          <Nav.Link href='#features'>Projects</Nav.Link>
          <Nav.Link href='#pricing'>Contact</Nav.Link> */}
        </Nav>
      </Container> </div>
    </Navbar>
    </div>
    
  );
}

