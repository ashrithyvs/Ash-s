import { Col, Row } from "react-bootstrap";

function Institute(props) {
  return (
    <div>
      <div>
        <Row>
          <Col>
            <h3 class="text-right" style={{ top: "23%", position: "relative" }}>
              {props.courseName}
            </h3>
          </Col>
          <Col md={{ offset: 1 }} style={{ margin: "20px 10px" }}>
            <span class="text-warning border border-light p-2">
              {props.years}
            </span>
            <h5 class="my-4">{props.instituteName}</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Institute;
