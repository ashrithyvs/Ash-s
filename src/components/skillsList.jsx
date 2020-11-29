import { Container } from "react-bootstrap";
import Skill from "./skill";
function SkillsList() {
  return (
    <div >
      <section class="container-fluid" style={{paddingTop:"5%"}}>
        <h1 class="text-center">My skills!</h1>
        <Container>
        <div class="skillsList mt-5 text-light">
          <ul class="mb-0">
            <div class="row pb-5">
              <Skill name="Java" percent="70%" />
              <Skill name="Data Structures" percent="60%" />
              <Skill name="React" percent="75%" />
            </div>
            <div class="row pb-5">
              <Skill name="JavaScript" percent="80%" />
              <Skill name="MongoDB/NoSQL" percent="80%" />
              <Skill name="Node JS" percent="80%" />
            </div>
            <div class="row pb-5">
              <Skill name="RESTful API" percent="80%" />
              <Skill name="HTML" percent="100%" />
              <Skill name="CSS" percent="75%" />
            </div>
          </ul>
        </div>
        </Container>
      </section>
    </div>
  );
}

export default SkillsList;

// style={{ width: "1490px" }}
