import { getAllSeries } from "@/data-access/serie";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import DashboardCard from "./DashboardCard";

export default async function BoardList() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const seriesData = await getAllSeries();

  if (seriesData === undefined) {
    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <DashboardCard.Skeleton />
          <DashboardCard.Skeleton />
          <DashboardCard.Skeleton />
          <DashboardCard.Skeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 mt-6 pb-10">
      {seriesData?.map((serie) => {
        return (
          <DashboardCard
            key={serie.id}
            title={serie.name}
            imageUrl={serie.backdrop_path}
            saison={serie.saison}
            episode={serie.episode}
          />
        );
      })}
    </div>
  );
}
