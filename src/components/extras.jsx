import { Button, Container } from "react-bootstrap";

export default function Extras(){
const pill={
    backgroundColor:"#be9fe1",padding:" 10px 40px",borderRadius: "26px",color:"black"}
    return <section class="extras" style={{paddingTop:"5%"}}>
    <Container>
    <div class="d-flex justify-content-around">
    <a target="_blank" href="https://"><Button style={pill}>Certificates</Button></a>
    <a target="_blank" href="https://"><Button style={pill}>My Gallery</Button></a>
    <a target="_blank" href="https://www.github.com/ashrithyvs"><Button style={pill}>Projects</Button></a>
    </div> </Container>
    </section>
}