import React from 'react';
import Link from 'next/link';
import { AiTwotoneShop } from 'react-icons/ai';

const NotFound = (props: {}): JSX.Element => {
  return (
    <div
      className="container"
      style={{ margin: '4rem auto' }}
    >
      <h1>
        Oops! Maybe the link is broken. Go back to our{' '}
        <Link
          href="/shop"
          style={{ display: 'inline', color: 'var(--primary)' }}
        >
          <AiTwotoneShop />
          Shop
        </Link>
      </h1>
    </div>
  );
};

export default NotFound;
