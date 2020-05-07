import types from "../actionTypes";
import axios from "axios";

export const registerUser = (formData) => {
  axios.post("http://localhost:3300/api/users/register", formData).then((res) => {
    console.log(res);
  });

  return {
    type: types().user.register,
  };
};

export const signInUser = (formData) => {
  return (dispatch) => {
    axios.post("http://localhost:3300/api/users/login", formData).then((res) => {
      const userId = res.data.user._id;
      const token = res.data.token;
      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token);
      console.log(userId);
      dispatch(setUserId(userId));
    });
  };
};

export const setUserId = (userId) => {
  return {
    type: types().user.setUserId,
    payload: userId,
  };
};

export const getHistoricOrders = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3300/api/users/orderhistory", {headers: {"x-access-token": token}})
      .then((res) => {
        if (res !== null) {
          dispatch(setHistoricOrders(res.data));
        }
      })
      .catch((error) => console.log(error));
  };
};

export const setHistoricOrders = (historicOrders) => {
  return {
    type: types().user.setHistoricOrders,
    payload: historicOrders,
  };
};

export const signOutUser = () => {
  return {
    type: types().user.signOutUser,
  };
};

// Admin
export const getAllOrders = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    axios
      .get("http://localhost:3300/api/users/allorders", {headers: {"x-access-token": token, userId: userId}})
      .then((res) => {
        if (res !== null) {
          dispatch(setAllOrders(res.data));
        }
      })
      .catch((error) => console.log(error));
  };
};

// Admin
export const setAllOrders = (allOrders) => {
  return {
    type: types().user.setAllOrders,
    payload: allOrders,
  };
};
