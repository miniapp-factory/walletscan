"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMiniApp } from "./miniapp-provider";

export default function WalletConnector() {
  const [address, setAddress] = useState<string | null>(null);
  const { isInMiniApp, sdk } = useMiniApp();

  const connect = async () => {
    if (isInMiniApp) {
      // Frame: use OnchainKit BasePay signature
      if (sdk) {
        try {
          const signature = await sdk.actions.signMessage({
            message: "Connect BaseWalletScan",
          });
          // Assume signature contains the address
          setAddress(signature);
        } catch (e) {
          console.error("OnchainKit sign error", e);
        }
      }
    } else {
      // Browser: use injected wallets (MetaMask, Coinbase)
      if ((window as any).ethereum) {
        try {
          const provider = (window as unknown as {
            ethereum?: { request: (args: any) => Promise<any> };
          }).ethereum;
          await provider.request({ method: "eth_requestAccounts" });
          const accounts = await provider.request({ method: "eth_accounts" });
          setAddress(accounts[0]);
        } catch (e) {
          console.error("Injected wallet error", e);
        }
      } else {
        alert("No injected wallet found. Please install MetaMask or Coinbase Wallet.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={connect}>Connect Wallet</Button>
      {address && (
        <p className="text-sm">
          Connected: {address.slice(0, 6)}…{address.slice(-4)}
        </p>
      )}
    </div>
  );
}
