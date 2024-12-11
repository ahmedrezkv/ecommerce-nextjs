import { homeContent } from "@/content/shop/home";
import HeroSection from "./hero";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">{homeContent.heading1}</h1>
      <HeroSection />
    </>
  );
}
