import React from 'react';
import './styles.css';

export type InputProsType = {
  value: string;
  type: string;
  onChange?: (e: any) => void;
  label: string;
};

const Input: React.FC<InputProsType> = ({ value, onChange, label, type }) => {
  return (
    <div className='input-div'>
      <label>{label}</label>
      <input
        type={type}
        placeholder={label}
        onChange={onChange}
        value={value}
        data-testid='input-test'
      />
    </div>
  );
};

export default Input;
