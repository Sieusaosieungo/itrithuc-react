import React from 'react';
import FooterStyle from './index.style';

export default function() {
  return (
    <FooterStyle>
      <div className="section-1">
        <img
          className="logo-footer"
          src="/static/images/logo-footer.png"
          alt="logo-footer"
        />
        <div className="logo-and-name">
          <img
            className="logo"
            src="/static/images/logo-boKHCN.png"
            alt="logo-bo-khcn"
            width="60px"
            height="60px"
          />
          <div className="description">
            <div className="name">Bộ Khoa học & Công nghệ</div>
            <div>113 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội</div>
          </div>
        </div>
      </div>

      <div className="section-2">
        © 2018 All right reserved. Designed by{' '}
        <a href="https://vbee.vn" target="_blank" rel="noopener noreferrer">
          vbee.vn
        </a>
      </div>
    </FooterStyle>
  );
}
