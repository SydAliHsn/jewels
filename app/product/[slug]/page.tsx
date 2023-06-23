import { getProducts } from '@/lib/helpers';
import { NextPage } from 'next';

export const dynamicParams = false;
export const revalidate = 10;

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
    <main className="main__container">
      <div className="cart">
        <header className="cart-header">
          <p className="cart-header--title">Cart</p>
        </header>

        <section className="cart-content empty">
          <div className="cart__btn--container">
            <a
              href="#"
              className="cart__btn"
              type="button"
              aria-label="proceed to checkout section"
            >
              Checkout
            </a>
          </div>
          <p className="cart__empty--text">Your cart is empty.</p>
        </section>
      </div>

      <section className="slider">
        <button
          className="slider-btn--container previous"
          type="button"
          aria-label="button to previous image on focus section"
        >
          <img
            className="slider-btn previous"
            src="./images/icon-previous.svg"
            alt=""
          />
        </button>

        <div className="slider__img--container">
          <img
            className="slider__img"
            src="./images/image-product-1.jpg"
            alt=""
          />
        </div>

        <button
          className="slider-btn--container next"
          type="button"
          aria-label="button to next image on focus section"
        >
          <img
            className="slider-btn next"
            src="./images/icon-next.svg"
            alt=""
          />
        </button>

        <div className="slider__selector--container">
          <button
            className="slider__selector--img"
            type="button"
            aria-label="button for select product image"
          >
            <img
              src="/images/product-1.jpg"
              alt=""
            />
          </button>
          <button
            className="slider__selector--img"
            type="button"
            aria-label="button for select product image"
          >
            <img
              src="/images/product-1.jpg"
              alt=""
            />
          </button>
          <button
            className="slider__selector--img"
            type="button"
            aria-label="button for select product image"
          >
            <img
              src="/images/product-1.jpg"
              alt=""
            />
          </button>
          <button
            className="slider__selector--img"
            type="button"
            aria-label="button for select product image"
          >
            <img
              src="/images/product-1.jpg"
              alt=""
            />
          </button>
        </div>
      </section>

      <section className="slider-focus">
        <button
          className="close-icon"
          type="button"
          aria-label="close focus section"
        >
          <svg
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fillRule="evenodd"
            />
          </svg>
        </button>

        <button
          className="slider-btn--container previous focus-previous"
          type="button"
          aria-label="button to previous image on focus section"
        >
          <svg
            className="slider-btn focus-previous--img"
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1 3 9l8 8"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>

        <div className="slider__img--container slider__focus--img">
          <img
            src="./images/image-product-1.jpg"
            alt=""
          />
        </div>

        <button
          className="slider-btn--container focus-next"
          type="button"
          aria-label="button to next image on focus section"
        >
          <svg
            className="slider-btn focus-next--img"
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2 1 8 8-8 8"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>

        <div className="slider__selector--container">
          <button
            className="slider__selector--focus-img"
            type="button"
            aria-label="button for select product image on focus section"
          >
            <img
              focus-value="1"
              src="/images/product-1.jpg"
              alt=""
            />
          </button>
          <button
            className="slider__selector--focus-img"
            type="button"
            aria-label="button for select product image on focus section"
          >
            <img
              focus-value="2"
              src="/images/product-1.jpg"
              alt=""
            />
          </button>
          <button
            className="slider__selector--focus-img"
            type="button"
            aria-label="button for select product image on focus section"
          >
            <img
              focus-value="3"
              src="/images/product-1.jpg"
              alt=""
            />
          </button>
          <button
            className="slider__selector--focus-img"
            type="button"
            aria-label="button for select product image on focus section"
          >
            <img
              focus-value="4"
              src="/images/product-1.jpg"
              alt=""
            />
          </button>
        </div>
      </section>

      <section className="product-content">
        <article className="product-content--info">
          <div className="product__info--text">
            <p className="product__info--brand">Sneaker Company</p>
            <h2 className="product__info--title">Fall Limited Edition Sneakers</h2>
            <p className="product__info--description">
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
              they’ll withstand everything the weather can offer.
            </p>
          </div>

          <div className="info__pricing">
            <span className="info__pricing--price">$125.00</span>
            <span className="info__pricing--discount">50%</span>
            <span className="info__pricing--before">
              <del>$250.00</del>
            </span>
          </div>
        </article>

        <div className="product-content__order">
          <div className="order__quantity">
            <input
              className="order__quantity--input"
              type="number"
              // value="0"
              name="quantity"
            />
            <button
              className="order__quantity--btn minus"
              type="button"
              aria-label="button for remove quantity product"
            >
              <img
                src="./images/icon-minus.svg"
                alt=""
              />
            </button>
            <button
              className="order__quantity--btn plus"
              type="button"
              aria-label="button for add quantity product"
            >
              <img
                src="./images/icon-plus.svg"
                alt=""
              />
            </button>
          </div>

          <button
            className="order__cart"
            type="button"
          >
            <img
              className="order__cart--icon"
              src="./images/icon-cart-white.svg"
              alt=""
            />{' '}
            Add to cart
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
