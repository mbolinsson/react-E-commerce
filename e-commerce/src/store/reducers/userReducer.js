import types from "../actionTypes";

const initialState = {
  userId: null,
  historicOrders: [],
  allOrders: [], // Only Admin
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types().user.setUserId:
      state.userId = action.payload;
      return state;
    case types().user.setHistoricOrders:
      state.historicOrders = action.payload;
      return state;
    case types().user.signOutUser:
      localStorage.removeItem("token");
      localStorage.removeItem("r8585858585");
      localStorage.removeItem("userId");
      state.userId = null;
      return state;
    case types().user.setAllOrders: // Admin
      state.allOrders = action.payload;
      return state;
    default:
      const userId = localStorage.getItem("userId");
      state.userId = userId;

      return state;
  }
};
