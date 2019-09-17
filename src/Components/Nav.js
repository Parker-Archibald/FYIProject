import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/NavStyle.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <div>
          <div id="FYI">FYI and Logo</div>
          <nav>
            <Link to="/" id="navWords">
              Home
            </Link>
            <Link to="/about" id="navWords">
              About Me
            </Link>
            <Link to="/services" id="navWords">
              Services
            </Link>
            <Link to="/portfolio" id="navWords">
              Portfolio
            </Link>
            <Link to="/contact" id="navWords">
              Contact Me
            </Link>
          </nav>
        </div>
        <div id="login"><Link to='/book' style={{textDecoration:"none", color:'black'}}>Book</Link></div>
      </div>
    );
  }
}
export default Nav;
