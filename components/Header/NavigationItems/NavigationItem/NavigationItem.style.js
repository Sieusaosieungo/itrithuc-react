import styled from 'styled-components';

const colorItem = props => (props.scrolled ? 'black' : 'white');
const NavigationItemStyle = styled.li`
  box-sizing: border-box;
  display: block;
  padding: ${props => (props.showSideDrawer ? '10px 0' : null)};
  width: 100%;
  border-bottom: ${props =>
    props.showSideDrawer ? '1px solid #E5E5E5' : null};

  a {
    color: ${props => (props.showSideDrawer ? 'black' : colorItem)};
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    font-size: 12px;
    padding: 20px;
  }

  a:hover,
  a:active,
  a.active {
    background-color: #e5e5e5;
    border-radius: 100px;
  }

  @media (min-width: 910px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;

    a {
      display: block;
      height: 100%;
      padding: 20px 10px;
      border-bottom: 4px solid transparent;
    }

    a:hover,
    a:active,
    a.active {
      background-color: ${props =>
        props.scrolled ? '#e5e5e5' : 'rgb(77, 177, 223)'};
      color: ${props => (props.scrolled ? 'black' : 'white')};
    }
  }
`;

export default NavigationItemStyle;
