import { AppleIcon } from "./icons";
import AnimateOnScroll from "./AnimateOnScroll";

export default function CtaSection({ appStoreUrl }: { appStoreUrl: string }) {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 text-center">
      <AnimateOnScroll>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Start tracking today.
          </h2>
          <p className="text-text-secondary text-lg md:text-xl mb-10 max-w-md mx-auto">
            Join thousands of lifters who chose simplicity.
          </p>
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-text font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg hover:bg-white transition-colors min-h-[48px]"
          >
            <AppleIcon />
            Download Liftio
          </a>
          <p className="text-text-tertiary text-sm mt-4">
            Available now on the App Store.
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
