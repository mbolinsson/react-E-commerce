import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAllUsers} from "../store/actions/userActions";
import AllUsers from "../components/Admin/AllUsers";

export default function AdminUsers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  let allUsers = useSelector((state) => state.user.allUsers);
  let userId = useSelector((state) => state.user.userId);

  if (userId === "5eb42cb5139b0f541ac61f9f") {
    if (!userId) {
      return <div className="p-4">Du är inte inloggad.</div>;
    } else if (userId && allUsers.length < 1) {
      return <div className="p-4">Det finns inga användare</div>;
    } else if (userId && !allUsers) {
      return <div className="p-4">Laddar</div>;
    } else {
      return (
        <div>
          <h2 className="text-center m-4">Användare</h2>
          {allUsers.map((user) => (
            <AllUsers key={user._id} user={user} />
          ))}
        </div>
      );
    }
  } else {
    return <h4 className="text-center">Du har inte behörighet</h4>;
  }
}
