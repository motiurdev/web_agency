import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import loginImg from "../../../images/agency_website_4x.png";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <img src={loginImg} className="img-fluid w-100" alt="login_img" />
          </Col>
          <Col sm={12} md={6}>
            <form className="form">
              <input
                type="text"
                id="email"
                class="form__input"
                autocomplete="off"
                placeholder=" "
              />
              <label for="email" class="form__label">
                Email
              </label>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
