import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import StickyDownload from "@/components/StickyDownload";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/liftio/id6759969740";

export default function Home() {
  return (
    <>
      <Header appStoreUrl={APP_STORE_URL} />
      <main className="flex flex-col items-center">
        <Hero appStoreUrl={APP_STORE_URL} />
        <SocialProof />
        <Features appStoreUrl={APP_STORE_URL} />
        <Testimonials />
        <CtaSection appStoreUrl={APP_STORE_URL} />
      </main>
      <Footer />
      <StickyDownload appStoreUrl={APP_STORE_URL} />
    </>
  );
}
