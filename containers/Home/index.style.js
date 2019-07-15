import styled from 'styled-components';

const HomeStyle = styled.div`
  color: red;
  margin: -60px 30px 0;
  z-index: 11;
  background: #fff;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  padding: 3rem;
  margin-bottom: 3rem;
  .title {
    text-align: center;
    color: #3c4858;
  }

  .title h3 {
    font-weight: 1200;
    font-size: 20px;
  }

  .title h4 {
    font-size: 16px;
    font-weight: 600;
  }

  .home-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    margin: 4rem 0;
  }
  .home-content img {
    height: 100px;
  }

  .home-content p {
    font-size: 1rem;
    color: rgb(0, 0, 0);
  }

  .home-content .home-content-item {
    text-align: center;
    margin: 0 auto;
  }

  .home-content .home-content-item .introduce-content {
    max-width: 340px;
  }

  .home-content .home-content-item .introduce-content a {
    text-decoration: none;
    color: #9c27b0;
  }

  .home-content .home-content-item .introduce-content p {
    font-size: 14px;
  }

  .title-main-member {
    text-align: center;
    font-size: 20px;
    color: #3c4858;
    margin: 50px 0 16px;
    font-weight: 600;
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 0 auto;
  }

  .logos div {
    margin: 1rem auto;
    display: flex;
    align-items: center;
  }

  .logos div img {
    max-width: 140px;
    max-height: 120px;
  }

  @media (max-width: 800px) {
    .home-content {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }

    .home-content-item {
      padding: 2rem 0;
    }
  }

  @media (max-width: 500px) {
    padding: 2rem;
    .logos {
      flex-direction: column;
    }
  }
`;

export default HomeStyle;
