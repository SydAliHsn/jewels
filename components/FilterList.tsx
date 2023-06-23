import React from 'react';
import Link from 'next/link';
import { Category } from '@/lib/types';

const FilterList = ({ filterOptions }: { filterOptions: Category[] }): JSX.Element => {
  return (
    <ul
      className="filter-list"
      style={{ marginTop: '1rem' }}
    >
      {filterOptions.map(({ href, active, title }) => (
        <li key={href}>
          <Link
            href={href}
            className={`filter-btn ${active ? 'active' : ''}`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
