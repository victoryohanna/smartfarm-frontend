import React from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

import "../../styles/navbar.css";

function NavBar() {
  return (
    <div className="nav-body">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand">
            Brand Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaAlignJustify className="nav-icon" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav my-4 mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/crops" className="nav-link">
                  Crops
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Crops
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/crops" className="dropdown-item">
                    Rice
                  </Link>
                  <Link to="/" className="dropdown-item">
                    Beans
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/" className="dropdown-item">
                    Maize
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/" className="dropdown-item">
                    Yarm
                  </Link>
                </div>
              </li> */}
            </ul>
            <ul>
            <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
