import baseAPI from '.';

const employeeApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeLIst: builder.query({
      query: () => '/employees'
    })
  })
});

export default employeeApi;
export const { useGetEmployeeLIstQuery } = employeeApi;
