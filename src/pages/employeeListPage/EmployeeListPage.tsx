import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGetEmployeeListQuery } from '../../services/employeeAPI';
import { useDeleteAnEmployeeMutation } from '../../services/employeeAPI';
import HomeLayout from '../../layout/homeLayout/HomeLayout';
import PopUp from '../../components/PopUp/PopUp';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableRow from '../../components/TableRow/TableRow';

const EmployeeListPage = () => {
  const navigate = useNavigate();

  const { data } = useGetEmployeeListQuery('');
  const employeesData = data ? data.data : [];

  const [deleteEmloyee, { data: deleteRespone }] = useDeleteAnEmployeeMutation();

  const [showPopup, setShowPopup] = useState(false);

  const [currentID, setcurrentID] = useState();

  const handleClickOnTableRow = (id: number) => {
    navigate(`/employees/${id}`);
  };

  const handleClickOnActionButton = () => {
    navigate(`/employees/create`);
  };

  const handleEdit = (id: number) => {
    navigate(`/employees/edit/${id}`);
  };

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleConfirm = () => {
    deleteEmloyee(currentID);

    console.log('deleteRespone', deleteRespone);

    handleCancel();
  };

  return (
    <HomeLayout
      headerText='Employee List'
      actionButtonText='Create Employee'
      actionButtonlogo='assets/icons/create.png'
      handleClickOnActionButton={handleClickOnActionButton}
    >
      {showPopup && <PopUp handleCancel={handleCancel} handleConfirm={handleConfirm} />}
      <div className='table'>
        <table>
          <TableHeader />
          {employeesData.map((employee) => (
            <TableRow
              employee={employee}
              key={employee.id}
              handleRowClick={() => handleClickOnTableRow(employee.id)}
              handleEdit={() => handleEdit(employee.id)}
              handleDelete={() => {
                handleShowPopup();
                setcurrentID(employee.id);
              }}
            />
          ))}
        </table>
      </div>
    </HomeLayout>
  );
};

export default EmployeeListPage;
