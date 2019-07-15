import styled from 'styled-components';

const RecordStyle = styled.div`
  text-align: center;
  margin-top: 30px;

  button {
    background-color: white;
  }

  .record img {
    cursor: pointer;
    width: 40px;
    height: 40px;
  }

  audio {
    width: 80%;
    margin-top: 1rem;
  }

  @media (max-width: 500px) {
    audio {
      height: 40px;
      width: 100%;
    }
    .record img {
      cursor: pointer;
      width: 20px;
      height: 20px;
    }
  }
`;
export default RecordStyle;
