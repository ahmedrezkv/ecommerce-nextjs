import { Product, ProductsSwiperList } from "@/types/types";
import { useRef } from "react";
import Header from "./header";
import ProductCard from "./product-card";
import TabsNavigation from "./tabs-navigation";

type ProductsSwiperProps = {
  heading: string;
  allPageHref: string;
  list: ProductsSwiperList;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
};

export default function ProductsSwiper({
  heading,
  allPageHref,
  list,
  selectedTab,
  setSelectedTab,
}: ProductsSwiperProps) {
  const scrollableRef = useRef<HTMLDivElement>(null);

  function handleScrollRight() {
    scrollableRef.current?.scrollBy({ left: 332, behavior: "smooth" });
  }

  function handleScrollLeft() {
    scrollableRef.current?.scrollBy({ left: -332, behavior: "smooth" });
  }

  return (
    <section>
      <div className="content-container flex flex-col gap-8 py-10">
        <Header heading={heading} allPageHref={allPageHref} />
        <TabsNavigation
          tabs={list}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          handleScrollRight={handleScrollRight}
          handleScrollLeft={handleScrollLeft}
        />
        <div
          ref={scrollableRef}
          className="scroll-bar flex snap-x items-center gap-6 overflow-auto pb-8"
        >
          {new Array(15)
            .fill(list.find((c) => c.id === selectedTab)?.products[0])
            .map((product: Product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                title={product.title}
                image={product.images[0]}
                tags={product.tags}
                rating={product.reviews.overallRating}
                price={product.price}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
