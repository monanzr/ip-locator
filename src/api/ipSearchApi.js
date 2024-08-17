import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "./endPoints";

const BASE_URL =
  "https://geo.ipify.org/api/v2/";
  const apiKey = 'at_kX348F28wmH5UyZesH1B8bznjewvx';

export const ipSearchApi = createApi({
  reducerPath: "ipSearchApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getIpInfo: builder.query({
      query: (ipAddress) => ({
        url: API_ENDPOINTS.getIP,
        params: { apiKey, ipAddress },
      }),
    }),
  }),
});

export const { useGetIpInfoQuery } = ipSearchApi;
