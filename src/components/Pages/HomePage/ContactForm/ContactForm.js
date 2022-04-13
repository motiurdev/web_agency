import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ContactForm = () => {
  return (
    <div style={{ background: "#fbd062", padding: "70px 0" }}>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <h3 className="py-2">
              Let's us handle your <br /> project, professionally.
            </h3>
            <p className="pe-5 me-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              doloribus illum magnam beatae quidem officia.
            </p>
          </Col>
          <Col sm={12} md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control type="email" placeholder="Your email address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="companyName">
                <Form.Control
                  type="email"
                  placeholder="Your name / company's name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Control
                  as="textarea"
                  rows={8}
                  placeholder="Your message"
                />
              </Form.Group>
            </Form>
            <Button className="px-5" variant="dark">
              Send
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
