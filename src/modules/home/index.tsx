import { homeContent } from "@/content/home";
import AsSeenIn from "./as-seen-in";
import BestSellers from "./best-sellers";
import FeaturedReviews from "./featured-reviews";
import HeroSection from "./hero";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">{homeContent.heading1}</h1>
      <HeroSection />
      <BestSellers />
      <AsSeenIn />
      <FeaturedReviews />
    </>
  );
}
