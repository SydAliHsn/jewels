import React from 'react';

import ProductCard from './ProductCard';
import { Product } from '@/lib/types';

const ProductList = ({ products }: { products: Product[] }): JSX.Element => {
  return (
    <ul className={'product-list'}>
      {products.map(prod => (
        <li
          className="product-item"
          key={prod.slug}
        >
          <ProductCard product={prod} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
