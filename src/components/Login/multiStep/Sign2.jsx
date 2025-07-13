import React from "react";
import { Form } from "react-bootstrap";
import { FaIdCard, FaUserCircle } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";

const Sign2 = () => {
  return (
    <>
      <Form.Group className="input-field w-100" controlId="nationalID">
        <Form.Label>
          <i className="fa-solid fa-id-card"></i>
        </Form.Label>
        <Form.Control type="test" placeholder="National ID" />
      </Form.Group>
      <Form.Group className="input-field w-100" controlId="address">
        <Form.Label>
          <i class="fa-solid fa-location-dot"></i>
        </Form.Label>
        <Form.Control type="test" placeholder="Address" />
      </Form.Group>
      <Form.Group
        className="input-field w-100 flex-column align-items-start justify-content-start"
        controlId="profileImage"
      >
        <Form.Label
          style={{
            width: "100%",
            fontSize: "1.2rem",
            textAlign: "start",
            paddingTop: "5px",
            paddingLeft: "0",
          }}
        >
          <span style={{ padding: "0.37rem 10px 0 14px", fontSize: "1.6rem" }}>
            <ImAttachment />
          </span>
          <span style={{ color: "#6c757d", fontWeight: "500" }}>
            Profile Image
          </span>
        </Form.Label>
        <Form.Control
          className="d-none custom-file-input"
          type="file"
          placeholder="profileImage"
          style={{ paddingLeft: "38px", color: "#6c757d" }}
        />
      </Form.Group>
      <Form.Group
        className="input-field w-100 flex-column align-items-start justify-content-start"
        controlId="nationalIDImage"
      >
        <Form.Label
          style={{
            width: "100%",
            fontSize: "1.2rem",
            textAlign: "start",
            paddingTop: "5px",
            paddingLeft: "0",
          }}
        >
          <span style={{ padding: "0.37rem 10px 0 14px", fontSize: "1.6rem" }}>
            <ImAttachment />
          </span>
          <span style={{ color: "#6c757d", fontWeight: "500" }}>
            NationalID Image
          </span>
        </Form.Label>
        <Form.Control
          className="d-none custom-file-input"
          type="file"
          style={{ paddingLeft: "38px", color: "#6c757d" }}
        />
      </Form.Group>
    </>
  );
};

export default Sign2;
