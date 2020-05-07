import types from "../actionTypes";
import axios from "axios";

export const getProducts = () => {
  return (dispatch) => {
    axios.get("http://localhost:3300/api/products").then((res) => {
      dispatch(setProducts(res.data));
    });
  };
};

export const getProduct = (id) => {
  return (dispatch) => {
    axios.get("http://localhost:3300/api/products/" + id).then((res) => {
      dispatch(setProduct(res.data));
    });
  };
};

export const setProducts = (products) => {
  return {
    type: types().products.setProducts,
    payload: products,
  };
};

export const setProduct = (product) => {
  return {
    type: types().products.setProduct,
    payload: product,
  };
};

// type: types().products.get
