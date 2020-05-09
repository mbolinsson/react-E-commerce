import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getUserOrders} from "../store/actions/userActions";
import Orders from "../components/Orders/Orders";

export default function History() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  let userId = useSelector((state) => state.user.userId);
  let historicOrders = useSelector((state) => state.user.historicOrders);
  if (userId) {
    if (historicOrders.length < 1) {
      return <h4 className="text-center">Du har inga aktiva ordrar</h4>;
    } else {
      return (
        <div>
          <h3 className="text-center">Historiska ordrar</h3>
          {historicOrders.map((order) => (
            <Orders key={order._id} order={order} />
          ))}
        </div>
      );
    }
  } else {
    return <h4 className="text-center">Du är inte inloggad</h4>;
  }
}
// export default function History() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUserOrders());
//   }, [dispatch]);

//   let orders = useSelector((state) => state.user.userOrders);
//   let historicOrders = orders.filter((order) => !order.isActive);
//   let userId = useSelector((state) => state.user.userId);

//   if (!userId) {
//     return <div className="p-4">Du är inte inloggad.</div>;
//   } else if (userId && historicOrders.length < 1) {
//     return <div className="p-4">Du har inga Historiska ordrar</div>;
//   } else if (userId && !historicOrders) {
//     return <div className="p-4">Laddar</div>;
//   } else {
//     return (
//       <div>
//         <h3 className="m-4">Historiska ordrar</h3>
//         {historicOrders.map((order) => (
//           <Orders key={order._id} order={order} />
//         ))}
//       </div>
//     );
//   }
// }
