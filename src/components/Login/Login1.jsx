import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { Button, Card, Container, Col } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postLoginUser,
  sessionCheck,
  toggleLogin,
} from "../../redux/actions/appAction";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
const Login1 = () => {
  const dispatch = useDispatch();
  // axios.default.withCredentials = true;

  const islogin = useSelector((state) => state.loginOrRegister);
  const initialValues = {
    email: "",
    password: "",
  };
  const emailRef = useRef();
  const passwordRef = useRef();
  const location = useLocation();
  const validationSchema1 = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6).required("Password is required"),
  });
  const fields = [
    {
      style: { width: "100%" },
      type: "email",
      label: "Email",
      name: "email",
      ref: emailRef,
    },
    {
      style: { width: "100%" },
      type: "password",
      label: "Password",
      name: "password",
      ref: passwordRef,
    },
  ];
  const nav = useNavigate();
  // const checkUser = useSelector(state=>state.loginStatus);

  const handleSubmit = async (e) => {
    // event.preventDefault();
    // const data = {email:emailRef.current,password: passwordRef.current};
    // console.log(data);
    // console.log(e);
    try {
      // Dispatch the first function and wait for it to complete
      //  dispatch(postLoginUser({email:"www@www.com",password:"wwwwww"}));
      // Dispatch the second function
      // window.location.reload();
      // window.location.replace("/");
      // dispatch(sessionCheck());
      await dispatch(postLoginUser(e));
      toast.success(`Successfull Sign In`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // setTimeout(() => {
      nav("../", { replace: true });
      // }, 3000);
    } catch (error) {
      toast.error("invalid email or password", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    // window.location.reload();
    // console.log(location);
    // const newLocation = {...location , pathname:"/"};
    // history.pushState("/");
    // if(checkUser===`200`)
    // else if (checkUser === `201`)
    // nav("../admin", { replace: true });
    // else {
    //         toast.success("invalid email or password", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });
  };
  // <Redirect to="/" />
  // console.log(initialValues);
  return (
    <>
      <Col className={`col-lg-6 col-md-12 col-sm-12`}>
        <Container className="d-flex align-items-center justify-content-center h-100">
          <motion.div
            initial={{ left: islogin ? "-50%" : "", opacity: 0 }}
            animate={{
              left: islogin ? "" : "-50%",
              opacity: islogin ? "1" : "0",
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
              <h2
                className="mb-2 mt-4 w-100 text-center"
                style={{
                  fontSize: "2rem",
                  color: "#444",
                }}
              >
                Log In
              </h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema1}
                onSubmit={handleSubmit}
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
                    style={{ width: "370px" }}
                    onSubmit={handleSubmit}
                  >
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
                        ref={e.ref}
                      />
                    ))}
                    <Button
                      type="submit"
                      variant="info"
                      className="col-2 btn-style mt-4 w-100 p-2"
                      style={{
                        color: "#fff",
                      }}
                      disabled={isSubmitting}
                    >
                      Login
                    </Button>
                    <div className="w-100 text-center mt-2 mb-2">
                      <NavLink
                        to="/forgot-password"
                        state={{
                          fontSize: "16px",
                        }}
                        onClick={(e) => {
                          dispatch(toggleLogin());
                        }}
                      >
                        Forgot Password
                      </NavLink>
                    </div>
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
      </Col>
    </>
  );
};

export default Login1;
