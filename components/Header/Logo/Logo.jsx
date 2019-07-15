import React from 'react';
import Link from 'next/link';
import LogoStyle from './Logo.style';
import routes from '../../../containers/App/routes';

const logo = ({ scrolled }) => {
  const images = scrolled ? (
    <img src="/static/images/logo.png" alt="logoItrithuc" />
  ) : (
    <img src="/static/images/logo-footer.png" alt="logoItrithuc" />
  );
  return (
    <LogoStyle>
      <Link href={routes.index}>{images}</Link>
    </LogoStyle>
  );
};

export default logo;
