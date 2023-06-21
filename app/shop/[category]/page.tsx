import { NextPage } from 'next';
import Link from 'next/link';
import NotFound from '@/components/NotFound';

import ProductList from '@/components/ProductList';

type Props = { params: { category: string } };

const categories = ['women', 'men', 'kids'];

const ShopCategory: NextPage<Props> = ({ params }) => {
  const { category } = params;

  if (!categories.includes(category)) return <NotFound />;

  let bgColor;
  switch (category) {
    case 'women':
      bgColor = 'red';
      break;

    case 'men':
      bgColor = 'blue';
      break;

    case 'kids':
      bgColor = 'multi';
      break;
  }

  return (
    <main
      className="shop"
      //   style={{ backgroundImage: `url(/images/background-${bgColor}.svg)` }}
    >
      <div className="container">
        <h1>Latest Jewellery for {category[0].toUpperCase() + category.slice(1)}</h1>

        <ul
          className="filter-list"
          style={{ marginTop: '1rem' }}
        >
          <li>
            <Link
              href={'/shop'}
              className="filter-btn"
            >
              All
            </Link>
          </li>

          {categories.map(categ => (
            <li key={categ}>
              <Link
                href={`/shop/${categ}`}
                className={`filter-btn ${categ === category ? 'active' : ''}`}
              >
                {categ[0].toUpperCase() + categ.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <ProductList category="all" />
      </div>
    </main>
  );
};

export default ShopCategory;
