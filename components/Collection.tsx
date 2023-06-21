import React from 'react';

import { AiOutlineArrowRight } from 'react-icons/ai';

const CollectionCard = ({ title, img }: { title: string; img: string }): JSX.Element => {
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

      <a
        href="#"
        className="btn btn-secondary"
        style={{ zIndex: 2 }}
      >
        <span>Explore All</span>

        <AiOutlineArrowRight className="icon" />
      </a>
    </div>
  );
};

const collectionCards = [
  { title: "Men's Collection", img: '/images/collection-2.jpg' },
  { title: "Women's Collection", img: '/images/collection-1.jpg' },
  { title: "Kid's Collection", img: '/images/collection-3.jpg' },
];

const Collection = ({}: {}): JSX.Element => {
  return (
    <section className="section collection">
      <div className="container">
        <ul className="collection-list has-scrollbar">
          {collectionCards.map(({ img, title }) => (
            <li key={title}>
              <CollectionCard
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
