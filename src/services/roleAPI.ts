import baseAPI from './baseAPI';

const roleApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getRoleList: builder.query({
      query: () => '/roles'
    })
  })
});

export default roleApi;
export const { useGetRoleListQuery } = roleApi;
