"use server";

import { handleError } from "@/lib/utils";
import { FetchSeriesProps } from "@/types";

const baseUrl = "https://api.themoviedb.org/3";
const AccessToken = process.env.TMDB_ACCESS_TOKEN;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + AccessToken,
  },
};

export async function fetchSeries({ query }: FetchSeriesProps) {
  try {
    const res = await fetch(
      `${baseUrl}/search/tv?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );

    return res.json();
  } catch (error) {
    handleError(error);
  }
}
