import React from 'react';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';

import ProductCardPhone from './ProductCardPhone';

const ProductCard = (props: {}): JSX.Element => {
  return (
    <div
      className="product-card"
      tabIndex={0}
    >
      <figure className="card-banner">
        <img
          src="/images/product-1.jpg"
          width="312"
          height="350"
          loading="lazy"
          alt="Running Sneaker Shoes"
          className="image-contain"
        />

        <div className="card-badge">New</div>

        <ul className="card-action-list">
          <li className="card-action-item">
            <Link
              href="https://wa.me/+9203264603123?text=Hi%2C%20I%20want%20to%20order%20a%20product%20from%20your%20store%21"
              target="_blank"
              className="card-action-btn"
              aria-labelledby="card-label-1"
            >
              <BsWhatsapp
                className="icon"
                style={{ color: '#2AD066' }}
              />
            </Link>

            <div
              className="card-action-tooltip"
              id="card-label-1"
            >
              Whatsapp to Order
            </div>
          </li>

          <ProductCardPhone
            text="Call to order"
            message="Phone no. copied to clipboard!"
          >
            <AiOutlinePhone
              className="icon"
              style={{ color: 'var(--primary)' }}
            />
          </ProductCardPhone>
        </ul>
      </figure>

      <div className="card-content">
        <div className="card-cat">
          <a
            href="#"
            className="card-cat-link"
          >
            Men
          </a>{' '}
          /
          <a
            href="#"
            className="card-cat-link"
          >
            Women
          </a>
        </div>

        <h3 className="h3 card-title">
          <a href="#">Running Sneaker Shoes</a>
        </h3>

        <data
          className="card-price"
          value="180.85"
        >
          $180.85
        </data>
      </div>
    </div>
  );
};

export default ProductCard;
