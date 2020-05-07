import types from "../actionTypes";

const initialState = {
  products: [],
  product: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types().products.setProducts:
      state.products = action.payload;
      return state;

    case types().products.setProduct:
      state.product = action.payload;
      return state;

    default:
      return state;
  }
};
