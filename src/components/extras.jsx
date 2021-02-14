/* eslint-disable react/jsx-no-target-blank */
import { Button } from "react-bootstrap";
import resume from "./downloadables/resume.pdf";

export default function Extras() {
  const pill = {
    backgroundColor: "#be9fe1",
    padding: "10px 40px ",
    borderRadius: "26px",
    color: "black",
  };
  return (
    <section>
      <div className="container d-flex extra-wrapper">
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1D06ZO3m_7U9l2AIw__603SovafdW5sVm?usp=sharing"
        >
          <Button className="mb-2 extra" style={pill}>
            Certificates
          </Button>
        </a>
        <a href={resume} download>
          <Button className="mb-2 extra" style={pill}>
            My Resume
          </Button>
        </a>
        <a target="_blank" href="https://www.github.com/ashrithyvs">
          <Button className="mb-2 extra" style={pill}>
            Projects
          </Button>
        </a>
      </div>
    </section>
  );
}
