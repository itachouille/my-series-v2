"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

interface ToggleContextType {
  media: string;
  setMedia: Dispatch<SetStateAction<string>>;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export function ToggleProvider({ children }: { children: React.ReactNode }) {
  const [media, setMedia] = useState<string>("series");

  return (
    <ToggleContext.Provider value={{ media, setMedia }}>
      {children}
    </ToggleContext.Provider>
  );
}

export function useToggleContext() {
  const context = useContext(ToggleContext);
  if (context === undefined) {
    throw new Error("useToggleContext must be used within a ToggleProvider");
  }
  return context;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
