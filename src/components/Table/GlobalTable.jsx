import React, { useMemo, useRef, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import {
  useAsyncDebounce,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
  useFilters,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
import Pagination from "./Pagination";
import { useReactToPrint } from "react-to-print";
const GlobalTable = ({ data, columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    page,
    pageOptions,
    setPageSize,
    gotoPage,
    pageCount,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { pageIndex, pageSize } = state;
  const handlePageClick = (e) => {
    gotoPage(e.selected);
  };
  // Doctor Filter Option
  // const {setFilter }
  // console.log(columns.findIndex((e) => e.accessor === "doctorName"));
  // console.log(columns[2]);
  // const { filterValue, setFilter } = columns[2];
  // console.log(filterValue);
  // console.log(setFilter);

  const tablePDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => tablePDF.current,
    bodyClass: "m-4 h-100",
    documentTitle: "User Data",
  });
  return (
    <>
      {/* Header of The Table */}
      <div className="d-flex justify-content-between align-items-center m-2 pt-2 pe-2">
        {/* Doctor Filter Select  And PageSize Select */}
        <div
          className="d-flex align-items-center ps-3"
          style={{ fontSize: "16px", position: "relative" }}
        >
          Show
          <Form.Select
            style={{
              marginLeft: "10px",
              width: "70px",
              borderRadius: "10px",
            }}
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50, 100, 150, 200].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </Form.Select>
          {/* {data[0].hasOwnProperty("doctorName") && (
            <Form.Select
              style={{
                // opacity: data[0].hasOwnProperty("doctorName") ? "0" : "1",
                marginLeft: "10px",
                width: "150px",
                borderRadius: "10px",
              }}
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
                      e.doctorName.charAt(0).toUpperCase() +
                      e.doctorName.slice(1)
                  )
                ),
              ].map((e) => (
                <option key={e} value={e} onClick={(e) => console.log("eeee")}>
                  {e}
                </option>
              ))}
            </Form.Select>
          )} */}
        </div>
        {/* Filter By Search Input */}
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          globalFilter={state.globalFilter}
        />
        {/*     <Button onClick={generatePDF}> Print</Button> */}
        <Button onClick={generatePDF}>Print</Button>
      </div>

      {/* Table Content */}
      <div className="px-lg-3 px-sm-2 py-3">
        {/* Table- */}
        <Table {...getTableProps} striped ref={tablePDF}>
          <thead
            style={{
              backgroundColor: "#009efb",
              color: "#fff",
            }}
          >
            {headerGroups.map((headerGroup, i) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    {...column.getHeaderProps(
                      !column.canFilterColumn && column.getSortByToggleProps()
                    )}
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                      padding: "12px 16px",
                      cursor: "pointer",
                    }}
                    className={column.Header === "Action" ? `hidden-print` : ``}
                  >
                    {column.render("Header")}
                    {!column.canFilterColumn && column.isSorted ? (
                      !column.canFilterColumn && column.isSortedDesc ? (
                        <FaArrowDown
                          style={{
                            marginLeft: "6px",
                            fontSize: "16px",
                          }}
                        />
                      ) : (
                        <FaArrowUp
                          style={{
                            marginLeft: "6px",
                            fontSize: "16px",
                          }}
                        />
                      )
                    ) : (
                      ""
                    )}
                    <div>
                      {/* {column.canFilter ? column.render("Filter") : null}
                       */}
                      {/* {console.log(
                        column.canFilter ? column.render("Filter") : null
                      )} */}
                      {column.canFilterColumn ? column.render("Filter") : null}
                      {/* {console.log(column.canFilterColumn )} */}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, i) => {
                    return (
                      <td
                        className={`${i === 0 ? `ps-4` : ``}`}
                        {...cell.getCellProps()}
                        style={{
                          padding: "15px",
                          fontSize: "14px",
                          padding: "16px",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        {/* Pagination */}
        {pageCount > 1 && (
          <Pagination
            pageIndex={pageIndex}
            pageOptions={pageOptions}
            handlePageClick={handlePageClick}
            pageCount={pageCount}
          />
        )}
      </div>
    </>
  );
};

export default GlobalTable;
