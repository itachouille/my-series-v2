"use client";

import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = ({
  placeholder = "Search title...",
}: {
  placeholder?: string;
}) => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if (query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: query,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query, searchParams, router]);

  return (
    <div className="flex items-center rounded-xl px-2 bg-gray-100 ">
      <SearchIcon className="" />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="border-0 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default Search;
