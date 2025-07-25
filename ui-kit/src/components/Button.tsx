import React from 'react';

interface ButtonProps {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ label = "Click Me", onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: "#4CAF50",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
