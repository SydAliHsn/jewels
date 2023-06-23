import { getProducts } from '@/lib/helpers';
import { NextPage } from 'next';
import Image from 'next/image';

export const dynamicParams = false;
export const revalidate = 360;

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map(({ slug }) => {
    return { slug };
  });
}

const ProductDetails: NextPage<Props> = async ({ params }) => {
  const { slug } = params;

  return (
    <main
      className="product-details"
      style={{ minHeight: '50vh' }}
    >
      <div
        className="container"
        style={{ display: 'flex', gap: '4rem' }}
      >
        <section className="images">{/* <Image /> */}</section>
        <section className="content">
          <p className="head">Men / Women</p>
        </section>
      </div>
    </main>
  );
};

export default ProductDetails;
