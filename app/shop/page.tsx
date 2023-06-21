import { NextPage } from 'next';
import Link from 'next/link';

import ProductList from '@/components/ProductList';

const Shop: NextPage = (props: {}) => {
  return (
    <main className="shop">
      <div className="container">
        <h1>Your Own Jewellery Store</h1>

        <ul
          className="filter-list"
          style={{ marginTop: '1rem' }}
        >
          <li>
            <button className="filter-btn  active">All</button>
          </li>

          <li>
            <Link
              href="/shop/women"
              className="filter-btn"
            >
              Women
            </Link>
          </li>

          <li>
            <Link
              href="/shop/men"
              className="filter-btn"
            >
              Men
            </Link>
          </li>

          <li>
            <Link
              href="/shop/kids"
              className="filter-btn"
            >
              Kids
            </Link>
          </li>
        </ul>

        <ProductList category="all" />
      </div>
    </main>
  );
};

export default Shop;
