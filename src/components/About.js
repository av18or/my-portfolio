import React from 'react'
import Accordion from 'react-bootstrap/Accordion'





    export default function About() {

      const wrapperStyle = {
        
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "20vw",
        paddingBottom: "20vw",
        paddingLeft: "20vw",
        paddingRight: "20vw",
        backgroundColor: "#022b3a",
      
      };

      const textStyle = {
        color: "white",
      };

      




  return (

    <div id='about'style={wrapperStyle}>
    <h2 style={textStyle }>ABOUT</h2>
    
    <Accordion>
      
  <Accordion.Item eventKey="0">
  
    <Accordion.Header>Values</Accordion.Header>
    
    <Accordion.Body>
      text here
    </Accordion.Body>
    
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Education</Accordion.Header>
    <Accordion.Body>
      text here
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Work Experience</Accordion.Header>
    <Accordion.Body>
      text here
    </Accordion.Body>
  </Accordion.Item>
</Accordion>


</div>
  )
  
}
