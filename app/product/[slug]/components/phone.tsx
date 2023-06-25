'use client';

import React from 'react';
import { toast } from 'react-toastify';
import { AiOutlinePhone } from 'react-icons/ai';

const Phone = (props: {}): JSX.Element => {
  return (
    <button
      className="btn wiggle-animation btn-primary"
      onClick={() => toast.success('Phone No. copied to clipboard. Hurry and Call Now to place your Order!')}
    >
      <AiOutlinePhone className="icon" /> Call to Order Now
    </button>
  );
};

export default Phone;
