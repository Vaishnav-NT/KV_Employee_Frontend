const createEmployeePayload = (employee: any) => {
  delete employee.department;

  return {
    ...employee,
    username: employee.name,
    address: {
      ...employee.address
    },
    password: 'password',
    experience: parseInt(employee.experience)
  };
};

export default createEmployeePayload;
