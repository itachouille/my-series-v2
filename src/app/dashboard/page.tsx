import DashboardCard from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { getAllSeries } from "@/data-access/serie";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const seriesData = await getAllSeries();

  return (
    <main>
      <Button>Search for a show</Button>
      <div className="flex flex-col gap-2 items-center my-3 lg:flex-row ">
        {seriesData.map((serie) => {
          return (
            <DashboardCard
              key={serie.id}
              title={serie.title}
              imageUrl={serie.imageUrl}
              saison={serie.saison}
              episode={serie.episode}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Dashboard;
