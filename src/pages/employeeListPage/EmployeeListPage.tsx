import './styles.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/Subheader/SubHeader';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableRow from '../../components/TableRow/TableRow';
import employees from '../../employees';
import PopUp from '../../components/PopUp/PopUp';

const EmployeeListPage = () => {
  const navigate = useNavigate();

  const handleClickOnTableRow = (id: number) => {
    navigate(`/employees/${id}`);
  };

  const handleClickOnActionButton = () => {
    navigate(`/employees/create`);
  };

  const handleEdit = (id: number) => {
    navigate(`/employees/edit/${id}`);
  };

  return (
    <div className='home-div'>
      <Header />
      <div className='main-body'>
        <NavBar />
        <div className='content-div'>
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
                  handleRowClick={() => handleClickOnTableRow(employee.id)}
                  handleEdit={() => handleEdit(employee.id)}
                  handleDelete={() => {}}
                />
              ))}
            </table>
          </div>
          <PopUp />
        </div>
      </div>
    </div>
  );
};

export default EmployeeListPage;
