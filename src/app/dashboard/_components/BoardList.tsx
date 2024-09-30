import Link from "next/link";
import { CirclePlus } from "lucide-react";
import { getUserSeries } from "@/data-access/serie";
import { getUserMovies } from "@/data-access/movie";
import BoardListClient from "./BoardListClient";

export default async function BoardList() {
  const [series, movies] = await Promise.all([
    getUserSeries(),
    getUserMovies(),
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-6 pb-10">
      <Link href="/search">
        <div className="border-2 shadow-sm text-primary flex justify-center items-center h-full bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <CirclePlus className="size-10 p-1" />
          Add
        </div>
      </Link>
      <BoardListClient series={series} movies={movies} />
    </div>
  );
}
