import styled from 'styled-components';

const ModalStyle = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  border-radius: 5px;
  transition: all 0.5s ease-out;
  transform: ${props =>
    props.showModal ? 'translateY(0)' : 'translateY(-100vh)'};
`;

export default ModalStyle;
