import React from 'react';
import PartContentStyle from './PartContent.style';

export default function PartContent({ children, display, highlight }) {
  return (
    <PartContentStyle highlight={highlight} display={display}>
      <h3>Nội dung: </h3>
      <div className="content">{children}</div>
    </PartContentStyle>
  );
}
