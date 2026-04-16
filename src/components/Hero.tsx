import Image from "next/image";
import { AppleIcon } from "./icons";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero({ appStoreUrl }: { appStoreUrl: string }) {
  return (
    <section className="w-full px-4 sm:px-6 pt-16 sm:pt-20 pb-16 md:pt-40 md:pb-32 text-center">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-4 sm:mb-6">
            Track Your Lifts.
            <br />
            <span className="text-text-secondary">Zero Distractions.</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <p className="text-text-secondary text-lg md:text-xl max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
            A minimalist gym tracker built for people who actually go to the
            gym. Dark, fast, offline-first.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-text font-semibold px-8 py-4 rounded-2xl text-base sm:text-lg hover:bg-white transition-colors min-h-[48px]"
          >
            <AppleIcon />
            Download on the App Store
          </a>
          <p className="text-text-tertiary text-sm mt-4">
            Available now on the App Store.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.45}>
          <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto mt-12 sm:mt-16 md:mt-20">
            <Image
              src="/images/screenshots/ios-hero.png"
              alt="Liftio app — active workout screen"
              width={390}
              height={844}
              sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
              className="rounded-[2.5rem] phone-glow"
              priority
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
