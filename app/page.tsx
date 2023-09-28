import Link from 'next/link';

import Hero from '@/components/Hero';
import Collection from '@/components/Collection';
import Services from '@/components/Services';
import ProductList from '@/components/ProductList';
import Cta from '@/components/Cta';
import Instagram from '@/components/Instagram';
import ProductCard from '@/components/ProductCard';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Preloader from '@/components/Preloader';
import { getInstagramPosts, getProducts } from '@/lib/helpers';
import { InstagramPost, Product } from '@/lib/types';

export const revalidate = 3600 * 2;

export default async function Home() {
  const bestsellerProducts = (await getProducts({ bestseller: true })) as Product[];
  const featuredProducts = (await getProducts({ featured: true })) as Product[];
  const instagramPosts = (await getInstagramPosts()) as InstagramPost[];

  return (
    <div>
      <Preloader />
      <main>
        <article>
          <Hero />

          <Collection />

          {/* <!-- 
        - #PRODUCT
      --> */}
          {bestsellerProducts.length && <section className="section product">
            <div className="container">
              <h2 className="h2 section-title">Our Bestsellers</h2>

              <ProductList products={bestsellerProducts} />
            </div>
          </section>}

          <Cta />

          {/* <!-- 
        - #SPECIAL
      --> */}

          <section className="section special">
            <div className="container">
              <div
                className="special-banner"
                style={{
                  backgroundImage:
                    'url(https://res.cloudinary.com/dwr5e5itg/image/upload/v1687706258/jewellery-sadeem/special-jeweled_guejkv.jpg)',

                  backgroundSize: 'cover',
                }}
              >
                <h2 className="h3 banner-title">New Trend Edition</h2>

                <Link
                  href="/shop"
                  className="btn btn-link"
                >
                  <span>Explore All</span>

                  <AiOutlineArrowRight className="icon" />
                </Link>
              </div>

              <div className="special-product">
                <h2 className="h2 section-title">
                  <span className="text">BeJeweled Featured</span>

                  <span className="line"></span>
                </h2>

                <ul className="has-scrollbar">
                  {featuredProducts.map(prod => (
                    <li
                      className="product-item"
                      key={prod.slug}
                    >
                      <ProductCard product={prod} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <Services />

          <Instagram posts={instagramPosts} />
        </article>
      </main>
    </div>
  );
}
