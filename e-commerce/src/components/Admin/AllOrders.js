import React from "react";
import "../../App.css";
import {useDispatch} from "react-redux";
import {orderIsActive} from "../../store/actions/userActions";

export default function AllOrders({order}) {
  const dispatch = useDispatch();
  const OrderIsActiveFalse = () => {
    console.log(1);
    dispatch(orderIsActive(order._id));
  };

  let activ = <button onClick={OrderIsActiveFalse}>Slutför denna order</button>;

  if (!order.isActive) {
    activ = "Ordern är slutförd ✓";
  }

  return (
    <div className="container HistoricOrder">
      <h4>Ordernumber: {order._id}</h4>
      {order.products.map((product) => (
        <div key={product.id}>
          <div className="cart-item">
            <div className="p-2 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img className="img-fluid bild" alt="bild" src={product.image} />
                <div>
                  <div>
                    <strong>{product.name}</strong>
                  </div>
                  <div>
                    <small>{product.quantity}</small>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="dropdown-divider"></div>
          </div>
        </div>
      ))}
      {activ}
    </div>
  );
}
