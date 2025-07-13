import React from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Form } from "react-bootstrap";
import Sign1 from "./Sign1";
import Sign2 from "./Sign2";
import Sign3 from "./Sign3";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../../../redux/actions/appAction";
import { NavLink } from "react-router-dom";
const SignupForm = () => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.loginOrRegister);
  const [formData, setFormData] = useState({
    firstName: "",
    LastName: "",
    NationalID: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    address: "",
    dateOfBirth: "",
    profileImage: [],
    nationalIDImage: [],
    gender: "",
  });
  const [page, setPage] = useState(0);
  const formTitles = ["Sign Up", "Personal Info", "Other"];
  const pageDisplay = () => {
    if (page === 0) return <Sign1 />;
    else if (page === 1) return <Sign2 />;
    else return <Sign3 />;
  };
  return (
    <>
      {/* <Col className={`col-lg-6 col-md-12 col-sm-12`}>
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
          > */}
      <div
        className="d-flex align-items-center justify-content-center  w-100"
        style={{ height: "100vh", position: "relative" }}
      >
        <Card className="form-card">
          <div
            className="position-absolute w-100"
            style={{ top: "0px", left: "15px", paddingRight: "35px" }}
          >
            <div
              style={{
                borderRadius: "55px",
                backgroundColor: "#0dcaf0",

                height: "2px",
                width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
              }}
            ></div>
          </div>
          <Button
            style={{
              position: "absolute",
              left: "20px",
              top: "30px",
              background: "none",
              boxShadow: "none",
              outline: "none",
              border: "none",
            }}
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            <FaArrowLeft
              style={{
                color: "#0dcaf0",
                fontSize: "25px",
              }}
            />
          </Button>
          <Button
            style={{
              position: "absolute",
              right: "20px",
              top: "30px",
              background: "none",
              boxShadow: "none",
              outline: "none",
              border: "none",
            }}
            disabled={page === formTitles.length - 1}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            <FaArrowRight style={{ color: "#0dcaf0", fontSize: "25px" }} />
          </Button>
          <h2
            className="mb-4 mt-4 w-100 text-center"
            style={{
              fontSize: "2.2rem",
              color: "#444444",
            }}
          >
            {formTitles[page]}
          </h2>
          <Form
            className="d-flex flex-wrap justify-content-between text-center p-3 gap-2"
            style={{ width: "370px" }}
          >
            {pageDisplay()}
            <Button
              size="lg"
              variant="info"
              className={`mt-2 btn-style w-100 mb-4`}
              style={{ color: "#fff" }}
              onClick={() => {
                if (page !== formTitles.length - 1)
                  setPage((currPage) => currPage + 1);
              }}
            >
              {page === formTitles.length - 1 ? `Sign Up` : `Next`}
            </Button>
          </Form>
        </Card>
        {/* <div
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
            </div> */}
        {/* </motion.div>
        </Container>
      </Col> */}
      </div>
    </>
  );
};

export default SignupForm;

// <Form>
//   <div className="progressbar"></div>
//   <div className="form-container">
//     <div className="header">
//       <h1>{formTitles[page]}</h1>
//     </div>
//     <div className="body">{pageDisplay()}</div>
//     <div className="footer">
//       <Button
//         disabled={page === 0}
//         onClick={() => {
//           setPage((currPage) => currPage - 1);
//         }}
//       >
//         Prev
//       </Button>
//       <Button
//         disabled={page === formTitles.length - 1}
//         onClick={() => {
//           setPage((currPage) => currPage + 1);
//         }}
//       >
//         Next
//       </Button>
//     </div>
//   </div>
// </Form>;
