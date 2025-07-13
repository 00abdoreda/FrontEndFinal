import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/Navbar/AdminNavbar";
import { BsPieChart } from "react-icons/bs";
import {
  FaCheckSquare,
  FaListAlt,
  FaStethoscope,
  FaUserAlt,
  FaUserCircle,
} from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getDoctorAppointments,
  getDoctorData,
  getDoctorTimeTable,
} from "../redux/actions/appAction";

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctorData());
    dispatch(getDoctorTimeTable());
    dispatch(getDoctorAppointments());
  }, []);
  const menu = [
    {
      path: "/user/user-profile",
      name: "Doctor Profile",
      icon: <FaUserCircle />,
    },

    {
      path: "/user/doctor-time-table",
      name: "Doctor TimeTable",
      icon: <BiNotepad />,
    },
    {
      path: "/user/appointment-list",
      name: "Appointment List",
      icon: <FaCheckSquare />,
    },
  ];
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="d-flex" style={{ position: "relative" }}>
        <Sidebar isOpen={isOpen} menu={menu} />
        <motion.div
          animate={{
            left: isOpen ? "250px" : "70px",
            width: isOpen ? "calc(100% - 250px)" : "calc(100% - 70px)",
            opacity: 1,
          }}
          style={{
            position: "relative",
            // width: isOpen ? "calc(100% - 250px)" : "calc(100% - 70px)",
          }}
        >
          <AdminNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Outlet />
        </motion.div>
      </div>
    </>
  );
};

export default User;
