import SwiperButtons from "@/components/products-swiper/swiper-buttons";
import { homeContent } from "@/content/home";
import { Star } from "lucide-react";

type HeaderProps = {
  handleScrollRight: () => void;
  handleScrollLeft: () => void;
};

export default function Header({
  handleScrollRight,
  handleScrollLeft,
}: HeaderProps) {
  return (
    <header className="flex items-end justify-between gap-8">
      <div>
        <div className="mb-4 flex items-center gap-1">
          {new Array(5).fill(null).map((_, i) => (
            <Star key={i} size={24} className="fill-black" />
          ))}
        </div>
        <h2 className="text-4xl font-semibold leading-tight">
          <span>{homeContent.featuredReviews.heading.part1}</span>&nbsp;
          <span className="text-accent-500">
            {homeContent.featuredReviews.heading.part2}
          </span>
          &nbsp;
          <span>{homeContent.featuredReviews.heading.part3}</span>&nbsp;
          <br />
          <span>{homeContent.featuredReviews.heading.part4}</span>&nbsp;
          <span className="text-accent-500">
            {homeContent.featuredReviews.heading.part5}
          </span>
          &nbsp;
          <span>{homeContent.featuredReviews.heading.part6}</span>&nbsp;
        </h2>
      </div>
      <SwiperButtons
        onClickRightButton={handleScrollRight}
        onClickLeftButton={handleScrollLeft}
      />
    </header>
  );
}
