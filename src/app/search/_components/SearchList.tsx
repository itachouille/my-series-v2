import SearchPageCard from "./SearchCard";
import { SeriesItemProps } from "@/types";
import Searchbar from "./Searchbar";

interface SearchListProps {
  data: SeriesItemProps[];
}

export default async function SearchList({ data }: SearchListProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="pt-2">
        <Searchbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-6 pb-10">
        {data.map((item: SeriesItemProps) => (
          <SearchPageCard
            key={item.id}
            name={item.name}
            backdrop_path={item.backdrop_path}
            year={item.year}
          />
        ))}
      </div>
    </div>
  );
}
