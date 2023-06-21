import React from 'react';

const Cta = ({}: {}): JSX.Element => {
  return (
    <section className="section cta">
      <div className="container">
        <ul className="cta-list">
          <li>
            <div
              className="cta-card"
              style={{ backgroundImage: "url('/images/cta-1.jpg')" }}
            >
              <p className="card-subtitle">Adidas Shoes</p>

              <h3 className="h2 card-title">The Summer Sale Off 50%</h3>

              <a
                href="#"
                className="btn btn-link"
              >
                <span>Shop Now</span>

                {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
              </a>
            </div>
          </li>

          <li>
            <div
              className="cta-card"
              style={{ backgroundImage: "url('/images/cta-2.jpg')" }}
            >
              <p className="card-subtitle">Nike Shoes</p>

              <h3 className="h2 card-title">Makes Yourself Keep Sporty</h3>

              <a
                href="#"
                className="btn btn-link"
              >
                <span>Shop Now</span>

                {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Cta;
