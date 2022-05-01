import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { name, des, img, _id } = props.service;
  return (
    <Col xs={12} md={4} style={{ color: "#000" }}>
      <NavLink to={`/serviceDetail/${_id}`} style={{ textDecoration: "none" }}>
        <div className="text-center hover-cart">
          <img height="100" width="100" src={img} alt="service_photo_1" />
          <h5 className="py-3">{name}</h5>
          <p>{des.slice(0, 180)}</p>
        </div>
      </NavLink>
    </Col>
  );
};

export default Service;
