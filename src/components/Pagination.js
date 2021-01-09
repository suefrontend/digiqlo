import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  if(totalPosts > postsPerPage) {

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  }
console.log("totalPosts", totalPosts);
  return (
    <>
      {pageNumbers.map(number => (
        <li key={number} className='page-item'>
          <Link onClick={() => paginate(number)} href='!#' className='page-link'>
            {number}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Pagination;
