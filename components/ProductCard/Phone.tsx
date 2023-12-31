'use client';

import React from 'react';
import { toast } from 'react-toastify';

const Phone = ({
  phone,
  text,
  message,
  children,
}: {
  phone: string;
  text: string;
  message: string;
  children: JSX.Element;
}): JSX.Element => {
  return (
    <li
      className="card-action-item"
      onClick={() => {
        toast.info(message);

        navigator.clipboard.writeText(phone);
      }}
    >
      <button
        className="card-action-btn"
        aria-labelledby="card-label-1"
      >
        {children}
      </button>

      <div
        className="card-action-tooltip"
        id="card-label-1"
      >
        {text}
      </div>
    </li>
  );
};

export default Phone;
