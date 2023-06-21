'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { AiFillMail, AiOutlinePhone } from 'react-icons/ai';
import { IoLocation } from 'react-icons/io5';

const Footer = ({}: {}): JSX.Element => {
  const [newsletterData, setNewsletterData] = useState({ email: '', subscribed: false });

  return (
    <footer className="footer">
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <Link
              href="/"
              className="logo"
            >
              <h1 style={{ color: 'black' }}>
                <span style={{ color: 'var(--primary)', display: 'inline' }}>J</span>
                ewels
              </h1>
            </Link>

            <ul className="social-list">
              <li>
                <Link
                  href="https://facebook.com/"
                  target="_blank"
                  className="social-link"
                >
                  <FaFacebook />
                </Link>
              </li>

              <li>
                <Link
                  href="https://instagram.com/"
                  target="_blank"
                  className="social-link"
                >
                  <FaInstagram />
                </Link>
              </li>

              <li>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  className="social-link"
                >
                  <FaTwitter />
                </Link>
              </li>

              <li>
                <Link
                  href="https://pinterest.com/"
                  target="_blank"
                  className="social-link"
                >
                  <FaPinterest />
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Contact Us</p>
              </li>

              <li>
                <address className="footer-link">
                  <IoLocation className="icon" />

                  <span className="footer-link-text">2751 S Parker Rd, Aurora, CO 80014, United States</span>
                </address>
              </li>

              <li>
                <a
                  href="tel:+557343673257"
                  className="footer-link"
                >
                  <AiOutlinePhone className="icon" />

                  <span className="footer-link-text">+92 345 8188928</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:sadeems@jewels.com"
                  className="footer-link"
                >
                  <AiFillMail className="icon" />

                  <span className="footer-link-text">footcap@help.com</span>
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">My Account</p>
              </li>

              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}

                  <span className="footer-link-text">My Account</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}

                  <span className="footer-link-text">View Cart</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}

                  <span className="footer-link-text">Wishlist</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}

                  <span className="footer-link-text">Compare</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="footer-link"
                >
                  {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}

                  <span className="footer-link-text">New Products</span>
                </a>
              </li>
            </ul>
            <div className="footer-list">
              <p className="footer-list-title">Opening Time</p>

              <table className="footer-table">
                <tbody>
                  <tr className="table-row">
                    <th
                      className="table-head"
                      scope="row"
                    >
                      Mon - Tue:
                    </th>

                    <td className="table-data">8AM - 10PM</td>
                  </tr>

                  <tr className="table-row">
                    <th
                      className="table-head"
                      scope="row"
                    >
                      Wed:
                    </th>

                    <td className="table-data">8AM - 7PM</td>
                  </tr>

                  <tr className="table-row">
                    <th
                      className="table-head"
                      scope="row"
                    >
                      Fri:
                    </th>

                    <td className="table-data">7AM - 12PM</td>
                  </tr>

                  <tr className="table-row">
                    <th
                      className="table-head"
                      scope="row"
                    >
                      Sat:
                    </th>

                    <td className="table-data">9AM - 8PM</td>
                  </tr>

                  <tr className="table-row">
                    <th
                      className="table-head"
                      scope="row"
                    >
                      Sun:
                    </th>

                    <td className="table-data">10AM - 8PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="footer-list">
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
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {new Date().getFullYear()}{' '}
            <Link
              href="/"
              className="copyright-link"
            >
              Jewels
            </Link>
            . All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
