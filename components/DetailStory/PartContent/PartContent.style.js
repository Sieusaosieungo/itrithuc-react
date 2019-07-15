import styled from 'styled-components';

const PartContentStyle = styled.div`
  display: ${props => (props.display ? 'none' : '')};
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0 1rem 1rem 1rem;
  margin: 1rem 0;

  .content {
    overflow-y: auto;
    max-height: 300px;
  }
`;

export default PartContentStyle;
