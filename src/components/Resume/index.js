import React from "react";
import "./resume.css";

function Resume() {
  return (
    <div className="resume-bg">
      <div className="cus-div2" id="skew3">
        <h1>Skills</h1>
        <div className="resume-cont">
          <div className="content2">
            <h3 className="">Frontend </h3>
            <ul className="list-group list-group-flush">
              <li class="">HTML</li>
              <li class="">CSS</li>
              <li class="">JavaScript</li>
              <li class="">Node</li>
              <li class="">React</li>
            </ul>
          </div>
          <div className="content2">
            <h3>Backend </h3>
            <ul className="list-group list-group-flush">
              <li class="">SQL</li>
              <li class="">Express</li>
              <li class="">Node</li>
              <li class="">MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cus-div" id="skew4">
        <div className="bar-cont">
          <h1 className="bottom-bar">bar here</h1>
        </div>
      </div>
    </div>
  );
}
export default Resume;
