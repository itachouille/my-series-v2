import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import BoardList from "./_components/BoardList";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return (
    <>
      <Button>
        <Link href="/search">Search</Link>
      </Button>
      <BoardList />
    </>
  );
}
