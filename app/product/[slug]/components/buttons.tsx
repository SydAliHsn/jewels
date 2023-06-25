import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';

import Phone from './phone';

const buttons = ({ slug, name }: { slug: string; name: string }): JSX.Element => {
  const phoneNumber = process.env.PHONE_NUMBER_1?.replaceAll('-', '').replaceAll('(', '').replaceAll(')', '') || '';

  return (
    <div className="buttons">
      <Phone />

      <Link
        href={`https://wa.me/${phoneNumber}?text=${encodeURI(
          `Hi! I would like to order this product from your store: ${name} ${process.env.BASE_URL}/product/${slug}`
        )}`}
        target="_blank"
        className="btn wiggle-animation btn-whatsapp"
      >
        <BsWhatsapp className="icon" /> Whatsapp to Order
      </Link>
    </div>
  );
};

export default buttons;
