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
      console.log(res.data.user._id);
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

export const getUserOrders = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3300/api/users/orderhistory", {headers: {"x-access-token": token}})
      .then((res) => {
        if (res !== null) {
          dispatch(setUserOrders(res.data));
        }
      })
      .catch((error) => console.log(error));
  };
};

export const setUserOrders = (userOrders) => {
  return {
    type: types().user.setUserOrders,
    payload: userOrders,
  };
};

export const signOutUser = () => {
  return {
    type: types().user.signOutUser,
  };
};

//Admin
export const orderIsActive = (ordernumber) => {
  return (dispatch) => {
    let token = window.localStorage.getItem("token");

    axios
      .patch(
        "http://localhost:3300/api/users/orderisactive",
        {ordernumber},
        {
          headers: {
            "x-access-token": token,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        dispatch(getAllOrders());
      })
      .catch(function (error) {
        console.log(error);
      });
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

//Admin
export const getAllUsers = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    axios
      .get("http://localhost:3300/api/users/allusers", {headers: {"x-access-token": token, userId: userId}})
      .then((res) => {
        if (res !== null) {
          dispatch(setAllUsers(res.data));
        }
      })
      .catch((error) => console.log(error));
  };
};

//Admin
export const setAllUsers = (allUsers) => {
  return {
    type: types().user.setAllUsers,
    payload: allUsers,
  };
};

//Admin
export const eraseUser = (usersid) => {
  return (dispatch) => {
    let token = window.localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    console.log(usersid);
    console.log(userId);

    axios
      .delete("http://localhost:3300/api/users/deleteuser", {headers: {"x-access-token": token, userId: userId}, data: {usersid}})
      .then((res) => {
        console.log(res);
        dispatch(getAllUsers());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
