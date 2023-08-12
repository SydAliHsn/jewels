'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ }: {}): JSX.Element => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // document.documentElement.scrollTop = 0;
    // window.scrollTo(0, 0);

    // document.querySelector('html')?.classList.add('overflow-hidden');
    setTimeout(() => {
      document.querySelector('html')?.classList.remove('overflow-hidden');
      setVisible(false);
    }, 800);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -600 }}
          className="preloader"
          // style={{
          //   display: visible ? 'flex' : 'none',
          //   visibility: visible ? 'visible' : 'hidden',
          // }}
          style={{ display: 'flex' }}
        >
          <div className="lds-heart">
            <div></div>
          </div>

          <h1 style={{ paddingTop: '1rem', color: '#111' }}>Loading...</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
