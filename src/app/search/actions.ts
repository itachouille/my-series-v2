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

    if (!res.ok) {
      console.error(`Error fetching series: ${res.status} ${res.statusText}`);
      throw new Error("Failed to fetch series");
    }

    const data = await res.json();

    return data.results || [];
  } catch (error) {
    handleError(error);
    return [];
  }
}

export async function fetchMovies({ query }: FetchSeriesProps) {
  try {
    const res = await fetch(
      `${baseUrl}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );

    if (!res.ok) {
      console.error(`Error fetching movies: ${res.status} ${res.statusText}`);
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();
    return data.results || [];
  } catch (error) {
    handleError(error);
    return [];
  }
}
