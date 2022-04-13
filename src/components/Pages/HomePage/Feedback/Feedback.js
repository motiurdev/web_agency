import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import customer1 from "../../../../images/customer-1.png";
import customer2 from "../../../../images/customer-2.png";
import customer3 from "../../../../images/customer-3.png";

const Feedback = () => {
  return (
    <div style={{ padding: "70px 0" }}>
      <Container>
        <h3 className="text-center py-5">
          Clients <span style={{ color: "#7ab259" }}>Feedback</span>
        </h3>
        <Row className="justify-content-around gx-3">
          <Col sm={12} md={4} className="border border-2-secondary py-2 pt-3">
            <Row>
              <Col md={2}>
                <img src={customer1} width="50" height="50" alt="" />
              </Col>
              <Col md={10}>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Nash patrik
                </span>
                <p>CEO, Manpol</p>
              </Col>
            </Row>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet
              quos ex laboriosam eligendi voluptate, at vel nemo nulla cumque!
            </p>
          </Col>
          <Col sm={12} md={3} className="border border-2-secondary py-2 pt-3">
            <Row>
              <Col md={2}>
                <img src={customer2} width="50" height="50" alt="" />
              </Col>
              <Col md={10}>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Nash patrik
                </span>
                <p>CEO, Manpol</p>
              </Col>
            </Row>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet
              quos ex laboriosam eligendi voluptate, at vel nemo nulla cumque!
            </p>
          </Col>
          <Col sm={12} md={4} className="border border-2-secondary py-2 pt-3">
            <Row>
              <Col md={2}>
                <img src={customer3} width="50" height="50" alt="" />
              </Col>
              <Col md={10}>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Nash patrik
                </span>
                <p>CEO, Manpol</p>
              </Col>
            </Row>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet
              quos ex laboriosam eligendi voluptate, at vel nemo nulla cumque!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feedback;
