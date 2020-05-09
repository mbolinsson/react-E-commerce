import types from "../actionTypes";

const initialState = {
  userId: null,
  activeOrders: [],
  historicOrders: [],
  allOrders: [], // Only Admin
  allUsers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types().user.setUserId:
      state.userId = action.payload;
      return state;
    case types().user.setUserOrders:
      state.activeOrders = action.payload.filter((order) => order.isActive);
      state.historicOrders = action.payload.filter((order) => !order.isActive);
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
    case types().user.setAllUsers: // Admin
      state.allUsers = action.payload;
      return state;
    // case types().user.uppdateAllUsers: // Admin
    //   state.allUsers = state.allUsers;
    //   return state;
    default:
      const userId = localStorage.getItem("userId");
      state.userId = userId;

      return state;
  }
};
