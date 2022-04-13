import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BannerImg from "../../../../images/logos/Frame.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col sm={12} md={6} className="pe-5">
            <h1>Let's Grow Your Brand To The Next Level.</h1>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              expedita sint quam necessitatibus voluptatibus, officia eos minus
              non. Ducimus illo suscipit pariatur a eligendi quia non neque,
              nemo eos ipsa.
            </p>
            <Button className="px-4" variant="dark">
              Hire Us
            </Button>
          </Col>
          <Col sm={12} md={6}>
            <img src={BannerImg} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
