import React from 'react';

type TextProps = {
  text: string;
  color?: string;
  size?: string;
  weight?: string;
};

const Text: React.FC<TextProps> = ({
  text,
  color = 'black',
  size = '16px',
  weight = 'normal',
}) => {
  return (
    <p style={{ color, fontSize: size, fontWeight: weight }}>
      {text}
    </p>
  );
};

export default Text;