import { addEmployee, editEmployee, deleteEmployee } from '../actions/employeeActions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'Sruthy',
    id: 1,
    joiningDate: '11/02/2012',
    role: 'admin',
    status: 'Active',
    experience: 4,
    department: 'QA',
    address: {
      house: 'Downtown',
      line1: '5th Av',
      line2: 'LA'
    }
  },
  {
    name: 'Jithin',
    id: 2,
    joiningDate: '21/12/2002',
    role: 'user',
    status: 'Inactive',
    experience: 2,
    department: 'Frontend',
    address: {
      house: 'Downtown',
      line1: '12th Av',
      line2: 'LA'
    }
  }
];

const employeeReducer = createReducer(initialState, (builder) => {
  builder.addCase(addEmployee, (state, action) => {
    return [...state, action.payload];
  });

  builder.addCase(deleteEmployee, (state, action) => {
    const updatedState = state.filter((emp) => emp.id !== action.payload.id);

    return updatedState;
  });

  builder.addCase(editEmployee, (state, action) => {
    const index = state.findIndex((emp) => emp.id == action.payload.id);
    const updatedState = state.splice(index, 1, action.payload);

    return updatedState;
  });
});

export default employeeReducer;
