import styled from 'styled-components';

const HeaderStyle = styled.header`
  height: 68px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px 20px;
  z-index: 12;
  background-color: ${props => (props.scrolled ? 'white' : null)};
  box-shadow: ${props =>
    props.scrolled
      ? '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)'
      : null};
  transition: all 100ms ease 0s;

  nav {
    height: 100%;
  }

  .Logo {
    height: 0%;
    border-radius: 10px;
  }

  @media (max-width: 910px) {
    display: flex;
    justify-content: space-between;

    .DesktopOnly {
      display: none;
    }
  }
`;

export default HeaderStyle;
