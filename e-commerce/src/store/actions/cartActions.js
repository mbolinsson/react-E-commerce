import actionTypes from "../actionTypes";
import axios from "axios";

export const addToCart = (product) => {
  return {
    type: actionTypes().cart.add,
    product: product,
  };
};

export const removeOneFromCart = (id) => {
  return {
    type: actionTypes().cart.removeOne,
    id: id,
  };
};

export const removeProductFromCart = (id) => {
  return {
    type: actionTypes().cart.remove,
    id: id,
  };
};

export const countItems = () => {
  return {
    type: actionTypes().cart.count,
  };
};

export const placeOrder = (cart) => {
  return (dispatch) => {
    console.log(cart);
    let order = [];
    let ordernumber = Date.now();
    let userId = window.localStorage.getItem("userId");
    let token = window.localStorage.getItem("token");
    cart.forEach((item) => {
      order.push({
        name: item.name,
        quantity: item.quantity,
        ordernumber,
        userId,
        image: item.image,
        orderActive: true,
      });
    });

    axios
      .post("http://localhost:3300/api/products/order", order, {
        headers: {
          "x-access-token": token,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    dispatch(clearCart());
  };
};

export const clearCart = () => {
  return {
    type: actionTypes().cart.clearCart,
  };
};
