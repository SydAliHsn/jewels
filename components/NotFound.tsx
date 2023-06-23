import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiTwotoneShop } from 'react-icons/ai';
import { BiHome } from 'react-icons/bi';

const NotFound = (props: {}): JSX.Element => {
  return (
    <main className="not-found">
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Oops! Maybe the page is under construction or the link is broken. Go back to</h1>

        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link
            href="/shop"
            className="btn btn-primary"
          >
            <AiTwotoneShop className="icon" />
            Our Shop
          </Link>

          <Link
            href="/"
            className="btn btn-secondary"
          >
            <BiHome className="icon" />
            Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
