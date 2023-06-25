import { NextPage } from 'next';
import Image from 'next/image';

import SocialList from '@/components/SocialList';

const Page: NextPage = (props: {}) => {
  return (
    <div className="about">
      <div className="container">
        <div className="top">
          <div
            className="content"
            style={{ flex: '1 1 0' }}
          >
            <h1>
              ABOUT US
              <div className="star">
                <Image
                  className="icon"
                  src={'/images/about-i.svg'}
                  alt=""
                  fill={true}
                />
              </div>
            </h1>

            <p>
              Welcome to BeJeweled, a haven of creativity and passion. Led by a young entrepreneur, our online store
              features a collection of handcrafted and unique jewellery pieces. Meticulously crafted with high-quality
              materials and exquisite gemstones, our designs radiate elegance and style. Discover the perfect piece that
              tells your story with grace and beauty.
            </p>
            <p>
              At BeJeweled, we celebrate the art of self-expression through jewellery. From statement necklaces to
              delicate earrings, our collection caters to every occasion and personal style. Indulge in the timeless
              beauty and exquisite craftsmanship of BeJeweled, and let your individuality shine.
            </p>

            <SocialList />
          </div>
          <div
            className="image"
            style={{ position: 'relative', flex: '1 1 0' }}
          >
            <Image
              src="https://res.cloudinary.com/dwr5e5itg/image/upload/v1687623812/jewellery-sadeem/about_suq8oe.jpg"
              alt="about-us"
              fill={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
