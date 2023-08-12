import React from 'react';
import './styles.css';

type FormInputProsType = {
  value: string;
  type: string;
  onChange: (e: any) => void;
  label: string;
};

const FormInput: React.FC<FormInputProsType> = ({ value, onChange, label, type }) => {
  return (
    <div className='form-input-div'>
      <label>{label}</label>
      <input
        type={type}
        placeholder={label}
        onChange={onChange}
        value={value}
        className='form-input-field'
      ></input>
    </div>
  );
};

export default FormInput;
