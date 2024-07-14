import { baseApi } from "@/redux/api/baseApi";

const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchPaymentKey: builder.mutation({
      query: (price) => ({
        url: "/payments",
        method: "POST",
        body: { price },
      }),
    }),
  }),
});

export const { useFetchPaymentKeyMutation } = ordersApi;
