import React, { useState } from "react";
import * as Yup from "yup";
import { Button, Card, Container, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../../redux/actions/appAction";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { motion } from "framer-motion";

const SignUp2 = () => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.loginOrRegister);
  const initialValues = {
    firstName: "",
    lastName: "",
    nationalID: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema1 = Yup.object().shape({
    firstName: Yup.string().required("firstName is Required"),
    lastName: Yup.string().required("lastName is Required"),
    nationalID: Yup.string().required("NationalID is Required"),
    email: Yup.string().email().required("Email is required"),
    mobileNumber: Yup.string().required("Mobile is required"),
    password: Yup.string().min(6).required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Password is required"),
  });
  const fields = [
    {
      style: { width: "48%" },
      type: "text",
      label: "First name",
      name: "firstName",
    },
    {
      style: { width: "48%" },
      type: "text",
      label: "Last name",
      name: "lastName",
    },
    {
      style: { width: "100%" },
      type: "text",
      label: "National ID",
      name: "nationalID",
    },
    {
      style: { width: "100%" },
      type: "email",
      label: "Email",
      name: "email",
    },
    {
      style: { width: "100%" },
      type: "text",
      label: "Mobile number",
      name: "mobileNumber",
    },
    {
      style: { width: "100%" },
      type: "password",
      label: "Password",
      name: "password",
    },
    {
      style: { width: "100%" },
      type: "password",
      label: "Confirm Password",
      name: "confirmPassword",
    },
  ];
  const handleS = (e) => {
    console.log(e);
  };
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
              {" "}
              <h2
                className="mb-2 mt-4 w-100 text-center"
                style={{
                  fontSize: "2rem",
                  color: "#444",
                }}
              >
                Sign Up
              </h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema1}
                onSubmit={handleS}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form
                    className="d-flex flex-wrap justify-content-between text-center p-3 gap-2"
                    style={{ width: "400px" }}
                    onSubmit={handleSubmit}
                  >
                    {fields.map((e, i) => (
                      <Field
                        key={i}
                        style={e.style}
                        type={e.type}
                        name={e.name}
                        component={TextField}
                        label={e.label}
                        variant="standard"
                      />
                    ))}
                    <Button
                      type="submit"
                      variant="info"
                      className="col-2 btn-style mt-3 w-100 mb-4 p-2"
                      style={{
                        color: "#fff",
                      }}
                    >
                      Sign Up
                    </Button>
                  </Form>
                )}
              </Formik>
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

export default SignUp2;
