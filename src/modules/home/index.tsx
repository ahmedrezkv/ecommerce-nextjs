import { homeContent } from "@/content/home";
import BestSellers from "./best-sellers";
import HeroSection from "./hero";
import SeenIn from "./seen-in";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">{homeContent.heading1}</h1>
      <HeroSection />
      <BestSellers />
      <SeenIn />
    </>
  );
}
