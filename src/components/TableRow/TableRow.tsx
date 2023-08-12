import './styles.css';
import React from 'react';
import Status from '../status/Status';

type TableRowPropsType = {
  employee: any;
  onClick: () => void;
};

const TableRow: React.FC<TableRowPropsType> = ({ employee, onClick }) => {
  console.log('aaa', Object.values(employee));

  return (
    <tr className='table-row' onClick={onClick}>
      {Object.keys(employee).map((item) => (
        <td className='table-data' key={`emp-id-${employee.id}`}>
          {item === 'status' ? <Status status={employee[item]} /> : employee[item]}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
