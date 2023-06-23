import { NextPage } from 'next';
import Link from 'next/link';

import ProductList from '@/components/ProductList';
import FilterList from '@/components/FilterList';
import Preloader from '@/components/Preloader';
import { getProducts, getCategories } from '@/lib/helpers';

export const revalidate = 10;

const Shop: NextPage = async (props: {}) => {
  const products = await getProducts();

  return (
    <main className="shop">
      <Preloader />

      <div className="container">
        <h1>Your Own Jewellery Store</h1>

        <FilterList filterOptions={getCategories('all')} />

        <ProductList products={products} />
      </div>
    </main>
  );
};

export default Shop;
