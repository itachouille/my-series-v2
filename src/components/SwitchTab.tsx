"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tv, Film } from "lucide-react";
import { useAppContext } from "@/lib/context";

export default function MediaSwitchTab() {
  const { media, setMedia } = useAppContext();

  return (
    <div className="w-full max-w-md ">
      <Tabs value={media} onValueChange={setMedia} className="w-full">
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
