import {Card,Modal} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import {React,useState} from 'react'


function Work(props) {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


  return (
    <div>
   <Card>
   <a onClick={handleShow}><Card.Img variant="top" src={props.src} /></a>
    <Card.Body>
    <a href={props.route}><Card.Title class="text-dark"><h4>{props.title}</h4></Card.Title></a>
      <Card.Text class="lead" style={{fontSize:"70%"}}>
        {props.desc}
      </Card.Text>
    </Card.Body>
  </Card>

  <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Gallery</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={props.msrc1} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.msrc2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.msrc3} alt="First slide" />
        </Carousel.Item>
      </Carousel>
            </Modal.Body>
          </Modal>
    </div>
  );
}

function Work2(props) {

  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


  return (
    <div>
   <Card>
   <a onClick={handleShow}><Card.Img variant="top" src={props.src} /></a>
    <Card.Body>
    <a href={props.route}><Card.Title class="text-dark"><h4>{props.title}</h4></Card.Title></a>
    <Card.Text class="lead" style={{fontSize:"70%"}}>
        {props.desc}
      </Card.Text>
    </Card.Body>
  </Card>

  <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header closeButton>
              <Modal.Title>Gallery</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel>
              <Carousel.Item>
          <img className="d-block w-100" src={props.msrc1} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.msrc2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.msrc3} alt="First slide" />
        </Carousel.Item>
      </Carousel>
            </Modal.Body>
          </Modal>
    </div>
  );
}

function Work3(props) {

  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


  return (
    <div>
   <Card>
   <a onClick={handleShow}><Card.Img variant="top" src={props.src} /></a>
    <Card.Body>
    <a href={props.route}><Card.Title class="text-dark"><h4>{props.title}</h4></Card.Title></a>
    <Card.Text class="lead" style={{fontSize:"70%"}}>
        {props.desc}
      </Card.Text>
    </Card.Body>
  </Card>

  <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Gallery</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel>
        
              <Carousel.Item>
          <img className="d-block w-100" src={props.msrc1} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.msrc2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.msrc3} alt="First slide" />
        </Carousel.Item>
      </Carousel>
            </Modal.Body>
          </Modal>
    </div>
  );
}

export {Work,Work2,Work3};