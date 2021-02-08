import Ash from "./images/mount.png";
import Navigation from "./navbar";
import Button from "react-bootstrap/Button";

var background = {
  backgroundImage: `url(${Ash})`,
  // // backgroundSize: "cover",
  // height: "90vh",
  // backgroundColor: "#9d65c9",
  minHeight: "100vh",
  minWidth: "100vh",
  backgroundSize: "cover",
  padding: "0rem 5rem",
  backgroundAttachment: "fixed",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  // position: "relative",
  // overflow: " hidden",
};

function IntroJumbo() {
  return (
    <div class="Intro" id="home" style={background}>
      <Navigation />
      <div class="container" style={{ paddingTop: "8%" }}>
        <div class="row justify-content-center">
          <div class="col-md-10 text-center pt-5">
            <h1 class="display-4 text-dark">Hey there!</h1>
            <Button
              variant="outline-dark"
              href="#about"
              class="lead d-block text-white"
            >
              Want to know me?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroJumbo;
