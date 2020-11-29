const { default: Institute } = require("./institute");

function Education() {
  return (
    <section id="education">
      <div class="container-fluid" style={{paddingTop:"5%"}}>
        <h1 class="text-center pb-5 mb-3">Education</h1>
        <div class="text-light">
        <Institute
          courseName="Integrated MTech Software Engineering"
          instituteName="Vellore Institute of Technology - Amaravati"
          years="2019-2024"
          style={{ margin: "100px" }}
        />
        <Institute
          courseName="Intermediate/12th"
          instituteName="Narayana Educational Institutions"
          years="2017-2019"
        />
        <Institute
          courseName="High School"
          instituteName="Ravindra Bharati Public School"
          years="2007-2017"
        /></div>
      </div>
    </section>
  );
}

export default Education;
