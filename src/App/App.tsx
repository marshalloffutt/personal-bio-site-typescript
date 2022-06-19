import React from "react";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1 className="black">Black</h1>
        <h1 className="gray">Gray</h1>
        <h1 className="lightGray">Light Gray</h1>
        <h1 className="lighterGray">Lighter Gray</h1>
        <h1 className="accent">Accent</h1>
        <Button variant="contained">I am a button</Button>
      </div>
			<Footer />
    </div>
  );
}

export default App;
