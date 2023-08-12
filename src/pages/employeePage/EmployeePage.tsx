import './styles.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import SubHeader from '../../components/subheader/SubHeader';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableRow from '../../components/TableRow/TableRow';
import employees from '../../employees';

const EmployeePage = () => {
  const navigate = useNavigate();

  const handleClickOnTableRow = (id: number) => {
    navigate(`/employees/${id}`);
  };

  const handleClickOnActionButton = () => {
    navigate(`/employees/create`);
  };

  return (
    <div className='home-div'>
      <Header />
      <NavBar />
      <div className='main-body'>
        <div className='right-div'>
          <SubHeader
            headerText='Employee List'
            actionButtonText='Create Employee'
            actionButtonlogo='assets/icons/create.png'
            onClick={handleClickOnActionButton}
          />
          <div className='table'>
            <table>
              <TableHeader />
              {employees.map((employee) => (
                <TableRow
                  employee={employee}
                  key={employee.id}
                  onClick={() => handleClickOnTableRow(employee.id)}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
