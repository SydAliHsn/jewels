import React from 'react';
import Image from 'next/image';

const Services = (props: {}): JSX.Element => {
  return (
    <section className="section service">
      <div className="container">
        <ul className="service-list">
          <li className="service-item">
            <div className="service-card">
              <div className="card-icon">
                <Image
                  src="/images/service-1.png"
                  width="53"
                  height="28"
                  loading="lazy"
                  alt="Service icon"
                />
              </div>

              <div>
                <h3 className="h4 card-title">Free Shiping</h3>

                <p className="card-text">
                  All orders over <span>Rs.1000/-</span>
                </p>
              </div>
            </div>
          </li>

          <li className="service-item">
            <div className="service-card">
              <div className="card-icon">
                <Image
                  src="/images/service-2.png"
                  width="43"
                  height="35"
                  loading="lazy"
                  alt="Service icon"
                />
              </div>

              <div>
                <h3 className="h4 card-title">Quick Payment</h3>

                <p className="card-text">100% secure payment</p>
              </div>
            </div>
          </li>

          <li className="service-item">
            <div className="service-card">
              <div className="card-icon">
                <Image
                  src="/images/service-3.png"
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Service icon"
                />
              </div>

              <div>
                <h3 className="h4 card-title">Free Returns</h3>

                <p className="card-text">Money back on delivery check</p>
              </div>
            </div>
          </li>

          <li className="service-item">
            <div className="service-card">
              <div className="card-icon">
                <Image
                  src="/images/service-4.png"
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Service icon"
                />
              </div>

              <div>
                <h3 className="h4 card-title">24/7 Support</h3>

                <p className="card-text">Get Quick Support</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
