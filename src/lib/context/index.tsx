"use client";

import { createContext, useContext, useState } from "react";

const appContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [media, setMedia] = useState("series");
  return (
    <appContext.Provider value={{ media, setMedia }}>
      {children}
    </appContext.Provider>
  );
}

export function useAppContext() {
  return useContext(appContext);
}
