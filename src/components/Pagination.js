import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate, activeLink }) => {



  const pageNumbers = [];

  if(totalPosts > postsPerPage) {

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  const renderPagination = pageNumbers.map(number => {


    if(activeLink === number) {
      return (
        <li
          key={number}
          onClick={() => paginate(number)}
          className="active"
        >
            {number}
        </li>
        )
    } else {
      return (
        <li
          key={number}
          onClick={() => paginate(number)}
        >
          <Link  href='!#'>
            {number}
          </Link>
        </li>
        )
    }


  })

  return (
    <>
      {/* {pageNumbers.map(number => (
        <li key={number} className='page-item'>
          <Link onClick={() => paginate(number)} href='!#' className='page-link'>
            {number}
          </Link>
        </li>
      ))} */}
      {renderPagination}
    </>
  );
};

export default Pagination;
