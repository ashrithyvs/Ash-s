import Ash from "./images/mount.png";
import Navigation from "./navbar";
import Button from "react-bootstrap/Button";

var background = {
  backgroundImage: `url(${Ash})`,
  minHeight: "100vh",
  minWidth: "55vh",
  maxWidth: "200vh",
  backgroundSize: "cover",
  padding: "0rem 5rem",
  backgroundAttachment: "fixed",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
};

function IntroJumbo() {
  return (
    <section class="Intro" id="home" style={background}>
      <Navigation />
      <div
        class="container intro-container col-md-12 text-center"
        style={{ paddingTop: "8%" }}
      >
        <h1 class="text-dark intro-heading">Hey there!</h1>
        <Button
          variant="outline-dark"
          href="#about"
          class="lead d-block text-white"
        >
          Want to know me?
        </Button>
      </div>
    </section>
  );
}

export default IntroJumbo;
