import React from 'react';
import './styles.css';

export type FormInputProsType = {
  value: string;
  type: string;
  onChange?: (e: any) => void;
  label: string | null;
  placeholder?: string;
  showLabel?: boolean;
  readonly?: boolean;
};

const FormInput: React.FC<FormInputProsType> = ({
  value,
  onChange,
  type,
  label,
  placeholder = label,
  showLabel = true,
  readonly
}) => {
  return (
    <div className='form-input-div'>
      {showLabel && <label data-testid='formInput-label-test'>{label}</label>}
      <input
        data-testid='formInput-input-test'
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className='form-input-field'
        readOnly={readonly}
      ></input>
    </div>
  );
};

export default FormInput;
