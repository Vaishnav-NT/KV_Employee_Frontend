import './styles.css';
import React from 'react';

// type TableHeaderPropsType = {
//   status: string;
// };

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
