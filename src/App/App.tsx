import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Technologies from "../components/Technologies/Technologies";
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
        <Technologies />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
