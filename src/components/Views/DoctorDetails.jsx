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
import { GrFormClose } from "react-icons/gr";
const DoctorDetails = ({ curr, setDocMobile }) => {
  const location = useLocation();
  const [date, setdate] = useState();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  // const [mobileState, setMobileState] = useState();
  // const [textAreaState, setTextAreaState] = useState();
  const allDoc = useSelector((state) => state.allDoctors);
  const data = allDoc.filter((e) => e.mobile === curr)[0];
  useEffect(() => {
    setUserData(data);
    // setMobileState(userData.mobile);
    // setTextAreaState(userData.shortBiography);
  }, [data, updateDoctorData, allDoc]);
  const date1 = changeDate(userData.dateOfBirth);
  // console.log(date1);
  // console.log(userData.address);
  // const SubmitHandler = (e) => {
  //   e.preventDefault();
  //   const oldData = { ...userData };
  //   let updatedData = {};
  //   if (oldData.mobile !== mobileState)
  //     updatedData = { ...updatedData, mobile: mobileState };
  //   if (oldData.shortBiography !== textAreaState)
  //     updatedData = { ...updatedData, shortBiography: textAreaState };
  //   if (Object.keys(updatedData).length !== 0) {
  //     // console.log(`Data Changed`);
  //     toast.success(`Data Changed`, {
  //       position: "top-right",
  //       autoClose: 1500,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  //     // dispatch(updateDoctorData(updatedData));
  //     window.location.reload();
  //   }
  // };
  // console.log(mobileState);
  return (
    <>
      <Col className="d-flex justify-content-center align-items-center me-5 h-100">
        <Card className="p-2 w-50 doctor-details">
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}
          >
            <h3 className="p-3">Doctor Details</h3>
            <h4
              style={{ cursor: "pointer" }}
              onClick={() => {
                setDocMobile(``);
              }}
            >
              <GrFormClose className="me-3 fs-2" />
            </h4>
          </div>
          <Form
            className="p-4 pb-2 d-flex flex-wrap align-items-center  gap-4"
            // onSubmit={SubmitHandler}
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
                // value={userData && mobileState}
                disabled
                value={userData && userData.mobile}
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
                value={userData && userData.address}
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
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="col-lg-5" controlId="N-IDImg">
              <Form.Label>N-ID Photo</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="col-lg-12" controlId="shortText">
              <textarea
                rows="2"
                className=" p-2"
                placeholder="short Biography"
                style={{ width: `94%`, outline: "none" }}
                value={userData && userData.shortBiography}
                // value={userData && textAreaState}
                // onChange={(ele) => setTextAreaState(ele.target.value)}
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

            <Form.Group className="col-12 col-lg-12 ">
              {/* <div className="d-flex gap-4  " style={{ height: "70px" }}>
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
                <Button
                  // className="w-100"
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
                </Button>
              </div> */}
            </Form.Group>
          </Form>
        </Card>
      </Col>
    </>
  );
};

export default DoctorDetails;
