import { Col, Row } from "react-bootstrap";
import Ash from "./images/Ash.jpg";

export default function About() {
  return (
    <div>
      <section
        class="container col-md-6"
        id="about"
        style={{ paddingBottom: "5%", paddingTop: "5%" }}
      >
        <Row>
          <Col>
            <div>
              <img
                src={Ash}
                style={{ width: "80%", borderRadius: "10px", margin: "10%" }}
                alt="Ashrith Yakkali's"
              />
            </div>
          </Col>
          <Col>
            <div className="mt-5">
              <h2>Hey! I'm Ashrith ;)</h2>
              <p class="text-light">
                I'm currently pursuing Integrated MTech SE at Vellore Institute
                of Technology - Amaravati. I'm a intermediate level freelancing
                Front-End Developer and training to become a Pro FullStack
                Developer. Feel free to approach me through Contact section ;)
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}
