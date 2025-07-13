import React from "react";
import { Form } from "react-bootstrap";
import { useAsyncDebounce } from "react-table";

const ColumnFilter = ({ column, data }) => {
  const { filterValue, setFilter } = column;
  const handleDoctorFilter = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 300);
  return (
    <>
      <Form.Select
        style={{
          // opacity: data[0].hasOwnProperty("doctorName") ? "0" : "1",
          marginLeft: "10px",
          width: "150px",
          borderRadius: "10px",
          position: "absolute",
          top: "86px",
          left: "140px",
        }}
        className="hidden-print"
        // onClick={() => {
        //   console.log(rows.map((e) => e.original.doctorName));
        //   const res = [...new Set(rows.map((e) => e.original.doctorName))];
        //   console.log(res);
        //   const res1 = [...new Set(data.map((e) => e.doctorName))];
        //   console.log(res1);
        // }}
        onChange={(e) => handleDoctorFilter(e.target.value)}
      >
        <option value="">Doctor Filter</option>
        {[
          ...new Set(
            data.map(
              (e) =>
                e.doctorName.charAt(0).toUpperCase() + e.doctorName.slice(1)
            )
          ),
        ].map((e) => (
          <option key={e} value={e} onClick={(e) => console.log("eeee")}>
            {e}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default ColumnFilter;
