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
        <a href={link} target="_blank">
          <h1 className="textName">{name}</h1>
        </a>
        <div className="p-text">
          <p>{desc}</p>
          <a href={repo} target="_blank" className="repo-link">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
export default Projects;
