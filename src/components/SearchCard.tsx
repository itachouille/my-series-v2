"use client";

import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

interface SearchPageCardProps {
  title: string;
  rating: number;
  year: number;
  imageUrl: string;
}

export default function SearchPageCard({
  title,
  rating,
  imageUrl,
  year,
}: SearchPageCardProps) {
  return (
    <Card className="w-[250px] overflow-hidden">
      <div className="relative">
        <Image
          alt={title}
          className="w-full h-[150px] object-cover"
          height="150"
          src={imageUrl}
          style={{
            aspectRatio: "100/150",
            objectFit: "cover",
          }}
          width="100"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold truncate">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-500">{year}</span>
          <div className="flex items-center">
            <Star className="size-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={() => {}}>
          <Plus className="mr-2 size-4" />
          Add to Collection
        </Button>
      </CardFooter>
    </Card>
  );
}
