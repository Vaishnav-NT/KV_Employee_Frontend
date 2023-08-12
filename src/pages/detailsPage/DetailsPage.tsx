import './styles.css';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import SubHeader from '../../components/subheader/SubHeader';
import { useParams } from 'react-router-dom';
import employees from '../../employees';
import Status from '../../components/status/Status';

const DetailsPage = () => {
  const { id } = useParams();

  const employee = employees.find((employee) => employee.id === parseInt(id));

  console.log('aaaaa', employee);

  return (
    <div className='home-div'>
      <Header />
      <div className='main-body'>
        <NavBar />
        <div className='right-div'>
          <SubHeader
            headerText='Employee Details'
            actionButtonText='Edit'
            actionButtonlogo='assets/icons/edit.svg'
            onClick={() => {}}
          />
          <div>
            <div className='detailsCard'>
              <div className='wr'>
                <span>Employee Name</span>
                <div>{employee.name}</div>
              </div>
              <div className='wr'>
                <span>Employee ID</span>
                <div>{employee.id}</div>
              </div>
              <div className='wr'>
                <span>Joining Date</span>
                <div>{employee.joiningDate}</div>
              </div>
              <div className='wr'>
                <span>Experience</span>
                <div>{employee.experience}</div>
              </div>
              <div className='wr'>
                <span>Role</span>
                <div>{employee.role}</div>
              </div>
              <div className='wr'>
                <span>Status</span>
                <Status status={employee.status} />
              </div>
              <div className='wr'>
                <span>Address</span>
                <div>Mock Address</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
