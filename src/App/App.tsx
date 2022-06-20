import React from "react";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Placeholder</h1>
        <Home />
        <About />
        <Projects />
        <Contact />
        <h1 className="black">Black</h1>
        <h1 className="gray">Gray</h1>
        <h1 className="lightGray">Light Gray</h1>
        <h1 className="lighterGray">Lighter Gray</h1>
        <h1 className="red">Red</h1>
        <h1 className="green">Green</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
