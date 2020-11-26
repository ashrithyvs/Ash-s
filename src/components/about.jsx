import { Col, Row } from "react-bootstrap"
import Ash from "./images/Ash.jpg"

export default function About(){
    
    return <div>
    <section class="container" id="about" style={{margin:"10% auto 5%"}}>
    <Row>
    <Col>
        <h2>
            Hey! I'm Ashrith ;)
        </h2>
        <p>I'm currently studying at Vellore Institute of Technology - Amaravati as Integrated MTech SE student. I made this web portfolio as a timepass project during the Pandemic but I'll definetly develop it into a professional one! Anyways, go through this page to get know more about me ;)</p>
        </Col>
        <Col>
        <div >
            <img src={Ash} 
            style={{width:"60%", borderRadius:"100%"}}
            />
        </div>
        </Col>
        </Row>
        </section>
        </div>
}