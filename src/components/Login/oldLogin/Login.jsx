import React from "react";
import { Button, Card, Container, Form, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../../../redux/actions/appAction";
const Login = () => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.loginOrRegister);
  return (
    <>
      <motion.div className={`col-lg-6 col-md-12 col-sm-12 `}>
        <Container
          className="d-flex align-items-center justify-content-center h-100"
          style={{}}
        >
          <motion.div
            initial={{ left: islogin ? "-50%" : "", opacity: 0 }}
            animate={{
              left: islogin ? "" : "-50%",
              opacity: islogin ? "1" : "0",
            }}
            // exit={{ left: "0", opacity: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="d-flex justify-content-center align-items-center login-small-window"
            style={{
              position: "absolute",
              width: "50%",
              zIndex: "1",
              right: "0",
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
                  Log In
                </h2>
                <Form.Group className="input-field w-100" controlId="email">
                  <Form.Label>
                    <i className="fa-solid fa-user"></i>
                  </Form.Label>
                  <Form.Control type="test" placeholder="Email address" />
                </Form.Group>
                <Form.Group className="input-field w-100" controlId="password">
                  <Form.Label>
                    <i className="fa-solid fa-lock"></i>
                  </Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button
                  size="lg"
                  type="submit"
                  variant="info"
                  className="col-2 mt-2 btn-style w-100"
                  style={{ color: "#fff" }}
                >
                  Login
                </Button>
                <div className="w-100 text-center mt-2">
                  <NavLink
                    to="/forgot-password"
                    onClick={(e) => {
                      dispatch(toggleLogin());
                    }}
                  >
                    Forgot Password
                  </NavLink>
                </div>
              </Form>
            </Card>
            <div
              className="w-100 text-center mt-2 small-text"
              style={{
                display: "none",
              }}
            >
              New here?
              <NavLink
                className="ms-1"
                onClick={(e) => {
                  dispatch(toggleLogin());
                }}
              >
                Sign Up
              </NavLink>
            </div>
          </motion.div>
        </Container>
      </motion.div>
    </>
  );
};

export default Login;
