import './styles.css';
import React from 'react';

export type StatusPropsType = {
  status: string;
};

const Status: React.FC<StatusPropsType> = ({ status }) => {
  const statusMap = {
    Active: { label: 'Active', color: '#D3F4BE' },
    Inactive: { label: 'Inactive', color: '#FFBFBF' },
    Probation: { label: 'Probation', color: '#F5ECB8' }
  };

  return (
    <div
      style={{ backgroundColor: statusMap[status].color }}
      className='status'
      data-testid='status-test'
    >
      {statusMap[status].label}
    </div>
  );
};

export default Status;
