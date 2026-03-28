import React from 'react';
import PillNav from '../Animation/AnimatedNav/PillNav';

const Navbar = () => {
  return (
    <PillNav
      logo="/favicon.svg"  /* Public folder එකේ තියෙන නිසා මෙහෙම කෙළින්ම දෙන්න පුළුවන් */
      logoAlt="Anuja Logo"
      items={[
        { label: 'Home', href: '#home' },
        { label: 'Projects', href: '#projects' },
        { label: 'Education', href: '#education' },
        { label: 'Contact', href: '#contact' }
      ]}
      activeHref="#home"
      baseColor="#000000"
      pillColor="#ffffff"
      pillTextColor="#000000"
      hoveredPillTextColor="#000000"
    />
  );
};

export default Navbar;