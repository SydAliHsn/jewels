import React from 'react';
import Link from 'next/link';

import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const SocialList = ({}: {}): JSX.Element => {
  // const instagram =

  return (
    <ul className="social-list">
      <li>
        <Link
          href={`https://facebook.com/${process.env.FACEBOOK_USERNAME || ''}`}
          target="_blank"
          className="social-link"
        >
          <FaFacebook />
        </Link>
      </li>

      <li>
        <Link
          href={`https://instagram.com/${process.env.INSTAGRAM_USERNAME || ''}`}
          target="_blank"
          className="social-link"
        >
          <FaInstagram />
        </Link>
      </li>

      <li>
        <Link
          href={`https://twitter.com/${process.env.TWITTER_USERNAME || ''}`}
          target="_blank"
          className="social-link"
        >
          <FaTwitter />
        </Link>
      </li>

      <li>
        <Link
          href={`https://pinterest.com/${process.env.PINTEREST_USERNAME || ''}`}
          target="_blank"
          className="social-link"
        >
          <FaPinterest />
        </Link>
      </li>
    </ul>
  );
};

export default SocialList;
