import './styles.css';
import React from 'react';

export type DetailsCardProsType = {
  label: string;
  content: any;
};

const DetailsCard: React.FC<DetailsCardProsType> = ({ label, content }) => {
  return (
    <div className='main-div'>
      <div className='label-text' data-testid='detailsCard-label-test'>
        {label}
      </div>
      <div className='content' data-testid='detailsCard-content-test'>
        {content}
      </div>
    </div>
  );
};

export default DetailsCard;
