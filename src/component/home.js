import React from "react";
import { connect } from "react-redux";
import { Card, Col, Container, Row } from "react-bootstrap";
import { addtostore, removetostore } from "../services/actions/action";
import { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = ({ addtostore, removetostore }) => {
  const [list, setpData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/posts/").then((result) => {
      result.json().then((resp) => {
        setpData(resp);
      });
    });
  }, []);

  return (
    <div>
      {/* <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/header.webp" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/header.webp"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/header.webp" alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
*/}
      <Container>
        <Row>
          {list.map((content, i) => (
            <Col className="mt-3 col-sm-6 col-md-6 col-lg-3 " key={i}>
              <Card style={{ width: "20rem", margin: "auto" }}>
                <Card.Img
                  className="img-rounded"
                  variant="top"
                  src={content.image}
                />
                <Card.Body>
                  <Card.Title>{content.name}</Card.Title>
                  <Card.Title>INR {content.price}</Card.Title>
                  <Card.Text>{content.desc.substring(0, 100)}</Card.Text>

                  <Link
                    className="m-2 btn btn-warning"
                    to={"/product/" + content.id}
                  >
                    Get Detail
                  </Link>

                  <button
                    className="m-2 btn btn-success"
                    onClick={() =>
                      addtostore({
                        id: content.id,
                        name: content.name,
                        image: content.image,
                        desc: content.desc,
                        price: content.price,
                        quantity: 1,
                      })
                    }
                  >
                    ADD TO CART
                  </button>

                  {/*
                    <button
                      onClick={() =>
                        removetostore({
                          id: content.id,
                        })
                      }
                    >
                      Remove
                    </button>
                  */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardItems: state.cardItems,
});

export default connect(mapStateToProps, { addtostore, removetostore })(Home);
