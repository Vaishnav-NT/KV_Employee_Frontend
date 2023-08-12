import './styles.css';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import SubHeader from '../../components/subheader/SubHeader';
import FormInput from '../../components/FormInput/FormInput';
import FormSelect from '../../components/FormSelect/FormSelect';
import Button from '../../components/button/Button';

const CreateEmployeePage = () => {
  const deptOptions = ['Frontend', 'Backend', 'QA'];
  const rolesOptions = ['Admin', 'User'];
  const statusOptions = ['Active', 'Inactive', 'Probation'];

  return (
    <div className='home-div'>
      <Header />
      <div className='main-body'>
        <NavBar />
        <div className='right-div'>
          <SubHeader headerText='Create Employee' />
          <div className='form-card'>
            <div className='row'>
              <div className='row-item'>
                <FormInput value={''} onChange={() => {}} label='Employee Name' type='text' />
              </div>
              <div className='row-item'>
                <FormInput value={''} onChange={() => {}} label='Joining Date' type='date' />
              </div>
              <div className='row-item'>
                <FormInput value={''} onChange={() => {}} label='Experience' type='number' />
              </div>
            </div>
            <div className='row'>
              <div className='row-item'>
                <FormSelect label='Department' options={deptOptions} onChange={() => {}} />
              </div>
              <div className='row-item'>
                <FormSelect label='Roles' options={rolesOptions} onChange={() => {}} />
              </div>
              <div className='row-item'>
                <FormSelect label='Status' options={statusOptions} onChange={() => {}} />
              </div>
            </div>
            <div className='column'>
              <div className='column-item'>
                <FormInput value={''} onChange={() => {}} label='Flat No / House No' type='text' />
              </div>
              <div className='column-item'>
                <FormInput value={''} onChange={() => {}} label='Address Line 1' type='text' />
              </div>
              <div className='column-item'>
                <FormInput value={''} onChange={() => {}} label='Address Line 2' type='text' />
              </div>
              <div className='form-buttons'>
                <div className='form-button'>
                  <Button type='primary' label='Create' onClick={() => {}} />
                </div>
                <div className='form-button'>
                  <Button type='secondary' label='Cancel' onClick={() => {}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeePage;
