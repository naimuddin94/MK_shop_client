import { baseApi } from "@/redux/api/baseApi";

const ratingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchRatings: builder.query({
      query: () => ({
        url: "/ratings",
        method: "GET",
      }),
      providesTags: ["rating"],
    }),
    addRating: builder.mutation({
      query: (newRating) => ({
        url: "/ratings",
        method: "POST",
        body: newRating,
      }),
      invalidatesTags: ["rating"],
    }),
    fetchRatingsByProductId: builder.mutation({
      query: (id) => ({
        url: `/ratings/product/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["rating"],
    }),
  }),
});

export const {
  useFetchRatingsQuery,
  useAddRatingMutation,
  useFetchRatingsByProductIdMutation,
} = ratingApi;
