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
  const employeeDataKeys = ['name', 'id', 'joiningDate', 'role', 'status', 'experience'];

  return (
    <tr className='table-row'>
      {employeeDataKeys.map((item) => (
        <td className='table-data' onClick={handleRowClick} key={`emp-id-${item}`}>
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
          <img src='assets/icons/deleteIcon.svg' alt='delete icon' onClick={handleDelete} />
          <img src='assets/icons/editIcon.svg' alt='edit icon' onClick={handleEdit} />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
