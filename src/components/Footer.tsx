import Image from "next/image";
import { InstagramIcon, TikTokIcon } from "./icons";

const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://instagram.com/getliftio", icon: InstagramIcon },
  { name: "TikTok", href: "https://tiktok.com/@liftioapp", icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 py-12 md:py-16">
      <div className="section-divider max-w-4xl mx-auto mb-12" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <Image
          src="/images/logos/liftio-logo-transparent.png"
          alt="Liftio"
          width={100}
          height={24}
        />
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="p-2 text-text-tertiary hover:text-text-primary transition-colors"
            >
              <social.icon />
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4 text-text-tertiary text-sm">
            <a href="/privacy" className="py-1 hover:text-text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="py-1 hover:text-text-primary transition-colors">
              Terms & Conditions
            </a>
          </div>
          <p className="text-text-tertiary text-sm">
            &copy; {new Date().getFullYear()} Liftio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
