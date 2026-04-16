import Image from "next/image";
import { AppleIcon } from "./icons";

export default function Header({ appStoreUrl }: { appStoreUrl: string }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-bg/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 md:py-4">
        <Image
          src="/images/logos/liftio-logo-transparent.png"
          alt="Liftio"
          width={120}
          height={29}
          priority
        />
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-accent-text font-semibold px-5 py-3 rounded-xl text-sm hover:bg-white transition-colors min-h-[44px]"
        >
          <AppleIcon />
          Download
        </a>
      </div>
    </header>
  );
}
