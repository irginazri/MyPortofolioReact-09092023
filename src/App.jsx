import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../component/Navbar.jsx";
import Header from "../component/Header.jsx";
import About from "../component/About.jsx";
import Skill from "../component/Skill.jsx";
import Contact from "../component/Contact.jsx";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <About />
    <Skill />
    <Contact />
    </div>

  );
}

export default App;
