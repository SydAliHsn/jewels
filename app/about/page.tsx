import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

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
              Welcome to Sadeem&apos;s Jewels, a haven of creativity and passion. Led by young entrepreneur Sadeem, our
              online store features a collection of handcrafted and unique jewellery pieces. Meticulously crafted with
              high-quality materials and exquisite gemstones, our designs radiate elegance and style. Discover the
              perfect piece that tells your story with grace and beauty.
            </p>
            <p>
              At Sadeem&apos;s Jewels, we celebrate the art of self-expression through jewellery. From statement
              necklaces to delicate earrings, our collection caters to every occasion and personal style. Indulge in the
              timeless beauty and exquisite craftsmanship of Sadeem&apos;s Jewels, and let your individuality shine
            </p>

            <ul className="social-list">
              <li>
                <Link
                  href="https://facebook.com/"
                  target="_blank"
                  className="social-link"
                >
                  <FaFacebook />
                </Link>
              </li>

              <li>
                <Link
                  href="https://instagram.com/"
                  target="_blank"
                  className="social-link"
                >
                  <FaInstagram />
                </Link>
              </li>

              <li>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  className="social-link"
                >
                  <FaTwitter />
                </Link>
              </li>

              <li>
                <Link
                  href="https://pinterest.com/"
                  target="_blank"
                  className="social-link"
                >
                  <FaPinterest />
                </Link>
              </li>
            </ul>
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
