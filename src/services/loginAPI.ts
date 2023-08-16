import baseAPI from '.';

type loginPayloadType = {
  username: string;
  password: string;
};

const loginApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: loginPayloadType) => ({
        url: '/employees/login',
        method: 'POST',
        body
      })
    })
  })
});

export const { useLoginMutation } = loginApi;
