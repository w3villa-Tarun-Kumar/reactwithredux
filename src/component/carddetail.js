import React from "react";
import { connect } from "react-redux";
import { addtostore, removetostore } from "../services/actions/action";
import { Card, Col, Container, Row } from "react-bootstrap";

const mapStateToProps = (state) => ({
  cardItems: state.cardItems,
});

const Carddetail = ({ cardItems, addtostore, removetostore }) => {
  let key = ["id", "image", "price", "name", "desc"];
  const aaddss = findOcc(cardItems.records, key);

  const cats = aaddss.sort(
    (firstItem, secondItem) => firstItem.id - secondItem.id
  );

  return (
    <div className="mt-4 container card">
      <div className=" row">
        <div className="col-md-8">
          <h1 style={{ textAlign: "left" }}>
            Shopping Cart
            {cardItems.records.length > 0 ? "" : <span> (No Item found)</span>}
          </h1>
          {cats.map((content, i) => (
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2">
                  <Card.Img
                    className="img-rounded"
                    variant="top"
                    src={content.image}
                  />
                </div>
                <div className="col">
                  <div className="row text-muted">
                    {content.name} Price : INR {content.price}
                  </div>
                  <div class="row">
                    <Card.Text>{content.desc.substring(0, 80)}...</Card.Text>
                  </div>
                </div>
                <div className="col">
                  <button
                    className="m-2 btn btn-danger"
                    onClick={() =>
                      removetostore({
                        id: content.id,
                      })
                    }
                  >
                    -
                  </button>
                  <button className="m-2 btn btn-light">
                    {content.occurrence}
                  </button>
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
                    +
                  </button>
                </div>
                <div className="col">
                  INR {content.price * content.occurrence}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-4">
          {cardItems.records.length > 0 ? (
            <h1>Checkout - {cardItems.records.length} Items</h1>




            
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

function findOcc(arr, keydd) {
  let [key] = keydd;
  let arr2 = [];
  arr.forEach((x) => {
    if (
      arr2.some((val) => {
        return val[key] == x[key];
      })
    ) {
      arr2.forEach((k) => {
        if (k[key] === x[key]) {
          k["occurrence"]++;
        }
      });
    } else {
      let a = {};
      for (const arg of keydd) {
        a[arg] = x[arg];
        a["occurrence"] = 1;
      }
      arr2.push(a);
    }
  });
  return arr2;
}

export default connect(mapStateToProps, { addtostore, removetostore })(
  Carddetail
);
