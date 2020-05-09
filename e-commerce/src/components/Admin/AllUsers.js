import React from "react";
import "../../App.css";
import {useDispatch} from "react-redux";
import {eraseUser} from "../../store/actions/userActions";

export default function AllUsers({user}) {
  const dispatch = useDispatch();
  const commitEraseUser = () => {
    dispatch(eraseUser(user._id));
  };

  return (
    <div className="container HistoricOrder">
      {"ID: " + user._id} <br />
      {"Namn: " + user.name}
      <br />
      {"Mail: " + user.email}
      <br />
      {"Skapad: " + user.date}
      <br />
      <button className="button-position red" onClick={commitEraseUser}>
        Radera användare
      </button>
    </div>
  );
}
