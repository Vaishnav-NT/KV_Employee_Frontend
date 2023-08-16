import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../actions/employeeActions';
import { useGetEmployeeLIstQuery } from '../../services/employeeAPI';
import HomeLayout from '../../layout/homeLayout/HomeLayout';
import PopUp from '../../components/PopUp/PopUp';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableRow from '../../components/TableRow/TableRow';

const EmployeeListPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { data } = useGetEmployeeLIstQuery('');
  const employeesData = data ? data.data : [];

  if (employeesData) console.log('', employeesData.data);

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
    dispatch(deleteEmployee({ id: currentID }));
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
