import React from 'react';
import ModalStyle from './Modal.style';
import Backdrop from '../UI/Backdrop/Backdrop';
import Record from '../Record/Record';

const Modal = ({ showModal, closeModal, contentShowed }) => (
  <>
    <Backdrop show={showModal} clicked={closeModal} />
    <ModalStyle showModal={showModal}>
      <h3>Nội dung ghi âm: </h3>
      {contentShowed}
      <Record />
    </ModalStyle>
  </>
);

export default Modal;
