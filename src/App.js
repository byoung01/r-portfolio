import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Repos from "./components/Repo";
import Contact from "./components/Contact";
// import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <About />
      <Repos />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
export default App;
