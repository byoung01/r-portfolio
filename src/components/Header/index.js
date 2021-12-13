import React from "react";
import Nav from "../Nav";
import "./index.css";
import github from "../../images/github.png";
import resume from "../../images/resume.png";
import linkedIn from "../../images/linkedIn.png";

// import "(style sheet)"
function Header() {
  document.title = "Young";

  return (
    <div>
      <header class="hero-image ">
        <div class="bg"></div>
        <div class="layout">
          <div class="header-text">
            <h1 class="name">Brevin Young</h1>
            <p class="text">Junior Web Developer</p>
            <div class="icon-bar">
              <a
                href="https://github.com/byoung01"
                target="blank"
                rel="noreferrer"
              >
                <img alt="github" src={github} />
              </a>
              <a
                href="https://www.linkedin.com/in/brevin-young-b58113220/"
                target="blank"
                rel="noreferrer"
              >
                <img alt="linkedIn" src={linkedIn} />
              </a>
              <a
                href="https://docs.google.com/document/d/1x3FpWtSgWiGnw2KqOYhIdar3DtmReTbBu2vpS_cczpo/export/pdf"
                target="blank"
                rel="noreferrer"
              >
                <img alt="resume" src={resume} />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
