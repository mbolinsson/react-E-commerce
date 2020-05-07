import React from "react";
import {useDispatch} from "react-redux";
import {addToCart, removeOneFromCart, removeProductFromCart} from "../../store/actions/cartActions";
import "../../App.css";

export default function ShoppingCartProduct({product}) {
  const dispatch = useDispatch();

  const incrementProductQuantity = () => {
    dispatch(addToCart(product));
  };
  const decrementProductQuantity = () => {
    dispatch(removeOneFromCart(product._id));
  };
  const productQuantityZero = () => {
    dispatch(removeProductFromCart(product._id));
  };

  return (
    <div>
      <div className="cart-item">
        <div className="p-2 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={product.image} alt="product pic" className="img-fluid shoppingcart-image-width" />
            <div>
              <div>
                <strong>{product.name}</strong>
              </div>
              <div>
                <small>
                  {product.quantity} x {product.price} SEK
                </small>
              </div>
            </div>
          </div>
          <div>
            <div className="btn-group btn-group-sm" role="group" aria-label="quantity">
              <button onClick={decrementProductQuantity} type="button" className="btn btn-grey px-3">
                -
              </button>
              <button onClick={incrementProductQuantity} type="button" className="btn btn-grey px-3">
                +
              </button>
            </div>

            <div className="btn-group btn-group-sm" role="group" aria-label="trash">
              <button onClick={productQuantityZero} className="btn btn-danger px-3">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="dropdown-divider"></div>
      </div>
    </div>
  );
}
