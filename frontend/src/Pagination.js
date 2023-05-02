import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const CPagination = ({ currentPage, onPageChange }) => {
  const totalPages = 10;

  const handleClick = (e, index) => {
    e.preventDefault();
    onPageChange(index);
  };

  return (
    <Pagination>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <PaginationItem active={page === currentPage} key={page}>
          <PaginationLink onClick={(e) => handleClick(e, page)} href="#">
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
};

export default CPagination;
