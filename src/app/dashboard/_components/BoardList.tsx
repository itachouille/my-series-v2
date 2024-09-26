import { getUserSeries } from "@/data-access/serie";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import DashboardCard from "./DashboardCard";
import SwitchTab from "@/components/SwitchTab";

export default async function BoardList() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const data = await getUserSeries();

  return (
    <>
      <div>
        <SwitchTab />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 mt-6 pb-10">
        {data?.map((serie) => {
          return (
            <DashboardCard
              key={serie.id}
              name={serie.name}
              backdrop_path={serie.backdrop_path}
              saison={serie.saison}
              episode={serie.episode}
              id={serie.id}
            />
          );
        })}
      </div>
    </>
  );
}
