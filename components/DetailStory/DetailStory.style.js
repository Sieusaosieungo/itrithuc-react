import styled from 'styled-components';

const ListStoryStyle = styled.div`
  margin: -60px 30px 30px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  z-index: 11;
  position: relative;
  background: #ffffff;
  font-family: 'Averta Light';
  .containe {
    color: #ffffff;
    z-index: 12;
    margin: 0 100px;
    padding: 20px;
    display: grid;
    grid-template-columns: 300px auto;
    color: rgb(0, 0, 0);
    max-width: 100%;
  }
  .containe .content-left img {
    max-width: 200px;
    width: 100%;
    height: auto;
    max-height: 270px;
    display: block;
    margin: 0 auto;
  }

  .content-left {
    padding: 4px;
  }

  .content-left .title,
  .content-left .author {
    color: black;
    text-align: center;
    font-weight: 200;
  }

  .content-left .title {
    font-weight: 1000;
    font-size: 17px;
    margin-top: 10px;
  }

  .record img {
    cursor: pointer;
  }

  .contentPart {
    max-width: 100%;
    padding-right: 1rem;
    margin-left: auto;
    text-align: justify;
  }

  .section {
    display: flex;
  }

  audio {
    width: 100%;
    margin: 10px auto;
  }

  .chapter {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 10px 0px;
    font-weight: 200;
  }

  .chapter-title {
    cursor: pointer;
  }

  .chapter-title :hover {
    color: red;
  }

  .hide {
    display: none;
  }

  .highlight {
    color: #42bfe3;
  }

  @media (max-width: 800px) {
    .containe {
      display: flex;
      flex-direction: column;
      padding: 1rem 0;
      margin: 1rem;
    }
  }
`;

export default ListStoryStyle;
