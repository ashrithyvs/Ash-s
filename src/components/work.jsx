import mindhack from "./images/mindhack.png";
import secrets from "./images/secrets.png";
import todolist from "./images/todolist.png";
import * as boot from "react-bootstrap";

function Work() {
  return (
    <div>
      <boot.Carousel>
        <boot.Carousel.Item>
          <img className="d-block w-100" src={secrets} alt="Third slide" />

          <boot.Carousel.Caption className="text-dark">
            <h3>The Secrets project.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <boot.Button variant="outline-dark sm">
              Redirect to this project
            </boot.Button>
          </boot.Carousel.Caption>
        </boot.Carousel.Item>
        <boot.Carousel.Item>
          <img className="d-block w-100" src={todolist} alt="Third slide" />

          <boot.Carousel.Caption>
            <h3>To-Do List</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <boot.Button variant="outline-light sm">
              Redirect to this project
            </boot.Button>
          </boot.Carousel.Caption>
        </boot.Carousel.Item>
        <boot.Carousel.Item>
          <img className="d-block w-100" src={mindhack} alt="First slide" />
          <boot.Carousel.Caption>
            <h3>Mindhack</h3>
            <p>
              This project is a replica of original Mindhack website which I
              made as a practice challenge{" "}
            </p>
            <boot.Button variant="outline-dark sm">
              Redirect to this project
            </boot.Button>
          </boot.Carousel.Caption>
        </boot.Carousel.Item>
      </boot.Carousel>
    </div>
  );
}

export default Work;
