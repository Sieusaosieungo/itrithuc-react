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
    margin: 0 auto;
    padding: 20px;
  }
  .containe .title {
    text-align: center;
    color: #3c4858;
  }

  .containe .title h3 {
    font-weight: 600;
    font-size: 20px;
    display: block;
  }

  .containe .book {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 20px 20px;
  }

  .item {
    max-width: 100%;
    overflow: hidden;
  }

  .item .info-book {
    display: flex;
    flex-direction: column;
    text-overflow: ellipsis;
  }

  .containe .book img {
    max-width: 200px;
    max-height: 270px;
    min-height: 270px;
    width: 100%;
  }

  .info-book {
    padding: 0.5rem;
  }

  .info-book .title,
  .info-book .author {
    color: black;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .info-book .title {
    font-weight: 1000;
    font-size: 17px;
  }

  @media (min-width: 992px) {
    .containe .book {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media (max-width: 870px) {
    .containe .book {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .containe .book {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .info-book {
      margin-bottom: 2rem;
    }
    .containe .book img {
      margin: 0 auto;
      display: block;
    }
  }
`;

export default ListStoryStyle;
