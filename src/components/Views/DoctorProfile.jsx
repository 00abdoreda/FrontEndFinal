import React from "react";
import { Button, Card, Col, Container, Form } from "react-bootstrap";
import doctorImg from "../../assets/images/doctor-3.jpg";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaLinkedin,
} from "react-icons/fa";
import { NavLink, useLocation, useNavigation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDate,
  getDoctorData,
  updateDoctorData,
} from "../../redux/actions/appAction";
import { useRef } from "react";
import { replace } from "formik";
import { toast } from "react-toastify";
const DoctorProfile = () => {
  const location = useLocation();
  const [date, setdate] = useState();
  const dispatch = useDispatch();
  // const nav = useNavigation();
  // const userData = ;
  const [userData, setUserData] = useState({});
  const [mobileState, setMobileState] = useState();
  const [textAreaState, setTextAreaState] = useState();
  const data = useSelector((state) => state.doctorData);
  useEffect(() => {
    setUserData(data);
    setMobileState(userData.mobile || data.mobile);
    setTextAreaState(userData.shortBiography);
  }, [data, updateDoctorData]);
  const date1 = changeDate(userData.dateOfBirth);
  const SubmitHandler = (e) => {
    e.preventDefault();
    const oldData = { ...userData };
    let updatedData = {};
    if (oldData.mobile !== mobileState)
      updatedData = { ...updatedData, mobile: mobileState };
    if (oldData.shortBiography !== textAreaState)
      updatedData = { ...updatedData, shortBiography: textAreaState };
    if (Object.keys(updatedData).length !== 0) {
      // console.log(`Data Changed`);
      toast.success(`Data Changed`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      dispatch(updateDoctorData(updatedData));
      window.location.reload();
    }
  };
  console.log("mobileState", mobileState);
  console.log("userData", userData);
  return (
    <>
      <Container fluid>
        <div
          className="d-flex w-100 py-5"
          style={{
            backgroundColor: "#f1f5fc",
            padding: "15px",
            minHeight: "92.8vh",
          }}
        >
          <Col>
            <Card className="p-2">
              <div
                className="d-flex align-items-center justify-content-between"
                style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}
              >
                <h3 className="p-3">My Profile</h3>
              </div>
              <Form
                className="p-4 d-flex flex-wrap align-items-center  gap-4"
                onSubmit={SubmitHandler}
              >
                <Form.Group className="col-lg-6" controlId="fname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    value={userData && userData.firstName}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="col-lg-5" controlId="lname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    // placeholder="Enter Last Name"
                    value={userData && userData.lastName}
                    disabled
                  />
                </Form.Group>
                <Form.Group className="col-lg-6" controlId="mobile">
                  <Form.Label>Mobile Number</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Enter Mobile Number"
                    // ref={mobileRef}
                    value={userData.mobile && mobileState}
                    disabled
                    // onChange={(ele) => setMobileState(ele.target.value)}
                  />
                </Form.Group>
                <Form.Group className="col-lg-5" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    // placeholder="Enter Email Address"
                    value={userData && userData.email}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="col-lg-6" controlId="Address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    // placeholder="Enter Your Address"
                    disabled
                    value={userData && new Date(userData.address)}
                  />
                </Form.Group>

                <Form.Group className="col-lg-5" controlId="dateOf">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    // onChange={(e) => {
                    //   chage(e);
                    // }}
                    disabled
                    value={date1}
                  />
                </Form.Group>
                <Form.Group className="col-lg-6" controlId="DoctorDepartment">
                  <Form.Label>Doctor Department</Form.Label>
                  <Form.Control
                    type="text"
                    // placeholder="Doctor Department"
                    value={userData && userData.doctorDepartment}
                    disabled
                  />
                </Form.Group>
                <Form.Group className="col-lg-5" controlId="specialist">
                  <Form.Label>Specialist</Form.Label>
                  <Form.Control
                    type="test"
                    // placeholder="Enter Your Specialist"
                    disabled
                    value={userData && userData.specialist}
                  />
                </Form.Group>
                <Form.Group className="col-lg-6" controlId="DoctorImg">
                  <Form.Label>Doctor Image</Form.Label>
                  <Form.Control type="file" disabled />
                </Form.Group>
                {/* <Form.Group className="col-lg-5" controlId="N-IDImg">
                  <Form.Label>N-ID Photo</Form.Label>
                  <Form.Control type="file" disabled />
                </Form.Group> */}
                <Form.Group
                  className="col-lg-12 d-flex flex-column"
                  controlId="shortText"
                >
                  <Form.Label>Description</Form.Label>

                  <textarea
                    rows="2"
                    className=" p-2"
                    placeholder="short Biography"
                    style={{ width: `94%`, outline: "none" }}
                    value={userData && textAreaState}
                    onChange={(ele) => setTextAreaState(ele.target.value)}
                  />
                  {/* {userData && userData.shortBiography} */}
                  {/* </textarea> */}
                </Form.Group>

                <Form.Group className="col-lg-12" controlId="genderID">
                  <Form.Label>Gender</Form.Label>
                  <Form.Check
                    disabled
                    checked={userData.gender === "male"}
                    type="radio"
                    id="default-radio-male"
                    label="Male"
                    name="group1"
                  />
                  <Form.Check
                    disabled
                    checked={userData.gender === "female"}
                    type="radio"
                    id="default-radio-female"
                    label="Female"
                    name="group1"
                  />
                </Form.Group>

                <Form.Group className="col-lg-5">
                  <div className="d-flex gap-4  " style={{ height: "70px" }}>
                    <Button
                      variant="warning"
                      style={{
                        color: "#fff",
                        width: "150px",
                        height: "50px",
                        fontSize: "20px",
                      }}
                      onClick={() => {
                        dispatch(getDoctorData());
                      }}
                    >
                      Reset
                    </Button>
                    {/* <Button
                      type="submit"
                      variant="info"
                      style={{
                        color: "#fff",
                        width: "200px",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    >
                      Update Profile
                    </Button> */}
                  </div>
                </Form.Group>
              </Form>
            </Card>
            <Card className="p-2 my-4">
              <div
                className="d-flex align-items-center justify-content-between"
                style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}
              >
                <h3 className="p-3">Update Password</h3>
              </div>
              {/* <div
                className="d-flex align-items-center justify-content-between"
                style={{ borderBottom: "1px solid rgba(0, 0, 0,.1)" }}
              >
                <h3 className="p-3">My Doctors</h3>
              </div> */}
              <Form
                className="p-4 d-flex flex-wrap align-items-center  gap-4"
                style={{
                  // flex-wrap: nowrap;
                  alignItems: " center",
                  flexDirection: "row",
                  alignContent: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <Form.Group className="col-lg-6" controlId="fname">
                  <Form.Label>Carrant Password </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Carrant Password"
                  />
                </Form.Group>
                <Form.Group className="col-lg-6" controlId="fname">
                  <Form.Label>New PassWord</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter New PassWord"
                  />
                </Form.Group>
                <Form.Group className="col-lg-6" controlId="fname">
                  <Form.Label>Confirm New PassWord</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm New PassWord"
                  />
                </Form.Group>
                <div className="d-flex gap-4  " style={{ height: "70px" }}>
                  <Button
                    variant="success"
                    style={{
                      color: "#fff",
                      width: "150px",
                      height: "50px",
                      fontSize: "20px",
                    }}
                  >
                    Update
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </div>
      </Container>
    </>
  );
};

export default DoctorProfile;
