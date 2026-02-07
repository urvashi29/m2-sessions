import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// RTQ

export const postApi = createApi({
  reducerPath: "postApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

    getPostById: builder.query({
      query: (id) => {
        return {
          url: `posts/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

console.log(postApi);

// use method Query
export const { useGetAllPostQuery, useGetPostByIdQuery } = postApi;
