import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
      <div className="footer__content ">
          <div className="footer__1">
          <div className="container">
          <div className="footer__items">
            <ul>
              <li>
                <NavLink className="navLink" to="/aboutus">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="navLink" to="/term">
                  Term
                </NavLink>
              </li>
              <li>
                <NavLink className="navLink" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__icons">
            <i class="fab fa-apple"></i>
            <i class="fab fa-android"></i>
            <i class="fab fa-facebook"></i>
          </div>
        </div>
          </div>
        <div className="footer__info container">
          <h2>ADT HOLDING GROUP</h2>
          <p><span><i class="fa fa-map-marker"></i>    </span>Suite A1702, 17th fl., Viettel Complex, 285 CMT8 Str., Dist. 10, HCMC</p>
          <p><span><i class="fa fa-phone"></i>    </span>+ 84 28 6291 4135</p>
        </div>
      </div>
    );
}