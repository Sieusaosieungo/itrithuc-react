import styled from 'styled-components';

const BackgroundStyle = styled.div`
  .background-images {
    background-repeat: no-repreat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    z-index: 10;
    position: relative;
  }

  .background-cover {
    background: linear-gradient(
      121deg,
      rgba(66, 216, 243, 0.5) 0%,
      rgb(66, 216, 243) 25%,
      rgba(66, 140, 243, 0.5) 75%
    );
    width: 100%;
    min-height: 450px;
  }

  .container {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  .text {
    color: white;
    font-size: 20px;
    max-width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 700px) {
    .background-images {
      width: 100%;
    }
    .background-cover {
      width: 100%;
    }
  }
  @media (max-width: 400px) {
    .background-images {
      width: 100%;
    }
    .background-cover {
      width: 100%;
      min-height: 350px;
    }
  }
`;

export default BackgroundStyle;
