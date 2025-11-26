import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import CpuScheduling from "./components/CpuScheduling";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Home setCurrentSection={setCurrentSection} />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "resume":
        return <Resume setCurrentSection={setCurrentSection} />; // ✅ updated
      case "scheduling":
        return <CpuScheduling />;
      case "contact":
        return <Contact />;
      default:
        return <Home setCurrentSection={setCurrentSection} />;
    }
  };

  return (
    <>
      <Navbar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      {renderSection()}

      <Footer
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </>
  );
}
