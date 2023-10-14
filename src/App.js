import React from "react";
import Header from "./components/Header/Header.js";
import About from "./components/About/About.js";
import Skills from "./components/Skills/Skills.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import "./App.css"; 

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
