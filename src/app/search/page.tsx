import SearchPageCard from "@/components/SearchCard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/");
  }

  return (
    <main className="w-full h-full ">
      <div className="flex flex-col gap-2 items-center my-3 lg:flex-row ">
        <SearchPageCard rating={1} imageUrl="" title="Azerty" year={2016} />
        <SearchPageCard rating={1} imageUrl="" title="Azerty" year={2016} />
        <SearchPageCard rating={1} imageUrl="" title="Azerty" year={2016} />
      </div>
    </main>
  );
};

export default page;
