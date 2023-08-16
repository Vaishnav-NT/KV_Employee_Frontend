import './styles.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editEmployee } from '../../actions/employeeActions';
import { useGetEmployeeLIstQuery } from '../../services/employeeAPI';
import HomeLayout from '../../layout/homeLayout/HomeLayout';
import FormInput from '../../components/FormInput/FormInput';
import FormSelect from '../../components/FormSelect/FormSelect';
import Button from '../../components/Button/Button';

const EditEmployeePage = () => {
  const deptOptions = ['Frontend', 'Backend', 'QA'];
  const rolesOptions = ['admin', 'user'];
  const statusOptions = ['Active', 'Inactive', 'Probation'];
  const { id } = useParams();

  const { data } = useGetEmployeeLIstQuery('');
  const employeesData = data ? data.data : [];

  const employee = employeesData.find((employee) => employee.id === parseInt(id));

  const employeeObject = {
    id: parseInt(id),
    name: employee.name,
    joiningDate: employee.joiningDate,
    role: employee.role.name,
    status: employee.status,
    experience: employee.experience,
    department: employee.department,
    address: {
      house: employee.address.house,
      line1: employee.address.line1,
      line2: employee.address.line2
    }
  };

  const navigate = useNavigate();

  const [employeeState, setEmployeeState] = useState(employeeObject);

  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editEmployee({ ...employeeState }));
    navigate('/employees');
  };

  const handleCancel = () => {
    navigate('/employees');
  };

  return (
    <HomeLayout headerText='Edit Employee'>
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
              type='string'
            />
          </div>
          <div className='row-item'>
            <FormInput
              value={employeeState.experience as unknown as string}
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
              value={employeeState.department as unknown as string}
              label='Department'
              options={deptOptions}
              onChange={(e: any) => {
                setEmployeeState((prev) => ({ ...prev, department: e.target.value }));
              }}
            />
          </div>
          <div className='row-item'>
            <FormSelect
              value={employeeState.role as unknown as string}
              label='Roles'
              options={rolesOptions}
              onChange={(e: any) => {
                setEmployeeState((prev) => ({ ...prev, role: e.target.value }));
              }}
            />
          </div>
          <div className='row-item'>
            <FormSelect
              value={employeeState.status as unknown as string}
              label='Status'
              options={statusOptions}
              onChange={(e: any) => {
                setEmployeeState((prev) => ({ ...prev, status: e.target.value }));
              }}
            />
          </div>
        </div>
        <div className='row'>
          <div className='row-item'>
            <div className='column'>
              <div className='column-item'>
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
              <div className='column-item'>
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
              <div className='column-item'>
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
            </div>
          </div>
          <div className='row-item inactive'>
            <FormInput
              value={'E00' + employee.id}
              label='Employee ID'
              type='string'
              onChange={() => {}}
              readonly={true}
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-buttons'>
            <div className='form-button'>
              <Button type='primary' label='Save' onClick={handleSave} />
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

export default EditEmployeePage;
