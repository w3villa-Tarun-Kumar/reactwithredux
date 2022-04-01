import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addtostore, removetostore } from "../services/actions/action";

const mapStateToProps = (state) => ({
  cardItems: state.cardItems,
});

const Cart = ({ cardItems }) => {
  let totprice = 0;
  //console.warn(cardItems);

  cardItems.records.forEach((val) => {
    totprice = totprice + parseInt(val.price);
  });

  return (
    <div>
      <Link
        to={"/carddetail"}
        style={{ position: "fixed", top: "10px", right: "15px", zIndex: "10" }}
        className="btn  btn-success my-2 my-sm-0"
      >
        {cardItems.records.length} Items / INR {totprice}
      </Link>
    </div>
  );
};

export default connect(mapStateToProps, { addtostore, removetostore })(Cart);
