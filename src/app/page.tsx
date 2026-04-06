import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/liftio/id6759969740";

const SOCIAL_LINKS = [
  { name: "Instagram", href: "#", icon: InstagramIcon },
  { name: "TikTok", href: "#", icon: TikTokIcon },
  { name: "X", href: "#", icon: XIcon },
];

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
];

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full flex flex-col items-center px-6 pt-16 pb-20 text-center">
        <Image
          src="/images/logos/liftio-logo-transparent.png"
          alt="Liftio"
          width={200}
          height={48}
          className="mb-8"
          priority
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Track Your Lifts.
          <br />
          <span className="text-text-secondary">Zero Distractions.</span>
        </h1>
        <p className="text-text-secondary text-lg md:text-xl max-w-md mb-10">
          A minimalist gym tracker built for people who actually go to the gym.
          Dark, fast, offline-first.
        </p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent text-accent-text font-semibold px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity mb-12"
        >
          <AppleIcon />
          Download on the App Store
        </a>
        <div className="relative w-full max-w-xs">
          <Image
            src="/images/screenshots/ios-hero.png"
            alt="Liftio app hero"
            width={390}
            height={844}
            className="rounded-3xl"
            priority
          />
        </div>
      </section>

      {/* Features */}
      <section className="w-full max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Everything you need.
          <br />
          <span className="text-text-secondary">Nothing you don&apos;t.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <div className="relative w-48 mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={390}
                  height={844}
                  className="rounded-2xl"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full flex flex-col items-center px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Ready to track?
        </h2>
        <p className="text-text-secondary text-lg mb-8">
          Available now on the App Store.
        </p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent text-accent-text font-semibold px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity"
        >
          <AppleIcon />
          Download Liftio
        </a>
      </section>

      {/* Socials */}
      <section className="w-full flex flex-col items-center px-6 py-12">
        <p className="text-text-secondary text-sm mb-4 uppercase tracking-widest">
          Follow us
        </p>
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border px-6 py-8 flex flex-col items-center gap-4 text-text-tertiary text-sm">
        <Image
          src="/images/logos/liftio-logo-transparent.png"
          alt="Liftio"
          width={100}
          height={24}
        />
        <p>&copy; {new Date().getFullYear()} Liftio. All rights reserved.</p>
      </footer>
    </main>
  );
}

/* ── Icons ─────────────────────────────────────────────── */

function AppleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.19 8.19 0 0 0 4.76 1.52V6.79a4.83 4.83 0 0 1-1-.1z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
