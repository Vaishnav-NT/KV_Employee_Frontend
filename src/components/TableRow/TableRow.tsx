import './styles.css';
import React from 'react';
import Status from '../status/Status';

type TableRowPropsType = {
  employee: any;
  handleRowClick: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
};

const TableRow: React.FC<TableRowPropsType> = ({
  employee,
  handleRowClick,
  handleEdit,
  handleDelete
}) => {
  console.log('aaa', Object.values(employee));

  return (
    <tr className='table-row' onClick={handleRowClick}>
      {Object.keys(employee).map((item) => (
        <td className='table-data' key={`emp-id-${employee.id}`}>
          {item === 'status' ? (
            <Status status={employee[item]} />
          ) : item === 'experience' ? (
            `${employee[item]} Years`
          ) : (
            employee[item]
          )}
        </td>
      ))}
      <td className='table-data'>
        <div>
          <img src='assets/icons/delete.png' alt='delete icon' onClick={handleEdit} />
          <img src='assets/icons/edit.png' alt='edit icon' onClick={handleDelete} />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
