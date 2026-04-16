import AnimateOnScroll from "./AnimateOnScroll";

const TESTIMONIALS = [
  {
    quote:
      "Finally a gym app that doesn't try to be a social network. I open it, log my sets, and close it. Exactly what I needed.",
    name: "Alex M.",
    detail: "Powerlifter",
  },
  {
    quote:
      "The dark interface is perfect for the gym. No blinding white screens between sets. And it works fully offline.",
    name: "Sarah K.",
    detail: "CrossFit",
  },
  {
    quote:
      "Switched from Strong after 3 years. Liftio is faster, cleaner, and the progress charts are excellent.",
    name: "James R.",
    detail: "Bodybuilder",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-bg-card/20">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Trusted by lifters.
            <br />
            <span className="text-text-secondary">Loved by minimalists.</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.1}>
              <div className="bg-bg-card border border-border/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <span className="text-accent text-4xl font-serif leading-none block mb-2">
                    &ldquo;
                  </span>
                  <p className="text-text-primary text-base leading-relaxed mb-6">
                    {t.quote}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    {t.name}
                  </p>
                  <p className="text-sm text-text-tertiary">{t.detail}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
