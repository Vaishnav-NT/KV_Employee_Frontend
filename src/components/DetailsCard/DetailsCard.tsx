import './styles.css';
import React from 'react';

type DetailsCardProsType = {
  label: string;
  content: string;
};

const DetailsCard: React.FC<DetailsCardProsType> = ({ label, content }) => {
  return (
    <div className='main-div'>
      <div>{label}</div>
      <div>{content}</div>
    </div>
  );
};

export default DetailsCard;
