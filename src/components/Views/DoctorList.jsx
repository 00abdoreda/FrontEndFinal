import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  NavLink,
  Table,
} from "react-bootstrap";
import doctorImg from "../../assets/images/doctor-3.jpg";
import { ImLocation } from "react-icons/im";
import { HiDotsVertical, HiCheck } from "react-icons/hi";
import { IoPersonAddSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  activeDoctor,
  dactiveDoctor,
  getAllDoctors,
  getDactiveDoctors,
} from "../../redux/actions/appAction";
import DoctorDetails from "./DoctorDetails";
const DoctorList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDoctors());
    dispatch(getDactiveDoctors());
  }, []);
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      img: doctorImg,
      name: "Ahmed",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: false,
      showDetails: false,
    },
    {
      id: 2,
      img: doctorImg,
      name: "Mohamed",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: false,
      showDetails: false,
    },
    {
      id: 3,
      img: doctorImg,
      name: "Zeko",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: false,
      showDetails: false,
    },
    {
      id: 4,
      img: doctorImg,
      name: "Emad",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: true,
      showDetails: false,
    },
    {
      id: 5,
      img: doctorImg,
      name: "Abdo",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: false,
      showDetails: false,
    },
    {
      id: 6,
      img: doctorImg,
      name: "Ahmed",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: true,
      showDetails: false,
    },
    {
      id: 7,
      img: doctorImg,
      name: "Ahmed",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: false,
      showDetails: false,
    },
    {
      id: 8,
      img: doctorImg,
      name: "Ahmed",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: true,
      showDetails: false,
    },
    {
      id: 9,
      img: doctorImg,
      name: "Ahmed",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: true,
      showDetails: false,
    },
  ]);
  const data = useSelector((state) => state.allDoctors);
  const dactive = useSelector((state) => state.allDactiveDoctors);
  const [doctorsData, setDoctorsData] = useState([]);
  const [doctorsData1, setDoctorsData1] = useState([]);
  const [doctorsData2, setDoctorsData2] = useState([]);
  useEffect(() => {
    setDoctorsData(data);
    setDoctorsData1(
      data.map((e) => {
        return { ...e, showDetails: false };
      })
    );
  }, [data]);
  useEffect(() => {
    setDoctorsData2(dactive);
  }, [data, dactive]);
  // const [doctorsData] = data.map((e) => {
  //   return { ...e, showDetails: false };
  // });
  // console.log(doctorsData);
  const divRef = useRef();
  const menuRef = useRef();
  const [een, seteen] = useState(false);
  const [docMobile, setDocMobile] = useState(``);
  const handleDetails = (ele) => {
    const doctor = [...doctorsData1];
    const newDocs = doctor.map((e) => {
      return { ...e, showDetails: false };
    });
    const i = newDocs.findIndex((e) => e.mobile === ele.mobile);
    newDocs[i] = {
      ...newDocs[i],
      showDetails: !newDocs[i].showDetails,
    };
    setDoctorsData1(newDocs);
    // console.log(ele);
  };
  const showDetailsHandler = (e) => {
    const ele = e.target.closest("div.details-div");
    if (!ele) {
      const doctor = [...doctorsData1];
      const findele = doctor.filter((e) => e.showDetails === true);
      if (findele.length !== 0) {
        const i = doctor.findIndex((e) => e.mobile === findele[0].mobile);
        doctor[i] = { ...doctor[i], showDetails: !doctor[i].showDetails };
        setDoctorsData1(doctor);
      }
    }
    // console.log(docMobile);
    // console.log(ele);
  };
  const handleActive =async (i) => {
    // console.log(i);
    const doctor = [...doctorsData];
    if (doctor[i].isactive) {
      await dispatch(dactiveDoctor(doctor[i].mobile));
    } else {
      await dispatch(activeDoctor(doctor[i].mobile));
      
    }
    dispatch(getAllDoctors());
    dispatch(getDactiveDoctors());
  };
  const handleActive1 = async(i) => {
    console.log(i);
    // const doctor = [...doctorsData2];
    // const fil= doctor.filter
   await dispatch(activeDoctor(i));
    //   dispatch(activeDoctor(doctor[i].mobile));
    dispatch(getAllDoctors());
    dispatch(getDactiveDoctors());
  };
  // console.log(doctorsData1);
  const handleDoctorDetails = (e) => {
    const ele = e.target.closest(`div.doctor-details`);
    if (!ele) {
      setDocMobile(``);
    }
  };
  return (
    <>
      <div
        className=" w-100"
        style={{
          position: "relative",
          backgroundColor: "#f1f5fc",
          padding: "15px",
          minHeight: "92.8vh",
        }}
        onClick={showDetailsHandler}
      >
        {/* Doctors List */}
        <div className="w-100 d-flex flex-wrap">
          {doctorsData1.map((e, i) => (
            <Col lg={4} md={4} sm={6} className="px-3 px-sm-2 doc-card" key={i}>
              <Card style={{ marginBottom: "2rem" }}>
                <div
                  className="d-flex p-3 parent"
                  style={{ position: "relative" }}
                >
                  <div className="mb-3 w-100">
                    <div className="d-flex align-items-center">
                      <img
                        src={doctorImg}
                        alt="GG"
                        width="50px"
                        height="50px"
                        style={{ borderRadius: "50%", marginRight: "8px" }}
                      />
                      <div className="content w-100">
                        <h6
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            margin: "0",
                          }}
                        >
                          {`${e.firstName} ${e.lastName}`}
                        </h6>
                        <p
                          className="my-1"
                          style={{
                            fontSize: "12px",
                            color: "#878793",
                          }}
                        >
                          {e.specialist}
                        </p>
                        <p
                          className="mt-2 d-flex align-items-center"
                          style={{
                            fontWeight: "500",
                            fontSize: "13px",
                            margin: "0",
                          }}
                        >
                          <ImLocation style={{ fontSize: "12px" }} />
                          {e.address}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="details-div" list-id={i}>
                    <HiDotsVertical
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDetails(e)}
                    />
                    {e.showDetails && (
                      <motion.div
                        className="details-div"
                        list-id={i}
                        style={{
                          position: "absolute",
                          top: "40px",
                          zIndex: "1000",
                          borderRadius: "4px",
                          color: "#212529",
                        }}
                        initial={{ right: "-30px" }}
                        animate={{ right: "20px", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ListGroup className="details-div" list-id={i}>
                          <ListGroupItem
                            className="list-nav"
                            style={{
                              padding: 0,
                              width: "145px",
                              padding: "0.5rem 0",
                              margin: "0.125rem 0",
                            }}
                          >
                            <NavLink
                              className="p-2"
                              style={{ fontSize: "12px", color: "#34334a" }}
                              onClick={() => {
                                setDocMobile(e.mobile);
                              }}
                            >
                              View Details
                            </NavLink>
                            {/* <NavLink
                              className="p-2"
                              style={{ fontSize: "12px", color: "#34334a" }}
                            >
                              Edit
                            </NavLink>
                            <NavLink
                              className="p-2"
                              style={{ fontSize: "12px", color: "#34334a" }}
                            >
                              Delete
                            </NavLink> */}
                          </ListGroupItem>
                        </ListGroup>
                      </motion.div>
                    )}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
          {docMobile !== `` && (
            <div
              // className="d-flex justify-content-center align items-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "92.8vh",
                background: "rgb(0 0 0 / 40%)",
                top: "0",
                left: "0",
                zIndex: "1000",
              }}
              onClick={handleDoctorDetails}
            >
              <DoctorDetails curr={docMobile} setDocMobile={setDocMobile} />
            </div>
          )}
        </div>
        <div className="d-flex flex-lg-row flex-sm-column p-lg-0 pe-sm-3">
          {/* Doctors Requests Approve Or Not */}
          <Card
            className="col-lg-7  col-sm-12 p-3 mx-lg-3 mx-sm-2"
            style={{ backgroundColor: "#fff" }}
          >
            <h4>Doctors Requests</h4>
            <Table>
              <thead>
                <tr>
                  <th
                    className="col-8"
                    style={{
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    Doctor
                  </th>
                  <th
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                      textAlign: "center",
                    }}
                  >
                    Approve/Reject
                  </th>
                </tr>
              </thead>
              <tbody>
                {doctorsData2.map((e, i) => (
                  <tr key={i}>
                    <td className="col-8">
                      <div className="d-flex align-items-center">
                        <img
                          src={doctorImg}
                          alt="GG"
                          width="50px"
                          height="50px"
                          style={{ borderRadius: "50%", marginRight: "8px" }}
                        />
                        <div className="content w-100">
                          <h6
                            style={{
                              fontWeight: "500",
                              fontSize: "17px",
                              margin: "0",
                            }}
                          >
                            {`${e.firstName} ${e.lastName}`}
                          </h6>
                          <p
                            className="my-1"
                            style={{
                              fontSize: "14px",
                              color: "#878793",
                            }}
                          >
                            {e.specialist}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <Button
                        className="btn-isActive"
                        style={{ opacity: "0.95" }}
                        onClick={() => {
                          handleActive1(e.mobile);
                        }}
                      >
                        <HiCheck style={{ fontSize: "18px" }} />
                      </Button>
                      <Button
                        variant="primary"
                        style={{ opacity: "0.8", margin: "0 15px" }}
                        onClick={() => {
                          setDocMobile(e.mobile);
                        }}
                      >
                        <FaUserAlt
                          // onClick={(e)={oncl(e)}
                          style={{
                            fontSize: "18px",
                          }}
                        />
                      </Button>

                      <Button variant="danger" style={{ opacity: "0.95" }}>
                        <AiOutlineClose style={{ fontSize: "18px" }} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
          {/* isActive & isNotActive List */}
          <Card
            className=" w-50 p-3 mt-lg-0 mt-sm-3 mx-sm-2 doc-card"
            style={{ backgroundColor: "#fff" }}
          >
            <h4
              style={{
                fontSize: "18px",
                padding: "5px 20px 10px",
              }}
            >
              ACTIVE/INACTIVE DOCTORS
            </h4>
            <ListGroup>
              {doctorsData.map((e, i) => (
                <ListGroup.Item
                  key={i}
                  className="py-2"
                  style={{
                    border: 0,
                    borderBottom: "1px solid rgba(0, 0, 0, .1)",
                    borderRadius: 0,
                  }}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={doctorImg}
                      alt="GG"
                      width="40px"
                      height="40px"
                      style={{ borderRadius: "50%", marginRight: "8px" }}
                    />
                    <div className="content w-100">
                      <h6
                        style={{
                          fontWeight: "500",
                          fontSize: "14px",
                          margin: "0",
                        }}
                      >
                        {`${e.firstName} ${e.lastName}`}
                      </h6>
                      <p
                        className="my-1"
                        style={{
                          fontSize: "12px",
                          color: "#878793",
                        }}
                      >
                        {e.specialist}
                      </p>
                    </div>
                    <Button
                      className={
                        e.isactive ? "btn-isActive" : "btn-isNotActive"
                      }
                      style={{ opacity: e.isactive ? "0.95" : "1" }}
                      onClick={() => {
                        handleActive(i);
                      }}
                    >
                      {e.isactive ? (
                        <AiOutlineClose style={{ fontSize: "20px" }} />
                      ) : (
                        <HiCheck style={{ fontSize: "20px" }} />
                      )}
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
