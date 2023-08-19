"use client";

import { ReactNode, useEffect, useState } from "react";
import { useThemeStore } from "@/store";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydreated, setIsHydrated] = useState(false);
  const themeStore = useThemeStore();
  //wait untill Nextjs rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <>
      {isHydreated ? (
        <body className="font-inter" data-theme={themeStore.mode}>
          {children}
        </body>
      ) : (
        <body className="flex-col font-inter justify-center items-center w-full h-screen">
          <p>Loading... ✌️</p>
        </body>
      )}
    </>
  );
}
