import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "@/config/env";

/**
 * Base RTK Query API Slice
 * Individual feature services inject their endpoints here using apiSlice.injectEndpoints
 */
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: env.apiBaseUrl,
    prepareHeaders: (headers) => {
      // You can attach authorization tokens or common headers here
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Posts", "User"],
  endpoints: () => ({}),
});
