import './styles.css';
import React from 'react';
import Button from '../Button/Button';

const PopUp: React.FC = () => {
  return (
    <div className='outer-div'>
      <div className='inner-div'>
        <div>Are you sure?</div>
        <div>Do you really want to delete employee?</div>
        <div className='popup-buttons'>
          <Button type='primary' label='Create' onClick={() => {}} />
          <Button type='secondary' label='Cancel' onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
