import { replace } from "formik";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();
  setTimeout(() => {
    nav("/", { replace: true });
  }, 2000);
  return (
    <Container
      fluid
      className="not-found-container w-100"
      style={{ height: "100vh" }}
    >
      <Row className="d-flex align-items-center justify-content-center w-100 h-100">
        <Col className="d-flex align-items-center justify-content-center flex-column">
          <h1 className="not-found-heading">404 Not Found</h1>
          <p className="not-found-message">
            We're sorry, the page you're looking for cannot be found.
          </p>
          {/* <Button
            className="not-found-button"
            onClick={() => nav("/", { replace: true })}
          >
            Return to Home Page
          </Button> */}
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
