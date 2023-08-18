import baseAPI from './baseAPI';

const departmentApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDepartmentList: builder.query({
      query: () => '/departments'
    })
  })
});

export default departmentApi;
export const { useGetDepartmentListQuery } = departmentApi;
