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
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/carts",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["product", "order"],
    }),
  }),
});

export const { useFetchPaymentKeyMutation, useCreateOrderMutation } = ordersApi;
