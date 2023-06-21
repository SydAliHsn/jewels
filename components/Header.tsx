'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsArrowUpCircleFill, BsSearch } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';

const navbarLinks = [
  {
    path: '/',
    page: 'Home',
  },
  {
    path: '/contact',
    page: 'Contact',
  },
  {
    path: '/about',
    page: 'About',
  },
  {
    path: '/shop',
    page: 'Shop',
  },
  {
    path: '/blog',
    page: 'Blog',
  },
];

const NavbarItem = ({ path, page, active }: { path: string; page: string; active: boolean }): JSX.Element => {
  return (
    <li className="navbar-item">
      <Link
        href={path}
        className={`navbar-link ${active ? 'active' : ''}`}
      >
        {page}
      </Link>
    </li>
  );
};

const Header = ({}: {}): JSX.Element => {
  const pathname = usePathname();

  const [headerActive, setHeaderActive] = useState(false);
  const [TopBtnActive, setTopBtnActive] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  useEffect(() => {
    const func = () => {
      if (window.scrollY > 400) {
        setHeaderActive(true);
        setTopBtnActive(true);
      } else {
        setHeaderActive(false);
        setTopBtnActive(false);
      }
    };

    window.addEventListener('scroll', func), { passive: true };

    return () => window.removeEventListener('scroll', func);
  }, []);

  const toggleNav = () => setMobileNavActive(!mobileNavActive);

  return (
    <header className={`header ${headerActive ? 'active' : ''}`}>
      <div className="container">
        <div
          className={`overlay ${mobileNavActive ? 'active' : ''}`}
          onClick={toggleNav}
        ></div>

        <a
          href="/"
          className="logo"
        >
          <h1 style={{ color: 'black' }}>
            <span style={{ color: 'var(--primary)', display: 'inline' }}>J</span>
            ewels
          </h1>
        </a>

        <button
          className="nav-open-btn"
          onClick={toggleNav}
          aria-label="Open Menu"
        >
          <HiMenuAlt1 />
        </button>

        <nav className={`navbar ${mobileNavActive ? 'active' : ''}`}>
          <button
            className="nav-close-btn"
            onClick={toggleNav}
            aria-label="Close Menu"
          >
            <AiFillCloseCircle />
          </button>

          <Link
            href="/"
            className="logo"
          >
            <h1 style={{ color: 'black' }}>
              <span style={{ color: 'var(--primary)', display: 'inline' }}>J</span>
              ewels
            </h1>
          </Link>

          <ul className="navbar-list">
            {navbarLinks.map(({ path, page }) => {
              return (
                <NavbarItem
                  key={path}
                  path={path}
                  page={page}
                  active={pathname === path}
                />
              );
            })}
          </ul>

          <ul className="nav-action-list">
            <li>
              <button
                className="nav-action-btn"
                style={{ fontSize: '2rem' }}
              >
                <BsSearch />

                <span className="nav-action-text">Search</span>
              </button>
            </li>

            {/* <li>
              <button className="nav-action-btn">
                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>

                <span className="nav-action-text">Wishlist</span>

                <data
                  className="nav-action-badge"
                  value="5"
                  aria-hidden="true"
                >
                  5
                </data>
              </button>
            </li> */}

            {/* <li>
              <button className="nav-action-btn">
                <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>

                <data
                  className="nav-action-text"
                  value="318.00"
                >
                  Basket: <strong>$318.00</strong>
                </data>

                <data
                  className="nav-action-badge"
                  value="4"
                  aria-hidden="true"
                >
                  4
                </data>
              </button>
            </li> */}
          </ul>
        </nav>
      </div>

      <a
        href="#top"
        className={`go-top-btn ${TopBtnActive ? 'active' : ''}`}
        data-go-top
      >
        <BsArrowUpCircleFill className="icon" />
      </a>
    </header>
  );
};

export default Header;
