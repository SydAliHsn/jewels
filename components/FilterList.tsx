import React from 'react';
import Link from 'next/link';
import { Category, SubCategory } from '@/lib/types';

const FilterList = ({ categories, subCategories }:
  { categories: Category[], subCategories?: SubCategory[] }): JSX.Element => {
  return (
    <>
      <ul
        className="filter-list"
        style={{ marginTop: '1rem' }}
      >
        {categories.map(({ href, active, title }) => (
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

      {subCategories?.length ?
        <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2.5rem', marginTop: '-2rem' }}>
          {subCategories.map(({ href, active, title }) => (
            <li key={href}>
              <Link
                href={href}
                className={`filter-btn ${active ? 'active' : ''}`}
                style={{ padding: '4px 8px', borderRadius: '4px', fontWeight: '300' }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul > : null}
    </>
  );
};

export default FilterList;
