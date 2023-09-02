import { NextPage } from 'next';
import Link from 'next/link';
import { BiErrorCircle } from 'react-icons/bi'

import { getProducts, getCategories } from '@/lib/helpers';
import FilterList from '@/components/FilterList';
import Preloader from '@/components/Preloader';
import ProductList from '@/components/ProductList';
import { Product } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = 360;

const categories = ['women', 'men', 'kids'];

export function generateStaticParams() {
  return categories.map(category => ({
    category,
  }));
}

type Props = { params: { category: string } };

const ShopCategory: NextPage<Props> = async ({ params }) => {
  const { category } = params;

  const products = (await getProducts({ category })) as Product[];

  // let bgColor;
  // switch (category) {
  //   case 'women':
  //     bgColor = 'red';
  //     break;

  //   case 'men':
  //     bgColor = 'blue';
  //     break;

  //   case 'kids':
  //     bgColor = 'multi';
  //     break;
  // }

  return (
    <main
      className="shop"
    //   style={{ backgroundImage: `url(/images/background-${bgColor}.svg)` }}
    >
      <Preloader />

      <div className="container">
        <h1>Latest Jewellery for {category[0].toUpperCase() + category.slice(1)}</h1>

        <FilterList filterOptions={getCategories(category)} />

        {products.length ? <ProductList products={products} /> :
          <div style={{ color: 'red', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.75rem' }}>
            <p><BiErrorCircle style={{ scale: 1.3, marginRight: '3px' }} /> No Products found for {category}!</p>

            <p style={{ color: 'var(--primary)' }}>Check out <Link style={{ display: 'inline', color: 'var(--primary)', textDecoration: 'underline' }} href='/products'>All Products</Link>.</p> </div>}
      </div>
    </main>
  );
};

export default ShopCategory;
