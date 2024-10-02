"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenuItem
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="mr-2 size-4" />
      ) : (
        <Moon className="mr-2 size-4" />
      )}
      <span>{theme === "dark" ? "Mode clair" : "Mode sombre"}</span>
    </DropdownMenuItem>
  );
}
