import './styles.css';
import React from 'react';
import Button from '../Button/Button';

export type PopupPropsType = {
  handleConfirm: (e: any) => void;
  handleCancel: (e: any) => void;
};

const PopUp: React.FC<PopupPropsType> = ({ handleCancel, handleConfirm }) => {
  console.log(handleConfirm);

  return (
    <div className='outer-div'>
      <div className='inner-div'>
        <img src='assets/icons/close.svg' alt='close button logo' onClick={handleCancel} />
        <div className='header1'>Are you sure?</div>
        <div className='header2'>Do you really want to delete employee?</div>
        <br />
        <div className='popup-buttons'>
          <Button
            type='primary'
            label='Confirm'
            onClick={handleConfirm}
            data-testid='popup-test1'
          />
          <Button
            type='secondary'
            label='Cancel'
            onClick={handleCancel}
            data-testid='popup-test2'
          />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
