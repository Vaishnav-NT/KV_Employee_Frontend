import './styles.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUpdateAnEmployeeMutation } from '../../services/employeeAPI';
import { useGetDepartmentListQuery } from '../../services/departmentAPI';
import { useGetRoleListQuery } from '../../services/roleAPI';
import { useGetAnEmployeeQuery } from '../../services/employeeAPI';
import Button from '../../components/Button/Button';
import HomeLayout from '../../layout/homeLayout/HomeLayout';
import FormInput from '../../components/FormInput/FormInput';
import FormSelect from '../../components/FormSelect/FormSelect';
import createEmployeePayload from '../../utils/createEmployeePayload';

const EditEmployeePage = () => {
  const statusOptions = [
    { id: 'Active', name: 'Active' },
    { id: 'Inactive', name: 'Inactive' },
    { id: 'Probation', name: 'Probation' }
  ];
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: employeeData } = useGetAnEmployeeQuery(id);
  const employee = employeeData ? employeeData.data : null;

  //add type
  const { data: departmentData } = useGetDepartmentListQuery('');
  const deptOptions = departmentData?.data.map((item) => {
    return { id: item.id, name: item.name };
  });

  // add type
  const { data: roleData } = useGetRoleListQuery('');
  const rolesOptions = roleData?.data.map((item) => {
    return { id: item, name: item };
  });

  const [updateEmployee, { data: response }] = useUpdateAnEmployeeMutation();

  const [employeeState, setEmployeeState] = useState({
    id: 0,
    name: '',
    joiningDate: '',
    role: '',
    activityStatus: '',
    experience: null,
    departmentId: '',
    address: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      country: '',
      pincode: ''
    }
  });

  useEffect(() => {
    if (employee) {
      const employeeObject = {
        id: parseInt(id),
        name: employee.name,
        joiningDate: employee.joiningDate,
        role: employee.role.name,
        activityStatus: employee.activityStatus,
        experience: employee.experience,
        departmentId: employee.departmentId,
        address: {
          addressLine1: employee.address.addressLine1,
          addressLine2: employee.address.addressLine2,
          city: employee.address.city,
          state: employee.address.state,
          country: employee.address.country,
          pincode: employee.address.pincode
        }
      };

      setEmployeeState(employeeObject);
    }
  }, [employee]);

  const handleSave = () => {
    updateEmployee(createEmployeePayload(employeeState));

    console.log('updateResponse:', response);

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
            {deptOptions && (
              <FormSelect
                value={employeeState.departmentId as unknown as string}
                label='Department'
                options={deptOptions}
                onChange={(e: any) => {
                  setEmployeeState((prev) => ({ ...prev, departmentId: e.target.value }));
                }}
              />
            )}
          </div>
          <div className='row-item'>
            {rolesOptions && (
              <FormSelect
                value={employeeState.role as unknown as string}
                label='Roles'
                options={rolesOptions}
                onChange={(e: any) => {
                  setEmployeeState((prev) => ({ ...prev, role: e.target.value }));
                }}
              />
            )}
          </div>
          <div className='row-item'>
            <FormSelect
              value={employeeState.activityStatus as unknown as string}
              label='Status'
              options={statusOptions}
              onChange={(e: any) => {
                setEmployeeState((prev) => ({ ...prev, activityStatus: e.target.value }));
              }}
            />
          </div>
        </div>
        <div className='row'>
          <div className='row-item'>
            <div className='column'>
              <div className='column-item'>
                <div className='column-item'>
                  <FormInput
                    value={employeeState.address.addressLine1}
                    onChange={(e: any) => {
                      setEmployeeState((prev) => ({
                        ...prev,
                        address: { ...prev.address, addressLine1: e.target.value }
                      }));
                    }}
                    label='Address'
                    type='text'
                  />
                </div>
                <div className='column-item'>
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
                  <FormInput
                    value={employeeState.address.city}
                    onChange={(e: any) => {
                      setEmployeeState((prev) => ({
                        ...prev,
                        address: { ...prev.address, city: e.target.value }
                      }));
                    }}
                    label='City'
                    placeholder='City'
                    type='text'
                    showLabel={false}
                  />
                  <FormInput
                    value={employeeState.address.state}
                    onChange={(e: any) => {
                      setEmployeeState((prev) => ({
                        ...prev,
                        address: { ...prev.address, state: e.target.value }
                      }));
                    }}
                    label='State'
                    placeholder='State'
                    type='text'
                    showLabel={false}
                  />
                  <FormInput
                    value={employeeState.address.country}
                    onChange={(e: any) => {
                      setEmployeeState((prev) => ({
                        ...prev,
                        address: { ...prev.address, country: e.target.value }
                      }));
                    }}
                    label='Country'
                    placeholder='Country'
                    type='text'
                    showLabel={false}
                  />
                  <FormInput
                    value={employeeState.address.pincode}
                    onChange={(e: any) => {
                      setEmployeeState((prev) => ({
                        ...prev,
                        address: { ...prev.address, pincode: e.target.value }
                      }));
                    }}
                    label='Pincode'
                    placeholder='Pincode'
                    type='text'
                    showLabel={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row-item inactive'>
            <FormInput
              value={'' + employeeState.id}
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
