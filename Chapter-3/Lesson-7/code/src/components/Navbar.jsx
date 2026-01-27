import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to="/home">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact-us">
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/products">
          Products
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;

{
  /* In HTML
    <a href="/about.html">About</a> */
}
