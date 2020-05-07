import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getHistoricOrders} from "../store/actions/userActions";
import HistoricOrders from "../components/HistoricOrders/HistoricOrders";

export default function History() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHistoricOrders());
  }, [dispatch]);

  let historicOrders = useSelector((state) => state.user.historicOrders);
  let userId = useSelector((state) => state.user.userId);

  if (!userId) {
    return <div className="p-4">Du är inte inloggad.</div>;
  } else if (userId && historicOrders.length < 1) {
    return <div className="p-4">Du har inga Historiska ordrar</div>;
  } else if (userId && !historicOrders) {
    return <div className="p-4">Laddar</div>;
  } else {
    return (
      <div>
        {historicOrders.map((order) => (
          <HistoricOrders key={order.ordernumber} order={order} />
        ))}
      </div>
    );
  }
}
