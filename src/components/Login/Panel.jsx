import { motion } from "framer-motion";
import React from "react";
import { Button } from "react-bootstrap";
// import PanelContent from "./PanelContent";
import { useSelector } from "react-redux";
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";
const Panel = () => {
  const islogin = useSelector((state) => state.loginOrRegister);
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          right: islogin ? `100%` : ``,
        }}
        animate={{
          opacity: 1,
          transform: islogin ? `` : `translate(100%,-50%)`,
          right: islogin ? `48%` : `52%`,
        }}
        className={`left-side panels-container`}
        style={{ transition: "0.9s 0.6s ease-in-out", zIndex: "2" }}
      ></motion.div>
      <LeftPanel />
      <RightPanel />
    </>
  );
};

export default Panel;
