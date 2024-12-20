import { commonContent } from "@/content/common";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SwiperButtonsProps = {
  onClickLeftButton: () => void;
  onClickRightButton: () => void;
};

export default function SwiperButtons({
  onClickLeftButton,
  onClickRightButton,
}: SwiperButtonsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        className="rounded-full bg-primary-50 p-2 transition hover:bg-primary-100"
        onClick={onClickLeftButton}
      >
        <span className="sr-only">
          {commonContent.components.productsSwiper.tabsNavigation.slideLeft}
        </span>
        <ChevronLeft size={24} />
      </button>
      <button
        className="rounded-full bg-primary-50 p-2 transition hover:bg-primary-100"
        onClick={onClickRightButton}
      >
        <span className="sr-only">
          {commonContent.components.productsSwiper.tabsNavigation.slideRight}
        </span>
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
