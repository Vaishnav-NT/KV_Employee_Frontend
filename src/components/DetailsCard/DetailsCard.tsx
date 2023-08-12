import './styles.css';
import React from 'react';

type DetailsCardProsType = {
  label: string;
  content: any;
};

const DetailsCard: React.FC<DetailsCardProsType> = ({ label, content }) => {
  return (
    <div className='main-div'>
      <div className='label-text'>{label}</div>
      <div className='content'>{content}</div>
    </div>
  );
};

export default DetailsCard;
