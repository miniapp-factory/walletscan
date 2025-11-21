"use client";
import { createContext, useContext, ReactNode } from "react";
import { MiniAppSDK } from "@farcaster/miniapp-sdk";

interface MiniAppContext {
  sdk: MiniAppSDK | null;
  isInMiniApp: boolean;
}

const Context = createContext<MiniAppContext>({ sdk: null, isInMiniApp: false });

export function MiniAppProvider({ children }: { children: ReactNode }) {
  const sdk =
    typeof window !== "undefined" && (window as any).miniappSDK as MiniAppSDK;
  const isInMiniApp =
    typeof window !== "undefined" && !!(window as any).frame;
  return (
    <Context.Provider value={{ sdk, isInMiniApp }}>
      {children}
    </Context.Provider>
  );
}

export function useMiniApp() {
  return useContext(Context);
}
