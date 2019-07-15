import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #nprogress .bar {
    background: #3bafda;
    height: 3px;
  }

  #nprogress .spinner {
    display: none;
  }

  button,
  input {
    outline: none;
    border: 0;
  }

  table {
    background: #fff;
    th {
      background: #fff !important;
    }
  }

  li.ant-dropdown-menu-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  @font-face {
    font-family: 'Averta Regular';
    src: url('/static/fonts/Averta-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'Averta Light';
    src: url('/static/fonts/Averta-Light.otf') format('opentype');
  }

  @font-face {
    font-family: 'Averta Semibold';
    src: url('/static/fonts/Averta-Semibold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Averta Bold';
    src: url('/static/fonts/Averta-Bold.otf') format('opentype');
  }

  body {
    font-family: 'Averta Regular', sans-serif;
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
