"use client";

import { useToggleContext } from "@/context";
import DashboardCard from "./DashboardCard";
import { DashboardPageCardProps } from "@/types";

interface BoardListClientProps {
  series: DashboardPageCardProps[];
  movies: DashboardPageCardProps[];
}

export default function BoardListClient({
  series,
  movies,
}: BoardListClientProps) {
  const { media } = useToggleContext();

  const dataToDisplay = media === "series" ? series : movies;

  return (
    <>
      {dataToDisplay?.map((item: DashboardPageCardProps) => (
        <DashboardCard
          key={item.id}
          name={item.name}
          backdrop_path={item.backdrop_path}
          saison={item.saison}
          episode={item.episode}
          id={item.id}
        />
      ))}
    </>
  );
}
