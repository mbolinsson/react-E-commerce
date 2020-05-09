import React from "react";
import {useSelector, useDispatch} from "react-redux";
import ShoppingCartProduct from "../components/shoppingcart/ShoppingCartProduct";
import {placeOrder} from "../store/actions/cartActions";
import "../App.css";

export default function CheckOut() {
  const dispatch = useDispatch();
  const shoppingcart = useSelector((state) => state.cart.shoppingcart);
  const totalCartAmount = useSelector((state) => state.cart.totalCartAmount);
  const commitPlaceOrder = () => {
    dispatch(placeOrder(shoppingcart));
  };
  return (
    <div>
      <h3 className="text-center mt-5">Din Kundvagn</h3>
      <div className="container checkout">
        {shoppingcart.map((product) => (
          <ShoppingCartProduct key={product._id} product={product} />
        ))}

        {/* <div v-if="shoppingCart.length < 1" className="cart-item">
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
          <button onClick={commitPlaceOrder} className="btn btn-default">
            KÖP
          </button>
        </div>
      </div>
    </div>
  );
}
