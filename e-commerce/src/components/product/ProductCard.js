import React from "react";
import {Link} from "react-router-dom";

export default function ProductCard(product) {
  return (
    <div className="col mb-4">
      {/* <!-- Card --> */}
      <div className="card">
        {/* <!--Card image--> */}
        <div className="view overlay">
          <img className="card-img-top" src={product.product.image} alt="Card cap" />
          <Link to={"product/details/" + product.product._id}>
            <div className="mask rgba-white-slight"></div>
          </Link>
        </div>

        {/* <!--Card content--> */}
        <div className="card-body">
          {/* <!--Title--> */}
          <h4 className="card-title">{product.product.name}</h4>
          {/* <!--Text--> */}
          <p className="card-text">{product.product.short}</p>
          {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
          <Link to={"product/details/" + product.product._id} className="btn btn-grey btn-md">
            Visa Produkt
          </Link>
        </div>
      </div>
      {/* <!-- Card --> */}
    </div>
  );
}
// {type: "GET_Products"}
