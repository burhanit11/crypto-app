import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://min-api.cryptocompare.com",
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ category = "Cryptocurrency", limit = 5 }) =>
        `/data/v2/news/?lang=EN&categories=${category}&limit=${limit}`,
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
