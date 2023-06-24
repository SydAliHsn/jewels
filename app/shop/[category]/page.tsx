import { NextPage } from 'next';

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

        <ProductList products={products} />
      </div>
    </main>
  );
};

export default ShopCategory;
