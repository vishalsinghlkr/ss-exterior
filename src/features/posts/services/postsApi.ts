import { baseApi } from "@/store/api/baseApi";
import type { PostItem } from "@/types/api";

export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostItem[], { limit?: number }>({
      query: ({ limit = 6 } = {}) => `/posts?_limit=${limit}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts" as const, id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),

    getPostById: builder.query<PostItem, number>({
      query: (id) => `/posts/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Posts", id }],
    }),

    createPost: builder.mutation<PostItem, Partial<PostItem>>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation } =
  postsApi;
