import styled from 'styled-components';

const NavigationItemsStyle = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  font-family: 'Averta Semibold';

  @media (min-width: 910px) {
    flex-flow: row;
  }
`;

export default NavigationItemsStyle;
