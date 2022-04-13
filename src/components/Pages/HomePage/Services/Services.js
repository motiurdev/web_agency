import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import serviceImg1 from "../../../../images/icons/service1.png";
import serviceImg2 from "../../../../images/icons/service2.png";
import serviceImg3 from "../../../../images/icons/service3.png";

const Services = () => {
  return (
    <div style={{ paddingBottom: "70px" }}>
      <h2 className="text-center py-5">
        Provide awesome <span style={{ color: "#7ab259" }}>services</span>
      </h2>
      <Container>
        <Row gap={4}>
          <Col xs={12} md={4}>
            <div className="text-center">
              <img
                height="100"
                width="100"
                src={serviceImg1}
                alt="service_photo_1"
              />
              <h5 className="py-3">Web & Mobile design</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                impedit ad est velit id inventore odio modi nesciunt a odit.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="text-center">
              <img
                height="100"
                width="100"
                src={serviceImg2}
                alt="service_photo_1"
              />
              <h5 className="py-3">Web & Mobile design</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                impedit ad est velit id inventore odio modi nesciunt a odit.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="text-center">
              <img
                height="100"
                width="100"
                src={serviceImg3}
                alt="service_photo_1"
              />
              <h5 className="py-3">Web & Mobile design</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                impedit ad est velit id inventore odio modi nesciunt a odit.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
