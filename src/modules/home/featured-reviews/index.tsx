"use client";

import { useRef } from "react";
import Header from "./header";
import Reviews from "./reviews";

export default function FeaturedReviews() {
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
        <Header
          handleScrollRight={handleScrollRight}
          handleScrollLeft={handleScrollLeft}
        />
        <Reviews ref={scrollableRef} />
      </div>
    </section>
  );
}
