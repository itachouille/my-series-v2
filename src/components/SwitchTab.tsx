"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tv, Film } from "lucide-react";
import { useState } from "react";

export default function SwitchTab() {
  const [media, setMedia] = useState("series");

  const handleTabChange = (media: string) => {
    setMedia(media);
  };

  return (
    <div className="w-full max-w-md">
      <Tabs value={media} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="series"
            className="flex items-center justify-center space-x-2"
          >
            <Tv className="size-4" />
            <span>TV Shows</span>
          </TabsTrigger>
          <TabsTrigger
            value="movies"
            className="flex items-center justify-center space-x-2"
          >
            <Film className="size-4" />
            <span>Movies</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
