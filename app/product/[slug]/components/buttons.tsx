'use client';

import React from 'react';
import { toast } from 'react-toastify';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import Link from 'next/link';

const buttons = ({ slug, name }: { slug: string; name: string }): JSX.Element => {
  const phoneNumber = process.env.PHONE_NUMBER_1?.replaceAll('-', '').replaceAll('(', '').replaceAll(')', '') || '';

  return (
    <div className="buttons">
      <div
        className="btn wiggle-animation btn-primary"
        onClick={() => toast.success('Phone No. copied to clipboard. Hurry and Call Now to place your Order!')}
      >
        <AiOutlinePhone className="icon" /> Call to Order Now
      </div>
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
