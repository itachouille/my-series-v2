"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ToggleContextType {
  media: string;
  setMedia: Dispatch<SetStateAction<string>>;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export function ToggleProvider({ children }: { children: React.ReactNode }) {
  let [media, setMedia] = useState<string>("series");

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
