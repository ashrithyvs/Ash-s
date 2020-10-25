import { ReactComponent as Facebook} from './images/facebook.svg';
import { ReactComponent as Github} from './images/github.svg';
import { ReactComponent as Twitter} from './images/twitter.svg';

function Footer(){
    return(
        <div class="bg-dark text-light">
        <span class="text-center font-weight-lighter" style={{fontFamily:"Roboto, sans-serif",fontSize:"37px",letterSpacing:"7px",display:"block"}}>Ash's</span>
        <div class="container mt-2" style={{marginLeft:"630px"}}>
        <a class='mx-4'  href="#"><Facebook /></a>
        <a class='mx-4' href="#"><Github /></a>
        <a class='mx-4' href="#"><Twitter /></a>
        </div>
        <p class="text-center mt-2 text-muted">© 2020 Ash's. All rights reserved | Designed by Ashrith Yakkali</p>
        </div>
    )
}

export default Footer;