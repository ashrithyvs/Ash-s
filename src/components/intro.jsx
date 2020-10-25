import BackgroundBanner from "./images/Ash.jpeg"

var background={
    // background: rgba(0, 0, 0, 0.57);
    backgroundImage: "url(" + { BackgroundBanner } + ")"
}

function IntroJumbo(){
   return (<div class="Intro" id="Home" style={background}>
  <div class="container">
  <div class="introText">
    <h1 class="display-4">Hello!</h1>
    <h3 class="display-3">I'm Ashrith</h3>
    <p class="lead">A Tech Enthusiast & Web Developer.</p>
    </div>
    </div>
    <image src="./images/Ash" />
  </div>)
}

export default IntroJumbo;