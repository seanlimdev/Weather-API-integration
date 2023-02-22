import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherapi.com/v1' }),
  endpoints: (builder) => ({
    getWeatherHistory: builder.query({
      query: ({ searchQuery, start, end }: { searchQuery: string; start: string; end: string }) =>
        `history.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${searchQuery}&days=3&dt=${start}&end_dt=${end}`,
    }),
  }),
})

export const { useGetWeatherHistoryQuery } = api
