import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { SearchParamProps } from "@/types";
import { fetchSeries } from "./actions";
import SearchList from "./_components/SearchList";
import SwitchTab from "@/components/SwitchTab";

export default async function SearchPage({ searchParams }: SearchParamProps) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const searchText = (searchParams?.query as string) || "";
  const data = await fetchSeries({
    query: searchText,
  });

  return (
    <main className="flex flex-col items-center px-6">
      <SwitchTab />
      <SearchList data={data.results} />
    </main>
  );
}
