"use client";
//import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

interface DashboardPageCardProps {
  title: string;
  imageUrl: string;
  saison: number;
  episode: number;
}

export default function DashboardCard({
  title,
  imageUrl,
  saison,
  episode,
}: DashboardPageCardProps) {
  /*  const [currentSeason, setCurrentSeason] = useState(1) */
  /*   const [currentEpisode, setCurrentEpisode] = useState(1) */

  /*  const handleNextEpisode = () => {
    if (currentEpisode < episodesPerSeason) {
      setCurrentEpisode(currentEpisode + 1)
    } else if (currentSeason < totalSeasons) {
      setCurrentSeason(currentSeason + 1)
      setCurrentEpisode(1)
    }
    onUpdateProgress(currentSeason, currentEpisode + 1)
  } */
  /* 
  const handlePreviousEpisode = () => {
    if (currentEpisode > 1) {
      setCurrentEpisode(currentEpisode - 1)
    } else if (currentSeason > 1) {
      setCurrentSeason(currentSeason - 1)
      setCurrentEpisode(episodesPerSeason)
    }
    onUpdateProgress(currentSeason, currentEpisode - 1)
  } */

  return (
    <Card className="w-[300px] overflow-hidden">
      <div className="relative">
        <Image
          alt={title}
          className="w-full h-[200px] object-cover"
          height="200"
          src={imageUrl}
          style={{
            aspectRatio: "150/200",
            objectFit: "cover",
          }}
          width="150"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold truncate">{title}</h3>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">
            S{saison} E{episode}
          </span>
          <div className="flex items-center space-x-1">
            <Button size="icon" variant="outline" onClick={() => {}}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" onClick={() => {}}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        {/*   <span className="text-sm text-gray-500">
          {totalSeasons} Seasons, {episodesPerSeason} Episodes each
        </span> */}
      </CardFooter>
    </Card>
  );
}
