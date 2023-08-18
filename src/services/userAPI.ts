import baseAPI from './baseAPI';

const currentUserApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => '/user'
    })
  })
});

export default currentUserApi;
export const { useGetCurrentUserQuery } = currentUserApi;
