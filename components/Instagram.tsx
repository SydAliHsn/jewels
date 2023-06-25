import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { InstagramPost } from '@/lib/types';
import { BsInstagram } from 'react-icons/bs';

const Post = ({ post }: { post: InstagramPost }): JSX.Element => {
  return (
    <li className="insta-post-item">
      <Image
        src={post.url}
        loading="lazy"
        alt={post.alt || 'Instagram Post'}
        className="insta-post-banner"
        fill={true}
      />

      <Link
        href={`https://instagram.com/${process.env.INSTAGRAM_USERNAME}`}
        target="_blank"
        className="insta-post-link"
      >
        <BsInstagram className="icon" />
      </Link>
    </li>
  );
};

const Instagram = ({ posts }: { posts: InstagramPost[] }): JSX.Element => {
  return (
    <section className="section insta-post">
      <h3>From Our Instagram</h3>
      <ul className="insta-post-list has-scrollbar">
        {posts.map(post => (
          <Post
            post={post}
            key={post.url}
          />
        ))}
      </ul>
    </section>
  );
};

export default Instagram;
