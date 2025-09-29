'use client';
import React, { useState, useCallback } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNav: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  // Gunakan useCallback biar function ini tidak selalu dibuat ulang setiap render
  const openNavHandler = useCallback(() => setShowNav(true), []);
  const closeNavHandler = useCallback(() => setShowNav(false), []);

  return (
    <div className="relative">
      <Nav openNav={openNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
