import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./projects.css";
import "../../images/2Chit2Chat.png";

function Projects({ project }) {
  const { name, repo, link, desc } = project;
  return (
    <div className="flex-item">
      <img
        className="card-images"
        src={require(`../../images/${name}.png`).default}
        alt=""
      />
      <div className="holder">
        <h1 className="textName">{name}</h1>
        <div className="p-text">
          <p>{desc}</p>
          <div className="a-container">
            <a href={link} target="_blank" className="repo-link">
              Live Demo
            </a>
            <a
              href={repo}
              target="_blank"
              className="repo-link"
              id="code-margin"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
