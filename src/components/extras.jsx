/* eslint-disable react/jsx-no-target-blank */
import { Button, Container } from "react-bootstrap";
import resume from "./downloadables/resume.pdf";

export default function Extras() {
  const pill = {
    backgroundColor: "#be9fe1",
    padding: " 10px 40px",
    borderRadius: "26px",
    color: "black",
  };
  return (
    <section class="extras" style={{ paddingTop: "5%" }}>
      <Container fluid>
        <div
          class="d-flex"
          style={{
            justifyContent: "space-evenly",
            alignContent: "space-evenly",
          }}
        >
          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/1D06ZO3m_7U9l2AIw__603SovafdW5sVm?usp=sharing"
          >
            <Button className="mb-2" style={pill}>
              Certificates
            </Button>
          </a>
          <a href={resume} download>
            <Button className="mb-2" style={pill}>
              My Resume
            </Button>
          </a>
          <a target="_blank" href="https://www.github.com/ashrithyvs">
            <Button className="mb-2" style={pill}>
              Projects
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
