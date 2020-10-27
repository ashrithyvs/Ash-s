import React from "react";
import Education from "./education";
import Footer from "./footer";
import IntroJumbo from "./intro";
import Navigation from "./navbar";
import Contact from "./contact.jsx";
import Work from "./work";
import SkillsList from "./skillsList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navigation />
      <IntroJumbo />
      <SkillsList />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
