import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./cart";
import { Form, Modal, Button } from "react-bootstrap";

function Menu() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div>
      <nav className="navbar-expand-lg navbar navbar-dark bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/carddetail"}>
                View Cart
              </Link>
            </li>
            <li className="nav-item">
              {values.map((v, idx) => (
                <a key={idx} className="nav-link" onClick={() => handleShow(v)}>
                  Add Product
                </a>
              ))}
            </li>
          </ul>
        </div>
      </nav>
      <Cart></Cart>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="bg-primary" closeButton>
          <Modal.Title style={{ color: "#fff" }}>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div  className="container card p-4">
            <div className=" row">
              <Form className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="name"
                    placeholder="Enter Product Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    className="price"
                    placeholder="Enter Product Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    className="quantity"
                    placeholder="Enter Product Quantity"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    className="image"
                    placeholder="Enter Product Image"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Menu;
