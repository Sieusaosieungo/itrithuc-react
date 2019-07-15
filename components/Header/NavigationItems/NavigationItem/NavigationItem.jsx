import React from 'react';
import Link from 'next/link';
import NavigationItemStyle from './NavigationItem.style';

const navigationItem = ({ link, children, scrolled, showSideDrawer }) => (
  <NavigationItemStyle scrolled={scrolled} showSideDrawer={showSideDrawer}>
    <Link href={link}>
      <a>{children}</a>
    </Link>
  </NavigationItemStyle>
);

export default navigationItem;
