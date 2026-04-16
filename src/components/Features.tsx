import Image from "next/image";
import { AppleIcon } from "./icons";
import AnimateOnScroll from "./AnimateOnScroll";

const FEATURES = [
  {
    title: "Track Every Set, Every Rep",
    description:
      "Log strength and cardio workouts with auto-filled previous data, set type tagging, and personal best detection.",
    image: "/images/screenshots/ios-tracking.png",
  },
  {
    title: "Your Workouts, Ready to Go",
    description:
      "Start from custom templates, premade routines, or an empty session. Reorder exercises mid-workout.",
    image: "/images/screenshots/ios-templates.png",
  },
  {
    title: "See Your Progress at a Glance",
    description:
      "Consistency stats, activity heatmap, and a scrolling calendar of every workout you've completed.",
    image: "/images/screenshots/ios-progress.png",
  },
  {
    title: "Charts and Personal Records",
    description:
      "Track volume, reps, sets, and duration over time. Estimated 1RM and per-exercise progress charts.",
    image: "/images/screenshots/ios-charts.png",
  },
  {
    title: "Deep Exercise Detail",
    description:
      "Every exercise has a full history. See your personal records, recent sets, and chart your progress over time.",
    image: "/images/screenshots/ios-exercise-detail.png",
  },
];

export default function Features({ appStoreUrl }: { appStoreUrl: string }) {
  return (
    <section className="w-full">
      <AnimateOnScroll className="text-center px-4 sm:px-6 pt-16 sm:pt-24 md:pt-32 pb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Everything you need.
          <br />
          <span className="text-text-secondary">Nothing you don&apos;t.</span>
        </h2>
      </AnimateOnScroll>

      {FEATURES.map((feature, i) => (
        <div key={feature.title}>
          <div
            className={`py-16 sm:py-24 md:py-32 px-4 sm:px-6 ${i % 2 === 0 ? "bg-bg-card/20" : ""}`}
          >
            <div
              className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <AnimateOnScroll
                animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                className="flex-1 text-center md:text-left"
              >
                <div className="w-12 h-0.5 bg-accent mb-6 mx-auto md:mx-0" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-md mx-auto md:mx-0">
                  {feature.description}
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll
                animation={i % 2 === 0 ? "slide-in-right" : "slide-in-left"}
                className="flex-1 flex justify-center"
              >
                <div className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={390}
                    height={844}
                    sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 300px"
                    className="rounded-[2rem] phone-glow"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Mid-page CTA after 3rd feature */}
          {i === 2 && (
            <AnimateOnScroll className="py-12 sm:py-16 text-center px-4 sm:px-6">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent text-accent-text font-semibold px-8 py-4 rounded-2xl text-base sm:text-lg hover:bg-white transition-colors min-h-[48px]"
              >
                <AppleIcon />
                Download Liftio
              </a>
            </AnimateOnScroll>
          )}
        </div>
      ))}
    </section>
  );
}
