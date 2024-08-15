import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const opportunityApi = createApi({
    reducerPath: "opportunities",
    baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com/"}),
    endpoints: (builder) => ({
        getAllOpportunities: builder.query({
            query: () => "/opportunities/search",
            keepUnusedDataFor: 600,
        }),
        getSingleOpportinity: builder.query({
            query: (id) => `/opportunities/${id}`,
            keepUnusedDataFor: 600,
        })
    })
})

export const { useGetAllOpportunitiesQuery, useGetSingleOpportinityQuery} = opportunityApi