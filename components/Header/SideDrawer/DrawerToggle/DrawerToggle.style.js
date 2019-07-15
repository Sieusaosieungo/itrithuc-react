import styled from 'styled-components';

const ToggleStyle = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;

  div {
    width: 90%;
    height: 3px;
    background-color: ${props => (props.scrolled ? 'black' : 'white')};
    margin-bottom: 5px;
  }

  @media (min-width: 910px) {
    display: none;
  }
`;

export default ToggleStyle;
