import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // service detail
  const serviceDetail = (id) => {
    console.log("id", id);
  };

  return (
    <div style={{ padding: "70px 0", background: "#f7f7f7" }}>
      <Container>
        <h2 className="text-center pb-4">
          Provide awesome <span style={{ color: "#7ab259" }}>services</span>
        </h2>
        <Row gap={4}>
          {services.map((service) => (
            <Service
              key={service._id}
              service={service}
              serviceDetail={serviceDetail}
            ></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
