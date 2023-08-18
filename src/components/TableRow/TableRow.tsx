import './styles.css';
import React from 'react';
import Status from '../Status/Status';
// import { useGetCurrentUserQuery } from '../../services/userAPI';

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
  // const { data } = useGetCurrentUserQuery('');

  const employeeObject = {
    name: employee.name,
    id: employee.id,
    joiningDate: employee.joiningDate,
    role: employee.role.name,
    status: <Status status={employee.activityStatus} />,
    experience: employee.experience + ' Years'
  };

  return (
    <tr className='table-row'>
      {Object.values(employeeObject).map((item) => (
        <td className='table-data' onClick={handleRowClick} key={`emp-row-key-${item}`}>
          {item}
        </td>
      ))}
      {
        <td className='table-data'>
          <div>
            <img src='assets/icons/deleteIcon.svg' alt='delete icon' onClick={handleDelete} />
            <img src='assets/icons/editIcon.svg' alt='edit icon' onClick={handleEdit} />
          </div>
        </td>
      }
    </tr>
  );
};

export default TableRow;
