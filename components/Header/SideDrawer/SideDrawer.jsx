import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerStyle from './SideDrawer.style';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = ({ open, closed }) => (
  <>
    <Backdrop show={open} clicked={closed} />
    <SideDrawerStyle open={open} closed={closed}>
      <nav>
        <NavigationItems showSideDrawer={open} />
      </nav>
    </SideDrawerStyle>
  </>
);

export default sideDrawer;
