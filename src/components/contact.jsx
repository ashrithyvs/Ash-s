import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";

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

  return (
    <div>
      <section
        className="bg-dark text-light"
        style={{ display: "grid", alignContent: "center" }}
      >
        <h1 class="text-center">Want to Ping me?</h1>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          style={{ padding: "5% 10% 5%" }}
        >
          <Form.Group>
            <Form.Label>Enter your Name</Form.Label>
            <Form.Row>
              <Col sm={3}>
                <Form.Control required type="text" placeholder="First Name" />
              </Col>
              <Col sm={3}>
                <Form.Control required type="text" placeholder="Last Name" />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col md={6}>
                <Form.Label>Enter your Email Adress</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Your Email Address"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col md={6}>
                <Form.Label>Enter your Phone Number</Form.Label>
                <Form.Control
                  required
                  type="tel"
                  placeholder="Your Phone Number"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col md={6}>
                <Form.Label>Message (optional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your Message here"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Button variant="outline-light" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
}
export default Contact;
