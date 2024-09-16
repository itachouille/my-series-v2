import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import SearchPageCard from "./SearchCard";
import { redirect } from "next/navigation";
import { SeriesItemProps } from "@/types";

interface SearchListProps {
  data: SeriesItemProps[];
}

export default async function SearchList({ data }: SearchListProps) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  /* 
  if (!data || data.length === 0) {
    return (
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <SearchPageCard.Skeleton />
          <SearchPageCard.Skeleton />
          <SearchPageCard.Skeleton />
          <SearchPageCard.Skeleton />
        </div>
    
    );
  } */

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 mt-6 pb-10">
      {data.map((item: SeriesItemProps) => (
        <SearchPageCard
          key={item.id}
          name={item.name}
          backdrop_path={item.backdrop_path}
          year={item.year}
        />
      ))}
    </div>
  );
}
