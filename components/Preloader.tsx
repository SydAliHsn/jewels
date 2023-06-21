'use client';

import React, { useEffect, useState } from 'react';

const Preloader = ({}: {}): JSX.Element => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('html')?.classList.remove('overflow-hidden');
      setVisible(false);
    }, 700);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 99,
        display: visible ? 'flex' : 'none',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        background: '#fff',
      }}
    >
      <div className="lds-heart">
        <div></div>
      </div>

      <h1 style={{ paddingTop: '1rem' }}>Loading...</h1>
    </div>
  );
};

export default Preloader;
