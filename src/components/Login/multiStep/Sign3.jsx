import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { MdDateRange } from "react-icons/md";

const Sign3 = () => {
  const [gender, setGender] = useState(0);
  const handler = (e) => {};
  return (
    <>
      <Form.Group className="input-field w-100" controlId="password">
        <Form.Label>
          <i className="fa-solid fa-lock"></i>
        </Form.Label>
        <Form.Control type="text" placeholder="Password" />
      </Form.Group>
      <Form.Group className="input-field w-100" controlId="confirmPassword">
        <Form.Label>
          <i className="fa-solid fa-lock"></i>
        </Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
      <Form.Group className="input-field w-100" controlId="dateOfBirth">
        <Form.Label>
          <MdDateRange />
        </Form.Label>
        <Form.Control
          type="date"
          placeholder="dateOfBirth"
          style={{ color: "#aaa", fontWeight: "500" }}
        />
      </Form.Group>
      <Form.Group
        className="input-field w-100"
        style={{ backgroundColor: "#fff" }}
      >
        <label for="male">Male</label>
        <input
          id="male"
          value="Male"
          type="radio"
          name="gender"
          style={{
            marginTop: "8px",
            width: "20px",
            height: "18px",
          }}
        />
        <label for="female">Female</label>
        <input
          id="female"
          value="Female"
          type="radio"
          name="gender"
          style={{ marginTop: "8px", width: "20px", height: "18px" }}
        />
      </Form.Group>
    </>
  );
};

export default Sign3;
