const createEmployeePayload = (employee: any) => {
  delete employee.department;

  return {
    ...employee,
    departmentId: '9',
    username: employee.name,
    address: {
      ...employee.address,
      state: 'Kerala',
      country: 'India',
      pincode: '682024'
    },
    password: 'password',
    experience: parseInt(employee.experience)
  };
};

export default createEmployeePayload;
