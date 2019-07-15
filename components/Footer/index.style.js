import styled from 'styled-components';

const FooterStyle = styled.footer`
  background-color: rgb(66, 99, 170);

  .section-1 {
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10px;
  }

  .logo-footer {
    height: 100%;
    width: 225px;
    margin-bottom: 20px;
  }

  .logo-and-name {
    display: flex;
    align-items: center;
  }

  .logo {
    height: 100%;
    margin-right: 15px;
  }

  .description {
    color: white;
    font-size: 14px;
    font-family: 'Roboto';
  }

  .name {
    font-weight: 600;
    margin-bottom: 15px;
    font-size: 16px;
    font-family: 'Roboto';
  }

  .section-2 {
    color: white;
    text-align: center;
    font-size: 14px;
    background-color: rgb(66, 99, 150);
    padding: 15px;
    font-family: 'Roboto';
  }

  .section-2 a {
    text-decoration: none;
    color: white;
  }

  @media (min-width: 800px) {
    .section-1 {
      flex-direction: row;
      justify-content: space-between;
      padding: 20px 50px;
      align-items: center;
    }

    .logo-footer {
      margin-bottom: 0;
    }
  }
`;

export default FooterStyle;
