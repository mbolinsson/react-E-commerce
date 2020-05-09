import React from "react";
import {Link} from "react-router-dom";

export default function OrdersDropDown() {
  return (
    <div className="position-absolute">
      <Link to="/activeorders" className="dropdown-item">
        adminUsers
      </Link>
      <a className="dropdown-item" href="!#">
        Another action
      </a>
      <a className="dropdown-item" href="!#">
        Something else here
      </a>
      <a className="dropdown-item" href="!#">
        Separated link
      </a>
    </div>
  );
}
