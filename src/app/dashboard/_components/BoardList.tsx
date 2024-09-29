import { getUserSeries } from "@/data-access/serie";
//import { getUserMovies } from "@/data-access/movie";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import DashboardCard from "./DashboardCard";
import Link from "next/link";
import { CirclePlus } from "lucide-react";
import { DashboardPageCardProps } from "@/types";

export default async function BoardList() {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const data = await getUserSeries();

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
