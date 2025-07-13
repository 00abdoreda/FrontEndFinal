import React from "react";
import { Button, Card, Container, Form, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../../../redux/actions/appAction";
const SignUp = () => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.loginOrRegister);
  return (
    <>
      <Col className={`col-lg-6 col-md-12 col-sm-12`}>
        <Container className="d-flex align-items-center justify-content-center h-100">
          <motion.div
            initial={{ left: islogin ? "0%" : "100%", opacity: 0 }}
            animate={{
              left: islogin ? "100%" : "0%",
              opacity: islogin ? "0" : "1",
            }}
            transition={{ duration: 1.2, delay: 1 }}
            className="d-flex justify-content-center align-items-center login-small-window"
            style={{
              position: "absolute",
              width: "50%",
              zIndex: "1",
            }}
          >
            <Card className="form-card">
              <Form
                className="d-flex flex-wrap justify-content-between text-center p-3 gap-2"
                style={{ width: "370px" }}
              >
                <h2
                  className="mb-4 mt-2 w-100"
                  style={{
                    fontSize: "2.2rem",
                    color: "#444",
                  }}
                >
                  Sign Up
                </h2>
                <Form.Group className="input-field" controlId="firstName">
                  <Form.Label>
                    <i className="fa-solid fa-user"></i>
                  </Form.Label>
                  <Form.Control type="test" placeholder="First name" />
                </Form.Group>
                <Form.Group className="input-field" controlId="lastName">
                  <Form.Label>
                    <i className="fa-solid fa-user"></i>
                  </Form.Label>
                  <Form.Control type="test" placeholder="Last name" />
                </Form.Group>
                <Form.Group
                  className="input-field w-100"
                  controlId="nationalID"
                >
                  <Form.Label>
                    <i className="fa-solid fa-id-card"></i>
                  </Form.Label>
                  <Form.Control type="text" placeholder="National ID" />
                </Form.Group>
                <Form.Group className="input-field w-100" controlId="email">
                  <Form.Label>
                    <i className="fa-solid fa-envelope"></i>
                  </Form.Label>
                  <Form.Control type="email" placeholder="Email address" />
                </Form.Group>
                <Form.Group
                  className="input-field w-100"
                  controlId="mobileNumber"
                >
                  <Form.Label>
                    <i className="fa-solid fa-mobile"></i>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Mobile number" />
                </Form.Group>
                <Form.Group className="input-field w-100" controlId="password">
                  <Form.Label>
                    <i className="fa-solid fa-lock"></i>
                  </Form.Label>
                  <Form.Control type="password" placeholder="New password" />
                </Form.Group>
                <Button
                  size="lg"
                  type="submit"
                  variant="info"
                  className="col-2 mt-2 btn-style w-100 mb-4"
                  style={{ color: "#fff" }}
                >
                  Sign Up
                </Button>
              </Form>
            </Card>
            <div
              className="w-100 text-center mt-2 small-text"
              style={{
                display: "none",
              }}
            >
              One of us?
              <NavLink
                className="ms-1"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(toggleLogin());
                }}
              >
                Log In
              </NavLink>
            </div>
          </motion.div>
        </Container>
      </Col>
    </>
  );
};

export default SignUp;
