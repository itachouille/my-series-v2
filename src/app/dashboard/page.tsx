import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import BoardList from "./_components/BoardList";
import SwitchTab from "@/components/SwitchTab";

export default async function DashboardPage() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return (
    <main className="flex flex-col items-center px-6">
      <SwitchTab />
      <BoardList />
    </main>
  );
}
