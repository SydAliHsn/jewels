import React from 'react';
import Link from 'next/link';
import { AiFillMail, AiOutlinePhone } from 'react-icons/ai';
import { IoLocation } from 'react-icons/io5';

import SocialList from '../SocialList';
import Newsletter from './Newsletter';

const Footer = ({}: {}): JSX.Element => {
  const email = process.env.EMAIL;
  const phoneNumberStyled = process.env.PHONE_NUMBER_1?.replaceAll('-', ' ');

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
                Be
                <span style={{ color: 'var(--primary)', display: 'inline' }}>J</span>
                eweled
              </h1>
            </Link>

            <SocialList />
          </div>

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Contact Us</p>
              </li>

              <li>
                <address className="footer-link">
                  <IoLocation className="icon" />

                  <span className="footer-link-text">
                    BestTogs, 2nd Floor, Jasmine Mall, Bahria Town, Lahore, Pakistan
                  </span>
                </address>
              </li>

              <li>
                <Link
                  href="tel:+557343673257"
                  className="footer-link"
                >
                  <AiOutlinePhone className="icon" />

                  <span className="footer-link-text">{phoneNumberStyled}</span>
                </Link>
              </li>

              <li>
                <Link
                  href={`mailto:${email}`}
                  className="footer-link"
                >
                  <AiFillMail className="icon" />

                  <span className="footer-link-text">{email}</span>
                </Link>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">My Account</p>
              </li>

              <li>
                <Link
                  href="#"
                  className="footer-link"
                >
                  {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}

                  <span className="footer-link-text">My Account</span>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="footer-link"
                >
                  {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}

                  <span className="footer-link-text">View Cart</span>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="footer-link"
                >
                  {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}

                  <span className="footer-link-text">Wishlist</span>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="footer-link"
                >
                  {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}

                  <span className="footer-link-text">Compare</span>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="footer-link"
                >
                  {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}

                  <span className="footer-link-text">New Products</span>
                </Link>
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
              <Newsletter />
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
              BeJeweled
            </Link>
            . All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
