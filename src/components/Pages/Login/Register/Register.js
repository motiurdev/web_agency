import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import loginImg from "../../../../images/agency_website_4x.png";
import googleLogo from "../../../../images/icons/icons8-google-48.png";
import loginImg2 from "../../../../images/logos/logo.png";

const Register = () => {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="w-50">
            <div className="text-center">
              <img
                src={loginImg2}
                width="120"
                className="bg-light roundedCircle m-4"
                alt=""
              />
              <h3>Hello Again!</h3>
              <p className="text-secondary w-75 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, officia!
              </p>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <a
                href="#"
                className="text-decoration-none d-block text-end my-2"
              >
                Recovery Password
              </a>
              <Button
                variant="dark"
                type="submit"
                className="d-block w-100 mb-4"
              >
                Register
              </Button>
            </Form>
            <div>
              <p>
                Already have an account?{" "}
                <NavLink to="/login" className="text-decoration-none">
                  Login In
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
