// import { addEmployee, editEmployee, deleteEmployee } from '../actions/employeeActions';
import { setCurrentUser } from '../actions/employeeActions';
import { createReducer } from '@reduxjs/toolkit';

const employeeReducer = createReducer({ currentUser: {} }, (builder) => {
  builder.addCase(setCurrentUser, (state, action) => action.payload);
});

export default employeeReducer;

//to be deleted
