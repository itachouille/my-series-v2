"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Trash2 } from "lucide-react";
import CorfirmModal from "./ConfirmModal";
import { Button } from "@/components/ui/button";
import { deleteSerie } from "@/data-access/serie";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { useToggleContext } from "@/context";
import { deleteMovie } from "@/data-access/movie";
//import { toast } from "@/hooks/use-toast";

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  id: string;
  name: string;
}

export default function Actions({ children, id, name, side }: ActionsProps) {
  const { media } = useToggleContext();

  const handleDeleteSerie = async (id: string) => {
    if (media === "series") {
      await deleteSerie(id);
    } else {
      await deleteMovie(id);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-10"
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={5}
      >
        <CorfirmModal
          header="Delete ?"
          description={`This will delete ${name}.`}
          disabled={false}
          onConfirm={() => handleDeleteSerie(id)}
        >
          <Button
            variant="ghost"
            className="p-3 cursor-pointer text-sm w-full justify-start font-normal text-red-600"
          >
            <Trash2 className="size-4 mr-2" />
            Delete
          </Button>
        </CorfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
