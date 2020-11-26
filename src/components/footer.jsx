import { ReactComponent as Facebook } from "./images/facebook.svg";
import { ReactComponent as Github } from "./images/github.svg";
import { ReactComponent as Twitter } from "./images/twitter.svg";
import { useMediaQuery } from 'react-responsive'

function Footer() {
 
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
 
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
 
    

  return (
    <div class="footer-wrapper mx-auto">
    <div>
    </div>
      <div class="bg-dark text-light">
        <span
          class="text-center font-weight-lighter"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "37px",
            letterSpacing: "7px",
            display: "block",
          }}
        >
          #h-ash
        </span>
        {isDesktopOrLaptop && <>
          <div class="container col-2 mt-2 ">
          <a class="mx-4" href="#">
            <Facebook />
          </a>
          <a class="mx-4" href="#">
            <Github />
          </a>
          <a class="mx-4" href="#">
            <Twitter />
          </a>
        </div>
      </>}
      {isTabletOrMobileDevice && <div style={{margin:"auto 15%"}}> <a class="mx-4" href="#">
            <Facebook />
          </a>
          <a class="mx-4" href="#">
            <Github />
          </a>
          <a class="mx-4" href="#">
            <Twitter />
          </a></div>}
        
        <p class="text-center mt-2 mb-0 pb-3 text-muted" style={{fontSize:"80%"}}>
          © 2020 #h-ash. All rights reserved | Designed by Ashrith Yakkali
        </p>
      </div>
    </div>
  );
}

export default Footer;
