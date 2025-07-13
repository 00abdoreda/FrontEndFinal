import React, { useState } from "react";
import { GrFormSchedule } from "react-icons/gr";
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import "../../index.css";
import DoctorFilter from "./DoctorFilter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllDoctors,
  getDoctorTimeTableAdmin,
  updateDoctorTimeTableAdmin,
} from "../../redux/actions/appAction";

const DoctorTimeTable = () => {
  const [curr, setCurr] = useState(0);
  const [docdata, setdocdata] = useState({});
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allDoctors);
  const currTime = useSelector((state) => state.doctorTimeTableAdmin);
  const [currentDoctor, setCurrentDoctor] = useState({});
  const [currDoctorTimeTable, setCurrDoctorTimeTable] = useState({});

  useEffect(() => {
    dispatch(getAllDoctors());
    dispatch(getDoctorTimeTableAdmin(data[curr]?.mobile));
    // dispatch(getDoctorTimeTableAdmin());
    // setCurrentDoctor({ ...data[`${curr}`] });
    // dispatch(getDoctorTimeTableAdmin(data[`${curr}`]?.mobile));
  }, []);
  // console.log(data);
  useEffect(() => {
    dispatch(getDoctorTimeTableAdmin(data[curr]?.mobile));
    // console.log(curr);
    setCurrentDoctor({ ...data[curr] });
  }, [data, curr]);
  useEffect(() => {
    // dispatch(getDoctorTimeTableAdmin(data[`${curr}`]?.mobile));
    console.log(curr);
    setCurrDoctorTimeTable({ ...currTime });
    setdocdata({ ...currTime });
    if (Object.keys(currTime).length > 0) {
      setdocdata({
        ...currTime,
      });
    }
  }, [currTime, curr]);

  // useEffect(() => {
  // if (Object.keys(currentDoctor).length === 0) {
  // console.log(curr);
  // setCurrentDoctor({ ...data[`${curr}`] });
  // dispatch(getDoctorTimeTableAdmin(data[`${curr}`]?.mobile));
  // setCurrDoctorTimeTable(currTime);
  // if (Object.keys(currTime).length > 0) {
  //   setdocdata({
  //     ...currTime,
  //   });
  // }
  // console.log(currentDoctor);
  // console.log(currDoctorTimeTable);
  // console.log(docdata);
  // const re = async () => {
  // console.log(data[`${curr}`].mobile);
  // }, [curr]);

  // console.log(currentDoctor);
  // console.log(currDoctorTimeTable);

  // useEffect(() => {
  // setCurrDoctorTimeTable({ ...currTime });

  // }, [currTime]);
  // useEffect(() => {
  // if (Object.keys(currTime).length > 0) {
  //   setdocdata({
  //     ...currTime,
  //   });
  // }
  // }, [changeHandler]);
  console.log(currDoctorTimeTable);
  const [checked, setchecked] = useState(true);
  const handleChange = (e) => {
    //clone
    const alldata = { ...docdata };
    for (let key in alldata) {
      if (key === e.target.name) {
        alldata[`${key}`] = !!!alldata[key];
        break;
      }
    }
    setdocdata(alldata);
  };
  // console.log(docdata);
  const handleSubmit = async(event) => {
    event.preventDefault();
    // console.log(docdata);
    let updateData = {};
    if (
      currTime.sat !== docdata.sat ||
      currTime.sattime.startTime !== docdata.sattime.startTime ||
      currTime.sattime.endTime !== docdata.sattime.endTime
    ) {
      updateData = {
        ...updateData,
        sat: docdata.sat,
        sattime: { ...docdata.sattime },
      };
    }
    if (
      currTime.sun !== docdata.sun ||
      currTime.suntime.startTime !== docdata.suntime.startTime ||
      currTime.suntime.endTime !== docdata.suntime.endTime
    ) {
      updateData = {
        ...updateData,
        sun: docdata.sun,
        suntime: { ...docdata.suntime },
      };
    }
    if (
      currTime.mon !== docdata.mon ||
      currTime.montime.startTime !== docdata.montime.startTime ||
      currTime.montime.endTime !== docdata.montime.endTime
    ) {
      updateData = {
        ...updateData,
        mon: docdata.mon,
        montime: { ...docdata.montime },
      };
    }
    if (
      currTime?.tue !== docdata.tue ||
      currTime?.tuetime?.startTime !== docdata?.tuetime?.startTime ||
      currTime?.tuetime?.endTime !== docdata?.tuetime?.endTime
    ) {
      updateData = {
        ...updateData,
        tue: docdata.tue,
        tuetime: { ...docdata.tuetime },
      };
    }
    if (
      currTime?.wen !== docdata?.wen ||
      currTime?.wentime?.startTime !== docdata?.wentime?.startTime ||
      currTime?.wentime?.endTime !== docdata?.wentime?.endTime
    ) {
      updateData = {
        ...updateData,
        wen: docdata?.wen,
        wentime: { ...docdata?.wentime },
      };
    }
    if (
      currTime.thu !== docdata.thu ||
      currTime.thutime.startTime !== docdata.thutime.startTime ||
      currTime.thutime.endTime !== docdata.thutime.endTime
    ) {
      updateData = {
        ...updateData,
        thu: docdata.thu,
        thutime: { ...docdata.thutime },
      };
    }
    if (
      currTime.fri !== docdata.fri ||
      currTime.fritime.startTime !== docdata.fritime.startTime ||
      currTime.fritime.endTime !== docdata.fritime.endTime
    ) {
      updateData = {
        ...updateData,
        fri: docdata.fri,
        fritime: {
          startTime: docdata.fritime.startTime,
          endTime: docdata.fritime.endTime,
        },
      };
    }
    // console.log(updateData);
    // if (Object.keys(updateData).length > 0) {
    await dispatch(updateDoctorTimeTableAdmin(data[curr].mobile, updateData));
    // dispatch(getAllDoctors());
    // dispatch(getDoctorTimeTableAdmin(currentDoctor?.mobile));
    dispatch(getDoctorTimeTableAdmin(data[curr]?.mobile));
    console.log(currentDoctor.mobile);
    // }
    console.log(data[curr].mobile);

    // handleSubmit.bind();
  };
  // console.log(currentDoctor);
  // console.log(currDoctorTimeTable);
  const changeHandler = (event) => {
    console.log(event.target.value);
    setCurr(data.findIndex((e) => e.mobile === event.target.value));
  };
  // window.location.reload();
  // console.log(event.target.value);
  // console.log({ ...data[curr] });
  // setCurrentDoctor({ ...data[curr] });/
  // console.log(currentDoctor);
  // console.log(curr);
  // useEffect(() => {
  //   // if (Object.keys(currentDoctor).length > 0) {
  //   console.log(currentDoctor.mobile);
  //   // dispatch(getDoctorTimeTableAdmin(currentDoctor.mobile));
  //   dispatch(getDoctorTimeTableAdmin(currentDoctor.mobile));
  //   console.log(currTime);
  //   // }
  // }, [changeHandler && currentDoctor]);
  return (
    <>
      <div
        className="w-100 py-5"
        style={{
          backgroundColor: "#f1f5fc",
          padding: "15px",
          minHeight: "92.8vh",
        }}
      >
        <Card className="w-100" style={{ overflowX: "auto" }}>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, .1)",
            }}
          >
            <h4 className="p-3">Doctor Time Table</h4>
            <DoctorFilter changeHandler={changeHandler} />
          </div>

          <Form onSubmit={handleSubmit} className="formm p-3 px-5">
            <Row className="col-12  mb-3">
              <Form.Group as={Col} controlId="doctorname">
                <Form.Label>Doctor Name</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  value={`${currentDoctor?.firstName} ${currentDoctor?.lastName}`}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="doctorDep">
                <Form.Label>Doctor Department</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  value={currentDoctor?.doctorDepartment}
                />
              </Form.Group>
            </Row>
            <Row className="col-12  mb-3">
              <Form.Group
                size="lg"
                className=" d-flex align-items-center align-self-center"
                as={Col}
                controlId="sat"
              >
                <Form.Check
                  style={{
                    paddingLeft: "7.5em",
                    marginBottom: "-0.875rem",
                  }}
                  label="Saturday"
                  onChange={handleChange}
                  type="switch"
                  // id={`custom-switch + ${e.day}`}
                  checked={docdata.sat}
                  name="sat"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="startTime">
                <Form.Label>Start time</Form.Label>
                {docdata?.sat ? (
                  <Form.Control
                    name="satStartTime"
                    type="time"
                    value={docdata?.sattime?.startTime}
                    onChange={(e) => {
                      setdocdata({
                        ...docdata,
                        sattime: {
                          ...docdata[`sattime`],
                          startTime: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <Form.Control
                    type="time"
                    disabled
                    value={docdata?.sattime?.startTime}
                  />
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="endTime">
                <Form.Label>End time</Form.Label>
                {docdata?.sat ? (
                  <Form.Control
                    type="time"
                    value={docdata?.sattime?.endTime}
                    onChange={(e) => {
                      setdocdata({
                        ...docdata,
                        sattime: {
                          ...docdata[`sattime`],
                          endTime: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <Form.Control
                    type="time"
                    disabled
                    value={docdata?.sattime?.endTime}
                  />
                )}
              </Form.Group>
            </Row>
            {/*  */}
            <Row className="col-12  mb-3">
              <Form.Group
                size="lg"
                className=" d-flex align-items-center align-self-center"
                as={Col}
                controlId="sun"
              >
                <Form.Check
                  style={{
                    paddingLeft: "7.5em",
                    marginBottom: "-0.875rem",
                  }}
                  label="Sunday"
                  onChange={handleChange}
                  type="switch"
                  checked={docdata.sun}
                  // id={`custom-switch + ${e.day}`}
                  name="sun"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="startTime">
                <Form.Label>Start time</Form.Label>
                {docdata?.sun ? (
                  <Form.Control
                    name="sunStartTime"
                    type="time"
                    value={docdata?.suntime?.startTime}
                    onChange={(e) => {
                      setdocdata({
                        ...docdata,
                        suntime: {
                          ...docdata[`suntime`],
                          startTime: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <Form.Control
                    type="time"
                    disabled
                    value={docdata?.suntime?.startTime}
                  />
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="endTime">
                <Form.Label>End time</Form.Label>
                {docdata?.sun ? (
                  <Form.Control
                    type="time"
                    value={docdata?.suntime?.endTime}
                    onChange={(e) => {
                      setdocdata({
                        ...docdata,
                        suntime: {
                          ...docdata[`suntime`],
                          endTime: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <Form.Control
                    type="time"
                    disabled
                    value={docdata?.suntime?.endTime}
                  />
                )}
              </Form.Group>
            </Row>
            {/*  */}
            <Row className="col-12  mb-3">
              <Form.Group
                size="lg"
                className=" d-flex align-items-center align-self-center"
                as={Col}
                controlId="mon"
              >
                <Form.Check
                  style={{
                    paddingLeft: "7.5em",
                    marginBottom: "-0.875rem",
                  }}
                  label="Monday"
                  onChange={handleChange}
                  type="switch"
                  checked={docdata.mon}
                  // id={`custom-switch + ${e.day}`}
                  name="mon"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="startTime">
                <Form.Label>Start time</Form.Label>
                {docdata?.mon ? (
                  <Form.Control
                    name="monStartTime"
                    type="time"
                    value={docdata?.montime?.startTime}
                    onChange={(e) => {
                      setdocdata({
                        ...docdata,
                        montime: {
                          ...docdata[`montime`],
                          startTime: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <Form.Control
                    type="time"
                    disabled
                    value={docdata?.montime?.startTime}
                  />
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="endTime">
                <Form.Label>End time</Form.Label>
                {docdata?.mon ? (
                  <Form.Control
                    type="time"
                    value={docdata?.montime?.endTime}
                    onChange={(e) => {
                      setdocdata({
                        ...docdata,
                        montime: {
                          ...docdata[`montime`],
                          endTime: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <Form.Control
                    type="time"
                    disabled
                    value={docdata?.montime?.endTime}
                  />
                )}
              </Form.Group>
            </Row>
            {/*  */}
            <Row className="col-12  mb-3">
              <Form.Group
                size="lg"
                className=" d-flex align-items-center align-self-center"
                as={Col}
                controlId="tue"
              >
                <Form.Check
                  style={{
                    paddingLeft: "7.5em",
                    marginBottom: "-0.875rem",
                  }}
                  label="Tuesday"
                  onChange={handleChange}
                  type="switch"
                  checked={docdata.tue}
                  // id={`custom-switch + ${e.day}`}
                  name="tue"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="startTime">
                <Form.Label>Start time</Form.Label>
                {docdata?.tue ? (
                  <Form.Control
                    name="tueStartTime"
                    type="time"
                    value={docdata?.tuetime?.startTime}
                    onChange={(e) => {
                      setdocdata({
                        ...docdata,
                        tuetime: {
                          ...docdata[`tuetime`],
                          startTime: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <Form.Control
                    type="time"
                    disabled
                    value={docdata?.tuetime?.startTime}
                  />
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="endTime">
                <Form.Label>End time</Form.Label>
                {docdata?.tue ? (
                  <Form.Control
                    type="time"
                    value={docdata?.tuetime?.endTime}
                    onChange={(e) => {
                      setdocdata({
                        ...docdata,
                        tuetime: {
                          ...docdata[`tuetime`],
                          endTime: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <Form.Control
                    type="time"
                    disabled
                    value={docdata?.tuetime?.endTime}
                  />
                )}
              </Form.Group>
            </Row>
            {/*  */}
            <Row className="col-12  mb-3">
              <Form.Group
                size="lg"
                className=" d-flex align-items-center align-self-center"
                as={Col}
                controlId="wen"
              >
                <Form.Check
                  style={{
                    paddingLeft: "7.5em",
                    marginBottom: "-0.875rem",
                  }}
                  label="wednesday"
                  onChange={handleChange}
                  type="switch"
                  checked={docdata.wen}
                  // id={`custom-switch + ${e.day}`}
                  name="wen"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="startTime">
                <Form.Label>Start time</Form.Label>
                {docdata?.wen ? (
                  <Form.Control
                    name="wenStartTime"
                    type="time"
                    value={docdata?.wentime?.startTime}
                    onChange={(e) => {
                      setdocdata({
                        ...docdata,
                        wentime: {
                          ...docdata[`wentime`],
                          startTime: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <Form.Control
                    type="time"
                    disabled
                    value={docdata?.wentime?.startTime}
                  />
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="endTime">
                <Form.Label>End time</Form.Label>
                {docdata?.wen ? (
                  <Form.Control
                    type="time"
                    value={docdata?.wentime?.endTime}
                    onChange={(e) => {
                      setdocdata({
                        ...docdata,
                        wentime: {
                          ...docdata[`wentime`],
                          endTime: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <Form.Control
                    type="time"
                    disabled
                    value={docdata?.wentime?.endTime}
                  />
                )}
              </Form.Group>
            </Row>
            {/*  */}
            <Row className="col-12  mb-3">
              <Form.Group
                size="lg"
                className=" d-flex align-items-center align-self-center"
                as={Col}
                controlId="thu"
              >
                <Form.Check
                  style={{
                    paddingLeft: "7.5em",
                    marginBottom: "-0.875rem",
                  }}
                  label="Thursday"
                  onChange={handleChange}
                  type="switch"
                  checked={docdata.thu}
                  // id={`custom-switch + ${e.day}`}
                  name="thu"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="startTime">
                <Form.Label>Start time</Form.Label>
                {docdata?.thu ? (
                  <Form.Control
                    name="thuStartTime"
                    type="time"
                    value={docdata?.thutime?.startTime}
                    onChange={(e) => {
                      setdocdata({
                        ...docdata,
                        thutime: {
                          ...docdata[`thutime`],
                          startTime: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <Form.Control
                    type="time"
                    disabled
                    value={docdata?.thutime?.startTime}
                  />
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="endTime">
                <Form.Label>End time</Form.Label>
                {docdata?.thu ? (
                  <Form.Control
                    type="time"
                    value={docdata?.thutime?.endTime}
                    onChange={(e) => {
                      setdocdata({
                        ...docdata,
                        thutime: {
                          ...docdata[`thutime`],
                          endTime: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <Form.Control
                    type="time"
                    disabled
                    value={docdata?.thutime?.endTime}
                  />
                )}
              </Form.Group>
            </Row>
            {/*  */}
            <Row className="col-12  mb-3">
              <Form.Group
                size="lg"
                className=" d-flex align-items-center align-self-center"
                as={Col}
                controlId="fri"
              >
                <Form.Check
                  style={{
                    paddingLeft: "7.5em",
                    marginBottom: "-0.875rem",
                  }}
                  label="Friday"
                  onChange={handleChange}
                  type="switch"
                  checked={docdata.fri}
                  // id={`custom-switch + ${e.day}`}
                  name="fri"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="startTime">
                <Form.Label>Start time</Form.Label>
                {docdata?.fri ? (
                  <Form.Control
                    name="friStartTime"
                    type="time"
                    value={docdata?.fritime?.startTime}
                    onChange={(e) => {
                      setdocdata({
                        ...docdata,
                        fritime: {
                          ...docdata[`fritime`],
                          startTime: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <Form.Control
                    type="time"
                    disabled
                    value={docdata?.fritime?.startTime}
                  />
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="endTime">
                <Form.Label>End time</Form.Label>
                {docdata?.fri ? (
                  <Form.Control
                    type="time"
                    value={docdata?.fritime?.endTime}
                    onChange={(e) => {
                      setdocdata({
                        ...docdata,
                        fritime: {
                          ...docdata[`fritime`],
                          endTime: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <Form.Control
                    type="time"
                    disabled
                    value={docdata?.fritime?.endTime}
                  />
                )}
              </Form.Group>
            </Row>
            <Row
              className="col-12
              my-4 
                "
            >
              <Form.Group as={Col} className="d-flex justify-content-end">
                <Button
                  className="mb"
                  variant="primary"
                  type="submit"
                  style={{ width: "200px", height: "50px" }}
                >
                  Save
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </Card>
      </div>
      ;
    </>
  );
};

export default DoctorTimeTable;
