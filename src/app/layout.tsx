import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liftio — Track Your Lifts. Zero Distractions.",
  description:
    "A minimalist gym tracking app for logging workouts fast. Dark interface, fully offline, local-first. Available on the App Store.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Liftio — Track Your Lifts. Zero Distractions.",
    description:
      "A minimalist gym tracking app for logging workouts fast. Dark interface, fully offline, local-first.",
    url: "https://getliftio.com",
    siteName: "Liftio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-text-primary">
        {children}
      </body>
    </html>
  );
}
