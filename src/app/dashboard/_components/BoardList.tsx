"use client";

import DashboardCard from "./DashboardCard";
import Link from "next/link";
import { CirclePlus } from "lucide-react";
import { DashboardPageCardProps } from "@/types";
import { getUserSeries } from "@/data-access/serie";
import { useEffect, useState } from "react";
import { useMediaStore } from "@/store/media-store";
import { getUserMovies } from "@/data-access/movie";

export default function BoardList() {
  const [data, setData] = useState<DashboardPageCardProps[] | undefined>();

  const { media } = useMediaStore();

  useEffect(() => {
    async function fetchData() {
      if (media === "series") {
        let res = await getUserSeries();
        setData(res);
      } else if (media === "movies") {
        let res = await getUserMovies();
        setData(res);
      }
    }

    fetchData();
  }, [media]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-6 pb-10">
      <Link href="/search">
        <div className="border-2 shadow-sm text-primary flex justify-center items-center h-full bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <CirclePlus className="size-10 p-1" />
          Add
        </div>
      </Link>

      {data?.map((item: DashboardPageCardProps) => (
        <DashboardCard
          key={item.id}
          name={item.name}
          backdrop_path={item.backdrop_path}
          saison={item.saison}
          episode={item.episode}
          id={item.id}
        />
      ))}
    </div>
  );
}
