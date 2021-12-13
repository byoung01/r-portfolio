import React from "react";
import github from "../../images/github.png";
import resume from "../../images/resume.png";
import linkedIn from "../../images/linkedIn.png";
import "./footer.css";

function Footer() {
  return (
    <div className="nav-container">
      <nav class="nav">
        <a href="https://github.com/byoung01" target="blank" rel="noreferrer">
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
      </nav>
    </div>
  );
}

export default Footer;
