import React, { useState } from "react";
import * as Yup from "yup";
import Sign1 from "./Sign1";
import Sign2 from "./Sign2";
import Sign3 from "./Sign3";
import { Button, Card, Container, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../../../redux/actions/appAction";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
// import Button from '@material-ui/core/Button';
// import { Field, Formik } from "formik";
const FormSignUp = () => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.loginOrRegister);
  const initialValues = {
    firstName: "",
    lastName: "",
    NationalID: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    address: "",
    dateOfBirth: "",
    // profileImage: [],
    // nationalIDImage: [],
    gender: "",
  };
  // const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z].{6,}$/;
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("firstName is Required"),
    lastName: Yup.string().required("lastName is Required"),
    NationalID: Yup.string().required("NationalID is Required"),
    email: Yup.string().email().required("Email is required"),
    mobileNumber: Yup.string().required("Mobile is required"),
    address: Yup.string().required("Mobile is required"),
    password: Yup.string()
      .min(6)
      // .matches(,{ message: "Please create a stronger password" })
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Password is required"),
    gender: Yup.string().required("Gender is required"),
    dateOfBirth: Yup.string().required("Date of birth is required"),
  });
  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <>
      <Col className={`col-lg-6 col-md-12 col-sm-12`}>
        <Container className="d-flex align-items-center justify-content-center h-100">
          <motion.div
            // initial={{ left: islogin ? "0%" : "100%", opacity: 0 }}
            // animate={{
            //   left: islogin ? "100%" : "0%",
            //   opacity: islogin ? "0" : "1",
            // }}
            // transition={{ duration: 1.2, delay: 1 }}
            className="d-flex justify-content-center align-items-center login-small-window"
            style={{
              top: "30%",
              position: "absolute",
              width: "50%",
              zIndex: "1",
            }}
          >
            <Card className="form-card">
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                // validationSchema={validationSchema}
                // validateOnChange={false}
                validateOnBlur={false}
                validationSchema={validationSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  validateField,
                }) => (
                  <Form>
                    <FormSteps
                      handleSubmit={handleSubmit}
                      validateField={validateField}
                      errors={errors}
                      isSubmitting={isSubmitting}
                      touched={touched}
                      values={values}
                      handleChange={handleChange}
                    >
                      <div>
                        <Field
                          type="text"
                          name="firstName"
                          component={TextField}
                          label="First Name"
                          variant="standard"
                          value={values.firstName}
                          onChange={handleChange}
                          // onClick={(errors)=> (
                          //          error={errors.firstName ? true : false}
                          // helperText={errors.firstName && errors.firstName}
                          // )}
                          // error={errors.firstName ? true : false}
                          // helperText={errors.firstName && errors.firstName}
                          // helperText={errors.firstName && errors.firstName}
                        />

                        <Field
                          type="text"
                          name="lastName"
                          component={TextField}
                          label="Last Name"
                          variant="standard"
                          error={errors.lastName ? true : false}
                          // helperText={errors.lastName && errors.lastName}
                          // error={
                          //   errors.lastName && touched.lastName ? true : false
                          // }
                          helperText={errors.lastName && errors.lastName}
                          // helperText={
                          //   errors.lastName && touched.lastName
                          //     ? errors.lastName
                          //     : null
                          // }
                        />
                        <Field
                          type="email"
                          name="email"
                          component={TextField}
                          label="Email"
                          variant="standard"
                          error={errors.email ? true : false}
                          // error={errors.email && touched.email ? true : false}
                          helperText={errors.email && errors.email}
                        />
                        <Field
                          type="text"
                          name="NationalID"
                          component={TextField}
                          label="National ID"
                          variant="standard"
                          // error={
                          //   errors.NationalID && touched.NationalID
                          //     ? true
                          //     : false
                          // }
                          error={errors.NationalID ? true : false}
                          helperText={errors.NationalID && errors.NationalID}
                        />
                        <Field
                          type="text"
                          name="mobileNumber"
                          component={TextField}
                          label="Mobile Number"
                          variant="standard"
                          // error={
                          //   errors.mobileNumber && touched.mobileNumber
                          //     ? true
                          //     : false
                          // }
                          error={errors.mobileNumber ? true : false}
                          helperText={
                            errors.mobileNumber && errors.mobileNumber
                          }
                        />
                      </div>
                      <div>
                        <Field
                          type="text"
                          name="address"
                          component={TextField}
                          label="Address"
                          variant="standard"
                          // error={
                          //   errors.address && touched.address ? true : false
                          // }
                          error={errors.address ? true : false}
                          helperText={errors.address && errors.address}
                        />

                        <Field
                          type="password"
                          name="password"
                          component={TextField}
                          label="Password"
                          variant="standard"
                          error={
                            errors.password && touched.password ? true : false
                          }
                          // error={errors.password ? true : false}
                          // helperText={errors.password && errors.password}
                        />
                        <Field
                          type="password"
                          name="confirmPassword"
                          component={TextField}
                          label="Confirm Password"
                          variant="standard"
                          error={
                            errors.confirmPassword && touched.confirmPassword
                              ? true
                              : false
                          }
                          // error={errors.confirmPassword ? true : false}
                          // helperText={
                          //   errors.confirmPassword && errors.confirmPassword
                          // }
                        />
                        <span>
                          <label>
                            <Field
                              type="radio"
                              name="gender"
                              value="male"
                              variant="standard"
                            />
                            Male
                          </label>
                          <label>
                            <Field
                              type="radio"
                              name="gender"
                              value="female"
                              variant="standard"
                            />
                            Female
                          </label>
                          {errors.gender && touched.gender ? (
                            <span
                              style={{ marginLeft: "5px", color: "#d32f2f" }}
                            >
                              {errors.gender}
                            </span>
                          ) : null}
                        </span>

                        <label className="d-flex align-items-center">
                          Date Of Birth:
                          <Field
                            className="ms-2"
                            type="date"
                            name="dateOfBirth"
                            component={TextField}
                            variant="standard"
                            error={
                              errors.dateOfBirth && touched.dateOfBirth
                                ? true
                                : false
                            }
                            // error={errors.dateOfBirth ? true : false}
                            // helperText={
                            //   errors.dateOfBirth && errors.dateOfBirth
                            // }
                          />
                        </label>
                      </div>
                    </FormSteps>
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

export default FormSignUp;

export const FormSteps = (props) => {
  // console.log(children);
  const childrenArr = React.Children.toArray(props.children);
  const [step, setStep] = useState(0);
  const [ele, setEle] = useState(0);
  const i = Number(childrenArr[step].props.children.length - 1);
  const e = childrenArr;
  const name = childrenArr[step].props.children[0].props.name;
  const isError = props.errors[name] ? true : false;
  const isTouched = props.touched[name] ? true : false;
  const isEmpty = childrenArr[step].props.children[0].props.value
    ? true
    : false;
  // console.log(props.touched);
  // console.log(isTouched);
  const goNext = () => {
    // console.log(e);
    // console.log(name);
    // console.log(childrenArr[step].props.children);
    // console.log(ele);
    // console.log(props.errors);
    props.validateField(name);
    console.log(props.errors);
    // focus(childrenArr[step].props.children[ele]);
    // console.log(childrenArr[step].props.children[ele]);
    // setEle(ele + 1);
    if (isTouched && !isError) {
      if (ele !== Number(childrenArr[step].props.children.length - 1)) {
        setEle((e) => e + 1);
      } else {
        setEle(0);
        setStep((curr) => curr + 1);
      }
    }
    // else if (!isEmpty && !isError) setStep((curr) => curr + 1);
    else {
      props.validateField(name);
    }

    // }
    // console.log(props.errors);
    // console.log(isError);
    // console.log(props.errors);
    // props.validationSchema('firstName');
    // console.log(props.validationSchema.fields.firstName);
  };
  const goBack = () => {
    setStep((curr) => curr - 1);
  };
  // console.log(props.validationSchema);

  return (
    <>
      {childrenArr[step]}
      {step > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={goBack}
          disabled={props.isSubmitting}
        >
          Back
        </Button>
      )}
      {step === childrenArr.length - 1 ? (
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={goNext}>
          Next
        </Button>
      )}
    </>
  );
};
