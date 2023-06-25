'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Cta = ({}: {}): JSX.Element => {
  const getSeason = (d: Date) => Math.floor((d.getMonth() / 12) * 4) % 4;

  return (
    <section className="section cta">
      <div className="container">
        <ul className="cta-list">
          <li>
            <div
              className="cta-card"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dwr5e5itg/image/upload/v1687699870/jewellery-sadeem/cta-1_unazkt.jpg')",
              }}
            >
              <p className="card-subtitle">Timeless Elegance</p>

              <h3 className="h2 card-title">
                {['Spring', 'Summer', 'Autumn', 'Winter'][getSeason(new Date())]} Sale! Upto 50% Off
              </h3>

              <Link
                href="/shop"
                className="btn btn-link"
              >
                <span>Shop Now</span>

                <FaArrowRight />
              </Link>
            </div>
          </li>

          <li>
            <div
              className="cta-card"
              style={{
                backgroundImage:
                  'url(https://res.cloudinary.com/dwr5e5itg/image/upload/v1687702218/jewellery-sadeem/cta-2_1_pdcrxc.jpg)',
              }}
            >
              <p className="card-subtitle">Sparkling Gems</p>

              <h3 className="h2 card-title">Decorate Yourself, Embrace Luxury</h3>

              <Link
                href="/shop"
                className="btn btn-link"
              >
                <span>Shop Now</span>

                <FaArrowRight />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Cta;
