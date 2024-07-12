import { baseApi } from "@/redux/api/baseApi";

const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchBrands: builder.query({
      query: ({ page, limit }) => {
        const params = new URLSearchParams();

        if (page) {
          params.append("page", page);
          params.append("limit", limit);
          params.append("sort", "-createdAt");
        }
        return {
          url: "/brands",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["brand"],
    }),
    addBrand: builder.mutation({
      query: (newBrand) => ({
        url: "/brands",
        method: "POST",
        body: newBrand,
      }),
      invalidatesTags: ["brand"],
    }),
    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `/brands/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["brand"],
    }),
  }),
});

export const {
  useFetchBrandsQuery,
  useAddBrandMutation,
  useDeleteBrandMutation,
} = brandApi;
