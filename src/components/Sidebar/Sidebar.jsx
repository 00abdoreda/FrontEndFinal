import React from "react";
import { Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaBars, FaListAlt, FaUserCircle } from "react-icons/fa";
import { BsPieChart } from "react-icons/bs";
import sidebar1 from "../../assets/images/sidebar.jpeg";
import logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";
const Sidebar = (props) => {
  return (
    <>
      <motion.div
        animate={{ width: props.isOpen ? "250px" : "70px", opacity: 1 }}
        className="sidebar"
        style={{
          position: "fixed",
          overflow: "hidden",
          height: "100vh",
          top: 0,
          left: 0,
        }}
      >
        <motion.div
          animate={{ width: props.isOpen ? "250px" : "70px", opacity: 1 }}
          style={{
            position: "absolute",
            backgroundImage: `url(${sidebar1})`,
            height: "100vh",
            top: 0,
            left: 0,
            backgroundSize: "cover",
            backgroundPosition: "38%",
          }}
        >
          <div
            style={{
              padding: props.isOpen ? "15px 20px" : "15px 10px",
              position: "relative",
              zIndex: "4",
              borderBottom: "1px solid hsla(0,0%,100%,.2)",
              marginBottom: "20px",
            }}
          >
            <NavLink
              to="/admin/user-profile"
              className={`d-flex align-items-center w-100`}
              style={{
                color: "#fff",
                textDecoration: "none",
                maxHeight: "40px",
              }}
            >
              <img
                src={logo}
                alt=""
                style={{
                  marginRight: "20px",
                  maxWidth: "250px",
                }}
              />
              <motion.h3
                animate={{
                  display: props.isOpen ? "block" : "none",
                  opacity: props.isOpen ? "1" : "0",
                }}
                transition={{
                  delay: props.isOpen ? "0.25" : "",
                }}
                style={{ width: "100%", margin: "0", fontSize: "25px" }}
              >
                {/* Healthcare Booking */}
              </motion.h3>
            </NavLink>
          </div>
          <div
            className="content"
            style={{ position: "relative", zIndex: "4" }}
          >
            {props.menu.map((e, i) => (
              <li
                className="nav-li"
                style={{
                  textTransform: "capitalize",
                  listStyleType: "none",
                  borderRadius: "6px",
                  margin: props.isOpen ? "5px 15px" : "5px 10px",
                }}
                key={i}
              >
                <NavLink
                  to={e.path}
                  className="d-flex align-items-center gap-2 w-100"
                  style={{
                    borderRadius: "6px",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "4px 10px",
                    opacity: "0.86",
                  }}
                >
                  <p
                    style={{
                      marginBottom: "0",
                      fontSize: props.isOpen ? "20px" : "25px",
                      marginRight: "10px",
                    }}
                  >
                    {e.icon}
                  </p>
                  <motion.p
                    animate={{
                      display: props.isOpen ? "block" : "none",
                      opacity: props.isOpen ? "1" : "0",
                    }}
                    transition={{
                      delay: props.isOpen ? "0.25" : "",
                    }}
                    style={{
                      marginBottom: "0",
                      fontWeight: "600",
                      lineHeight: "31px",
                      fontSize: "13px",
                    }}
                  >
                    {e.name}
                  </motion.p>
                </NavLink>
              </li>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Sidebar;

/**
 import React from "react";
import { Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaBars, FaListAlt, FaUserCircle } from "react-icons/fa";
import { BsPieChart } from "react-icons/bs";
import sidebar1 from "../../assets/images/sidebar-3.jpg";
import logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";
const Sidebar = (props) => {
  return (
    <>
      <motion.div
        animate={{ width: props.isOpen ? "250px" : "70px", opacity: 1 }}
        className="sidebar"
        style={{
          position: "relative",
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <motion.div
          animate={{ width: props.isOpen ? "250px" : "70px", opacity: 1 }}
          style={{
            position: "absolute",
            backgroundImage: `url(${sidebar1})`,
            height: "100vh",
            zindex: 1,
            top: 0,
            left: 0,
            backgroundSize: "cover",
            backgroundPosition: "50%",
          }}
        >
          <div
            style={{
              padding: props.isOpen ? "15px 20px" : "15px 10px",
              position: "relative",
              zIndex: "4",
              borderBottom: "1px solid hsla(0,0%,100%,.2)",
              marginBottom: "20px",
            }}
          >
            <NavLink
              to="/dashboard"
              className={`d-flex align-items-center w-100`}
              style={{
                color: "#fff",
                textDecoration: "none",
                maxHeight: "40px",
              }}
            >
              <img
                src={logo}
                alt=""
                style={{
                  marginRight: "10px",
                  maxWidth: "50px",
                }}
              />
              <motion.h3
                animate={{
                  display: props.isOpen ? "block" : "none",
                  opacity: props.isOpen ? "1" : "0",
                }}
                transition={{
                  delay: props.isOpen ? "0.25" : "",
                }}
                style={{ width: "100%", margin: "0", fontSize: "25px" }}
              >
                Booking Doctor
              </motion.h3>
            </NavLink>
          </div>
          <div
            className="content"
            style={{ position: "relative", zIndex: "4" }}
          >
            {props.menu.map((e, i) => (
              <li
                className="nav-li"
                style={{
                  textTransform: "uppercase",
                  listStyleType: "none",
                  borderRadius: "6px",
                  margin: props.isOpen ? "5px 15px" : "5px 10px",
                }}
                key={i}
              >
                <NavLink
                  to={e.path}
                  className="d-flex gap-2 w-100"
                  style={{
                    borderRadius: "6px",
                    alignItems: "center",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "4px 10px",
                    opacity: "0.86",
                  }}
                >
                  <p
                    style={{
                      marginBottom: "0",
                      fontSize: props.isOpen ? "25px" : "30px",
                      marginRight: "10px",
                    }}
                  >
                    {e.icon}
                  </p>
                  <motion.p
                    animate={{
                      display: props.isOpen ? "block" : "none",
                      opacity: props.isOpen ? "1" : "0",
                    }}
                    transition={{
                      delay: props.isOpen ? "0.25" : "",
                    }}
                    style={{
                      marginBottom: "0",
                      fontWeight: "600",
                      lineHeight: "31px",
                      fontSize: "13px",
                    }}
                  >
                    {e.name}
                  </motion.p>
                </NavLink>
              </li>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Sidebar;

 */
