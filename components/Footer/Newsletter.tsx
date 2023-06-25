'use client';

import React, { useState } from 'react';

const Newsletter = (props: {}): JSX.Element => {
  const [newsletterData, setNewsletterData] = useState({ email: '', subscribed: false });

  return (
    <>
      {' '}
      <p className="footer-list-title">Newsletter</p>
      <p className="newsletter-text">Get latest trend updates by subscribing to our newsletter.</p>
      <form
        onSubmit={e => {
          e.preventDefault();

          setNewsletterData({ email: '', subscribed: true });
        }}
        className="newsletter-form"
      >
        <input
          type="email"
          name="email"
          required={true}
          placeholder="Email Address"
          className="newsletter-input"
          value={newsletterData.email}
          onChange={e => setNewsletterData({ ...newsletterData, email: e.target.value })}
        />

        <button
          type="submit"
          className="btn btn-primary"
        >
          Subscribe
        </button>
      </form>
      {newsletterData.subscribed && (
        <p
          className="newsletter-text"
          style={{ marginTop: '2rem' }}
        >
          Thanks for subscribing to our newsletter!
        </p>
      )}
    </>
  );
};

export default Newsletter;
