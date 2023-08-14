import './styles.css';
import React from 'react';
import Status from '../Status/Status';

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
  return (
    <tr className='table-row'>
      {Object.keys(employee).map((item) => (
        <td className='table-data' onClick={handleRowClick} key={`emp-id-${employee.id}`}>
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
          <img src='assets/icons/delete.png' alt='delete icon' onClick={handleDelete} />
          <img src='assets/icons/edit.png' alt='edit icon' onClick={handleEdit} />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
