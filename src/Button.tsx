import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: variant === 'primary' ? 'black' : 'gray',
        color: 'white',
        padding: '8px 16px',
        border: '2px solid black',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
