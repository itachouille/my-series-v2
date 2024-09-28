"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { Tv, Film } from "lucide-react";

export default function MediaSwitchTab() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const media = searchParams.get("media") || "series";
  const board = searchParams.get("dashboard");

  const handleUpdate = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("media", value);

    if (board === "dashboard") {
      router.push(`dashboard/?${params.toString()}`);
    } else {
      router.push(`search/?${params.toString()}`);
    }
  };

  return (
    <div className="w-full max-w-md ">
      <Tabs value={media} onValueChange={handleUpdate} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="series"
            className="flex items-center justify-center space-x-2"
          >
            <Tv className="w-4 h-4" />
            <span>TV Shows</span>
          </TabsTrigger>
          <TabsTrigger
            value="movies"
            className="flex items-center justify-center space-x-2"
          >
            <Film className="w-4 h-4" />
            <span>Movies</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
