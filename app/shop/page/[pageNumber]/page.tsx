import { NextPage } from 'next';
import Link from 'next/link';

import FilterList from '@/components/FilterList';
import ProductList from '@/components/ProductList';
import Preloader from '@/components/Preloader';
import Pagination from '../../Pagination';
import { getProducts, getCategories } from '@/lib/helpers';
import { Product } from '@/lib/types';
import NotFound from '@/components/NotFound';

// export const dynamicParams = false;

export const revalidate = 3600 * 2;

const getTotalNumOfPages = async (): Promise<number> => {
  const products = (await getProducts()) as Product[];

  const productsPerPage = Number(process.env.PRODUCTS_PER_PAGE) || 25;
  const totalPages = Math.ceil(products.length / productsPerPage);

  return totalPages;
};

export async function generateStaticParams() {
  const totalPages = await getTotalNumOfPages();

  if (!totalPages)
    return [
      {
        pageNumber: String(1),
      },
    ];

  return new Array(totalPages).fill('').map((_, i) => ({
    // Adding 1 because i starts from 0
    pageNumber: String(i + 1),
  }));
}

type Props = { params: { pageNumber: string } };

const ShopPage: NextPage<Props> = async ({ params }) => {
  const totalPages = await getTotalNumOfPages();
  let { pageNumber } = params;

  const products = (await getProducts({ page: Number(pageNumber) })) as Product[];

  if (!products.length) return <NotFound />;

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

        <Pagination
          currPage={Number(pageNumber)}
          totalPages={totalPages}
        />
      </div>
    </main>
  );
};

export default ShopPage;
