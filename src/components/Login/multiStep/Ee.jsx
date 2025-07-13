import React, { useState } from "react";
import * as Yup from "yup";
import { Button, Card, Container, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../../../redux/actions/appAction";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { motion } from "framer-motion";
const Ee = () => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.loginOrRegister);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    nationalID: "",
    mobileNumber: "",
    address: "",
    dateOfBirth: " ",
    gender: "",
    doctorDepartment: "",
    specialist: "",
    doctorImg: [],
    nationalIdImg: [],
  };
  // const vailidationSchema1 = Yup.object().shape({
  //   firstName: Yup.string().required("firstName is Required"),
  //   lastName: Yup.string().required("lastName is Required"),
  //   email: Yup.string().email().required("Email is required"),
  //   password: Yup.string().min(6).required("Password is required"),
  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref("password"), null], "Password must match")
  //     .required("Password is required"),
  // });
  // const validationSchema2 = Yup.object().shape({
  //   nationalID: Yup.string().required("NationalID is Required"),
  //   mobileNumber: Yup.string().required("Mobile is required"),
  //   address: Yup.string().required("Address is Required"),
  //   dateOfBirth: Yup.date().required("date of birth is Required"),
  //   gender: Yup.string().required("gender is Required"),
  // });
  // const validationSchema3 = Yup.object().shape({
  //   doctorDepartment: Yup.string().required("Department is Required"),
  //   specialist: Yup.string().required("Specialist is Required"),
  //   // doctorImg
  // });
  const [step, setStep] = useState(0);
  const formTitles = ["Step 1", "Step 2", "Step 3"];
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
        name: "nationalID",
      },
      {
        style: { width: "100%" },
        type: "text",
        label: "Mobile Number",
        name: "mobileNumber",
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
        // content: (
        //   <label className="d-flex align-items-center w-100" key={3}>
        //     Date Of Birth:
        //     <Field
        //       key={3}
        //       className="ms-2 w-50"
        //       type="date"
        //       name="dateOfBirth"
        //       component={TextField}
        //       variant="standard"
        //     />
        //   </label>
        // ),
      },
      // {
      //   style: { width: "100%" },
      //   type: "text",
      //   label: "Gender",
      //   name: "gender",
      //   content: (
      //     <>
      //       <h2>Gender</h2>
      //     </>
      //   ),
      // },
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
      //   name: "doctorImg",
      //   content: (
      //     <>
      //       <h2>Profile Image</h2>
      //     </>
      //   ),
      // },
      // {
      //   style: { width: "100%" },
      //   type: "file",
      //   label: "National ID Image",
      //   name: "nationalIdImage",
      //   content: (
      //     <>
      //       <h2>National ID Image</h2>
      //     </>
      //   ),
      // },
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
      nationalID: Yup.string().required("NationalID is Required"),
      mobileNumber: Yup.string().required("Mobile is required"),
      address: Yup.string().required("Address is Required"),
      dateOfBirth: Yup.date().required("date of birth is Required"),
      // gender: Yup.string().required("gender is Required"),
    }),
    Yup.object().shape({
      doctorDepartment: Yup.string().required("Department is Required"),
      specialist: Yup.string().required("Specialist is Required"),
      // doctorImg
    }),
  ];
  const submitHandler = (values, onSubmitProps) => {
    if (step !== formTitles.length - 1) {
      onSubmitProps.setSubmitting(false);
      setStep((curr) => curr + 1);
    } else console.log(values);
  };
  return (
    <>
      <Container>
        <Card className="form-card">
          <h2
            className="text-center mb-1 mt-4 w-100"
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
                style={{ width: "400px" }}
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
                {step > 0 && (
                  <Button
                    variant="info"
                    className="col-2 btn-style mt-4 w-25 p-2"
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
                  className={`col-2 btn-style mt-4 ${
                    step === 0
                      ? `w-100`
                      : step !== formTitles.length - 1
                      ? `w-25`
                      : `w-50`
                  } p-2`}
                  style={{
                    color: "#fff",
                  }}
                >
                  {step !== formTitles.length - 1 ? `Next` : `Sign Up`}
                </Button>
              </Form>
            )}
          </Formik>
        </Card>
      </Container>
    </>
  );
};

export default Ee;
