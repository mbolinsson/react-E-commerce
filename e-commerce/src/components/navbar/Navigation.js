import React from "react";
import {Link} from "react-router-dom";
import "../../App.css";
import ShoppingCart from "../shoppingcart/ShoppingCart";
import {useSelector} from "react-redux";
import {MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBIcon} from "mdbreact";
import {useDispatch} from "react-redux";
import {signOutUser} from "../../store/actions/userActions";

export default function Navigation() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalCartQuantity);
  const userId = useSelector((state) => state.user.userId);

  // const userLoggedIn = localStorage.getItem("token");

  let userStatus = (
    <Link to="/signin" className="nav-link waves-effect waves-light">
      Logga in
    </Link>
  );

  if (userId) {
    userStatus = (
      <Link onClick={() => dispatch(signOutUser())} to="/signin" className="nav-link waves-effect waves-light">
        Logga ut
      </Link>
    );
  }

  return (
    <nav className="mb-4 navbar navbar-expand-lg navbar-dark elegant-color scrolling-navbar">
      <div className="container">
        <Link className="navbar-brand brand-font" to="/">
          <i className="fas fa-kiwi-bird"></i> Kom och Köp AB
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-333"
          aria-controls="navbarSupportedContent-333"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/products">
                Produkter
                <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item dropdown">
              {/* <a onClick={parentHandle} className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" href="!#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                
                <i className="fas fa-shopping-cart"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right z-depth-2 shopping-cart">
                <ShoppingCart />
              </div> */}
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  {totalQuantity + " "}
                  <MDBIcon icon="fas fa-shopping-cart" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right basic className=" shopping-cart  dropdown-default">
                  <ShoppingCart />
                </MDBDropdownMenu>
              </MDBDropdown>
            </li>
            <li className="nav-item">{userStatus}</li>
            <li className="nav-item">
              <Link to="/historicOrders" className="nav-link waves-effect waves-light">
                Historik
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link waves-effect waves-light">
                Registrera
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link waves-effect waves-light">
                <i className="fas fa-users-cog"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
