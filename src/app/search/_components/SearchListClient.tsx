"use client";

import { useToggleContext } from "@/context";
import SearchPageCard from "./SearchCard";
import { SeriesItemProps } from "@/types";

interface SearchListClientProps {
  series: SeriesItemProps[];
  movies: SeriesItemProps[];
}

export default function SearchListClient({
  series = [],
  movies = [],
}: SearchListClientProps) {
  const { media } = useToggleContext();

  const dataToDisplay = media === "series" ? series : movies;

  if (!Array.isArray(dataToDisplay) || dataToDisplay.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <>
      {dataToDisplay.map((item: SeriesItemProps) => (
        <SearchPageCard
          key={item.id}
          name={item.name || item.title}
          backdrop_path={item.backdrop_path}
        />
      ))}
    </>
  );
}
