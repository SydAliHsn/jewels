import React from 'react';
import Link from 'next/link';

import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs';

const Pagination = ({ totalPages, currPage }: { totalPages: number; currPage: number }): JSX.Element => {
  if (totalPages === 1) return <></>;

  const renderPrevButton = () => {
    if (currPage <= 1) return <span></span>;

    return (
      <Link
        className="pagination-button"
        href={currPage === 2 ? '/shop' : `/shop/page/${currPage - 1}`}
      >
        <BsFillArrowLeftSquareFill />
      </Link>
    );
  };

  const renderNextButton = () => {
    if (currPage >= totalPages) return <span></span>;

    return (
      <Link
        className="pagination-button"
        href={`/shop/page/${currPage + 1}`}
      >
        <BsFillArrowRightSquareFill />
      </Link>
    );
  };
  return (
    <div className="pagination">
      {renderPrevButton()} {renderNextButton()}
    </div>
  );
};

export default Pagination;
