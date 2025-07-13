import React from "react";
import { Form } from "react-bootstrap";
import { MdFamilyRestroom } from "react-icons/md";

const Sign1 = () => {
  return (
    <>
      <Form.Group className="input-field w-100" controlId="firstName">
        <Form.Label>
          <i className="fa-solid fa-user"></i>
        </Form.Label>
        <Form.Control type="test" placeholder="First name" required />
      </Form.Group>
      <Form.Group className="input-field w-100" controlId="lastName">
        <Form.Label>
          <MdFamilyRestroom />
        </Form.Label>
        <Form.Control type="test" placeholder="Last name" required />
      </Form.Group>
      <Form.Group className="input-field w-100" controlId="email">
        <Form.Label>
          <i className="fa-solid fa-envelope"></i>
        </Form.Label>
        <Form.Control type="email" placeholder="Email address" required />
      </Form.Group>
      <Form.Group className="input-field w-100" controlId="mobileNumber">
        <Form.Label>
          <i className="fa-solid fa-mobile"></i>
        </Form.Label>
        <Form.Control type="text" placeholder="Mobile number" required />
      </Form.Group>
    </>
  );
};

export default Sign1;

//  <Form onSubmit={handleSubmit}>
//    {pageDisplay()}
//    <Form.Group
//      className={`d-flex ${
//        page === 0 ? `justify-content-end` : `justify-content-between`
//      } mt-2  mb-4`}
//    >
//      {page > 0 && (
//        <Button
//          className="col-3"
//          variant="info"
//          style={{
//            color: "#fff",
//            height: "49px",
//            borderRadius: " 15px",
//            fontWeight: "600",
//            transition: "all 0.5s",
//            textTransform: "capitalize",
//          }}
//          onClick={PrevPage}
//        >
//          Back
//        </Button>
//      )}
//      {page !== formTitiles.length - 1 ? (
//        <Button
//          className={`${page === 0 ? `col-8` : `col-3`}`}
//          variant="info"
//          style={{
//            color: "#fff",
//            height: "49px",
//            borderRadius: " 15px",
//            fontWeight: "600",
//            transition: "all 0.5s",
//            textTransform: "capitalize",
//          }}
//          onClick={NextPage}
//        >
//          Next
//        </Button>
//      ) : (
//        <Button
//          // size="lg"
//          // type="submit"
//          variant="info"
//          className="col-8"
//          style={{
//            color: "#fff",
//            height: "49px",
//            borderRadius: " 15px",
//            fontWeight: "600",
//            transition: "all 0.5s",
//            textTransform: "capitalize",
//          }}
//        >
//          Submit
//        </Button>
//      )}
//    </Form.Group>
//  </Form>;
