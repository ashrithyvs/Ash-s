import Skill from "./skill";

function SkillsList(){
    return (
        <div>
       <h1 class="text-center">My skills!</h1>
       
       <div class="skillsList mt-5">
       <ul>
       <div class="row mb-5">
           <Skill name="Java" percent="25%" />
           <Skill name="Data Structures" percent="25%" />
           <Skill name ="React" percent="25%" />
           </div>
           <div class="row mb-5">
           <Skill name ="JavaScript" percent="25%" />
           <Skill name ="MongoDB/NoSQL" percent="25%" />
           <Skill name ="Node JS" percent="25%" />
           </div>
           <div class="row mb-5">
           <Skill name ="RESTful API" percent="25%" />
           <Skill name ="HTML" percent="25%" />
           <Skill name ="CSS" percent="25%" />
        </div>
       </ul>
    </div>
</div>
    )
}

export default SkillsList;