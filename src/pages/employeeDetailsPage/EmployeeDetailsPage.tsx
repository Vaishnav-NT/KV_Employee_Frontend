import './styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import employees from '../../employees';
import NavBar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/Subheader/SubHeader';
import Status from '../../components/Status/Status';
import DetailsCard from '../../components/DetailsCard/DetailsCard';

const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const employee = employees.find((employee) => employee.id === parseInt(id));
  const navigate = useNavigate();
  const handleEdit = (id: number) => {
    // not work
    navigate(`../employees/edit/${id}`);
  };

  return (
    <div className='home-div'>
      <Header />
      <div className='main-body'>
        <NavBar />
        <div className='content-div'>
          <SubHeader
            headerText='Employee Details'
            actionButtonText='Edit Employee'
            actionButtonlogo='assets/icons/edit.svg'
            onClick={() => {
              handleEdit(employee.id);
            }}
          />

          <div className='detailsCard'>
            <DetailsCard label='Employee Name' content={employee.name} />
            <DetailsCard label='Joining Date' content={employee.joiningDate} />
            <DetailsCard label='Experience' content={employee.experience} />
            <DetailsCard label='Role' content={employee.role} />
            <DetailsCard label='Status' content={<Status status={employee.status} />} />
            <DetailsCard label='Address' content='5th Avenue, Downtown' />
            <DetailsCard label='Employee ID' content={employee.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsPage;
