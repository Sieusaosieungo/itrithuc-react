import React from 'react';
import BackdropStyle from './Backdrop.style';

const backdrop = ({ show, clicked }) =>
  show ? <BackdropStyle onClick={clicked} /> : null;

export default backdrop;
