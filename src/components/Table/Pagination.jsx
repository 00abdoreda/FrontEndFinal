import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageIndex, pageOptions, handlePageClick, pageCount }) => {
  return (
    <>
      <div className="d-flex justify-content-between align items-center  px-4">
        <span>
          Page {pageIndex + 1} of {pageOptions.length}
        </span>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="Previous"
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link shadow-none"
          previousClassName="page-item"
          previousLinkClassName="page-link shadow-none"
          nextClassName="page-item"
          nextLinkClassName="page-link shadow-none"
          activeClassName="active"
          breakClassName="page-item"
          breakLinkClassName="page-link"
        />
      </div>
    </>
  );
};

export default Pagination;
