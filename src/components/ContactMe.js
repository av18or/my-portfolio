import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function ContactMe() {

  const wrapperStyle = {
    
    justifyContent: "space-between",
    textAlign: "center",
    paddingTop: "20vw",
    paddingBottom: "10vw",
    paddingLeft: "30vw",
    paddingRight: "30vw",
    paddingBottom: "10vw",
    backgroundColor: "#022b3a",
    
  };

  const textStyle = {
    color: "white",
  };

  return (
    <div id='contact' style={wrapperStyle}>
    <h2 style={textStyle}>CONTACT ME</h2>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
  <Form.Control type="name" placeholder="Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">

    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">

  <Form.Control type="subject" placeholder="Subject" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">

  <Form.Control type="message" placeholder="Message" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">

    
    
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  )
}
