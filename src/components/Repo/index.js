import React, { useState } from "react";
import Projects from "../Projects/";
import "./repo.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Repos() {
  const [projects] = useState([
    {
      name: "GeekGames",
      desc: "Game website created with react that has some simple games using JS",
      repo: "https://github.com/AnnalisaMBauer/project-3",
      link: "https://geek-games.herokuapp.com/login",
    },
    {
      name: "2Chit2Chat",
      desc: "Live chat website that allows for multiple users to create and enter rooms to chat",
      repo: "https://github.com/byoung01/project-2",
      link: "https://appchat4us.herokuapp.com/",
    },
    {
      name: "Soundboard",
      desc: "this is a description for the description while trying to get the layout correct",
      repo: "https://github.com/athaight/group-project-one",
      link: "https://appchat4us.herokuapp.com/",
    },
    {
      name: "E-commerce Backend",
      desc: "this is a description for the description while trying to get the layout correct",
      repo: "https://github.com/byoung01/e-commerce",
      link: "https://github.com/byoung01/e-commerce",
    },
  ]);
  return (
    <div className="repo-container">
      <h1 className="p-title">projects</h1>
      {projects.map((project, id) => (
        <Projects project={project} key={id} />
      ))}
    </div>
  );
}

export default Repos;
