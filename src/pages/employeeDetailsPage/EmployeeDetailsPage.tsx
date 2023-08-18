import './styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetAnEmployeeQuery } from '../../services/employeeAPI';
import HomeLayout from '../../layout/homeLayout/HomeLayout';
import Status from '../../components/Status/Status';
import DetailsCard from '../../components/DetailsCard/DetailsCard';

const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useGetAnEmployeeQuery(id);
  const employee = data ? data.data : null;

  const handleEdit = (id: number) => {
    navigate(`../employees/edit/${id}`);
  };

  return (
    <HomeLayout
      headerText='Employee Details'
      actionButtonText='Edit Employee'
      actionButtonlogo='assets/icons/edit.svg'
      handleClickOnActionButton={() => {
        handleEdit(employee.id);
      }}
    >
      {employee && (
        <div className='detailsCard'>
          <DetailsCard label='Employee Name' content={employee.name} />
          <DetailsCard label='Joining Date' content={employee.joiningDate} />
          <DetailsCard label='Experience' content={employee.experience} />
          <DetailsCard label='Role' content={employee.role.name} />
          <DetailsCard label='Status' content={<Status status={employee.activityStatus} />} />
          <DetailsCard
            label='Address'
            content={`${employee.address.addressLine1}, ${employee.address.addressLine2}, ${employee.address.city}, ${employee.address.state} ${employee.address.country} ${employee.address.pincode} `}
          />
          <DetailsCard label='Employee ID' content={employee.id} />
        </div>
      )}
    </HomeLayout>
  );
};

export default EmployeeDetailsPage;
