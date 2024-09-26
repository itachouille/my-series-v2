import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import SearchPageCard from "./SearchCard";
import { redirect } from "next/navigation";
import { SeriesItemProps } from "@/types";
import Searchbar from "./Searchbar";
import SwitchTab from "@/components/SwitchTab";

interface SearchListProps {
  data: SeriesItemProps[];
}

export default async function SearchList({ data }: SearchListProps) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-1 items-center justify-around pt-2">
        <SwitchTab />
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
    </>
  );
}
