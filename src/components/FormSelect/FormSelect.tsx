import React from 'react';
import './styles.css';

type FormSelectProsType = {
  options: string[];
  onChange: (e: any) => void;
  label: string;
};

const FormSelect: React.FC<FormSelectProsType> = ({ options, onChange, label }) => {
  return (
    <div className='form-select-div'>
      <label>{label}</label>
      <select className='form-select-field' onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
