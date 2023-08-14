import './styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/Subheader/SubHeader';
import FormInput from '../../components/FormInput/FormInput';
import FormSelect from '../../components/FormSelect/FormSelect';
import Button from '../../components/Button/Button';

const CreateEmployeePage = () => {
  const [genID, setGenID] = useState(3);
  const deptOptions = ['Select', 'Frontend', 'Backend', 'QA'];
  const rolesOptions = ['Select', 'admin', 'user'];
  const statusOptions = ['Select', 'Active', 'Inactive', 'Probation'];
  const employeeDataKeys = ['name', 'id', 'joiningDate', 'experience'];
  const emptyEmployeeObject = {
    name: '',
    joiningDate: '',
    role: '',
    status: '',
    experience: null,
    department: '',
    address: {
      house: '',
      line1: '',
      line2: ''
    }
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [showError, setShowError] = useState(false);

  const [employeeState, setEmployeeState] = useState(emptyEmployeeObject);

  const handleCreate = () => {
    for (const item in employeeDataKeys) {
      if (item.toString.length === 0) {
        setShowError(true);

        return;
      }

      if (
        employeeState.department === 'Select' ||
        employeeState.role === 'Select' ||
        employeeState.status === 'Select'
      ) {
        setShowError(true);

        return;
      }
    }

    dispatch({
      type: 'EMPLOYEE.CREATE',
      payload: {
        employee: { id: genID, ...employeeState }
      }
    });
    setEmployeeState(emptyEmployeeObject);
    setGenID((prev) => prev + 1);
    navigate('/employees');
  };

  const handleCancel = () => {
    navigate('/employees');
  };

  return (
    <div className='home-div'>
      <Header />
      <div className='main-body'>
        <NavBar />
        <div className='content-div'>
          <SubHeader headerText='Create Employee' />
          <div className='form-card'>
            <div className='row'>
              <div className='row-item'>
                <FormInput
                  value={employeeState.name}
                  onChange={(e: any) => {
                    setEmployeeState((prev) => ({ ...prev, name: e.target.value }));
                  }}
                  label='Employee Name'
                  type='text'
                />
              </div>
              <div className='row-item'>
                <FormInput
                  value={employeeState.joiningDate}
                  onChange={(e: any) => {
                    setEmployeeState((prev) => ({ ...prev, joiningDate: e.target.value }));
                  }}
                  label='Joining Date'
                  type='date'
                />
              </div>
              <div className='row-item'>
                <FormInput
                  value={employeeState.experience}
                  onChange={(e: any) => {
                    setEmployeeState((prev) => ({ ...prev, experience: e.target.value }));
                  }}
                  label='Experience'
                  type='number'
                />
              </div>
            </div>
            <div className='row'>
              <div className='row-item'>
                <FormSelect
                  value={employeeState.department}
                  label='Department'
                  options={deptOptions}
                  onChange={(e: any) => {
                    setEmployeeState((prev) => ({ ...prev, department: e.target.value }));
                  }}
                />
              </div>
              <div className='row-item'>
                <FormSelect
                  value={employeeState.role}
                  label='Roles'
                  options={rolesOptions}
                  onChange={(e: any) => {
                    setEmployeeState((prev) => ({ ...prev, role: e.target.value }));
                  }}
                />
              </div>
              <div className='row-item'>
                <FormSelect
                  value={employeeState.status}
                  label='Status'
                  options={statusOptions}
                  onChange={(e: any) => {
                    setEmployeeState((prev) => ({ ...prev, status: e.target.value }));
                  }}
                />
              </div>
            </div>
            <div className='column'>
              <div className='column-item1'>
                <FormInput
                  value={employeeState.address.house}
                  onChange={(e: any) => {
                    setEmployeeState((prev) => ({
                      ...prev,
                      address: { ...prev.address, house: e.target.value }
                    }));
                  }}
                  label='Address'
                  placeholder='Flat No / House No'
                  type='text'
                />
              </div>
              <div className='column-item1'>
                <FormInput
                  value={employeeState.address.line1}
                  onChange={(e: any) => {
                    setEmployeeState((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value }
                    }));
                  }}
                  label='Address Line 1'
                  type='text'
                  showLabel={false}
                />
              </div>
              <div className='column-item1'>
                <FormInput
                  value={employeeState.address.line2}
                  onChange={(e: any) => {
                    setEmployeeState((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value }
                    }));
                  }}
                  label='Address Line 2'
                  type='text'
                  showLabel={false}
                />
              </div>
              {showError && <div className='error-msg'>All fields must be filled</div>}
              <div className='form-buttons1'>
                <div className='form-button'>
                  <Button type='primary' label='Create' onClick={handleCreate} />
                </div>
                <div className='form-button'>
                  <Button type='secondary' label='Cancel' onClick={handleCancel} />
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
