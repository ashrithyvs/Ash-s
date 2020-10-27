import Ash from "./images/Ash.jpg"; // with import

var background = {
  background: "rgba(0, 0, 0, 0.5)",
  backgroundImage: `url(${Ash})` + "rgba(0, 0, 0, 0.57)",
  backgroundSize: "cover",
  height: "90vh",
  backgroundColor: "#9d65c9",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  position: "relative",
  overflow: " hidden",
};

function IntroJumbo() {
  return (
    <div class="Intro" id="Home" style={background}>
      <div class="banner">
        <div class="container">
          <div class="row intro-text text-light align-items-center justify-content-center">
            <div class="col-md-10 text-center pt-5">
              <h1 class="display-4 site-heading site-animate fadeInUp site-animated">
                Hello!
                <strong class="display-3 d-block">I'm Ashrith</strong>
              </h1>
              <strong class="lead d-block text-white letter-spacing">
                A Tech Enthusiast & Web Developer.
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroJumbo;
