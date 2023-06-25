import React from 'react';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

const CollectionCard = ({ title, img, category }: { title: string; img: string; category: string }): JSX.Element => {
  return (
    <div
      className="collection-card"
      style={{ backgroundImage: `url('${img}')` }}
    >
      {/* <div className="card-overlay"></div> */}
      <h3
        className="h4 card-title"
        style={{ zIndex: 2 }}
      >
        {title}
      </h3>

      <Link
        href={`/shop/${category}`}
        className="btn btn-secondary"
        style={{ zIndex: 2 }}
      >
        <span>Explore All</span>

        <AiOutlineArrowRight className="icon" />
      </Link>
    </div>
  );
};

const collectionCards = [
  {
    title: "Men's Collection",
    img: 'https://res.cloudinary.com/dwr5e5itg/image/upload/v1687705473/jewellery-sadeem/collection-2_rxmblh.jpg',
    category: 'men',
  },
  {
    title: "Women's Collection",
    img: 'https://res.cloudinary.com/dwr5e5itg/image/upload/v1687705473/jewellery-sadeem/collection-1_mlmpso.jpg',
    category: 'women',
  },
  {
    title: "Kid's Collection",
    img: 'https://res.cloudinary.com/dwr5e5itg/image/upload/v1687705473/jewellery-sadeem/collection-3_hb41xc.jpg',
    category: 'kids',
  },
];

const Collection = ({}: {}): JSX.Element => {
  return (
    <section className="section collection">
      <div className="container">
        <ul className="collection-list has-scrollbar">
          {collectionCards.map(({ img, title, category }) => (
            <li key={title}>
              <CollectionCard
                category={category}
                img={img}
                title={title}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Collection;
