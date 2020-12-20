import React from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../BackToTop";

export default function Header() {
  return (
    <div>
  <div className="header__content" id="navbar">
    <div className="container">
      <NavLink to="/"><img src="../../img/Logo.png" alt="" /></NavLink>
      
      <ul>
        <li>
          <NavLink className="navLink" to="/">
            MOVIE
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/">
            TV
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/">
            TRENDING
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
  <ScrollToTop/>
  </div>
  );
}
