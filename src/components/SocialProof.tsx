import { StarIcon } from "./icons";
import AnimateOnScroll from "./AnimateOnScroll";

const STATS = [
  {
    value: (
      <span className="flex items-center justify-center gap-1.5">
        <span>4.9</span>
        <span className="flex gap-0.5 text-accent">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </span>
      </span>
    ),
    label: "App Store Rating",
  },
  {
    value: "10K+",
    label: "Active Lifters",
  },
  {
    value: "1M+",
    label: "Sets Logged",
  },
];

export default function SocialProof() {
  return (
    <section className="w-full border-y border-border/50 bg-bg-card/30 py-10 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
        {STATS.map((stat, i) => (
          <AnimateOnScroll key={stat.label} delay={i * 0.1}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-text-tertiary text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
