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
  


  


  return (
    
    

    <Navbar id="navbar" sticky="top" bg="light" >
    <div >
      <Container id="container">
        <Navbar.Brand id='navname' href='/'>CLAYTON GORHAM</Navbar.Brand> 
        <Nav className='me-auto'>
             <Nav.Link href='#projectsh2'>Projects</Nav.Link>
             {/* <Nav.Link href='#about'>About</Nav.Link>
             <Nav.Link href='#contact'>Contact</Nav.Link>  */}
        </Nav>
      </Container> </div>
    </Navbar>
    
    
  );
}

