import baseAPI from '.';

const employeeApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => '/employees',
      providesTags: ['EMPLOYEE']
    }),

    getAnEmployee: builder.query({
      query: (id) => `/employees/${id}`
    }),

    addAnEmployee: builder.mutation({
      query: (body) => ({
        url: '/employees',
        method: 'POST',
        body
      }),
      invalidatesTags: ['EMPLOYEE']
    }),

    updateAnEmployee: builder.mutation({
      query: (body) => ({
        url: `/employees/${body.id}`,
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['EMPLOYEE']
    }),

    deleteAnEmployee: builder.mutation({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['EMPLOYEE']
    })
  })
});

export default employeeApi;
export const {
  useGetEmployeeListQuery,
  useGetAnEmployeeQuery,
  useAddAnEmployeeMutation,
  useUpdateAnEmployeeMutation,
  useDeleteAnEmployeeMutation
} = employeeApi;
