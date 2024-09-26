import { getUserSeries } from "@/data-access/serie";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import DashboardCard from "./DashboardCard";
import SwitchTab from "@/components/SwitchTab";
import Link from "next/link";
import { CirclePlus } from "lucide-react";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-6 pb-10">
        <Link href="/search">
          <div className="border-2 shadow-sm text-primary flex justify-center items-center h-full bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <CirclePlus className="size-10 p-1" />
            Add
          </div>
        </Link>

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
