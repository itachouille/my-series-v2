"use server";

const baseUrl = "https://api.themoviedb.org/3";
const AccessToken = process.env.TMDB_ACCESS_TOKEN;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + AccessToken,
  },
};

export async function fetchSeries(query: string) {
  const res = await fetch(
    `${baseUrl}/search/tv?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}
