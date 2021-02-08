function Skill(props) {
  return (
    <div class="wrapper mx-auto ">
      <h5 class="mb-3 d-flex justify-content-center ">{props.name}</h5>
      <div class="progress mb-3" style={{ height: "5px", width: "200px" }}>
        <div
          class="progress-bar "
          role="progressbar"
          style={{ width: props.percent, background: "#916dd5" }}
        ></div>
      </div>
    </div>
  );
}
export default Skill;
