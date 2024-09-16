import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import SearchList from "./_components/SearchList";

export default async function SearchPage() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return (
    <main className="w-full h-full ">
      <div className="flex flex-col gap-2 items-center my-3 lg:flex-row ">
        <SearchList />
      </div>
    </main>
  );
}
