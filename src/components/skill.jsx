function Skill(props) {
  return (
    <div class="wrapper mx-auto ">
      <h5 class="mb-3 d-flex justify-content-start ">{props.name}</h5>
      <div
        class="progress d-flex mb-3"
        style={{ height: "5px", width: "400px" }}
      >
        <div
          class="progress-bar "
          role="progressbar"
          style={{ width: props.percent }}
        ></div>
      </div>
    </div>
  );
}
export default Skill;
