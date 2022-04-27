import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

// import { useSelector } from "react-redux"; // gets data from the store
// import { useDispatch } from "react-redux"; // updates the store data
// import { changeColor } from "../store/colorStore"; // updates the store data

export default function Projects() {
  // vanilla js section
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
  };

  // const dispatch = useDispatch(); // send info (a.k.a. "state") to the store
  // const color = useSelector((state) => state.colorStore.color); // get initial value from store


    

  return (
    <div style={wrapperStyle}>
    <h2>PROJECTS</h2>
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Project title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Tic Tac Toe Game</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Project title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</div>
  )
}
