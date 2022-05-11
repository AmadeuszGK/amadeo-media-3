import React from 'react';

export const SectionTop = ({
  smallHeader,
  bigHeader,
  paragraph,
  colorWhite,
}) => {
  return (
    <div className="top__about" style={{ color: colorWhite && '#fff' }}>
      <div className="top__header">
        <div className="flat-line" />
        <h2 style={{ color: colorWhite && '#fff' }}>{smallHeader}</h2>
      </div>

      {bigHeader}

      {paragraph}
    </div>
  );
};

export default SectionTop;
