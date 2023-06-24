'use client';

import React, { useEffect, useState } from 'react';

const Preloader = ({}: {}): JSX.Element => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // document.documentElement.scrollTop = 0;
    // window.scrollTo(0, 0);

    document.querySelector('html')?.classList.add('overflow-hidden');
    setTimeout(() => {
      document.querySelector('html')?.classList.remove('overflow-hidden');
      setVisible(false);
    }, 700);
  }, []);

  return (
    <div
      className="preloader"
      style={{
        display: visible ? 'flex' : 'none',
        visibility: visible ? 'visible' : 'hidden',
      }}
    >
      <div className="lds-heart">
        <div></div>
      </div>

      <h1 style={{ paddingTop: '1rem', color: '#111' }}>Loading...</h1>
    </div>
  );
};

export default Preloader;
