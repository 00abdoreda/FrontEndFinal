import React, { useState } from "react";
import * as Yup from "yup";
import { Button, Card, Container, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../../redux/actions/appAction";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { motion } from "framer-motion";
import background1 from "../../assets/images/background1.jpg";
const ForgotPassword1 = () => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.loginOrRegister);
  const initialValues = {
    email: "",
  };
  const validationSchema1 = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
  });
  const fields = [
    {
      style: { width: "100%" },
      type: "email",
      label: "Email",
      name: "email",
    },
  ];
  const handleS = (e) => {
    console.log(e);
  };
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          // backgroundColor: "#fff",
          height: "100vh",
          backgroundImage: `url(${background1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="overlay"></div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ left: 0, opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="d-flex justify-content-center flex-column align-items-center"
          style={{ width: "100%", zIndex: "1" }}
        >
          <Card className="form-card">
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
                  className="d-flex flex-wrap justify-content-between text-center gap-2"
                  style={{ width: "400px", padding: "30px" }}
                  onSubmit={handleSubmit}
                >
                  <h2
                    className="mb-4 mt-2 w-100"
                    style={{
                      fontSize: "2.2rem",
                      color: "#444",
                    }}
                  >
                    Reset Password
                  </h2>
                  {fields.map((e, i) => (
                    <Field
                      className="mb-2"
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
                    size="lg"
                    type="submit"
                    variant="info"
                    className="col-2 mt-3 btn-style w-100 p-2"
                    style={{ color: "#fff" }}
                  >
                    Reset Password
                  </Button>
                  <div className="w-100 text-center mt-2 mb-2"></div>
                </Form>
              )}
            </Formik>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account?
            <NavLink
              className="ms-1"
              to="/login"
              onClick={() => {
                dispatch(toggleLogin());
              }}
            >
              Sign In
            </NavLink>
          </div>
        </motion.div>
      </Container>
    </>
  );
};

export default ForgotPassword1;
