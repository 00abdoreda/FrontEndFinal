import React, { useMemo, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import doctorImg from "../../assets/images/doctor-3.jpg";
import {
  FaArrowDown,
  FaArrowUp,
  FaPencilAlt,
  FaRegTrashAlt,
} from "react-icons/fa";
import GlobalTable from "../Table/GlobalTable";
import ColumnFilter from "../Table/ColumnFilter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deletePatient,
  getAllPatientsAdmin,
} from "../../redux/actions/appAction";
const PatientList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPatientsAdmin());
  }, []);
  const patientsData = useSelector((state) => state.adminAllPatient);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setPatients(patientsData);
  }, [patientsData]);
  const data = useMemo(() => [...patients], [patients]);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ row }) => (
          <div className="d-flex align-items-center">
            {/* <img
              src={row.original.img}
              alt=""
              width="30px"
              height="30px"
              style={{ borderRadius: "50%", marginRight: "10px" }}
            /> */}
            <p
              style={{
                fontWeight: "500",
                fontSize: "14px",
                margin: "0",
              }}
            >
              {`${row.original.firstName} ${row.original.lastName}`}
            </p>
          </div>
        ),
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Age",
        accessor: "age",
      },

      {
        Header: "Mobile",
        accessor: "mobile",
      },

      {
        Header: "N-ID",
        accessor: "Nid",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      // {
      //   Header: "Action",
      //   accessor: "action",
      //   Cell: ({ row }) => (
      //     <div className="d-flex hidden-print">
      //       <FaPencilAlt
      //         className="me-lg-3 me-sm-2"
      //         style={{
      //           cursor: "pointer",
      //           fontSize: "20px",
      //           color: "#009efb",
      //         }}
      //       />
      //       <FaRegTrashAlt
      //         className="me-lg-3 me-sm-2"
      //         style={{
      //           cursor: "pointer",
      //           fontSize: "20px",
      //           color: "#d9534f",
      //         }}
      //         onClick={() => {
      //           // console.log(row.original[`_id`]);
      //           dispatch(deletePatient(row.original[`_id`]));
      //           dispatch(getAllPatientsAdmin());
      //         }}
      //       />
      //     </div>
      //   ),
      // },
    ],
    []
  );
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
        <Card style={{ overflowX: "auto" }}>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}
          >
            <h4 className="p-3">Patients List</h4>
          </div>
          <GlobalTable data={data} columns={columns} />
        </Card>
      </div>
    </>
  );
};

export default PatientList;
