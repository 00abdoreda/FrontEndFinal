import React from "react";

const Step1 = () => {
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
        content: (
          <>
            <h2>Date</h2>
          </>
        ),
      },
      {
        style: { width: "100%" },
        type: "text",
        label: "Gender",
        name: "gender",
        content: (
          <>
            <h2>Gender</h2>
          </>
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
      {
        style: { width: "100%" },
        type: "file",
        label: "Profile Image",
        name: "doctorImg",
        content: (
          <>
            <h2>Profile Image</h2>
          </>
        ),
      },
      {
        style: { width: "100%" },
        type: "file",
        label: "National ID Image",
        name: "nationalIdImage",
        content: (
          <>
            <h2>National ID Image</h2>
          </>
        ),
      },
    ],
  ];
  // const vailidationSchema = [
  //   Yup.object().shape({
  //     firstName: Yup.string().required("firstName is Required"),
  //     lastName: Yup.string().required("lastName is Required"),
  //     email: Yup.string().email().required("Email is required"),
  //     password: Yup.string().min(6).required("Password is required"),
  //     confirmPassword: Yup.string()
  //       .oneOf([Yup.ref("password"), null], "Password must match")
  //       .required("Password is required"),
  //   }),
  //   Yup.object().shape({
  //     nationalID: Yup.string().required("NationalID is Required"),
  //     mobileNumber: Yup.string().required("Mobile is required"),
  //     address: Yup.string().required("Address is Required"),
  //     dateOfBirth: Yup.date().required("date of birth is Required"),
  //     gender: Yup.string().required("gender is Required"),
  //   }),
  //   Yup.object().shape({
  //     doctorDepartment: Yup.string().required("Department is Required"),
  //     specialist: Yup.string().required("Specialist is Required"),
  //     // doctorImg
  //   }),
  // ];
  return <></>;
};

export default Step1;
