import React from "react";
import Education from "./education";
import Footer from "./footer";
import IntroJumbo from "./intro";
import Contact from "./contact.jsx";
import SkillsList from "./skillsList";
import WorkList from "./workList";
import About from "./about";

function App() {
  return (
    <div>
      <IntroJumbo />
      <About />
      <SkillsList />
      <WorkList />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
