"use client";

import ProductsSwiper from "@/components/products-swiper";
import { homeContent } from "@/content/home";
import { bestSellers } from "@/data/best-sellers";
import { paths } from "@/paths";
import { useState } from "react";

export default function BestSellers() {
  const [selectedTab, setSelectedTab] = useState<string>("featured");

  return (
    <div className="pt-8">
      <ProductsSwiper
        heading={homeContent.bestSellers.heading}
        allPageHref={paths.collections.bestSellers}
        list={bestSellers}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </div>
  );
}
