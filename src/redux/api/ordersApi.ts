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
    fetchOrders: builder.query({
      query: () => ({
        url: "/carts/my-orders",
        method: "GET",
      }),
      providesTags: ["order"],
    }),
  }),
});

export const {
  useFetchPaymentKeyMutation,
  useCreateOrderMutation,
  useFetchOrdersQuery,
} = ordersApi;
