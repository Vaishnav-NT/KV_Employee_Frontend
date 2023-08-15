import './styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeLayout from '../../layout/homeLayout/HomeLayout';
import Status from '../../components/Status/Status';
import DetailsCard from '../../components/DetailsCard/DetailsCard';

const EmployeeDetailsPage = () => {
  const { id } = useParams();

  const employees = useSelector((state: any) => {
    return state.employees;
  });

  const employee = employees.find((employee) => employee.id === parseInt(id));
  const navigate = useNavigate();
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
      <div className='detailsCard'>
        <DetailsCard label='Employee Name' content={employee.name} />
        <DetailsCard label='Joining Date' content={employee.joiningDate} />
        <DetailsCard label='Experience' content={employee.experience} />
        <DetailsCard label='Role' content={employee.role} />
        <DetailsCard label='Status' content={<Status status={employee.status} />} />
        <DetailsCard
          label='Address'
          content={`${employee.address.house}, ${employee.address.line1}, ${employee.address.line2} `}
        />
        <DetailsCard label='Employee ID' content={employee.id} />
      </div>
    </HomeLayout>
  );
};

export default EmployeeDetailsPage;
