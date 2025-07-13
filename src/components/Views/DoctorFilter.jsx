import React from "react";
import { Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const DoctorFilter = ({ changeHandler }) => {
  const data = useSelector((state) => state.allDoctors);
  return (
    <>
      <div className="me-3 d-flex justify-content-center align-items-center gap-3">
        <h4 className="m-0">Doctor Filter</h4>
        <Form.Select
          aria-label="Default select example"
          className="py-1"
          style={{
            width: "200px",
          }}
          onChange={changeHandler}
        >
          {data.map((e, i) => (
            <option value={e.mobile} key={i}>
              {e.firstName} {e.lastName}
            </option>
          ))}
        </Form.Select>
      </div>
    </>
  );
};

export default DoctorFilter;
