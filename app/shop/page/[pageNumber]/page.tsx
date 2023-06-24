import { NextPage } from 'next';
import Link from 'next/link';

import FilterList from '@/components/FilterList';
import ProductList from '@/components/ProductList';
import Preloader from '@/components/Preloader';
import { getProducts, getCategories } from '@/lib/helpers';
import { Product } from '@/lib/types';

export const dynamicParams = false;

export async function generateStaticParams() {
  const products = (await getProducts()) as Product[];
  const numberOfPages = Math.ceil(products.length / Number(process.env.PRODUCTS_PER_PAGE));

  if (!numberOfPages)
    return [
      {
        pageNumber: String(1),
      },
    ];

  return new Array(numberOfPages).fill('').map((_, i) => ({
    // Adding 1 because i starts from 0
    pageNumber: String(i + 1),
  }));
}

type Props = { params: { pageNumber: string } };

const ShopPage: NextPage<Props> = async ({ params }) => {
  const { pageNumber } = params;

  const products = (await getProducts({ page: Number(pageNumber) })) as Product[];

  return (
    <main className="shop">
      <Preloader />

      <div className="container">
        <h1>Your Own Jewellery Store</h1>
        <h1 style={{ marginTop: '1rem', textAlign: 'center' }}>
          <span style={{ borderBottom: '4px dashed var(--primary)', display: 'inline', paddingBottom: '0.5rem' }}>
            {' '}
            Page {pageNumber}
          </span>
        </h1>

        <FilterList filterOptions={getCategories('all')} />

        <ProductList products={products} />
      </div>
    </main>
  );
};

export default ShopPage;
