import React from 'react';

import ProductCard from './ProductCard';

const ProductList = ({ category }: { category: string }): JSX.Element => {
  const prods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <ul className="product-list">
      {prods.map(prod => (
        <li
          className="product-item"
          key={prod}
        >
          <ProductCard />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
