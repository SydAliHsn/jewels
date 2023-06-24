import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';

import { Product } from '@/lib/types';
import ProductCardPhone from './ProductCardPhone';

const ProductCard = ({ product }: { product: Product }): JSX.Element => {
  const { name, slug, createdAt, category, bestseller, featured, price, salePrice, images } = product;

  const renderCardCat = () => {
    if (category === 'unisex')
      return (
        <div className="card-cat">
          <Link
            href="/shop/men"
            className="card-cat-link"
          >
            Men
          </Link>{' '}
          /{' '}
          <Link
            href="/shop/women"
            className="card-cat-link"
          >
            Women
          </Link>
        </div>
      );

    return (
      <div className="card-cat">
        <Link
          href={`/shop/${category}`}
          className="card-cat-link"
        >
          {category[0].toUpperCase() + category.slice(1)}
        </Link>{' '}
      </div>
    );
  };

  const renderCardBadge = () => {
    const newlyCreated = new Date(createdAt).getTime() < new Date().getTime() + 86400 * 10;

    if (!newlyCreated && !featured && !bestseller && !salePrice) return null;

    let badgeText;

    newlyCreated && (badgeText = 'New');
    featured && (badgeText = 'Featured');
    salePrice && (badgeText = `${Math.round(((price - salePrice) / price) * 100)}% Off`);
    bestseller && (badgeText = 'Bestseller');

    return <div className="card-badge">{badgeText}</div>;
  };

  return (
    <div
      className="product-card"
      tabIndex={0}
    >
      <figure className="card-banner">
        <Link href={`/product/${slug}`}>
          <Image
            src={images[0].url}
            fill={true}
            // width="312"
            // height="350"
            loading="lazy"
            alt={images[0].alt || 'product'}
            className="image-contain"
            style={{ objectFit: 'cover' }}
          />
        </Link>

        {renderCardBadge()}

        <ul className="card-action-list">
          <li className="card-action-item">
            <Link
              href={`https://wa.me/${process.env.PHONE_NUMBER}?text=${encodeURI(
                `Hi! I would like to order this product from your store: ${process.env.BASE_URL}/product/${slug}`
              )}`}
              target="_blank"
              className="card-action-btn"
              aria-labelledby="card-label-1"
            >
              <BsWhatsapp
                className="icon"
                style={{ color: 'var(--whatsapp)' }}
              />
            </Link>

            <div
              className="card-action-tooltip"
              id="card-label-1"
            >
              Whatsapp to Order
            </div>
          </li>

          <ProductCardPhone
            text="Call to order"
            message="Phone no. copied to clipboard!"
            phone={process.env.PHONE_NUMBER as string}
          >
            <AiOutlinePhone
              className="icon"
              style={{ color: 'var(--primary)' }}
            />
          </ProductCardPhone>
        </ul>
      </figure>

      <div className="card-content">
        {renderCardCat()}

        <h3 className="h3 card-title">
          <Link href={`/product/${slug}`}>{name}</Link>
        </h3>

        <data className="card-price">{salePrice ? salePrice : price} Rs.</data>
      </div>
    </div>
  );
};

export default ProductCard;
