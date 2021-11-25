import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div className="h-container">
      <h1>
        <Link to="/" className="logo">
          BY
        </Link>
      </h1>
      <div className="nav-bar">
        <Link to="/" class="nav-item">
          About
        </Link>
        <Link to="/repos" class="nav-item">
          Projects
        </Link>
        <Link to="/contact" class="nav-item">
          Contact
        </Link>
        <Link to="/resume" class="nav-item">
          Resume
        </Link>
      </div>
    </div>
  );
}
export default Nav;
// export default withRouter(Nav);
