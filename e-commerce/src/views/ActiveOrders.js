import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getUserOrders} from "../store/actions/userActions";
import Orders from "../components/Orders/Orders";

export default function ActiveOrders() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  let userId = useSelector((state) => state.user.userId);
  let activeOrders = useSelector((state) => state.user.activeOrders);
  if (userId) {
    if (activeOrders.length < 1) {
      return <h4 className="text-center">Du har inga aktiva ordrar</h4>;
    } else {
      return (
        <div>
          <h3 className="text-center">Aktiva ordrar</h3>
          {activeOrders.map((order) => (
            <Orders key={order._id} order={order} />
          ))}
        </div>
      );
    }
  } else {
    return <h4 className=" text-center">Du är inte inloggad</h4>;
  }
}
