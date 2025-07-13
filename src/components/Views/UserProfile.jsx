import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import doctorImg from "../../assets/images/doctor-3.jpg";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaLinkedin,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getAdminAcc, updateAdminAcc } from "../../redux/actions/appAction";
const UserProfile = () => {
  useEffect(() => {
    dispatch(getAdminAcc());
  }, []);
  const data = useSelector((state) => state.admin);
  const [adminData, setAdminData] = useState({});
  const [updateData, setUpdateData] = useState({});
  useEffect(() => {
    setAdminData(data);
    setUpdateData(data);
  }, [data]);
  // console.log(adminData);
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    let updated = {};
    if (adminData.firstName !== updateData.firstName)
      updated = { ...updated, firstName: updateData.firstName };
    if (adminData.lastName !== updateData.lastName)
      updated = { ...updated, lastName: updateData.lastName };
    if (adminData.email !== updateData.email)
      updated = { ...updated, email: updateData.email };
    if (adminData.mobile !== updateData.mobile)
      updated = { ...updated, mobile: updateData.mobile };

    if (Object.keys(updated).length !== 0) {
      console.log(`Data Changed`);
      dispatch(updateAdminAcc(updated));
      dispatch(getAdminAcc());
       //window.location.reload();
    }
  };

  return (
    <>
      <div
        className="d-flex w-100 py-5 flex-wrap"
        style={{
          backgroundColor: "#f1f5fc",
          padding: "15px",
          minHeight: "92.8vh",
        }}
      >
        <Col lg={8} md={8}>
          <Card className="px-2 pt-2" style={{ paddingBottom: "6rem" }}>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}
            >
              <h3 className="p-3">My Profile</h3>
            </div>
            <Form
              className="p-4 d-flex flex-wrap align-items-center justify-content-center gap-4"
              onSubmit={submitHandler}
            >
              <Form.Group className="col-lg-6" controlId="fname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  value={updateData.firstName}
                  onChange={(e) =>
                    setUpdateData({ ...updateData, firstName: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="col-lg-5" controlId="lname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  value={updateData.lastName}
                  onChange={(e) =>
                    setUpdateData({ ...updateData, lastName: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="col-lg-6" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  value={updateData.email}
                  onChange={(e) =>
                    setUpdateData({ ...updateData, email: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="col-lg-5" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  value={updateData.mobile}
                  // onChange={(e) =>
                  //   setUpdateData({ ...updateData, mobile: e.target.value })
                  // }
                  disabled
                />
              </Form.Group>
              {/* <Form.Group className="col-lg-6" controlId="nationalID">
                <Form.Label>National ID</Form.Label>
                <Form.Control type="text" placeholder="National ID" />
              </Form.Group> */}
              {/* <Form.Group className="col-lg-5" controlId="Address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" />
              </Form.Group> */}

              {/* <Form.Group className="col-lg-6" controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" placeholder="Date of Birth" />
              </Form.Group> */}
              <Form.Group className="col-lg-11 text-end">
                <div
                  className="d-flex align-items-end justify-content-end"
                  style={{ height: "70px" }}
                >
                  <Button
                    type="submit"
                    variant="info"
                    style={{
                      color: "#fff",
                      width: "250px",
                      height: "55px",
                      fontSize: "20px",
                    }}
                  >
                    Update Profile
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </Card>
        </Col>
        <Col className="ms-4">
          <Card className="">
            <Card.Body>
              <div className="text-center">
                <img
                  alt="..."
                  className="mb-2"
                  // src={require("assets/img/faces/face-3.jpg")}
                  width="200px"
                  height="200px"
                  style={{ borderRadius: "50%" }}
                  src={doctorImg}
                ></img>
                <h5>{adminData.firstName}</h5>
                <p>{adminData.lastName}</p>
              </div>
              <p className="text-center">
               
              </p>
            </Card.Body>
            <div className="w-100 d-flex justify-content-center">
              <hr className="w-75"></hr>
            </div>
            <div className="icons d-flex justify-content-center mb-4">
              {/* <NavLink className="icons-style">
                <FaFacebookSquare
                  style={{
                    fontSize: "30px",
                    marginLeft: "6px",
                  }}
                />
              </NavLink>
              <NavLink className="icons-style">
                <FaLinkedin
                  style={{
                    fontSize: "30px",
                    marginLeft: "6px",
                  }}
                />
              </NavLink>
              <NavLink className="icons-style">
                <FaGooglePlusSquare
                  style={{
                    fontSize: "30px",
                    marginLeft: "6px",
                  }}
                />
              </NavLink> */}
            </div>
          </Card>
        </Col>
        {/* Update Password Form */}
        {/* <Row className="ps-3 w-100">
          <Card className="p-2 my-4">
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}
            >
              <h3 className="p-3">Update Password</h3>
            </div>
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
        </Row> */}
      </div>
    </>
  );
};

export default UserProfile;

// // react-bootstrap components
// import {
//   Badge,
//   Button,
//   Card,
//   Form,
//   Navbar,
//   Nav,
//   Container,
//   Row,
//   Col,
// } from "react-bootstrap";
// import doctorImg from "../../assets/images/doctor-3.jpg";

// function UserProfile() {
//   return (
//     <>
//       <Container fluid>
//         <Row>
//           <Col md="8">
//             <Card>
//               <Card.Header>
//                 <Card.Title as="h4">Edit Profile</Card.Title>
//               </Card.Header>
//               <Card.Body>
//                 <Form>
//                   <Row>
//                     <Col className="pr-1" md="5">
//                       <Form.Group>
//                         <label>Company (disabled)</label>
//                         <Form.Control
//                           defaultValue="Creative Code Inc."
//                           disabled
//                           placeholder="Company"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="px-1" md="3">
//                       <Form.Group>
//                         <label>Username</label>
//                         <Form.Control
//                           defaultValue="michael23"
//                           placeholder="Username"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="4">
//                       <Form.Group>
//                         <label htmlFor="exampleInputEmail1">
//                           Email address
//                         </label>
//                         <Form.Control
//                           placeholder="Email"
//                           type="email"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-1" md="6">
//                       <Form.Group>
//                         <label>First Name</label>
//                         <Form.Control
//                           defaultValue="Mike"
//                           placeholder="Company"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="6">
//                       <Form.Group>
//                         <label>Last Name</label>
//                         <Form.Control
//                           defaultValue="Andrew"
//                           placeholder="Last Name"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12">
//                       <Form.Group>
//                         <label>Address</label>
//                         <Form.Control
//                           defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
//                           placeholder="Home Address"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-1" md="4">
//                       <Form.Group>
//                         <label>City</label>
//                         <Form.Control
//                           defaultValue="Mike"
//                           placeholder="City"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="px-1" md="4">
//                       <Form.Group>
//                         <label>Country</label>
//                         <Form.Control
//                           defaultValue="Andrew"
//                           placeholder="Country"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="4">
//                       <Form.Group>
//                         <label>Postal Code</label>
//                         <Form.Control
//                           placeholder="ZIP Code"
//                           type="number"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12">
//                       <Form.Group>
//                         <label>About Me</label>
//                         <Form.Control
//                           cols="80"
//                           defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
//                           that two seat Lambo."
//                           placeholder="Here can be your description"
//                           rows="4"
//                           as="textarea"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Button
//                     className="btn-fill pull-right"
//                     type="submit"
//                     variant="info"
//                   >
//                     Update Profile
//                   </Button>
//                   <div className="clearfix"></div>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md="4">
//             <Card className="card-user">
//               <div className="card-image">
//                 <img
//                   alt="..."
//                   src={doctorImg}
//                   // src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
//                 ></img>
//               </div>
//               <Card.Body>
//                 <div className="author">
//                   <a href="#pablo" onClick={(e) => e.preventDefault()}>
//                     <img
//                       alt="..."
//                       className="avatar border-gray"
//                       // src={doctorImg}
//                       // src={require("assets/img/faces/face-3.jpg")}
//                     ></img>
//                     <h5 className="title">Mike Andrew</h5>
//                   </a>
//                   <p className="description">michael24</p>
//                 </div>
//                 <p className="description text-center">
//                   "Lamborghini Mercy <br></br>
//                   Your chick she so thirsty <br></br>
//                   I'm in that two seat Lambo"
//                 </p>
//               </Card.Body>
//               <hr></hr>
//               <div className="button-container mr-auto ml-auto">
//                 <Button
//                   className="btn-simple btn-icon"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   variant="link"
//                 >
//                   <i className="fab fa-facebook-square"></i>
//                 </Button>
//                 <Button
//                   className="btn-simple btn-icon"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   variant="link"
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </Button>
//                 <Button
//                   className="btn-simple btn-icon"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   variant="link"
//                 >
//                   <i className="fab fa-google-plus-square"></i>
//                 </Button>
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default UserProfile;
