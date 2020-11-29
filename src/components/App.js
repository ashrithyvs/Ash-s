import React from "react";
import Education from "./education";
import Footer from "./footer";
import IntroJumbo from "./intro";
import Contact from "./contact.jsx";
import SkillsList from "./skillsList";
import WorkList from "./workList";
import About from "./about";
import Extras from "./extras";

function App() {
  return (
    <div style={{background:"#050505",fontFamily: "Montserrat, sans-serif",color:"#be9fe1"}}>
      <IntroJumbo />
      <About />
      <Extras />
      <SkillsList />
      <WorkList />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
