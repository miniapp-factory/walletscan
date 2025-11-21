import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import { MiniAppProvider } from "@/components/miniapp-provider";
import WalletConnector from "@/components/wallet-connector";

export { generateMetadata };

export default function Home() {
  return (
    <MiniAppProvider>
      <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
        <WalletConnector />
        <span className="text-2xl">{title}</span>
        <span className="text-muted-foreground">{description}</span>
      </main>
    </MiniAppProvider>
  );
}
