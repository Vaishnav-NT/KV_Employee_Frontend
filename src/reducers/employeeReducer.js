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

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EMPLOYEE.CREATE': {
      return [...state, action.payload.employee];
    }

    case 'EMPLOYEE.DELETE': {
      const updatedState = state.filter((emp) => emp.id !== action.payload.id);

      return updatedState;
    }

    case 'EMPLOYEE.EDIT': {
      console.log(state);

      const index = state.findIndex((emp) => emp.id == action.payload.id);

      console.log('', index);

      const updatedState = state.toSpliced(index, 1, action.payload.employee);

      return updatedState;
    }

    default:
      return state;
  }
};

export default employeeReducer;
