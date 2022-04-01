import React from "react";
import { connect } from "react-redux";
import { addtostore, removetostore } from "../services/actions/action";
import { useParams } from "react-router-dom";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product({ addtostore, removetostore }) {
  const { id } = useParams();
  const [content, setpData] = React.useState([]);

  //const [productid, setporductid] = React.useState(null)
  //const thisProduct = productsData.find(prod => prod.id === productId)
  // setporductid(id)

  React.useEffect(() => {
    fetch("http://localhost:8000/posts/" + id).then((result) => {
      result.json().then((resp) => {
        setpData(resp);
      });
    });
  }, [id]);

  return (
    <div>
      <Container>
        <Row className="col-md-6 mt-5">
          <Card style={{ padding: "20px" }}>
            <Card.Title>
              <h1>{content.name}</h1>
            </Card.Title>
            <Card.Img className="imagg" variant="top" src={content.image} />
            <Card.Body>
              <Card.Title>${content.price}</Card.Title>
              <Card.Text>{content.desc}</Card.Text>
            </Card.Body>

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
            <button
              className="m-2 btn btn-danger"
              onClick={() =>
                removetostore({
                  id: content.id,
                })
              }
            >
              REMOVE
            </button>
            <Link className="m-2 btn btn-warning" to={"/"}>
              Explore more..
            </Link>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cardItems: state.cardItems,
});

export default connect(mapStateToProps, { addtostore, removetostore })(Product);
