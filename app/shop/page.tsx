import { NextPage } from 'next';
import Link from 'next/link';

import ProductList from '@/components/ProductList';
import FilterList from '@/components/FilterList';
import Preloader from '@/components/Preloader';
import Pagination from './Pagination';
import { getProducts, getCategories } from '@/lib/helpers';
import { Product } from '@/lib/types';

export const revalidate = 3600 * 2;

const Shop: NextPage = async (props: {}) => {
  let products = (await getProducts()) as Product[];
  const productsPerPage = Number(process.env.PRODUCTS_PER_PAGE) || 25;

  const totalPages = Math.ceil(products.length / productsPerPage);

  products = products.slice(0, productsPerPage);

  return (
    <main className="shop">
      <Preloader />

      <div className="container">
        <h1>Your Own Jewellery Store</h1>

        <FilterList filterOptions={getCategories('all')} />

        <ProductList products={products} />

        <Pagination
          totalPages={totalPages}
          currPage={1}
        />
      </div>
    </main>
  );
};

export default Shop;
