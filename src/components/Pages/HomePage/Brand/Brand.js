import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import brandImg1 from "../../../../images/logos/slack.png";
import brandImg2 from "../../../../images/logos/google.png";
import brandImg3 from "../../../../images/logos/uber.png";
import brandImg4 from "../../../../images/logos/netflix.png";
import brandImg5 from "../../../../images/logos/airbnb.png";

const Brand = () => {
  return (
    <div>
      <Container>
        <Row className="align-items-center justify-content-center py-5">
          <Col xs={6} md={2}>
            <img
              className="img-fluid"
              width="150"
              height="150"
              src={brandImg1}
              alt=""
            />
          </Col>
          <Col xs={6} md={2}>
            <img
              className="img-fluid"
              width="150"
              height="150"
              src={brandImg2}
              alt=""
            />
          </Col>
          <Col xs={6} md={2}>
            <img
              className="img-fluid"
              width="130"
              height="130"
              src={brandImg3}
              alt=""
            />
          </Col>
          <Col xs={6} md={2}>
            <img
              className="img-fluid"
              width="150"
              height="150"
              src={brandImg4}
              alt=""
            />
          </Col>
          <Col xs={6} md={2}>
            <img
              className="img-fluid"
              width="150"
              height="150"
              src={brandImg5}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Brand;
