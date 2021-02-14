import { Container } from "react-bootstrap";
import Skill from "./skill";
function SkillsList() {
  return (
    <div>
      <section
        class="container skillsList"
        id="skills"
        style={{ paddingTop: "5%" }}
      >
        <h1 class="text-center">My skills!</h1>
        <Container>
          <div class="mt-5 text-light">
            <ul class="mb-0">
              <div class="row pb-5">
                <Skill name="Java" percent="70%" />
                <Skill name="Data Structures" percent="60%" />
                <Skill name="JavaScript" percent="70%" />
              </div>
              <div class="row pb-5">
                <Skill name="HTML" percent="100%" />
                <Skill name="CSS" percent="75%" />
                <Skill name="Node JS" percent="80%" />
              </div>
              <div class="row pb-5">
                <Skill name="MongoDB" percent="75%" />
                <Skill name="RESTful API" percent="80%" />
                <Skill name="React" percent="75%" />
              </div>
              <div class="row pb-5">
                <Skill name="NoSQL" percent="75%" />
                <Skill name="SQL" percent="60%" />
                <Skill name="Firebase" percent="50%" />
              </div>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default SkillsList;
