import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAllOrders} from "../store/actions/userActions";
import AllOrders from "../components/Admin/AllOrders";

export default function Admin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  let allOrders = useSelector((state) => state.user.allOrders);
  let userId = useSelector((state) => state.user.userId);

  if (!userId) {
    return <div className="p-4">Du är inte inloggad.</div>;
  } else if (userId && allOrders.length < 1) {
    return <div className="p-4">Det finns inga ordrar att administrera</div>;
  } else if (userId && !allOrders) {
    return <div className="p-4">Laddar</div>;
  } else {
    return (
      <div>
        {allOrders.map((order) => (
          <AllOrders key={order.ordernumber} order={order} />
        ))}
      </div>
    );
  }
}
