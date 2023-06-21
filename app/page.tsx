import Image from 'next/image';

import Hero from '@/components/Hero';
import Collection from '@/components/Collection';
import Services from '@/components/Services';
import Cta from '@/components/Cta';
import Instagram from '@/components/Instagram';
import ProductCard from '@/components/ProductCard';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Preloader from '@/components/Preloader';

export default function Home() {
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
          <section className="section product">
            <div className="container">
              <h2 className="h2 section-title">Our Bestsellers</h2>

              {/* <ul className="filter-list">
                <li>
                  <button className="filter-btn  active">All</button>
                </li>

                <li>
                  <button className="filter-btn">Nike</button>
                </li>

                <li>
                  <button className="filter-btn">Adidas</button>
                </li>

                <li>
                  <button className="filter-btn">Puma</button>
                </li>

                <li>
                  <button className="filter-btn">Bata</button>
                </li>

                <li>
                  <button className="filter-btn">Apex</button>
                </li>
              </ul> */}

              <ul className="product-list">
                <li className="product-item">
                  <ProductCard />
                </li>
                <li className="product-item">
                  <ProductCard />
                </li>
                <li className="product-item">
                  <ProductCard />
                </li>
                <li className="product-item">
                  <ProductCard />
                </li>
                <li className="product-item">
                  <ProductCard />
                </li>
                <li className="product-item">
                  <ProductCard />
                </li>
                <li className="product-item">
                  <ProductCard />
                </li>
              </ul>
            </div>
          </section>

          <Cta />

          {/* <!-- 
        - #SPECIAL
      --> */}

          <section className="section special">
            <div className="container">
              <div
                className="special-banner"
                style={{ backgroundImage: "url('/images/special-banner.jpg')" }}
              >
                <h2 className="h3 banner-title">New Trend Edition</h2>

                <a
                  href="#"
                  className="btn btn-link"
                >
                  <span>Explore All</span>

                  <AiOutlineArrowRight className="icon" />
                </a>
              </div>

              <div className="special-product">
                <h2 className="h2 section-title">
                  <span className="text">Jewels Special</span>

                  <span className="line"></span>
                </h2>

                <ul className="has-scrollbar">
                  <li className="product-item">
                    <ProductCard />
                  </li>
                  <li className="product-item">
                    <ProductCard />
                  </li>
                  <li className="product-item">
                    <ProductCard />
                  </li>
                  <li className="product-item">
                    <ProductCard />
                  </li>
                  <li className="product-item">
                    <ProductCard />
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <Services />

          <Instagram />
        </article>
      </main>
    </div>
  );
}
