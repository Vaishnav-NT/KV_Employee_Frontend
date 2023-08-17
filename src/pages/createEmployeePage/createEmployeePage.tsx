import './styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeLayout from '../../layout/homeLayout/HomeLayout';
import FormInput from '../../components/FormInput/FormInput';
import FormSelect from '../../components/FormSelect/FormSelect';
import Button from '../../components/Button/Button';
import createEmployeePayload from '../../utils/createEmployeePayload';
import { useAddAnEmployeeMutation } from '../../services/employeeAPI';

const CreateEmployeePage = () => {
  const deptOptions = ['Select', 'Frontend', 'Backend', 'QA'];
  const rolesOptions = ['Select', 'admin', 'user'];
  const statusOptions = ['Select', 'Active', 'Inactive', 'Probation'];
  const emptyEmployeeObject = {
    name: '',
    joiningDate: '',
    role: '',
    activityStatus: '',
    experience: null,
    department: '',
    address: {
      addressLine1: '',
      addressLine2: '',
      city: ''
    }
  };
  const navigate = useNavigate();

  const [createEmployee, { data: employeeData }] = useAddAnEmployeeMutation();

  // const [showError, setShowError] = useState(false);

  const [employeeState, setEmployeeState] = useState(emptyEmployeeObject);

  const handleCreate = () => {
    // for (const item in employeeDataKeys) {
    //   if (item.toString.length === 0) {
    //     setShowError(true);

    //     return;
    //   }

    //   if (
    //     employeeState.department === 'Select' ||
    //     employeeState.role === 'Select' ||
    //     employeeState.status === 'Select'
    //   ) {
    //     setShowError(true);

    //     return;
    //   }
    // }

    createEmployee(createEmployeePayload(employeeState));
    console.log('Create', employeeData);
    // setEmployeeState(emptyEmployeeObject);
    navigate('/employees');
  };

  const handleCancel = () => {
    navigate('/employees');
  };

  return (
    <HomeLayout headerText='Create Employee'>
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
              value={employeeState.activityStatus}
              label='Status'
              options={statusOptions}
              onChange={(e: any) => {
                setEmployeeState((prev) => ({ ...prev, activityStatus: e.target.value }));
              }}
            />
          </div>
        </div>
        <div className='column'>
          <div className='column-item1'>
            <FormInput
              value={employeeState.address.addressLine1}
              onChange={(e: any) => {
                setEmployeeState((prev) => ({
                  ...prev,
                  address: { ...prev.address, addressLine1: e.target.value }
                }));
              }}
              label='Address'
              placeholder='Address line 1'
              type='text'
            />
          </div>
          <div className='column-item1'>
            <FormInput
              value={employeeState.address.addressLine2}
              onChange={(e: any) => {
                setEmployeeState((prev) => ({
                  ...prev,
                  address: { ...prev.address, addressLine2: e.target.value }
                }));
              }}
              label='Address Line 2'
              type='text'
              showLabel={false}
            />
          </div>
          <div className='column-item1'>
            <FormInput
              value={employeeState.address.city}
              onChange={(e: any) => {
                setEmployeeState((prev) => ({
                  ...prev,
                  address: { ...prev.address, city: e.target.value }
                }));
              }}
              label='City'
              type='text'
              showLabel={false}
            />
          </div>
          {/* {showError && <div className='error-msg'>All fields must be filled</div>} */}
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
    </HomeLayout>
  );
};

export default CreateEmployeePage;
