import React, { Component } from "react";

import "../../styles/navbar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <a className="navbar-brand" href="www">
          Company Logo
        </a>
        {/* <button className="navbar-toggle"></button> */}
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <a href="www">
              <li className="navbar-item">Home</li>
            </a>
            <a href="www">
              <li className="navbar-item">About</li>
            </a>
            <a href="www">
              <li className="navbar-item">Contact</li>
            </a>
          </ul>
        </div>
     
        {/* <button className="btn-login">Login</button> */}
      </div>
    );
  }
}

export default NavBar;
