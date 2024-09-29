"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { addSerie } from "@/data-access/serie";

interface SearchPageCardProps {
  name: string;
  year: number;
  backdrop_path: string;
}

export default function SearchPageCard({
  name,
  backdrop_path,
  year,
}: SearchPageCardProps) {
  const handleAddSerie = async (name: string, backdrop_path: string) => {
    addSerie(name, backdrop_path);
  };

  return (
    <Card className="w-[260px] hover:shadow-lg overflow-hidden transition-shadow duration-300 ease-in-out">
      <CardHeader className="relative p-0">
        <Image
          alt={name}
          width="100"
          height="150"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          style={{
            width: "auto",
            height: "auto",
            maxHeight: "145px",
          }}
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold truncate">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-500">{year}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => handleAddSerie(name, backdrop_path)}
        >
          <Plus className="mr-2 size-4" />
          Add to Collection
        </Button>
      </CardFooter>
    </Card>
  );
}
