import React from "react";
import { Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
const style = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)),url(https://c0.wallpaperflare.com/preview/571/199/690/sri-lanka-great-world-s-end-drop-hd-wallpaper.jpg)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  positionRelative: "relative",
};
function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div style={style}></div>
    </div>
  );
}
export default Hero;
