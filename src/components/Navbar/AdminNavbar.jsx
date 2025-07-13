import { Button, Form } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import { MdClear } from "react-icons/md";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sessionLogOut } from "../../redux/actions/appAction";
function AdminNavbar(props) {
  const [searchValue, setSearchValue] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <Navbar
      className="col-12 justify-content-start"
      collapseOnSelect
      expand="lg"
      style={{
        backgroundColor: "#f8f9fa",
        height: "70px",
        borderBottom: "1px solid rgba(0,0,0,.1)",
        padding: "15px 20px",
        boxSizing: "border-box",
      }}
    >
      <div className="w-100 d-flex align-items-center justify-content-between">
        <p
          className="p-toggle"
          style={{ margin: "0", width: "20px", marginRight: " 20px" }}
          onClick={() => {
            props.setIsOpen(!props.isOpen);
          }}
        >
          <span className="span-toggle w-100"></span>
          <span
            className="span-toggle"
            style={{ width: props.isOpen ? "15px" : "100%" }}
          ></span>
          <span
            className="span-toggle"
            style={{ width: props.isOpen ? "10px" : "100%" }}
          ></span>
        </p>
        {/* {props.isOpen ? (
          <TbLayoutSidebarLeftCollapse
            style={{ fontSize: "40px", marginRight: " 20px" }}
            onClick={() => props.setIsOpen(!props.isOpen)}
          />
        ) : (
          <TbLayoutSidebarRightCollapse
            style={{ fontSize: "40px", marginRight: " 20px" }}
            onClick={() => props.setIsOpen(!props.isOpen)}
          />
        )} */}
        <Form className="w-25" style={{ position: "relative" }}>
          <Form.Control
            id="form-search"
            type="search"
            placeholder="Search"
            className="me-2 w-100"
            aria-label="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </Form>
        <div>
          <FaUserCircle style={{ fontSize: "40px", marginRight: "15px" }} />

          <Button
            variant="secondary"
            onClick={() => {
              dispatch(sessionLogOut());
              nav(`/`, { replace: true });
              // window.location.reload();
            }}
          >
            LogOut
          </Button>
        </div>
      </div>
    </Navbar>
  );
}

export default AdminNavbar;
