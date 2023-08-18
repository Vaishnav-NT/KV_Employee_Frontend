import React from 'react';
import './styles.css';

export type FormSelectProsType = {
  options: any[];
  onChange: (e: any) => void;
  label: string;
  value?: string;
};

const FormSelect: React.FC<FormSelectProsType> = ({ options, onChange, label, value }) => {
  return (
    <div className='form-select-div'>
      <label data-testid='formSelect-label-test'>{label}</label>
      <select
        className='form-select-field'
        onChange={onChange}
        value={value}
        data-testid='formSelect-select-test'
      >
        <option value={-1}>Choose {label}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
