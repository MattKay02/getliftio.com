"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AppleIcon } from "./icons";

export default function StickyDownload({
  appStoreUrl,
}: {
  appStoreUrl: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setVisible(window.scrollY > 600);
          ticking = false;
        });
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-bg/90 backdrop-blur-lg border-t border-border/50 px-4 pt-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center justify-between max-w-lg mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logos/liftio-logo-transparent.png"
            alt="Liftio"
            width={80}
            height={19}
          />
        </div>
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
    </div>
  );
}
