import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/signout",
        method: "POST",
      }),
      invalidatesTags: ["order", "rating", "brand"],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
