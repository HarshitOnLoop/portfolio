import React from "react";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
