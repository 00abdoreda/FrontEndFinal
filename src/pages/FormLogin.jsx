import React from "react";
import { Col, Container } from "react-bootstrap";
import SignUp from "../components/Login/oldLogin/SignUp";
import Panel from "../components/Login/Panel";
import background1 from "../assets/images/background1.jpg";
// import Login from "../components/Login/oldLogin/Login";
import SignUp2 from "../components/Login/SignUp2";
import Login1 from "../components/Login/Login1";
import MultiSignUp from "../components/Login/MultiSignUp";
import { postLoginUser } from "../redux/actions/appAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const FormLogin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(postLoginUser());
  }, []);

  return (
    <>
      <Container
        fluid
        className="d-flex gap-lg-4"
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          backgroundImage: `url(${background1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="overlay"></div>
        <Col className={`col-lg-6 small-hidden`}>
          <Panel />
        </Col>
        <Login1 />
        {/* <SignUp2 /> */}
        <MultiSignUp />
      </Container>
    </>
  );
};

export default FormLogin;
