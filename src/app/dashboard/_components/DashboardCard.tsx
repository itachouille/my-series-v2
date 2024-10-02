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
import { MoreVertical, Undo2 } from "lucide-react";
import Actions from "./Actions";
import { updateSerie } from "@/data-access/serie";
import { DashboardPageCardProps } from "@/types";

export default function DashboardCard({
  name,
  backdrop_path,
  saison: initialSeason,
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

  const initSeason = initialSeason;
  const initEpisode = initialEpisode;

  const [newSeason, setNewSeason] = useState<number | undefined>(initialSeason);
  const [newEpisode, setNewEpisode] = useState<number | undefined>(
    initialEpisode
  );

  const incrementSeason = () =>
    setNewSeason((prev) => (prev !== undefined ? prev + 1 : 1));
  const incrementEpisode = () =>
    setNewEpisode((prev) => (prev !== undefined ? prev + 1 : 1));

  function handleUndo() {
    if (newSeason !== initSeason) {
      setNewSeason((prev) => (prev !== undefined ? prev - 1 : 1));
    } else if (newEpisode !== initEpisode) {
      setNewEpisode((prev) => (prev !== undefined ? prev - 1 : 1));
    }
  }

  return (
    <Card className="w-[260px] hover:shadow-lg overflow-hidden transition-shadow duration-300 ease-in-out">
      <CardHeader className="relative p-0">
        <Image
          alt={name}
          className="w-full"
          width="100"
          height="150"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          style={{
            width: "auto",
            height: "auto",
            maxHeight: "145px",
          }}
        />
        <Actions id={id} name={name} side="right">
          <button className="absolute top-1 right-1 px-3 py-2 outline-none">
            <MoreVertical className="text-white" />
          </button>
        </Actions>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2 truncate">{name}</CardTitle>
        {initialSeason !== undefined && initialEpisode !== undefined && (
          <p className="text-sm text-gray-600">
            Season: {newSeason} | Episode: {newEpisode}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-center gap-3">
        {initialSeason === undefined ||
        initialEpisode === undefined ? null : newSeason !== initialSeason ||
          newEpisode !== initialEpisode ? (
          <>
            <Button onClick={handleUndo}>
              <Undo2 />
            </Button>
            <Button
              onClick={() => handleUpdateSerie(id, newSeason!, newEpisode!)}
              variant="outline"
            >
              Confirm
            </Button>
          </>
        ) : (
          <>
            <Button className="p-2" onClick={incrementSeason} variant="outline">
              Next Season
            </Button>
            <Button className="p-2" onClick={incrementEpisode}>
              Next Episode
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
