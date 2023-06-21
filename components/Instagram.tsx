import React from 'react';
import Link from 'next/link';

import { BsInstagram } from 'react-icons/bs';

const Post = ({ img }: { img: string }): JSX.Element => {
  return (
    <li className="insta-post-item">
      <img
        src={img}
        width="100"
        height="100"
        loading="lazy"
        alt="Instagram post"
        className="insta-post-banner image-contain"
      />

      <Link
        href="https://instagram.com/"
        target="_blank"
        className="insta-post-link"
      >
        <BsInstagram className="icon" />
      </Link>
    </li>
  );
};

const Instagram = (props: {}): JSX.Element => {
  return (
    <section className="section insta-post">
      <h3>From Our Instagram</h3>
      <ul className="insta-post-list has-scrollbar">
        <Post img="/images/insta-8.jpg" />

        <Post img="/images/insta-1.jpg" />

        <Post img="/images/insta-2.jpg" />

        <Post img="/images/insta-3.jpg" />

        <Post img="/images/insta-4.jpg" />

        <Post img="/images/insta-5.jpg" />

        <Post img="/images/insta-6.jpg" />

        <Post img="/images/insta-7.jpg" />
      </ul>
    </section>
  );
};

export default Instagram;
