import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const ServiceDetail = () => {
  let { serviceId } = useParams();
  const [serviceDetail, setServiceDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  console.log(serviceDetail);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/serviceDetail/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServiceDetail(data))
      .finally(() => {
        setLoading(false);
      });
  }, [serviceId]);

  const postData = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    const address = e.target.address.value;

    if (!number && !address) {
      alert("Please fill the information");
      return;
    }
    const productData = {
      number,
      address,
      displayName: user.displayName,
      email: user.email,
      state: "pending",
      serviceDetail,
    };

    fetch("http://localhost:5000/addProduct", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order Successful");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      {loading ? (
        <Spinner animation="grow" />
      ) : (
        <Container>
          <Row className="align-items-center py-4">
            <Col sm={12} md={6}>
              <img src={serviceDetail.img} alt="" />
            </Col>
            <Col sm={12} md={6}>
              <h3>{serviceDetail.name} Service</h3>
              <p className="text-secondary">{serviceDetail.des}</p>
              <p>
                Price: <h4>${serviceDetail.price}</h4>
              </p>
              <Form onSubmit={postData}>
                <Form.Group className="mb-3 w-75" controlId="phone">
                  <Form.Control
                    type="number"
                    name="number"
                    placeholder="Your Number"
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-75" controlId="address">
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Your Address"
                  />
                </Form.Group>
                <Button variant="dark" type="submit" className="d-block w-75">
                  Submit
                </Button>
              </Form>
              {/* <Button onClick={() => postData()}>Order</Button> */}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ServiceDetail;
