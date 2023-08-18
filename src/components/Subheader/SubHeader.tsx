import './styles.css';
import React from 'react';

export type SubHeaderPropsType = {
  headerText: string;
  actionButtonText?: string;
  actionButtonlogo?: string;
  onClick?: () => void;
};

const SubHeader: React.FC<SubHeaderPropsType> = ({
  headerText,
  actionButtonText,
  actionButtonlogo,
  onClick
}) => {
  return (
    <div className='subheader-div'>
      <h3>{headerText}</h3>
      {actionButtonText && (
        <div className='action-button' onClick={onClick}>
          <div className='action-button-icon'>
            <img className='create-icon' src={actionButtonlogo} alt='add icon' />
          </div>
          <div className='action-button-text'>{actionButtonText}</div>
        </div>
      )}
    </div>
  );
};

export default SubHeader;
