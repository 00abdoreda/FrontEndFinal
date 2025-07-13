import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChangeHandler = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);
  return (
    <>
      <div className="w-25">
        <Form.Control
          className="ps-3"
          style={{ borderRadius: "10px" }}
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChangeHandler(e.target.value);
          }}
          placeholder={`Search Data`}
        />
      </div>
    </>
  );
};

export default GlobalFilter;
