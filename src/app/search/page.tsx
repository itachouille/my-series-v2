import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import SearchList from "./_components/SearchList";
import SwitchTab from "@/components/SwitchTab";
import { SearchParamProps } from "@/types";
import Searchbar from "./_components/Searchbar";

export default async function SearchPage({ searchParams }: SearchParamProps) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return (
    <main className="flex flex-col items-center px-6">
      <SwitchTab />
      <Searchbar />
      <SearchList searchParams={searchParams} />
    </main>
  );
}
