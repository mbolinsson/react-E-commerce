import actionTypes from "../actionTypes";
import jwt from "jsonwebtoken";
const secretKey = "b8888888888888888888888";

const initState = {
  shoppingcart: [],
  totalCartQuantity: 0,
  totalCartAmount: 0,
};

export default (state = initState, action) => {
  let itemIndex;
  switch (action.type) {
    case actionTypes().cart.add:
      try {
        itemIndex = state.shoppingcart.findIndex((product) => product._id === action.product._id);

        itemIndex < 0 ? (state.shoppingcart = [...state.shoppingcart, action.product]) : (state.shoppingcart[itemIndex].quantity += 1);

        state.totalCartQuantity = getTotalQuantity(state.shoppingcart);
        state.totalCartAmount = getTotalAmount(state.shoppingcart);

        localStorage.setItem("r8585858585", jwt.sign(state, secretKey));
      } catch {}
      return state;

    case actionTypes().cart.removeOne:
      try {
        itemIndex = state.shoppingcart.findIndex((product) => product._id === action.id);

        state.shoppingcart[itemIndex].quantity === 1
          ? (state.shoppingcart = state.shoppingcart.filter((product) => product._id !== action.id))
          : (state.shoppingcart[itemIndex].quantity -= 1);

        state.totalCartQuantity = getTotalQuantity(state.shoppingcart);
        state.totalCartAmount = getTotalAmount(state.shoppingcart);

        localStorage.setItem("r8585858585", jwt.sign(state, secretKey));
      } catch {}

      return state;

    case actionTypes().cart.remove:
      try {
        const newState = state.shoppingcart.filter((product) => product._id !== action.id);

        state.shoppingcart = newState;
        state.totalCartQuantity = getTotalQuantity(state.shoppingcart);
        state.totalCartAmount = getTotalAmount(state.shoppingcart);

        localStorage.setItem("r8585858585", jwt.sign(state, secretKey));
      } catch {}
      return state;

    case actionTypes().cart.save:
      return state;
    case actionTypes().cart.clearCart:
      state = {
        shoppingcart: [],
        totalCartQuantity: 0,
        totalCartAmount: 0,
      };
      localStorage.setItem("r8585858585", jwt.sign(state, secretKey));
      return state;
    default:
      let cart = jwt.decode(localStorage.getItem("r8585858585"));
      if (cart) state = cart;

      return state;
  }
};

const getTotalQuantity = (items) => {
  let totalQuantity = 0;

  items.forEach((product) => {
    totalQuantity += product.quantity;
  });

  return totalQuantity;
};

const getTotalAmount = (items) => {
  let totalAmount = 0;

  items.forEach((product) => {
    totalAmount += product.price * product.quantity;
  });

  return totalAmount;
};
