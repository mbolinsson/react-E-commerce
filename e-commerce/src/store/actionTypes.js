export default () => {
  return {
    products: {
      setProducts: "SET_PRODUCTS",
      setProduct: "SET_PRODUCT",
    },
    cart: {
      add: "ADD_TO_CART",
      removeOne: "REMOVE_ONE_FROM_CART",
      save: "SAVE_CART",
      clearCart: "CLEAR_CART",
      remove: "REMOVE",
      count: "COUNT_ITEMS",
    },
    user: {
      register: "REGISTER_USER",
      setUserId: "SET_USER_ID",
      setHistoricOrders: "SET_HISTORIC_ORDERS",
      signOutUser: "SIGN_OUT_USER",
      setAllOrders: "SET_ALL_ORDERS",
    },
  };
};
