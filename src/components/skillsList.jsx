import Skill from "./skill";

function SkillsList() {
  return (
    <div>
      <div class="container-fluid p-5" style={{ background: "#fbcffc" }}>
        <h1 class="text-center">My skills!</h1>
        <div class="skillsList mt-5">
          <ul class="mb-0">
            <div class="row pb-5">
              <Skill name="Java" percent="25%" />
              <Skill name="Data Structures" percent="25%" />
              <Skill name="React" percent="25%" />
            </div>
            <div class="row pb-5">
              <Skill name="JavaScript" percent="25%" />
              <Skill name="MongoDB/NoSQL" percent="25%" />
              <Skill name="Node JS" percent="25%" />
            </div>
            <div class="row pb-5">
              <Skill name="RESTful API" percent="25%" />
              <Skill name="HTML" percent="25%" />
              <Skill name="CSS" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SkillsList;

// style={{ width: "1490px" }}
