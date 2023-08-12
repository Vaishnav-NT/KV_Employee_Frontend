import './styles.css';
import React from 'react';

type ButtonProsType = {
  type: 'primary' | 'secondary';
  onClick: (e: any) => void;
  label: string;
};

const Button: React.FC<ButtonProsType> = ({ type, onClick, label }) => {
  return (
    <button className={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
