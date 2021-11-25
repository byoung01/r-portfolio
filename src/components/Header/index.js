import React from "react";
import Nav from "../Nav";
import "./index.css";

// import "(style sheet)"
function Header() {
  document.title = "Portfolio";

  return (
    <header class="hero-image ">
      <Nav />
      <div class="layout">
        <div class="l-left">
          <div class="bg">
            <h1 class="name">Brevin Young</h1>
            <p class="text">Junior Web Developer</p>
          </div>
        </div>
        <div class="l-right">
          <div class="l-bg"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
