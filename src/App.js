import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Repos from "./components/Repo";
import Contact from "./components/Contact";
import Try from "./components/Try";
// import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <About />
      {/* <Try /> */}
      <Repos />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
export default App;
