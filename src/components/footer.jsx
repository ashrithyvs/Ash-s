/* eslint-disable react/jsx-no-target-blank */
import { ReactComponent as Facebook } from "./images/facebook.svg";
import { ReactComponent as Github } from "./images/github.svg";
import { ReactComponent as Twitter } from "./images/twitter.svg";
import { ReactComponent as Linkedin } from "./images/linkedin.svg";

function Footer() {
  return (
    <div class="footer-wrapper mx-auto">
      <div>
        <span
          class="text-center font-weight-lighter"
          style={{
            fontFamily: "Exo, sans-serif",
            fontSize: "37px",
            letterSpacing: "7px",
            display: "block",
          }}
        >
          #h-ash
        </span>
        <div className="container col-md-4 icon-container mt-2 d-flex ">
          <a target="_blank" href="https://www.facebook.com">
            <Facebook />
          </a>
          <a target="_blank" href="https://github.com/ashrithyvs">
            <Github />
          </a>
          <a target="_blank" href="https://www.twitter.com">
            <Twitter />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ashrith-yakkali-a60379191"
          >
            <Linkedin />
          </a>
        </div>
        <p
          class="text-center mt-2 mb-0 pb-3 text-muted"
          style={{ fontSize: "80%" }}
        >
          © 2020 #h-ash. All rights reserved | Designed by Ashrith Yakkali
        </p>
      </div>
    </div>
  );
}

export default Footer;
