import './styles.css';
import React from 'react';
// import { useGetCurrentUserQuery } from '../../services/userAPI';

const TableHeader: React.FC = () => {
  const headerData = [
    'Employee Name',
    'Employee ID',
    'Joining Date',
    'Role',
    'Status',
    'Experience',
    'Action'
  ];

  // const { data } = useGetCurrentUserQuery('');

  // if (data && data === 'admin') headerData.push('Action');

  return (
    <th className='table-header'>
      {headerData.map((item) => (
        <td className='table-data' key={item}>
          {item}
        </td>
      ))}
    </th>
  );
};

export default TableHeader;
