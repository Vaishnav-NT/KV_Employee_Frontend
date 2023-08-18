import { createAction } from '@reduxjs/toolkit';

export type EmployeeType = {
  id: number;
  name: string;
  joiningDate: string;
  role: string;
  status: string;
  experience: number;
  department: string;
  address: {
    house: string;
    line1: string;
    line2: string;
  };
};

type DeleteEmployee = {
  id: number;
};

const addEmployee = createAction<EmployeeType>('EMPLOYEE.CREATE');

const editEmployee = createAction<EmployeeType>('EMPLOYEE.EDIT');

const deleteEmployee = createAction<DeleteEmployee>('EMPLOYEE.DELETE');

const setCurrentUser = createAction<any>('EMPLOYEE.SET');

export { addEmployee, editEmployee, deleteEmployee, setCurrentUser };

// to be deleted
