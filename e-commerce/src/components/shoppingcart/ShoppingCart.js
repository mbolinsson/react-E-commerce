import React from "react";
import ShoppingCartProduct from "./ShoppingCartProduct";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export default function ShoppingCart() {
  const shoppingcart = useSelector((state) => state.cart.shoppingcart);
  const totalCartAmount = useSelector((state) => state.cart.totalCartAmount);

  return (
    <div>
      {shoppingcart.map((product) => (
        <ShoppingCartProduct key={product._id} product={product} />
      ))}
      {/* 
      <div v-if="shoppingCart.length < 1" className="cart-item">
        <div className="p-2 d-flex justify-content-center align-items-center">
          <div className="d-flex align-items-center">Din kundvagn är tom.</div>
        </div>
        <div className="dropdown-divider"></div>
      </div> */}

      <div className="p-2 d-flex justify-content-between align-items-center">
        <div className="ml-2">
          <div className="total-price">
            Totalt:
            <span className="ml-1">{totalCartAmount} SEK</span>
          </div>
          <small className="text-muted">inkl. moms</small>
        </div>
        <Link className="text-white btn-grey btn btn-default" to="/checkout">
          Gå till Kassan
        </Link>
      </div>
    </div>
  );
}
