import styled from 'styled-components';

const SideDrawerStyle = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transfrom 0.3s ease-out;
  transform: ${props => (props.closed ? 'translateX(100%)' : null)};
  transform: ${props => (props.open ? 'translateX(0%)' : null)};

  @media (min-width: 910px) {
    display: none;
  }
`;

export default SideDrawerStyle;
