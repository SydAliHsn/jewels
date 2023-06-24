import { NextPage } from 'next';
import Image from 'next/image';

import NotFound from '@/components/NotFound';
import { getProducts } from '@/lib/helpers';
import Slider from './components/slider';
import Buttons from './components/buttons';
import { Product } from '@/lib/types';

// export const dynamicParams = false;
export const revalidate = 3600;

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const products = (await getProducts()) as Product[];

  return products.map(({ slug }) => {
    return { slug };
  });
}

const ProductDetails: NextPage<Props> = async ({ params }) => {
  const { slug } = params;

  const product = (await getProducts({ slug })) as Product;

  if (!product) return <NotFound />;

  const { images, category, name, description, salePrice, price, createdAt, bestseller, featured } = product;

  const renderCardBadge = () => {
    const newlyCreated = new Date(createdAt).getTime() < new Date().getTime() + 86400 * 10;

    if (!newlyCreated && !featured && !bestseller && !salePrice) return null;

    let badgeText;

    salePrice && (badgeText = 'On Sale!');
    newlyCreated && (badgeText = 'New');
    featured && (badgeText = 'Featured');
    bestseller && (badgeText = 'Bestseller');

    return <div className="badge">{badgeText}</div>;
  };

  return (
    <main className="product-details">
      <div className="container">
        <section className="images">
          <Slider images={images} />
        </section>

        <section className="content">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className="head">{category === 'unisex' ? 'Men / Women' : category.toUpperCase()} </p>
            {renderCardBadge()}
          </div>
          <h1 className="name">{name}</h1>
          <p className="description">{description}</p>
          <div className="price-area">
            <div>
              <h3 className="current-price">Rs. {salePrice ? salePrice : price}.00</h3>
              {salePrice ? <p className="discount">{Math.round(((price - salePrice) / price) * 100)}% Off</p> : ''}
            </div>
            {salePrice ? <s className="old-price">Rs. {price}.00</s> : ''}
          </div>

          <Buttons slug={slug} />
        </section>
      </div>
    </main>
  );
};

export default ProductDetails;
