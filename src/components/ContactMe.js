import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const wrapperStyle = { textAlign: "center", marginTop: "100px" };

export default function ContactMe() {
  return (
    <div style={wrapperStyle}>
    <h2>CONTACT ME</h2>
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
