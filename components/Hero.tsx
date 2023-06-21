import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = ({}: {}): JSX.Element => {
  return (
    <section
      className="section hero"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <div className="container">
        <h2 className="h1 hero-title">
          Unleash Your Radiance: <span style={{ fontWeight: 700 }}>Captivating Jewellery for All</span>
        </h2>

        <p className="hero-text">
          Discover Affordable Sophistication. Shop our carefully crafted, stylish jewelry collection for an elegant
          touch that won't break the bank.
        </p>

        <button className="btn btn-primary">
          <span>Shop Now</span>
          <FaArrowRight className="icon" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
