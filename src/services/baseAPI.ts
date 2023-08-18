import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('AuthToken');

      if (token) headers.set('Authorization', `Bearer ${token}`);

      return headers;
    }
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: ['EMPLOYEE']
});

export default baseAPI;
