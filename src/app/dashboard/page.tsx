import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import BoardList from "./_components/BoardList";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      <BoardList />
    </div>
  );
}
