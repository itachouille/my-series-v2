"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tv, Film } from "lucide-react";

export default function MediaSwitchTab() {
  const [activeTab, setActiveTab] = useState("tv");

  return (
    <div className="w-full max-w-md ">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="tv"
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
