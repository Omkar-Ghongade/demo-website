import React from "react";
import { loadFull } from "tsparticles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Snow from "./Snow";
import Header from "./Header";
import Events from "./Events";
import Team from "./Team";
import Gallery from "./Gallery";
import HomePage from "./HomePage";
import "./App.css";
import "./Footer";
import Footer from "./Footer";

const App = () => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App">
      <div className="headerDiv">
        <Snow particlesLoaded={particlesLoaded} particlesInit={particlesInit} />
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
