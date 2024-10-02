import { SearchParamProps } from "@/types";
import SearchListClient from "./SearchListClient";
import { fetchMovies, fetchSeries } from "../actions";

export default async function SearchList({ searchParams }: SearchParamProps) {
  const searchText = (searchParams?.query as string) || "";

  const [series, movies] = await Promise.all([
    fetchSeries({ query: searchText }),
    fetchMovies({ query: searchText }),
  ]);

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-6 pb-10">
        <SearchListClient series={series} movies={movies} />
      </div>
    </div>
  );
}
