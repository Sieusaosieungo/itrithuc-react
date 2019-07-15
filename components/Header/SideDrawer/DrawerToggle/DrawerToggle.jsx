import React from 'react';
import ToggleStyle from './DrawerToggle.style';

const drawerToggle = ({ clicked, scrolled }) => (
  <ToggleStyle scrolled={scrolled} onClick={clicked}>
    <div />
    <div />
    <div />
  </ToggleStyle>
);

export default drawerToggle;
