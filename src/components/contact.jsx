import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";
import emailjs from "emailjs-com";


function Contact() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1jv66md",
        "h-ash",
        e.target,
        "user_04NgBa6OrljmYyYztWVK5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  

  

  return (
    <div>
      <section
        style={{ display: "grid", alignContent: "center",paddingBottom:"5%",paddingTop:"5%"}}
        id="contact"
      >
        <h1 class="text-center mb-5">Want to Ping me?</h1>
        <Form
          noValidate
          validated={validated}
          onSubmit={sendEmail}
          style={{ padding: "5% auto 5%",width:"40%", margin:"auto"}}
        >
          <Form.Group>
            <Form.Label>Enter your Name</Form.Label>
            <Form.Row>
              <Col>
                <Form.Control required type="text" name="first_name" placeholder="First Name" />
              </Col>
              <Col>
                <Form.Control required type="text" name="last_name" placeholder="Last Name" />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Label>Enter your Email Adress</Form.Label>
                <Form.Control
                  required
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Label>Enter your Phone Number</Form.Label>
                <Form.Control
                  required
                  name="telephone"
                  type="tel"
                  placeholder="Your Phone Number"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Label>Message (optional)</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Enter your Message here"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <div class="d-flex justify-content-center mt-5">
          <Button variant="outline-light" type="submit" value="Send">
            Submit
          </Button></div>
        </Form>
      </section>
    </div>
  );
}
export default Contact;
