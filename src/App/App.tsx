import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Technologies from "../components/Technologies/Technologies";
import Projects from "../components/Projects/Projects";
import "./App.scss";

function App() {
  return (
    <div className="App" id="Home">
      <Navbar />
      <div className="content">
        <Home />
        <About />
        <Technologies />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
