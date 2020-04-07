import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white" style={{
            paddingTop: "1rem"
          }}>
            <Link
              to="/"
              className="col s5 brand-logo center black-text"
            >
              <img
              src="flag.png"
              style={{
                width: "35px",
                height: "auto"
              }}></img>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
