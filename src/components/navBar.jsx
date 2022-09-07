//componetes must return someting, simple functions
//must export componet.
import React from "react";
import {Link} from "react-router-dom";
import "./navBar.css"; 
import { useContext } from "react";
import StoreContext from "../store/storeContext";

const NavBar = () => {
  let cart = useContext(StoreContext).cart;

const getNumItems = () => {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    let prod = cart[i];
    sum += prod.quantity;
}
return sum;
};

  return (
  <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="aboutMe">About Me</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="catalog">Catalog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="list">Shopping List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="admin">Admin</Link>
        </li>
        </ul>
      <form className="d-flex" role="search">
        <Link className="btn btn-dark" to="/cart">
          {getNumItems()} &nbsp; View Cart
         </Link> 
      </form>
    </div>
  </div>
</nav>
  )};

export default NavBar;