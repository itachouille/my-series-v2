"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import Actions from "./Actions";
import { updateSerie } from "@/data-access/serie";

interface DashboardPageCardProps {
  name: string;
  backdrop_path: string;
  saison: number;
  episode: number;
  id: string;
}

export default function DashboardCard({
  name,
  backdrop_path,
  saison: iniatialSeason,
  episode: initialEpisode,
  id,
}: DashboardPageCardProps) {
  const handleUpdateSerie = async (
    id: string,
    saison: number,
    episode: number
  ) => {
    await updateSerie(id, saison, episode);
  };

  const [season, setSeasons] = useState(iniatialSeason);
  const [episode, setEpisodes] = useState(initialEpisode);

  const incrementSeason = () => setSeasons((prev) => prev + 1);
  const incrementEpisode = () => setEpisodes((prev) => prev + 1);

  return (
    <Card className="w-[300px] overflow-hidden">
      <CardHeader className="relative p-0">
        <Image
          alt={name}
          className="w-full h-[150px] object-cover"
          height="150"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          style={{
            aspectRatio: "100/150",
            objectFit: "cover",
          }}
          width="100"
        />
        <Actions id={id} name={name} side="right">
          <button className="absolute top-1 right-1 px-3 py-2 outline-none">
            <MoreVertical className="text-white" />
          </button>
        </Actions>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2 truncate">{name}</CardTitle>
        <p className="text-sm text-gray-600">
          Season: {season} | Episode: {episode}
        </p>
      </CardContent>
      <CardFooter className="flex justify-center gap-2">
        <Button onClick={incrementSeason} variant="outline">
          Next Season
        </Button>
        <Button onClick={incrementEpisode}>Next Episode</Button>
        {season !== iniatialSeason || episode !== initialEpisode ? (
          <Button
            onClick={() => handleUpdateSerie(id, season, episode)}
            variant="outline"
          >
            Update
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
