import './styles.css';
import React from 'react';

type SubHeaderProsType = {
  headerText: string;
  actionButtonText?: string;
  actionButtonlogo?: string;
  onClick?: () => void;
};

const SubHeader: React.FC<SubHeaderProsType> = ({
  headerText,
  actionButtonText,
  actionButtonlogo,
  onClick
}) => {
  return (
    <div className='subheader-div'>
      <h3>{headerText}</h3>
      {actionButtonText && (
        <div className='action-button'>
          <div className='action-button-icon'>
            <img className='create-icon' src={actionButtonlogo} alt='add icon' onClick={onClick} />
          </div>
          <div className='action-button-text'>{actionButtonText}</div>
        </div>
      )}
    </div>
  );
};

export default SubHeader;
