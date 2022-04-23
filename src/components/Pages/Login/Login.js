import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import googleLogo from "../../../images/icons/icons8-google-48.png";
import loginImg2 from "../../../images/logos/logo.png";
import "./Login.css";

const Login = () => {
  const { googleSignIn, user } = useAuth();
  console.log(user);
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="text-center w-50 border border-3 py-5">
            <img
              src={loginImg2}
              width="120"
              className="bg-light roundedCircle m-4"
              alt=""
            />
            <h4 className="mb-4">Login With {user.displayName}</h4>
            <Button variant="light" className="w-100" onClick={googleSignIn}>
              <img src="" alt="" />
              <img
                src={googleLogo}
                className="me-3"
                width="30"
                height="30"
                alt=""
              />{" "}
              Google sign
            </Button>
            <p className="my-3">
              Don't have an account yet?{" "}
              <NavLink to="/register" className="text-decoration-none">
                Sign Up
              </NavLink>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
