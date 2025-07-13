import React, { useState } from "react";
import * as Yup from "yup";
import { Button, Card, Container, Col, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewAcc, toggleLogin } from "../../redux/actions/appAction";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
const MultiSignUp = () => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.loginOrRegister);
  let initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    Nid: "",
    mobile: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    doctorDepartment: "",
    specialist: "",
    doctorImage: "doctor.jpg",
    NidPhoto: "doctorNid.jpg",
    shortBiography: "",
  };
  const [step, setStep] = useState(0);
  const formTitles = ["Sign Up", "Personal Info", "Job Info"];
  const fields = [
    [
      {
        style: { width: "48%" },
        type: "text",
        label: "First Name",
        name: "firstName",
      },
      {
        style: { width: "48%" },
        type: "text",
        label: "Last Name",
        name: "lastName",
      },
      {
        style: { width: "100%" },
        type: "email",
        label: "email",
        name: "email",
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
    ],
    [
      {
        style: { width: "100%" },
        type: "text",
        label: "National ID",
        name: "Nid",
      },
      {
        style: { width: "100%" },
        type: "text",
        label: "Mobile Number",
        name: "mobile",
      },
      {
        style: { width: "100%" },
        type: "text",
        label: "Address",
        name: "address",
      },
      {
        style: { width: "100%" },
        type: "date",
        label: "Date of Birth",
        name: "dateOfBirth",
      },
      {
        style: { width: "100%" },
        type: "text",
        label: "Gender",
        name: "gender",
        // att: "error={errors.gender ? true : false} helperText={errors.gender && errors.gender}",
        content: (
          <div
            className="w-100 d-flex gap-2 align-items-center mt-2 justify-content-center position-relative"
            key={4}
          >
            <label htmlFor="gender">Gender: </label>
            <Field
              // key={4}
              // component={TextField}
              className="w-50 p-1"
              style={{
                // width: "180px",
                background: "none",
                border: "none",
                borderBottom: "1px solid #000",
                outline: "none",
                boxShadow: "none",
              }}
              id="gender"
              component="select"
              name="gender"
              placeholder="Select Option"
              // error={errors.gender ? true : false}
              // helperText={errors.gender && errors.gender}
            >
              <option value="">Select Your Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
            <span
              className="position-absolute"
              style={{
                color: "rgb(211, 47, 47)",
                bottom: "-20px",
                left: " 130px",
                fontWeight: "400",
                fontSize: "0.75rem",
                lineHeight: "1.66",
                letterSpacing: "0.03333em",
                textAlign: "left",
                marginTop: "3px",
              }}
            >
              <ErrorMessage name="gender" />
            </span>
          </div>
        ),
      },
    ],
    [
      {
        style: { width: "100%" },
        type: "text",
        label: "Doctor Department",
        name: "doctorDepartment",
      },
      {
        style: { width: "100%" },
        type: "text",
        label: "Enter your specialist",
        name: "specialist",
      },
      // {
      //   style: { width: "100%" },
      //   type: "file",
      //   label: "Profile Image",
      //   name: "doctorImage",
      // },
      // {
      //   style: { width: "100%" },
      //   type: "file",
      //   label: "N-ID Image",
      //   name: "NidPhoto",
      // },
      {
        style: { width: "100%" },
        type: "textarea",
        label: "shortBiography",
        name: "shortBiography",
      },
    ],
  ];
  const validationSchema = [
    Yup.object().shape({
      firstName: Yup.string().required("firstName is Required"),
      lastName: Yup.string().required("lastName is Required"),
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().min(6).required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Password is required"),
    }),
    Yup.object().shape({
      Nid: Yup.string().required("NationalID is Required"),
      mobile: Yup.string().required("Mobile is required"),
      address: Yup.string().required("Address is Required"),
      dateOfBirth: Yup.date().required("date of birth is Required"),
      gender: Yup.string().required("gender is Required"),
    }),
    Yup.object().shape({
      doctorDepartment: Yup.string().required("Department is Required"),
      specialist: Yup.string().required("specialist is Required"),
      doctorImage: Yup.string().default("default-doctor.jpg"),
      NidPhoto: Yup.string().default("default-doctor.jpg"),
      shortBiography: Yup.string().required("shortBiography is Required"),
    }),
  ];

  const submitHandler = async (values, onSubmitProps) => {
    if (step !== formTitles.length - 1) {
      onSubmitProps.setSubmitting(false);
      setStep((curr) => curr + 1);
    } else {
      const data = {
        ...values,
        isadmin: false,
        isactive: false,
        rate: 0,
        ratearr: [],
      };
      // console.log(data);
      try {
        delete data.confirmPassword;

        const res = await dispatch(createNewAcc(data));
        console.log("createNewAcc(data)", res);
        toast.success(`Successfull Sign Up`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // resetForm();
        setTimeout(() => {
          dispatch(toggleLogin());
        }, 1500);
      } catch (error) {
        console.log("errrorrrr");
        toast.error(`${error}`, {
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
    }
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
              <h2
                className="text-center mb-3 mt-4 w-100"
                style={{
                  fontSize: "2rem",
                  color: "#444",
                }}
              >
                {formTitles[step]}
              </h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema[step]}
                onSubmit={submitHandler}
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
                  >
                    {fields[step].map((e, i) =>
                      e.content ? (
                        e.content
                      ) : (
                        <Field
                          key={i}
                          style={e.style}
                          type={e.type}
                          name={e.name}
                          component={TextField}
                          label={e.label}
                          variant="standard"
                        />
                      )
                    )}
                    <div
                      className={`d-flex w-100 ${
                        step === 0
                          ? `justify-content-end`
                          : `justify-content-between`
                      } `}
                    >
                      {step > 0 && (
                        <Button
                          variant="info"
                          className="col-2 btn-style mt-4 w-25 p-2 mb-1"
                          style={{
                            color: "#fff",
                          }}
                          onClick={() => setStep((curr) => curr - 1)}
                        >
                          Back
                        </Button>
                      )}
                      <Button
                        type="submit"
                        variant="info"
                        className={`col-2 btn-style mt-4 mb-1 ${
                          step !== formTitles.length - 1 ? `w-25` : `w-50`
                        } p-2 `}
                        style={{
                          color: "#fff",
                        }}
                      >
                        {step !== formTitles.length - 1 ? `Next` : `Sign Up`}
                      </Button>
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

export default MultiSignUp;
