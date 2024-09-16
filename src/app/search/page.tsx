import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import SearchList from "./_components/SearchList";
import { SearchParamProps } from "@/types";
import { fetchSeries } from "./actions";

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
    <main className="w-full h-full ">
      <div className="flex flex-col gap-2 items-center my-3 lg:flex-row ">
        <SearchList data={data.results} />
      </div>
    </main>
  );
}
